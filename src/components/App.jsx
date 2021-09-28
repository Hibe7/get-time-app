import React from "react";

function App() {
  let now = new Date().toLocaleTimeString("en-GB");
  const [time, setTime] = React.useState(now);

  function currentTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  //setInterval(currentTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get time</button>
    </div>
  );
}

export default App;
