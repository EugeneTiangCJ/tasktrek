import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({props}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">{props.taskName}</h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
