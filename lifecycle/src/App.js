import logo from "./logo.svg";
import "./App.css";
import LifecyleEx from "./LifecycleEx";
import React from "react";

function App() {
  const [is_cat, setIs_cat] = React.useState(true); // React Hooks
  return (
    <div className="App">
      {is_cat ? <LifecyleEx /> : null}
      <button
        onClick={() => {
          setIs_cat(!is_cat); // true -> false 바꾸는 버튼
        }}
      >
        바꾸기
      </button>
    </div>
  );
}

export default App;
