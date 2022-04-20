import React from "react";
import DestinationCard from "./DestinationCard";
import Searchbar from "./Searchbar";

function DestinationContainer({ destinations, onSearch }) {
  const destinationCards = destinations.map((destination) => {
    return (
      <DestinationCard
        key={destination.id}
        destination={destination}
        destinations={destinations}
      />
    );
  });

  return (
    <div>
      <Searchbar onSearch={onSearch} />
      <ul className="cards-container">{destinationCards}</ul>
    </div>
  );
}

export default DestinationContainer;
