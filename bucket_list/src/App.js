import React from "react";
import BucketList from "./BucketList";
// import {BucketList} from './BucketList';
import styled from "styled-components";

// 부모클래스를 통해 자식 클래스 생성
class App extends React.Component {
  // 초기화 함수
  constructor(props) {
    // 부모 클래스에 있는 것들 받아옴
    super(props);

    // App 컴포넌트의 state를 정의
    this.state = {
      list: ["부산여행 가기", "좋은개발자 되기", "운동하기"],
    };

    // ref 선언
    this.text = React.createRef();
  }

  addBucket = () => {
    const new_item = this.text.current.value;
    this.setState({ list: [...this.state.list, new_item] });
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줌
  render() {
    return (
      <Appwrap>
        <Container>
          <Title>내 버킷리스트</Title>
          <Line />
          <BucketList list={this.state.list} />
        </Container>

        <Add>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucket}>추가!</button>
        </Add>
      </Appwrap>
    );
  }
}

const Appwrap = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: white;
  width: 50vw;
  max-width: 350px;
  height: 80vh;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 15px;
`;
const Title = styled.h1`
  color: rgb(133, 120, 218);
  text-align: center;
`;
const Line = styled.hr`
  margin: 20px 0px; /*상하 / 좌우*/
`;
const Add = styled.div`
  width: 50vw;
  max-width: 350px;
  height: 50px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 15px;
  text-align: center;
  background-color: white;
`;

export default App;
