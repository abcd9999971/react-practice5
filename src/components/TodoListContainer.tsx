import  { useMemo, useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import type { TodoStyle } from '@/type';
import TodoList from '@/components/TodoList';


type TodoListProps = {
  todos: TodoStyle[];
  confirmDelete: (ids: number[]) => void;
  onDeleteResult?: (deletedIds: number[]) => void;
};


export const TodoListContainer = ({ todos, confirmDelete}: TodoListProps) => {

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
      confirmDelete(selectedIds);
    };
  
    const handleDeleteThis = (id: number) => {
      confirmDelete([id]);
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