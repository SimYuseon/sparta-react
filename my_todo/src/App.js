import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([{ id: 1, title: title }]);
  const inputtext = useRef("");
  return (
    <div className="container">
      <input
        type="text"
        ref={inputtext}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, title: title }]);
        }}
      >
        추가
      </button>
      <div className="todos-container">
        {todos.map((todo) => {
          return (
            <div className="todo" key={todo.id}>
              {todo.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
