import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import TaskList from "./components/TaskList";
import './styles/App.css';


function App() {
  const username = localStorage.getItem("username");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={username ? <Navigate to="/tasks" /> : <Login />}
        />
        <Route
          path="/tasks"
          element={username ? <TaskList /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

