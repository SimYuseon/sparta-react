import React from "react";

const Text = (props) => {
  const text = React.useRef(null);

  const hoverEvent = () => {
    text.current.style.background = "yellow";
  };
  // 첫번째인자(화살표 함수) : 렌더링 시 실행할 함수
  // 두번째 인자([]) : 디펜던시 어레이, 여기 넣어준 값이 변하면 첫번째 인자인 콜백함수를 실행
  React.useEffect(() => {
    // rendering 때 실행될 구문이 들어가는 부분
    // componentDidMount, componentDidUpdate일 때 동작하는 부분
    text.current.addEventListener("mouseover", hoverEvent);
    return () => {
      // clean up 부분
      // componentWillUnmount 때 동작하는 부분
      text.current.removeEventListener("mouseover", hoverEvent);
    };
  }, []);
  return <h1 ref={text}>텍스트입니다!</h1>;
};

export default Text;
