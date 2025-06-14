
import { useState, useEffect } from 'react';
import { fetchWithAuth } from '@/utils/api';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Blog, BlogInput } from './typing';
import Blogs from './components/list';
import Upload from './components/upload';


export default function BlogSubmit() {
  // const [blogs, setBlogs] = useState<Blog[]>([]);
  // useEffect(() => {
  //   // 获取博客列表
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await fetchWithAuth('/api/admin/blog');
  //       if (response?.ok) {
  //         const data = await response.json();
  //         setBlogs(data);
  //       }
  //     } catch (error) {
  //       console.error('获取博客列表错误:', error);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  return (
    // <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 博客列表 */}
            <Blogs />

            {/* 发布表单 */}
            <Upload />
          </div>
        </div>
      </div>
    // </ProtectedRoute>
  );
} 