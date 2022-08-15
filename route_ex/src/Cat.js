import React from "react";
import { useHistory } from "react-router-dom";

const Cat = (props) => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push("home");
      }}
    >
      고양이 화면입니다!
    </div>
  );
};

export default Cat;
