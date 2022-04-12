import React from "react";

function PostCards({ post }) {
  return (
    <div className="posts">
      <img className="card-image" src={post.photograph} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.blurb}</p>
    </div>
  );
}

export default PostCards;
