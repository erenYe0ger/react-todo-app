import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";
import FilterButtons from "./components/FilterButtons.jsx";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  updateTodo,
} from "./handlers/todoHandlers.js";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(todo, todos, setTodo, setTodos);
  };

  const handleToggle = (id) => {
    toggleTodo(id, todos, setTodos);
  };

  const handleDelete = (id) => {
    deleteTodo(id, todos, setTodos);
  };

  const handleUpdate = (id, editedText) => {
    updateTodo(id, todos, setTodos, editedText);
  };

  const handleClearCompleted = () => {
    clearCompleted(todos, setTodos);
  };

  const filteredTodos = todos.filter((item) => {
    if (
      filter === "all" ||
      (filter === "active" && !item.completed) ||
      (filter === "completed" && item.completed)
    )
      return true;
  });

  const remainingCount = todos.reduce(
    (count, item) => count + !item.completed,
    0
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Todo App</h1>

      <Form todo={todo} handleAddTodo={handleAddTodo} setTodo={setTodo} />

      {todos.some((item) => item.completed) && (
        <button
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "7px",
            border: "none",
            cursor: "pointer",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      )}

      <FilterButtons filter={filter} setFilter={setFilter} />

      {remainingCount > 0 && (
        <p>
          {remainingCount} {remainingCount === 1 ? "item" : "items"} left
        </p>
      )}

      <TodoList
        todos={filteredTodos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
