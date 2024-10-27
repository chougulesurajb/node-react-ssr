import React, { useState } from "react";
import "./App.css";

const AppServer = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="wrapper">
      <div className="sidebar">
        <button onClick={() => setShow(!show)}>Show Content</button>
      </div>
      <div className="content">
        {show ? (
          <h1>Hello from Server-Side Rendered React App!</h1>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default AppServer;
