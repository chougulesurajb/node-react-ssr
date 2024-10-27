// import React, { useState } from 'react';

// const AppServer = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Hello from Server-Side Rendered React App!</h1>
//       <p>Counter: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default AppServer;
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
