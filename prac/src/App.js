import React, { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinuse = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickPlus}>+1</button>
      <button onClick={onClickMinuse}>-1</button>
    </div>
  );
};
export default App;
