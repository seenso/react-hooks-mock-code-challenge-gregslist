import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map(l => (
          <ListingCard listing={l}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
