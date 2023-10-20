import React from "react";
import { useContext, useState } from "react";
import userContext from "../contex/usercontext";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setuser } = useContext(userContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };
  return (
    <>
      <div>login</div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button onClick={handelSubmit}>Submit</button>
    </>
  );
};

export default login;
