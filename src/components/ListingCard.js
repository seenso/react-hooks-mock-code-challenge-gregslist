import React from "react";

function ListingCard({listing, toggleFavorite, removeListing}) {
  console.log("ListingCard()", listing.favorite)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {listing.favorite ? (
          <button className="emoji-button favorite active" onClick={()=> {toggleFavorite(listing, false)}}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>{toggleFavorite(listing, true)}}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => {removeListing(listing)}}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
