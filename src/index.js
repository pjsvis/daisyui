import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./TaskList";
import "./index.css";

function App() {
  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
