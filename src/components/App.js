// App.js
import React from "react";
import UserForm from "./UserForm";
import UserInfo from "./UserInfo";

const App = () => {
  return (
    <div>
      <h1>User Information</h1>
      <UserForm />
      <UserInfo />
    </div>
  );
};

export default App;
