import React, { useState, useEffect } from "react";
import PostCards from "./PostCards";
import PostForm from "./PostForm";

function PostContainer({ destinations }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <PostForm destinations={destinations} />
      {/* <ul className="post-cards">
        {posts.map((post) => (
          <PostCards key={post.id} post={post} posts={posts} />
        ))}
      </ul> */}
    </div>
  );
}

export default PostContainer;
