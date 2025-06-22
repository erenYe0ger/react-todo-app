function TodoItem({ item, handleDelete, handleToggle }) {
  return (
    <li
      style={{
        marginBottom: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#f5f5f5",
        padding: "0.5rem",
        borderRadius: "5px",
      }}
    >
      <span
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          cursor: "pointer",
          flex: "1",
        }}
        onClick={() => handleToggle(item.id)}
      >
        {item.text}
      </span>

      <button
        style={{
          marginLeft: "1rem",
          background: "white",
          border: "none",
          padding: "0.3rem 0.6rem",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onClick={() => handleDelete(item.id)}
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
