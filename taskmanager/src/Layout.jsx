import React, { useState, useEffect, useId } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { TaskManagerProvider } from "./context/TaskManagerContext";

const Layout = () => {
  const [taskListDetails, setTaskListDetails] = useState([]);
  const uniqueID = useId();
  const addTask = (taskDetails) => {
    setTaskListDetails((prevTaskDetail) => [
      ...prevTaskDetail,
      { id: Date.now(), createdDate: Date.now(), ...taskDetails },
    ]);
  };
  console.log(taskListDetails);
  const removeTask = () => {};
  const updateTask = () => {};
  const markAsCompleted = () => {};
  useEffect(() => {
    localStorage.setItem("taskDetail", JSON.stringify(taskListDetails));
  }, [taskListDetails]);

  return (
    <TaskManagerProvider
      value={{
        taskListDetails,
        addTask,
        removeTask,
        updateTask,
        markAsCompleted,
      }}
    >
      <Header />
      <Outlet />
    </TaskManagerProvider>
  );
};

export default Layout;
