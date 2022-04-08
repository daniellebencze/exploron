import React, { useState } from "react";

function PostForm({ destinations }) {
  const [title, setTitle] = useState("");
  const [blurb, setBlurb] = useState("");
  const [photograph, setPhotograph] = useState("");
  const [id, setId] = useState("");

  const handlePost = (e) => {
    e.preventDefault();

    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination_id: id,
        title: title,
        blurb: blurb,
        photograph: photograph,
      }),
    }).then((r) => r.json());
  };

  return (
    <div className="post-form">
      <form onSubmit={handlePost}>
        <h2>New Post</h2>
        <select onChange={(e) => setId(e.target.value)}>
          <option value="">--Select your Destination--</option>
          {destinations.map((destination) => (
            <option key={destination.id} value={destination.id}>
              {destination.name}
            </option>
          ))}
        </select>
        <br />
        <input
          onChange={(e) => setPhotograph(e.target.value)}
          className="post-image"
          type="img"
          name="photograph"
          placeholder="Add a photo"
          value={title}
        />
        <br />
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="Add a title"
          value={title}
        />
        <br />
        <input
          onChange={(e) => setBlurb(e.target.value)}
          type="text"
          name="blurb"
          placeholder="Add a caption"
          value={title}
        />
        <br />
        <button>Submit New Post</button>
      </form>
    </div>
  );
}

export default PostForm;
