import { useState } from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import DeleteDialog from './DeleteDialog';

import type { TodoStyle, DeleteDialogProps } from '@/type.ts';

import TodoAddFormContainer from '@/components/TodoAddFormContainer';
import TodoListContainer from '@/components/TodoListContainer';


export const TodoApp = () => {

  const [todos, setTodos] = useState<TodoStyle[]>([]);
  const [deleteIds, setDeleteIds] = useState<number[]>([]);
  const [DialogComponent, setDialogComponent] = useState<DeleteDialogProps | undefined>()

  const handleAddTodo = (data:TodoStyle) => {
      setTodos((prevTodos) => [...prevTodos, data]);
    };  

  const handleDelete = (ids:number[]) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => !ids.includes(todo.id)));
  };

  const ConfirmDelete = 
    async (ids:number[], isOne : boolean) => {
      const ok = await await new Promise<string>((resolve) => {
        setDialogComponent({
          onClose: resolve,
          title : '削除確認',
          message : '本当に削除しますか？',
        });
      })
      setDialogComponent(undefined);
      if (ok) {
        handleDelete(ids);
        if (isOne && deleteIds.includes(ids[0])) {
            setDeleteIds((prevDeleteIds) => prevDeleteIds.filter((id) => id !== ids[0]));
        } else if (!isOne){
          setDeleteIds([]);
        }
      } else {
        console.log('Cancel');
      }
    };


  return (
    <Box sx={{ padding: '20px',justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2">Todo app</Typography> 
      {DialogComponent && <DeleteDialog {...DialogComponent} />}
      <TodoAddFormContainer handleAddTodo={handleAddTodo} />
      <TodoListContainer todos = {todos} confirmDelete = {ConfirmDelete} deleteIds = {deleteIds} setDeleteIds = {setDeleteIds} />
    </Box>
  );
}

export default TodoApp;