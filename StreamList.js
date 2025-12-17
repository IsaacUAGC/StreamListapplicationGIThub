import { useState } from "react";

function StreamList() {
  const [item, setItem] = useState(""); // current input
  const [items, setItems] = useState([]); // Lists of movies or tv shows 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === "") {
      return; // don't add empty items
    }

    // add item to the list
    const newItems = items.concat(item);
    setItems(newItems);

    setItem(""); // clear input
  };

  return (
    <div>
      <h1>My StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a movie or show"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map(function(movie, index) {
          return <li key={index}>{movie}</li>;
        })}
      </ul>
    </div>
  );
}

export default StreamList;