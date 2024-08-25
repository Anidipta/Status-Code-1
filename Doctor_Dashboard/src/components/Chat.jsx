import React, { useState,selectedName,setSelectedName } from "react";
import App1 from "../../../chat/frontend/src/App1";

const Chat = () => {
  const [selectedName, setSelectedName] = useState(null);
  const [userName, setUserName] = useState(""); // add a state to store the selected user name

  const handleSelectUser = (name) => {
    setUserName(name);
  };

  return (
    <div>
      <h2>Select a user:</h2>
      <ul>
        {/* assume you have a list of users, replace with your actual data */}
        <li onClick={() => handleSelectUser("ani")}>Anidipta</li>
        <li onClick={() => handleSelectUser("ansh")}>Ananyo</li>
        <li onClick={() => handleSelectUser("pal")}>Soumyadip</li>
      </ul>
      {userName && <App1 user={userName} />}
    </div>
  );
};

export default Chat;