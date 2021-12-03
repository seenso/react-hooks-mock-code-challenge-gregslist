import React, {useState} from "react";

function Search({formInput}) {
  const [form, setForm] = useState(""); //form val will change while in Search component so created state here.

  function handleSubmit(e) {
    e.preventDefault();
    formInput(form); //passing the info back up to App component
    console.log("submitted", form);
  }

  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={form}
        onChange={(e) => setForm(e.target.value)} //setting form value so it can be sent back up via formInput
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
