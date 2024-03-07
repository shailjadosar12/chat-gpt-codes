import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import TaskList from "./components/TaskList.jsx";
import Layout from "./Layout.jsx";
import AddTaskForm from "./components/AddTaskForm.jsx";

const taskList = JSON.parse(localStorage.getItem("taskDetail"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<AddTaskForm />} />
      <Route path="/tasklist" element={<TaskList taskDetails={taskList} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
