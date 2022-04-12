import React from "react";
// import Carousel from "react-bootstrap/Carousel";

function Homepage({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

// return (
//     if (user) {
//     return (
//     <Carousel>
//       <Carousel.Item>
//         {/* <img
// //             className="d-block w-100"
// //             src="holder.js/800x400?text=First slide&bg=373940"
// //             alt="First slide"
// //           /> */}
//         <Carousel.Caption>
//           <h3>Explore Destinations</h3>
//           <p>
//             Get travel inspo by searching a database of exciting travel destinations! View pictures and read blurbs about what these sites
//             have to offer.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <img
// //             className="d-block w-100"
// //             src="holder.js/800x400?text=Second slide&bg=282c34"
// //             alt="Second slide"
// //           /> */}
//         <Carousel.Caption>
//           <h3>Upload Posts</h3>
//           <p>
//             Post pictures of your latest travel destinations and write a memo depicting your adventure. Reflect on your past adventures.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <img
// //             className="d-block w-100"
// //             src="holder.js/800x400?text=Third slide&bg=20232a"
// //             alt="Third slide"
// //           /> */}
//         <Carousel.Caption>
//           <h3>Journal</h3>
//           <p>
//             Manage your personal journal where you can jot down travel wishes, important notes, and store information relevant to an upcoming itenerary.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     <h1>Welcome, {user.username}!</h1>
//     )} else <h1>Please Login or Sign Up</h1>;
//  }
// }

export default Homepage;



