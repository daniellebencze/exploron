import React from "react";
import DestinationCard from "./DestinationCard";

function DestinationContainer({ destinations }) {
  return (
    <div>
      Destinations
      <ul className="cards-container">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            destinations={destinations}
          />
        ))}
      </ul>
    </div>
  );
}

export default DestinationContainer;
