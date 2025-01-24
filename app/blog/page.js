import getAllBlog from "@/data/getAllBlog";
import Link from "next/link";

const Blogs = async () => {
  const blogPosts = await getAllBlog();

  return (
    <div className=" max-w-7xl mx-auto ">
      <h2 className="text-black text-3xl text-center py-12 bg-gray-500">
        All Blog
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 py-2 xl:grid-cols-4 gap-4 ">
        {blogPosts.slice(0, 12).map((post) => (
          <article
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-lg text-black font-bold mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{post.title}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-500 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
