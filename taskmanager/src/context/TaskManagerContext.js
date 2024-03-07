import React, { createContext, useContext } from "react";

const TaskManagerContext = createContext({
  taskListDetails: [
    {
      id: "101",
      taskTite: "lorem Ispum",
      taskDescription:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,",
      label: "low",
      dueDate: "12/12/2024",
      createdDate: "12/15/2024",
      completedStatus: false,
    },
  ],
  addTask: (taskDetails) => {},
  removeTask: (taskId) => {},
  updateTask: (taskId, TaskDetails) => {},
  markAsCompleted: (taskId) => {},
});
export const TaskManagerProvider = TaskManagerContext.Provider;

export const useTaskManager = () => {
  return useContext(TaskManagerContext);
};
