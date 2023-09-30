import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);
  const [val, setVal] = useState("");

  async function getRestaurants() {
    const raw = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );
    const process = await raw.json();
    const processed =
      process.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;
    setList(processed);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  function handleSearch() {
    if (!val) {
      getRestaurants();
    } else {
      const filteredList = list.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(val.toLowerCase()),
      );

      setList(filteredList);
      setNoItemFound = false;
      // Check if the filtered list is empty
      setTimeout(() => {
        if (filteredList.length === 0) {
          setNoItemFound(true); // Set a state variable to indicate "No item found"
        } else {
          setNoItemFound(false); // Reset the state variable if items are found
        }
      }, "2000");
    }
  }
  //will add a simmer effect after the conditional rendering.
  //
  return list.length <= 1 ? (
    <Shimmer />
  ) : (
    <>
      <div className="center">
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="blockholdedr">
        {list.length > 0 ? (
          list.map((pre) => (
            <div className="blocks" key={pre.info.id}>
              <h2>{pre?.info?.name}</h2>
              <h3>{pre?.info?.cuisines.join(", ")}</h3>
              <h4>{pre?.info?.cloudinaryImageId}</h4>
              <p>{pre?.info?.avgRating}</p>
            </div>
          ))
        ) : // Display "No item found" message when no items are found
        noItemFound ? (
          <>
            <div className="center">
              <input
                type="text"
                value={val}
                onChange={(e) => {
                  setVal(e.target.value);
                }}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <h1>No item found</h1>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Body;
