function Form({ todo, handleAddTodo, setTodo }) {
  return (
    <form onSubmit={handleAddTodo}>
      <input
        value={todo}
        placeholder="Enter a todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        style={{
          padding: "0.5rem",
          width: "100%",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      ></input>

      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Add Todo
      </button>
    </form>
  );
}

export default Form;
