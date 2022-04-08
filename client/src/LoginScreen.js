import React, { useState } from "react";

function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  // function LoginScreen() {
  //   function handleLogin() {
  //     console.log("login form submitted");
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(onLogin);
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          className="form-item"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          className="form-item"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          className="form-item"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginScreen;
