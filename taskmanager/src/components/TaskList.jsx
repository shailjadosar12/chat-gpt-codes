import React from "react";
import { taskList } from "../constants/taskList.constants";

const TaskList = ({ taskDetails }) => {
  console.log(taskDetails);
  return (
    <div className="container">
      <ul>
        {/* {taskDetails.map((task, index) => (
          <li>
            {task.taskName}

            {task.dueDate}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default TaskList;
