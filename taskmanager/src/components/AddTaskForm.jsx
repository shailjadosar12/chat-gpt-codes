import React, { useState } from "react";

const AddTaskForm = ({ taskName, onTaskChange }) => {
  const [task, setTask] = useState("");
  return (
    <div>
      <label>Add your Task here</label>
      <input
        name="AddTask"
        value={taskName}
        onChange={(e) => onTaskChange(e.target.value)}
      />
      <button
        onClick={(task) => {
          console.log(task);
        }}
      >
        Add Task
      </button>
      <p>{taskName}</p>
    </div>
  );
};

export default AddTaskForm;
