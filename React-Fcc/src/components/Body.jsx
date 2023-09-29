import React, { useEffect, useState } from "react";

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
    }
  }

  return (
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
        {list.map((pre) => {
          return (
            <div className="blocks" key={pre.info.id}>
              <h2>{pre.info.name}</h2>
              <h3>{pre.info.cuisines.join(", ")}</h3>
              <h4>{pre.info.cloudinaryImageId}</h4>
              <p>{pre.info.avgRating}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
