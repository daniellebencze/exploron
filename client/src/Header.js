import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import DestinationContainer from "./DestinationContainer";
import PostContainer from "./PostContainer";
import JournalContainer from "./JournalContainer";
import LoginScreen from "./LoginScreen";

function Header() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("/destinations")
      .then((r) => r.json())
      .then(setDestinations);
  }, []);

  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     fetch("/posts")
  //       .then((r) => r.json())
  //       .then(setPosts);
  //   }, []);

  return (
    <div>
      <header className="header-image">
        {/* <img
          className="header-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LzaTUBROKzq5uq-BHM3uos47F7j_f_WkiA&usqp=CAU"
        /> */}
      </header>
      <div className="navbar">
        <span className="app-name">exploron</span>
        <span className="header-description">
          A localized app to gain travel inspo, post memories to your digital
          photo album, and journal ideas for future trips and upcoming
          iteneraries.
        </span>
        <br />
        <br />
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/destinations"
            element={<DestinationContainer destinations={destinations} />}
          />
          <Route
            path="/posts"
            element={
              <PostContainer
                //   posts={posts}
                destinations={destinations}
              />
            }
          />
          <Route path="/journal" element={<JournalContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default Header;
