import { Link, Route } from "react-router-dom";
import Home from "./Home";
import Dog from "./Dog";
import Cat from "./Cat";

function App() {
  return (
    <div className="App">
      <Link to={"/"}>홈으로 가기!</Link>
      <Link to={"/dog"}>몽으로 가기!</Link>
      <Link to={"/cat"}>냥으로 가기!</Link>

      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/dog" component={Dog}>
        {/* <Dog /> */}
      </Route>
      <Route path="/cat">
        <Cat />
      </Route>
    </div>
  );
}

export default App;
