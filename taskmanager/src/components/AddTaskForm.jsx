import React, { useState } from "react";
import { useTaskManager } from "../context/TaskManagerContext";

const AddTaskForm = ({ taskName, onTaskChange }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [label, setLabel] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const [completionStatus, setCompletionStatus] = useState("ToDo");

  const { addTask } = useTaskManager();

  const ontaskDetailsSubmit = (e) => {
    e.preventDefault();
    addTask({
      taskTitle,
      taskDescription,
      label,
      dueDate,
      completionStatus,
    });
    setCompletionStatus("ToDo");
    setDueDate("");
    setLabel("Low");
    setTaskDescription("");
    setTaskTitle("");
  };
  return (
    <>
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
            <form onSubmit={ontaskDetailsSubmit} className="flex">
              <div className="p-6 max-w-sm mx-auto m-5 bg-white flex items-center shadow-lg rounded-xl">
                <div>
                  <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-slate-400"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Task description..."
                    className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-slate-400"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    required
                  />
                  <div className="flex">
                    <label
                      className="w-full px-3 outline-none duration-150 bg-white/20 py-1.5 text-slate-400"
                      htmlFor="priority"
                    >
                      Label
                    </label>
                    <select
                      className="w-full px-3 outline-none duration-150 bg-white/20 py-1.5 text-slate-400"
                      name="priority"
                      id="priority"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <div className="flex">
                    <label
                      className="w-full px-3 outline-none duration-150 bg-white/20 py-1.5 text-slate-400"
                      htmlFor="priority"
                    >
                      Due Date
                    </label>
                    <input
                      type="date"
                      className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-slate-400"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex">
                    <label
                      className="w-full px-3 outline-none duration-150 bg-white/20 py-1.5 text-slate-400"
                      htmlFor="priority"
                    >
                      Completion status
                    </label>
                    <select
                      className="w-full px-3 outline-none duration-150 bg-white/20 py-1.5 text-slate-400"
                      name="status"
                      value={completionStatus}
                      onChange={(e) => setCompletionStatus(e.target.value)}
                    >
                      <option value="ToDo">ToDo</option>
                      <option value="In progress">In progress</option>
                      <option value="Done">Done</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="rounded-lg px-3 py-1 bg-green-600 text-white shrink-0"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
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
    </>
  );
};

export default AddTaskForm;
