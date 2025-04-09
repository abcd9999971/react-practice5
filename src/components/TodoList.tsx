type TodoListProps = {
  todos: {
    id: number;
    title: string;
    date: string;
  }[];
  selectedIds : number[];
  isAllSelected : boolean;
  toggleSelect : (id: number) => void;
  toggleSelectAll : () => void;
  handleDeleteThis : (id: number) => void
  handleDeleteSelected : () => void
};
export const TodoList = ({
  todos,
  selectedIds,
  isAllSelected,
  toggleSelect,
  toggleSelectAll,
  handleDeleteThis,
  handleDeleteSelected
  }: TodoListProps) => {

  return (
    <div>
      <h2>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={toggleSelectAll}
        />
        {(selectedIds.length > 0) && (
          <button onClick={handleDeleteSelected}>Delete Selected</button>
        )}
      </h2>
      <ul>
        {todos.map(({ id, title, date }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={selectedIds.includes(id)}
              onChange={() => toggleSelect(id)}
            />
            {title}
            <span>{date}</span>
            <button
              onClick={() => {
                handleDeleteThis(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
