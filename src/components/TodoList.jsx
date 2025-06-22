import TodoItem from "./TodoItem";

function TodoList({ todos, handleDelete, handleToggle }) {
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
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
