import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import PostForm from "./PostForm";

function PostContainer({ user, destinations }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/current_user_post")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);

  if (posts.length === 0) {
    return (
      <div>
        <h2 className="no-post-alert">Submit your first post!</h2>
        <div className="new-post-form">
          <PostForm user={user} destinations={destinations} />
        </div>
      </div>
    );
  }
  return (
    <div className="new-post-form">
      <PostForm user={user} destinations={destinations} />
      <ul className="post-cards">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            posts={posts}
            setPosts={setPosts}
          />
        ))}
      </ul>
    </div>
  );
}

export default PostContainer;
