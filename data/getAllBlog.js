const getAllBlog = async () => {
  const all_post = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
  );
  const data = await all_post.json();
  console.log(all_post);
  console.log(data);
  return data;
};

export default getAllBlog;
