// UserInfo.js
import React from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);

  return (
    <div className="output">
      <p>Name - {name}</p>
      <p>Email - {email}</p>
    </div>
  );
};

export default UserInfo;
