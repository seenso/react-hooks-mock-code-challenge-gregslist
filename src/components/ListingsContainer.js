import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListing}) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map(l => (
          <ListingCard key={l.id} listing={l} removeListing={removeListing}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
