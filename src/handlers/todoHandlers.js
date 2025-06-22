export const addTodo = (todo, todos, setTodo, setTodos) => {
  if (todo.trim() === "") return;

  const newTodo = {
    id: Date.now(),
    text: todo.trim(),
    completed: false,
  };

  setTodos([...todos, newTodo]);
  setTodo("");
};

export const toggleTodo = (id, todos, setTodos) => {
  const newTodos = todos.map((item) => {
    return item.id === id ? { ...item, completed: !item.completed } : item;
  });
  setTodos(newTodos);
};

export const deleteTodo = (id, todos, setTodos) => {
  const newTodos = todos.filter((item) => {
    return item.id !== id;
  });
  setTodos(newTodos);
};

export const updateTodo = (id, todos, setTodos, editedText) => {
  const newTodos = todos.map((item) => {
    return item.id === id ? { ...item, text: editedText } : item;
  });
  setTodos(newTodos);
};

export const clearCompleted = (todos, setTodos) => {
  const newTodos = todos.filter((item) => !item.completed);
  setTodos(newTodos);
};
