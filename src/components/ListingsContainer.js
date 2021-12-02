import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, toggleFavorite, removeListing}) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map(l => (
          <ListingCard key={l.id} listing={l} toggleFavorite={toggleFavorite} removeListing={removeListing}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
