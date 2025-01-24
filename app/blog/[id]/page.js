import getSinglePost from "@/data/getSinglePost";
import React from "react";

const Blogdetails = async ({ params }) => {
  const { id } = params;
  const data = await getSinglePost(id);
  // Simulated data for the blog post
  //   const data = {
  //     userId: 1,
  //     id: 3,
  //     title: "Ea Molestias Quasi Exercitationem Repellat Qui Ipsa Sit Aut",
  //     body: "Et iusto sed quo iure. Voluptatem occaecati omnis eligendi aut ad. Voluptatem doloribus vel accusantium quis pariatur. Molestiae porro eius odio et labore et velit aut.",
  //   };

  // Uncomment this line and remove the simulated data if your API is ready
  // const singlePost = await getSinglePost(id);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>

      {/* Author and Metadata */}
      <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
        <p>
          <strong>Author:</strong> User {data.userId}
        </p>
        <p>
          <strong>Blog ID:</strong> {data.id}
        </p>
      </div>

      {/* Blog Content */}
      <div className="text-gray-700 leading-relaxed">
        {data.body.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Blogdetails;
