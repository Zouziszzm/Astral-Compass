import React, { useContext } from "react";
import userContext from "../contex/usercontext";
import Login from "./login";
const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) return <div>please login</div>;

  return <div>welcome {user.username}</div>;
};

export default Profile;
