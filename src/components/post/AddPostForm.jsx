import { useRef } from "react";
import { useState } from "react";
import HttpClient from "../../lib/client";

const AddPostForm = () => {
  const contentRef = useRef(null);

  const handleSubmit = () => {
    console.log(contentRef.current?.innerText);
    const content = contentRef.current?.innerText;

    HttpClient.post("/post/add", { content })
      .then((_) => alert("Post Added"))
      .catch((err) => console.log(err));

    contentRef.current.innerText = "";
  };

  return (
    <>
      {/* <input
        type="text"
        name="post"
        id="post"
        placeholder="What's on your mind today"
        className="bg-transparent border-2 rounded-md text-gray-100 p-4 placeholder:text-gray-300 break-words"
        /> */}
      <div>
        <div
          name="post"
          id="post"
          placeholder="What's on your mind today"
          className="bg-transparent border-2 rounded-md text-gray-100 p-4 placeholder:text-gray-300 break-words"
          contentEditable={true}
          // onChange={console.log}
          ref={contentRef}
        ></div>
        <button
          onClick={handleSubmit}
          className="p-2 w-16 font-semibold rounded-md bg-white text-black float-end mt-3"
        >
          Post
        </button>
      </div>
    </>
  );
};

export default AddPostForm;
