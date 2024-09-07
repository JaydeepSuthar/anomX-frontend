import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HttpClient from "../lib/client";
import { AxiosError } from "axios";
import PostList from "../components/post/PostList";

const Home = () => {
  const location = useLocation();

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    HttpClient.get("/post/all")
      .then((response) => {
        setPosts(response?.data?.data);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          setError(error?.response?.data?.message);
        }
      });
  }, []);

  const resetForm = () => {};

  /** @param {React.ChangeEvent<HTMLInputElement>} e */
  const onChangeHandler = (e) => {};

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-black min-h-screen flex justify-center min-w-full">
      <div className="flex flex-col gap-4 mt-3 w-full px-4">
        {/* <pre className="text-white">{JSON.stringify(posts, null, 2)}</pre> */}
        <PostList posts={posts} />

        {/* <div className="border rounded-md border-gray-700 p-3 shadow-xl text-white">
          <div>Username: {it.user_id.username}</div>
          <div>Name: {it.user_id.name}</div>
          <div>PhotoURL: {it.user_id.photo_url}</div>
          <div>Content: {it.content}</div>
          <div>PhotoURL: {it.likes_count}</div>
          </div> */}
      </div>
    </div>
  );
};

export default Home;
