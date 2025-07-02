import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { loadTasks, saveTasks } from "../utils/localStorage";


function TaskList() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (data) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const editTask = (id, updatedTask) => {
  setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
};


  const filteredTasks = tasks.filter(task =>
    filter === "All" ? true :
    filter === "Completed" ? task.completed :
    !task.completed
  );

  return (
  <div className="container">
    <h2>Hello {localStorage.getItem("username")}</h2>
    <TaskForm onSubmit={addTask} />
    <TaskFilter currentFilter={filter} onChange={setFilter} />
    <p>Total: {filteredTasks.length}</p>
    {filteredTasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    ))}
  </div>
);

}

export default TaskList;

