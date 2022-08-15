import React, { useRef } from "react";
import rtan from "./rtan.png";
import styled from "styled-components";

const Start = (props) => {
  return (
    <Container>
      <img
        src={rtan}
        style={{
          width: "40vw",
          margin: "16px",
        }}
      />
      <h1 style={{ fontSize: "1.5em", lineHeight: "1.5" }}>
        나는 <Name>{props.name}</Name>에 대해 얼마나 알고 있을까?
      </h1>
      <InputMyname type="text" placeholder="내 이름"></InputMyname>
      <StrBtn>시작하기</StrBtn>
    </Container>
  );
};

export default Start;

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

const Name = styled.span`
  background-color: powderblue;
  padding: 5px 10px;
  border-radius: 30px;
`;

const InputMyname = styled.input`
  background-color: white;
  border-radius: 30px;
  border: 2px skyblue solid;
  padding: 10px;
  width: 100%;
`;

const StrBtn = styled.button`
  padding: 10px 36px;
  background-color: skyblue;
  border-radius: 30px;
  margin: 36px 0px;
  border: none;
`;
