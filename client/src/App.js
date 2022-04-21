// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import DestinationContainer from "./DestinationContainer";
import PostContainer from "./PostContainer";
import JournalContainer from "./JournalContainer";
import SignUp from "./SignUp";
import Login from "./Login";
import UserProfile from "./UserProfile";

function App() {
  const [destinations, setDestinations] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [profile, setProfile] = useState({});
  const [journal, setJournal] = useState({});
  const [search, setSearch] = useState("");
  // const [state, setState] = useState("");

  useEffect(() => {
    fetch(`/me`).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setJournal(user.journal);
          setUser(user);
        });
      }
    });
  }, []);

  function handleProfileUpdate(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      // fetch(`/me`, {
      // fetch(`/current_user_id`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        profilePic: profilePic,
        bio: bio,
      }),
    })
      .then((r) => r.json())
      .then(setProfile);
  }

  useEffect(() => {
    fetch("/destinations").then((r) => {
      if (r.ok) {
        r.json().then((data) => setDestinations(data));
      }
    });
  }, []);

  const searchDestinations = destinations.filter((destination) => {
    return (
      destination.state.toLowerCase().includes(search.toLowerCase()) ||
      destination.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <header className="header-image"></header>
      <div className="navbar">
        <span className="app-name">exploron</span>
        <span className="header-description">
          An app to gain travel inspo, post memories to your digital photo
          album, and journal ideas for future trips and upcoming itineraries.
        </span>
      </div>
      <NavBar user={user} setUser={setUser} />
      <br />
      <>
        {user ? (
          <Routes>
            <Route exact path="/" element={<Homepage user={user} />} />
            <Route
              path="destinations"
              element={
                <DestinationContainer
                  destinations={destinations}
                  search={search}
                  setSearch={setSearch}
                  onSearch={setSearch}
                  searchDestinations={searchDestinations}
                />
              }
            />
            <Route
              path="/posts"
              element={
                <PostContainer user={user} destinations={destinations} />
              }
            />
            <Route
              path="/journal"
              element={
                <JournalContainer
                  user={user}
                  journal={journal}
                  setJournal={setJournal}
                  // journalId={user.journal.id}
                />
              }
            />
            <Route
              path="/me"
              element={
                <UserProfile
                  user={user}
                  setUser={setUser}
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
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/signup"
              element={
                <SignUp
                  setUser={setUser}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setUser={setUser}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                />
              }
            />
          </Routes>
        )}
      </>
    </>
  );
}

export default App;
