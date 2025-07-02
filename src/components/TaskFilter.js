function TaskFilter({ currentFilter, onChange }) {
  const filters = ["All", "Completed", "Pending"];
  return (
    <div className="filters">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={currentFilter === f ? "active" : ""}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
