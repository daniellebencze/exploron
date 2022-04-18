import React from "react";

function UserProfile({ user, username }) {
  return (
    <div>
      <img
        src="https://scontent.feat1-1.fna.fbcdn.net/v/t1.6435-9/36714985_10204957693059694_4632515441581883392_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-5&_nc_sid=da31f3&_nc_ohc=J9XX0C5X3DQAX_7tsWR&_nc_ht=scontent.feat1-1.fna&oh=00_AT-2m39s8xFw857jwfTVjUH-czAV-7vZHqqddoPAt5gxhA&oe=627D7212"
        alt="user.username"
      />
      <h4>Username: {user.username}</h4>
    </div>
  );
}

export default UserProfile;
