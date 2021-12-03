import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const api_url = "http://localhost:6001/listings";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(api_url)
    .then(r => r.json())
    .then(data => setListings(data));
  }, []);

  function removeListing(listing) {
    setListings(listings.filter(l => l.id !== listing.id));
  }

  function formInput(inputText) {
    setSearch(inputText);
  }

  return (
    <div className="app">
      <Header formInput={formInput}/>
      <ListingsContainer listings={listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))} 
                          removeListing={removeListing} 
      />
    </div>
  );
}

export default App;
