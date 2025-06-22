function FilterButtons({ filter, setFilter }) {
  const myStyle = {
    margin: "0.5rem",
    padding: "0.3rem 0.6rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "7px",
  };

  return (
    <div>
      <button
        style={{
          ...myStyle,
          background: filter === "all" ? "#333" : "",
          color: filter === "all" ? "#fff" : "",
        }}
        onClick={() => {
          setFilter("all");
        }}
      >
        All
      </button>

      <button
        style={{
          ...myStyle,
          background: filter === "active" ? "#333" : "",
          color: filter === "active" ? "#fff" : "",
        }}
        onClick={() => {
          setFilter("active");
        }}
      >
        Active
      </button>

      <button
        style={{
          ...myStyle,
          background: filter === "completed" ? "#333" : "",
          color: filter === "completed" ? "#fff" : "",
        }}
        onClick={() => {
          setFilter("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
