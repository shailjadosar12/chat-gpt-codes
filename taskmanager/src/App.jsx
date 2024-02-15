import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [taskName, setTaskName] = useState("");
  // const [addedTask, setAddedTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskDetails, setTaskDetails] = useState([{}]);

  const dateHandler = (e) => {
    const dueDate = e.target.value;
    setDueDate(dueDate);
  };

  const taskDetailsHandler = () => {
    setTaskDetails({
      taskName,
      dueDate,
    });
    setTaskName("");
    setDueDate("");
    console.log(taskDetails);
  };
  return (
    <>
      <div>
        <label>Add your Task here</label>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            taskDetailsHandler();
          }}
        >
          <input
            name="AddTask"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <input type="date" value={dueDate} onChange={dateHandler} />

          <button type="submit" onClick={taskDetailsHandler}>
            Add Task
          </button>
        </form>

        <TaskList taskDetails={taskDetails} />
      </div>
    </>
  );
}

export default App;
