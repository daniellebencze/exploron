import React from "react";
import DestinationCard from "./DestinationCard";
import Searchbar from "./Searchbar";

function DestinationContainer({
  destinations,
  searchDestinations,
  onSearch,
  search,
  setSearch,
}) {
  const destinationCards = searchDestinations.map((destination) => {
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
      <Searchbar onSearch={onSearch} search={search} setSearch={setSearch} />
      <ul className="cards-container">{destinationCards}</ul>
    </div>
  );
}

export default DestinationContainer;
