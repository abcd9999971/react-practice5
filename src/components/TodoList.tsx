'use client';

import  { useMemo, useState } from 'react';

import type { TodoStyle } from '@/type';

type TodoListProps = {
  todos: TodoStyle[];
  handleDelete: (ids: number[]) => void;
};

export const TodoList = ({ todos, handleDelete }: TodoListProps) => {

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const allIds = todos.map((todo) => todo.id);
  const isAllSelected = useMemo(() => (selectedIds.length === todos.length) && todos.length > 0, [selectedIds, todos]);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedIds(isAllSelected ? [] : allIds);
  };

  const handleDeleteSelected = () => {
    handleDelete(selectedIds);
    setSelectedIds([]);
  };

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
                handleDelete([id]);
                setSelectedIds((prev) => prev.filter((item) => item !== id));
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
