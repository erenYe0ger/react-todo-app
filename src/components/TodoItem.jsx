import { useState } from "react";

function TodoItem({ item, handleDelete, handleToggle, handleUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  return (
    <li
      style={{
        marginBottom: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#d9f9f9",
        padding: "0.5rem",
        borderRadius: "5px",
      }}
    >
      {isEditing ? (
        <input
          style={{
            flex: "1",
            background: "#ddd",
            borderRadius: "5px",
            fontSize: "1rem",
            padding: "0.4rem",
            border: "none",
            outline: "none",
          }}
          value={editedText}
          onChange={(e) => {
            setEditedText(e.target.value);
          }}
        />
      ) : (
        <span
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            cursor: "pointer",
            flex: "1",
            fontFamily: "sans-serif",
          }}
          onClick={() => handleToggle(item.id)}
        >
          {item.text}
        </span>
      )}

      <button
        style={{
          marginLeft: "1rem",
          background: "white",
          border: "none",
          padding: "0.3rem 0.6rem",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onClick={() => {
          if (isEditing) {
            handleUpdate(item.id, editedText);
          }
          setIsEditing(!isEditing);
        }}
      >
        {isEditing ? "✅" : "✏️"}
      </button>

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
