import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  if (!posts || posts?.length == 0) return null;

  return (
    <>
      {posts.map((it) => (
        <React.Fragment key={it._id}>
          <hr className="border-b-1"></hr>
          <Post key={it._id} data={it} />
        </React.Fragment>
      ))}
    </>
  );
};

export default PostList;
