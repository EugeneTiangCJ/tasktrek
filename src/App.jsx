import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TaskCard from "./components/TaskCard";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn taskName="To do" />
        <TaskColumn taskName="Doing" />
        <TaskColumn taskName="Done" />
      </main>
    </div>
  );
};

export default App;
