import React from "react";

const App = () => {
  const Square = (props) => {
    const squareStyle = {
      width: "100px",
      height: "100px",
      border: "1px solid green",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    return <div style={squareStyle}>{props.vegetableName}</div>;
  };
  const App = () => {
    const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];

    const style = {
      padding: "100px",
      display: "flex",
      gap: "12px",
    };
    return (
      <div style={style}>
        {vegetables.map((vegetableName) => {
          return <Square key={vegetableName} vegetableName={vegetableName} />;
        })}
      </div>
    );
  };
};

export default App;
