import Post from "./Post";

const PostList = ({ posts }) => {
  if (!posts || posts?.length == 0) return null;

  return (
    <>
      {posts.map((it) => (
        <>
          <Post key={it._id} data={it} />
          <hr class="border-b-1"></hr>
        </>
      ))}
    </>
  );
};

export default PostList;
