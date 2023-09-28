import { useState } from "react";
import { restList } from "../list.js";
import React from "react";

const Body = () => {
  const [val, setVal] = useState("");
  const [list, setList] = useState(restList);

  function filter() {
    if (!val) {
      setList(restList);
    } else {
      const data = restList.filter((rest) => {
        return rest.name.includes(val);
      });
      setList(data);
    }
  }

  return (
    <>
      <div className="center" key="alpha">
        <input
          type="text"
          value={val}
          onChange={(e) => {
            const v = e.target.value;
            setVal(v);
          }}
        />
        <button onClick={filter}>Search</button>
      </div>
      <div className="blockholdedr">
        {list.map((res) => {
          return (
            <div className="blocks" key={res.id}>
              <h2>{res.name}</h2>
              <h3>{res.cuesine.join(", ")}</h3>
              <p>{res.distance}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
