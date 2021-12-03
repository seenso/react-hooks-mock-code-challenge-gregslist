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

  function filterListings() { // too long to write within component so writing out here.
    console.log("filterListings() has been invoked from App.js", listings);
    if (search.length > 0) {
      // setListings(listings.filter( l => l.description.toLowerCase().includes(search.toLowerCase())));
      return listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      // setListings(listings);
      return listings;
    }
  }

  return (
    <div className="app">
      <Header formInput={formInput}/>
      <ListingsContainer listings={filterListings()} 
                          filterListings={filterListings}
                          removeListing={removeListing} 
      />
    </div>
  );
}

export default App;
