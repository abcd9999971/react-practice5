import  { useMemo } from 'react';

import Box from '@mui/material/Box';

import type { TodoStyle } from '@/type';
import TodoList from '@/components/TodoList';


type TodoListProps = {
  todos: TodoStyle[];
  confirmDelete: (ids: number[]) => void;
  onDeleteResult?: (deletedIds: number[]) => void;
  deleteIds: number[];
  setDeleteIds: React.Dispatch<React.SetStateAction<number[]>>;
};


export const TodoListContainer = ({ todos, confirmDelete, deleteIds, setDeleteIds}: TodoListProps) => {

    const allIds = todos.map((todo) => todo.id);
    const isAllSelected = useMemo(() => (deleteIds.length === todos.length) && todos.length > 0, [deleteIds, todos]);
  
    const toggleSelect = (id: number) => {
      setDeleteIds((deleteIds: number[]) =>
        deleteIds.includes(id) ? deleteIds.filter((item: number) => item !== id) : [...deleteIds, id]
      );
    };
  
    const toggleSelectAll = () => {
      setDeleteIds(isAllSelected ? [] : allIds);
    };
  
    const handleDeleteSelected = () => {
      confirmDelete(deleteIds);
    };
  
    const handleDeleteThis = (id: number) => {
      confirmDelete([id]);
    }

    return (
        <Box>
            <TodoList
            todos={todos}
            deleteIds={deleteIds}
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