import React from "react";
import { getToken } from "../utils/token";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = getToken();
  console.log(user);
  return (
    <main className="max-w-[1192px] px-[32px] mx-auto">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Link to="/">
        <p>Выйти</p>
      </Link>
    </main>
  );
};

export default Profile;
