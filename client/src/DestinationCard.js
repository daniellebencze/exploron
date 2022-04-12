import React from "react";

function DestinationCard({ destination }) {
  return (
    <div className="destination-cards">
      <img
        className="card-image"
        src={destination.photograph}
        alt={destination.name}
      />
      <h3>{destination.name}</h3>
      <h4>{destination.state}</h4>
      <p>{destination.description}</p>
    </div>
  );
}

export default DestinationCard;
