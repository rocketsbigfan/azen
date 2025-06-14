import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { verifyToken } from '@/utils/auth';

const BLOGS_FILE_PATH = path.join(process.cwd(), 'src/data/blogs.json');

// 读取博客数据
async function readBlogs() {
  try {
    const fileContent = await fs.readFile(BLOGS_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    return { blogs: [] };
  }
}

// 写入博客数据
async function writeBlogs(data: any) {
  await fs.writeFile(BLOGS_FILE_PATH, JSON.stringify(data, null, 2));
}

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

    const body = await request.json();
    const { blogs } = body;

    if (!Array.isArray(blogs)) {
      return NextResponse.json(
        { error: '无效的博客数据' },
        { status: 400 }
      );
    }

    // 读取现有博客数据
    const data = await readBlogs();

    // 创建新博客
    const newBlogs = blogs.map(blog => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...blog,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    // 添加到博客列表
    data.blogs.push(...newBlogs);

    // 保存到文件
    await writeBlogs(data);

    return NextResponse.json({ success: true, blogs: newBlogs });
  } catch (error) {
    console.error('保存博客错误:', error);
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
}

// 获取所有博客
export async function GET() {
  try {
    const data = await readBlogs();
    return NextResponse.json(data.blogs);
  } catch (error) {
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
} 