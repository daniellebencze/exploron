import React from "react";

function Homepage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="column">
            <h3>Destinations</h3>
            <p>
              Get travel inspo by searching a database of exciting travel
              destinations! View pictures and read blurbs about what these sites
              have to offer.
            </p>
          </div>
          <div className="column">
            <h3>Posts</h3>
            <p>
              Post pictures of your latest travel destinations and write a memo
              depicting your adventure. Reflect on your past adventures.
            </p>
          </div>
          <div className="column">
            <h3>Journal</h3>
            <p>
              This is your personal journal where you can jot down travel
              wishes, important notes, and store information relevant to an
              upcoming itenerary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
