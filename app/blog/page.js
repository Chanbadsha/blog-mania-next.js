import getAllBlog from "@/data/getAllBlog";
import Link from "next/link";

const Blogs = async () => {
  const blogPosts = await getAllBlog();
  console.log(blogPosts.title);
  return (
    <div className="grid grid-cols-4 ">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          {/* <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              /> */}
          <div className="p-4">
            <h3 className="text-lg text-black font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{post.title}</p>
            {/* <Link
                href={post.id}
                className="text-blue-500 hover:underline font-medium"
              >
                Read More →
              </Link> */}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Blogs;
