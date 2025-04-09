import  { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import TodoList from '@/components/TodoList';

import type { TodoStyle } from '@/type';

type TodoListProps = {
  todos: TodoStyle[];
  handleDelete: (ids: number[]) => void;
};


export const TodoListContainer = ({ todos, handleDelete }: TodoListProps) => {

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
  
    const handleDeleteThis = (id: number) => {
      handleDelete([id]);
      setSelectedIds((prev) => prev.filter((item) => item !== id))
    }

    return (
        <Box>
            <TodoList
            todos={todos}
            selectedIds={selectedIds}
            isAllSelected={isAllSelected}   
            toggleSelect = {toggleSelect}
            toggleSelectAll = {toggleSelectAll}
            handleDeleteThis = {handleDeleteThis}
            handleDeleteSelected = {handleDeleteSelected}
            />
        </Box>
    );
}

export default TodoListContainer;