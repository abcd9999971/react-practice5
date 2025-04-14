import { useState } from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import type { TodoStyle } from '@/type.ts';

import TodoAddFormContainer from '@/components/TodoAddFormContainer';
import TodoListContainer from '@/components/TodoListContainer';
import DeleteDialog from './DeleteDialog';

export const TodoApp = () => {

  const [todos, setTodos] = useState<TodoStyle[]>([]);
  const [open, setOpen] = useState(false);
  const [deleteIds, setDeleteIds] = useState<number[]>([]);


  const handleAddTodo = (data:TodoStyle) => {
      setTodos((prevTodos) => [...prevTodos, data]);
    };  

  const handleDelete = () => {
    // if deleteIds is empty, show an alert
    if (deleteIds.length > 0) {
      setTodos((prevTodos) => prevTodos.filter((todo) => !deleteIds.includes(todo.id)));
    } else {
      alert("削除するtodoがありません");
    }
  };

  const ConfirmDelete = (ids:number[]) => {
    setOpen(true);
    setDeleteIds(ids);
  };

  const handleClose = () => {
    setOpen(false);
    setDeleteIds([]);
  };

  return (
    <Box sx={{ padding: '20px',justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2">Todo app</Typography> 
      <DeleteDialog open={open} onClose={handleClose} onDelete={handleDelete} />
      <TodoAddFormContainer handleAddTodo={handleAddTodo} />
      <TodoListContainer todos = {todos} confirmDelete = {ConfirmDelete} />
    </Box>
  );
}

export default TodoApp;