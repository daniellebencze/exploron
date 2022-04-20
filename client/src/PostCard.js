import React from "react";

function PostCard({ post, setPosts }) {
  function handleDelete() {
    // console.log("post deleted!", post.id);
    fetch(`/current_user_post/${post.id}`, {
      method: "DELETE",
    });
    setPosts((currentPosts) =>
      currentPosts.filter((newPost) => newPost.id !== post.id)
    );
  }

  return (
    <div className="posts">
      <img className="card-image" src={post.photograph} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.blurb}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default PostCard;
