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

function App() {
  const [destinations, setDestinations] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/destinations")
      .then((r) => r.json())
      .then(setDestinations);
  }, []);

  return (
    <>
      <header className="header-image"></header>
      <div className="navbar">
        <span className="app-name">exploron</span>
        <span className="header-description">
          A localized app to gain travel inspo, post memories to your digital
          photo album, and journal ideas for future trips and upcoming
          iteneraries.
        </span>
      </div>
      <NavBar user={user} setUser={setUser} />
      <br />
      <>
        {user ? (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/destinations"
              element={<DestinationContainer destinations={destinations} />}
            />
            <Route
              path="/posts"
              element={<PostContainer destinations={destinations} />}
            />
            <Route path="/journal" element={<JournalContainer />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        )}
      </>
    </>
  );
}

export default App;

// // import logo from "./logo.svg";
// import "./App.css";
// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import NavBar from "./NavBar";
// import Homepage from "./Homepage";
// import DestinationContainer from "./DestinationContainer";
// import PostContainer from "./PostContainer";
// import JournalContainer from "./JournalContainer";
// import SignUp from "./SignUp";
// import Login from "./Login";

// function App() {
//   const [destinations, setDestinations] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

//   useEffect(() => {
//     fetch("/destinations")
//       .then((r) => r.json())
//       .then(setDestinations);
//   }, []);

//   return (
//     <>
//       <header className="header-image"></header>
//       <div className="navbar">
//         <span className="app-name">exploron</span>
//         <span className="header-description">
//           A localized app to gain travel inspo, post memories to your digital
//           photo album, and journal ideas for future trips and upcoming
//           iteneraries.
//         </span>
//       </div>
//       <NavBar user={user} setUser={setUser} />
//       <br />
//       <main>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login setUser={setUser} />} />
//           <Route
//             path="/destinations"
//             element={<DestinationContainer destinations={destinations} />}
//           />
//           <Route
//             path="/posts"
//             element={<PostContainer destinations={destinations} />}
//           />
//           <Route path="/journal" element={<JournalContainer />} />
//         </Routes>
//       </main>

//       {/* <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route
//           path="/destinations"
//           element={<DestinationContainer destinations={destinations} />}
//         />
//         <Route
//           path="/posts"
//           element={<PostContainer destinations={destinations} />}
//         />
//         <Route path="/journal" element={<JournalContainer />} />
//       </Routes> */}
//     </>
//   );
// }

// export default App;

// import logo from "./logo.svg";
