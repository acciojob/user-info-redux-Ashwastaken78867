// UserForm.js
import React from "react";
import { useDispatch } from "react-redux";
import { updateName, updateEmail } from "../actions/userActions";

const UserForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => dispatch(updateName(e.target.value))}
      />
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
    </div>
  );
};

export default UserForm;
