import { fetchWithAuth } from "@/utils/api";
import { Blog } from "../typing";

    // 获取博客列表
const fetchBlogs: () => Promise<Blog[]> = async () => {
  try {
    const response = await fetchWithAuth(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/blog`);
    if (response?.ok) {
      const data = await response.json();
      return data
    }
  } catch (error) {
    console.error('获取博客列表错误:', error);
    return []
  }
};

function Blogs ({data}: {data: Blog[]}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">博客列表</h2>
      <div className="space-y-4">
        {data.map((blog) => (
          <div key={blog.id} className="border-b pb-4">
            <div className="flex items-start space-x-4">
              {blog.thumbnail && (
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-24 h-24 object-cover rounded"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  日期: {blog.date}
                </p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:text-indigo-500 mt-1 block"
                >
                  {blog.link}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

async function Bloglist() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
  const blogs = await response.json();
  // const blogs = await fetchBlogs()
  return (
    <Blogs data={blogs} />
  )
}

export default Bloglist