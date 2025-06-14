import path from "path";
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

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

export async function GET () {

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