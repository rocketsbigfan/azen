import { NextResponse } from 'next/server';
import { generateToken } from '@/utils/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // TODO: 这里应该添加实际的用户验证逻辑
    // 这里仅作为示例，实际应用中应该使用数据库验证
    if (username === 'admin' && password === 'admin123') {
      const token = await generateToken(username);
      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json(
      { error: '用户名或密码错误' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
} 