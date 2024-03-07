import { useState, useEffect, useId } from "react";
import { TaskManagerProvider } from "./context/TaskManagerContext";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";

function App() {
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
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="bg-[#284268] mt-14 w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 tetx-red">
            Welcome to Task Manager
          </h1>
          <h3 className="text-2xl font-bold text-center mb-8 mt-2">
            Add your task below
          </h3>
          <div className="mb-4">
            {/* Add Task form goes here */}
            <AddTaskForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop taskList and Add Todo Item here */}

            {/* {todos.length > 0 &&
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </TaskManagerProvider>
  );
}

export default App;
