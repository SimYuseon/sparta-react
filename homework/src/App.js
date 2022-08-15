import React, { useRef } from "react";
import Start from "./Start";

function App() {
  const [name, setName] = React.useState("선냥이");

  return (
    <div
      className="App"
      style={{
        maxWidth: "350px",
        margin: "auto",
      }}
    >
      <Start name={name} />
    </div>
  );
}

export default App;
