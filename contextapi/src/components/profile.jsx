import React, { useContext } from "react";
import userContext from "../contex/usercontext";

const profile = () => {
  const { user } = useContext(userContext);

  if (!user)
    return (
      <>
        <div>please login</div>
      </>
    );
  return (
    <>
      <div>Welcome</div>
    </>
  );
};

export default profile;
