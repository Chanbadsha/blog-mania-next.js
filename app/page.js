import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the World of React.js",
      description:
        "Learn the basics of React and how it has revolutionized web development.",
      image: "/react.png",
      link: "/blog/react-world",
    },
    {
      id: 2,
      title: "Next.js: The Ultimate Framework for Modern Web Apps",
      description:
        "A deep dive into the features that make Next.js the top choice for developers.",
      image: "/next.jpg",
      link: "/blog/nextjs-framework",
    },
    {
      id: 3,
      title: "Top JavaScript Tips for Beginners",
      description:
        "Boost your JavaScript skills with these essential tips and tricks.",
      image: "/js.jpg",
      link: "/blog/javascript-tips",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to the BlogMania!</h1>
          <p className="text-lg">
            Discover insightful articles, tips, and tutorials on web
            development, programming, and more.
          </p>
        </div>
      </header>

      {/* Blog Posts Section */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-black font-bold mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                <Link
                  href={post.link}
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
