const getAllBlog = async () => {
  const all_post = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
  );
  const data = await all_post.json();

  return data;
};

export default getAllBlog;
