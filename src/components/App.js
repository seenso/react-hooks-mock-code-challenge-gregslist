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

  function removeListing(listing) {
    setListings(listings.filter(l => l.id !== listing.id));
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} 
                          removeListing={removeListing} 
      />
    </div>
  );
}

export default App;
