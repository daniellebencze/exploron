import React from "react";
// import Carousel from "react-bootstrap/Carousel";

function Homepage({ user }) {
  if (user) {
    console.log(user);
    return (
      <div>
        <h1>Welcome, {user.username}!</h1>
        <p>We hope you enjoy using Exploron!</p>
      </div>
    );
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Homepage;
