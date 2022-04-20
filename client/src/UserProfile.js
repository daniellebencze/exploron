import React, { useEffect } from "react";
import ProfileUpdateForm from "./ProfileUpdateForm";

function UserProfile({
  user,
  username,
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

  console.log(user);
  return (
    <div>
      <span className="profile-form">
        <ProfileUpdateForm
          user={user}
          username={username}
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
      <span className="profile-bio">
        <h3>{user.bio}</h3>
      </span>
    </div>
  );
}

export default UserProfile;
