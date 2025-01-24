const getSinglePost = async (id) => {
  console.log(id);
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const singlePost = await data.json();
  return singlePost;
};

export default getSinglePost;
