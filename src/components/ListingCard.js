import React, {useState} from "react";

function ListingCard({listing, removeListing}) {
  console.log("ListingCard()", listing.favorite)

  const [favorite, setFavorite] = useState(false)

  function toggleFavorite() {setFavorite(!favorite)}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={()=> {toggleFavorite()}}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>{toggleFavorite()}}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => {removeListing(listing)}}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
