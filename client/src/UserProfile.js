import React, { useEffect } from "react";
import ProfileUpdateForm from "./ProfileUpdateForm";

function UserProfile({
  user,
  username,
  setUsername,
  bio,
  setBio,
  profilePic,
  setProfilePic,
  profile,
  setProfile,
  handleProfileUpdate,
}) {
  useEffect(() => {
    setProfilePic(user.profilePic);
    setBio(user.bio);
    //  setOther(journal.other);
  }, [user]);

  return (
    <div>
      <br />
      <br />
      <span className="profile-form">
        <ProfileUpdateForm
          user={user}
          username={username}
          setUsername={setUsername}
          bio={bio}
          setBio={setBio}
          profilePic={profilePic}
          setProfilePic={setProfilePic}
          profile={profile}
          setProfile={setProfile}
          handleProfileUpdate={handleProfileUpdate}
        />
        {/* <h3>{user.username}</h3> */}
        <img
          className="profile-image"
          src={user.profilePic}
          alt={user.username}
        />
      </span>
      <h2>{user.username}</h2>
      <span className="profile-bio">
        <h3>{user.bio}</h3>
      </span>
    </div>
  );
}

export default UserProfile;
