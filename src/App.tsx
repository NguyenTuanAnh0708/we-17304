import React, { FC, useState } from "react";
import { PostTypes } from "./types";
import { postApi } from "./api/api";
import header from "./components/header";
const App: FC = () => {
  const [posts, setPosts] = useState<null | PostTypes[]>(null);

  const handelGetPosts = async () => {
    const data: PostTypes[] = (await postApi.getPosts()).posts;
    setPosts(data);
  };
  return (
    <>
    <
      <h1>There are my posts</h1>
      <button onClick={handelGetPosts}>Get Posts</button>
      {posts ? (
        <ul>
          {posts.map((post: PostTypes) => (
            <>{JSON.stringify(post)}</>
          ))}
        </ul>
      ) : (
        "Dont have posts"
      )}
    </>
  );
};

export default App;
