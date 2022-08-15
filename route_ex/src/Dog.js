import React from "react";
import { useParams } from "react-router-dom";

const Dog = (props) => {
  //   const dog_name = useParams();
  //   console.log(dog_name);
  console.log(props);
  return (
    <div
      onClick={() => {
        props.history.push("/");
      }}
    >
      강아지 화면입니다!
    </div>
  );
};

export default Dog;
