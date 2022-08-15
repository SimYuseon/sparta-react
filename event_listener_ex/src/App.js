import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Text from "./Text";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.circle = React.createRef(null);
  }

  hoverEvent = (event) => {
    console.log(event.target); // 이벤트 타겟 확인
    console.log(this.circle.current); // ref와 동일한지 확인
    this.circle.current.style.background = "skyblue"; // 이벤트 발생시 배경색 변경
  };

  componentDidMount() {
    console.log(this.circle); // 리액트 요소가 잘 잡혔나 확인
    this.circle.current.addEventListener("mouseover", this.hoverEvent); // 마우스 오버발생시 호버이벤트 실행
  }

  componentWillUnmount() {
    this.circle.current.removeEventListener("mouseover", this.hoverEvent); // 컴포넌틑 삭제시 해당이벤트도 삭제
  }

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
        <Text />
        <div
          style={{
            margin: "auto",
            width: "250px",
            height: "250px",
            background: "green",
            borderRadius: "250px",
          }}
          ref={this.circle}
        ></div>
      </div>
    );
  }
}

export default App;
