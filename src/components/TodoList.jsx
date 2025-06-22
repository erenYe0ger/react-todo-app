import TodoItem from "./TodoItem";

function TodoList({ todos, handleDelete, handleToggle, handleUpdate }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0",
      }}
    >
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
