import React from "react";

function ProfileUpdateForm({
  user,
  setBio,
  setProfilePic,
  setUsername,
  handleProfileUpdate,
}) {
  return (
    <div>
      <form onSubmit={handleProfileUpdate}>
        <h2>Update Profile</h2>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Change your username"
          defaultValue={user.username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label>Profile Pic: </label>
        <input
          type="img"
          name="photograph"
          placeholder="Add a profile picture"
          defaultValue={user.profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <br />
        <br />
        <label>Bio: </label>
        <input
          type="text"
          name="bio"
          defaultValue={user.bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Update Profile</button>
      </form>
      <br />
    </div>
  );
}

export default ProfileUpdateForm;
