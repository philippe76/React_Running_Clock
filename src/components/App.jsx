import React, { useState } from "react";

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [state, setState] = useState(currentTime);

  function getTime() {
    setState(new Date().toLocaleTimeString());
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
