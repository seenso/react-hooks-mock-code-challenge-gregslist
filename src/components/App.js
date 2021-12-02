import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const api_url = "http://localhost:6001/listings";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(api_url)
    .then(r => r.json())
    .then(data => setListings(data));
  }, []);

  function toggleFavorite(listing, isFavorite) {
    console.log("toggleFavorite()", listing.favorite);
    // console.log("listing before toggleFavorite", listing.favorite)
    listings.map(l => listing.id === l.id ? {...l, favorite: isFavorite} : l)
    // console.log("listing after toggleFavorite", listing.favorite)
  }

  function removeListing(listing) {
    setListings(listings.filter(l => l.id !== listing.id));
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} 
                          toggleFavorite={toggleFavorite} 
                          removeListing={removeListing} 
      />
    </div>
  );
}

export default App;
