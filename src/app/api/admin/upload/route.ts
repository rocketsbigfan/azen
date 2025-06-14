import { NextResponse } from 'next/server';
import { verifyToken } from '@/utils/auth';
import { createClient } from '@supabase/supabase-js';

// 创建 Supabase 客户端
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_API_KEY!
);

export async function POST(request: Request) {
  try {
    // 验证 token
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json(
        { error: '未授权访问' },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: '无效的token' },
        { status: 401 }
      );
    }

    // 获取请求内容类型
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json(
        { error: '无效的请求格式' },
        { status: 400 }
      );
    }

    // 使用 FormData 解析请求
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: '未找到文件' },
        { status: 400 }
      );
    }

    // 获取文件信息
    const filename = file.name;
    const imageType = file.type;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 生成文件名
    const timestamp = Date.now();
    const newFilename = `${process.env.SUPABASE_BUCKET_PATH}/${timestamp}-${filename}`;

    // 上传到 Supabase Storage
    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET!)
      .upload(newFilename, buffer, {
        contentType: imageType,
        upsert: false,
      });

    if (error) {
      console.error('上传到 Supabase 失败:', error);
      return NextResponse.json(
        { error: '上传失败' },
        { status: 500 }
      );
    }

    // 获取文件公共 URL
    const { data: { publicUrl } } = supabase.storage
      .from(process.env.SUPABASE_BUCKET!)
      .getPublicUrl(newFilename);

    // 返回文件URL
    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    console.error('上传错误:', error);
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
} 