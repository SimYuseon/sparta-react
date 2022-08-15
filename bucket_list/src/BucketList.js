// React 패키지 불러오기
import React, { useRef } from "react";
import App from "./App";
import styled from "styled-components";

// Function Component(1)
// function Bucketlist(props){
// return (
// <div>버킷 리스트</div>
// );
// }

// Function Component(2)
// props 부모 컴포넌트에게 받아온 데이터
// {list : } 키값이 list인 딕셔너리
const BucketList = ({ list }) => {
  // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
  const my_lists = list;
  const my_wrap = useRef(null);

  window.setTimeout(() => {
    console.log(my_wrap);
  }, 1000);

  // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트)를 반환
  return (
    <div ref={my_wrap}>
      {/* 리스트의 갯수만큼 => 오른쪽 구문을 반복 */}
      {my_lists.map((list, index) => {
        return <ItemStyle key={index}>{list}</ItemStyle>;
      })}
    </div>
  );
};

const ItemStyle = styled.div`
  padding: 16px;
  margin: 10px;
  background-color: rgb(133, 120, 218);
  border-radius: 15px;
  color: white;
`;

// 다른 컴포넌트에서 BucketList 컴포넌트 사용 가능
export default BucketList;
