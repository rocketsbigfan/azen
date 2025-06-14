"use client"

import { useState, useRef } from 'react';
import { fetchWithAuth, uploadWithAuth } from '@/utils/api';
import { Blog, BlogInput } from '../typing';
import { useRouter } from 'next/navigation';

export default function Upload () {
  const [blogInputs, setBlogInputs] = useState<BlogInput[]>([{ 
    title: '', 
    date: '', 
    link: '', 
    thumbnail: '' 
  }]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [uploading, setUploading] = useState<{ [key: string]: boolean }>({});
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const router = useRouter()

  const handleAddInput = () => {
    setBlogInputs([...blogInputs, { 
      title: '', 
      date: '', 
      link: '', 
      thumbnail: '' 
    }]);
  };

  const handleRemoveInput = (index: number) => {
    setBlogInputs(blogInputs.filter((_, i) => i !== index));
  };

  const handleInputChange = (index: number, field: keyof BlogInput, value: string) => {
    const newInputs = [...blogInputs];
    newInputs[index] = { ...newInputs[index], [field]: value };
    setBlogInputs(newInputs);
  };

  const handleFileUpload = async (index: number, file: File) => {
    const inputKey = `input-${index}`;
    setUploading({ ...uploading, [inputKey]: true });

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await uploadWithAuth('/api/admin/upload', {
        method: 'POST',
        headers: {
          // 不设置 Content-Type，让浏览器自动设置正确的 boundary
        },
        body: formData,
      });

      if (response?.ok) {
        const data = await response.json();
        handleInputChange(index, 'thumbnail', data.url);
      } else {
        alert('图片上传失败，请重试');
      }
    } catch (error) {
      console.error('上传错误:', error);
      alert('上传过程中发生错误');
    } finally {
      setUploading({ ...uploading, [inputKey]: false });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetchWithAuth('/api/admin/blog', {
        method: 'POST',
        body: JSON.stringify({
          blogs: blogInputs,
        }),
      });

      if (response?.ok) {
        const data = await response.json();
        setBlogs([...blogs, ...data.blogs]);
        setBlogInputs([{ 
          title: '', 
          date: '', 
          link: '', 
          thumbnail: '' 
        }]);
        alert('博客发布成功！');
        router.refresh()
      } else {
        alert('发布失败，请重试');
      }
    } catch (error) {
      console.error('发布错误:', error);
      alert('发布过程中发生错误');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">发布新博客</h2>
        <button
          type="button"
          onClick={handleAddInput}
          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          添加一条
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {blogInputs.map((input, index) => (
          <div key={index} className="border rounded-lg p-4 relative">
            {blogInputs.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveInput(index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  标题
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={input.title}
                  onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  日期
                </label>
                <input
                  required
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={input.date}
                  onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  链接
                </label>
                <input
                  type="url"
                  required
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={input.link}
                  onChange={(e) => handleInputChange(index, 'link', e.target.value)}
                  placeholder="https://"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  缩略图
                </label>
                <div className="mt-1 flex items-center space-x-4">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={(el) => {
                      fileInputRefs.current[`input-${index}`] = el;
                    }}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleFileUpload(index, file);
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRefs.current[`input-${index}`]?.click()}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={uploading[`input-${index}`]}
                  >
                    {uploading[`input-${index}`] ? '上传中...' : '选择图片'}
                  </button>
                  {input.thumbnail && (
                    <img 
                      src={input.thumbnail} 
                      alt="预览" 
                      className="w-24 h-24 object-cover rounded"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            发布全部
          </button>
        </div>
      </form>
    </div>
  )
}