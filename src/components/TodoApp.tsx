import { useState } from 'react';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import type { TodoStyle } from '@/type.ts';
import TodoAddForm from '@/components/TodoAddForm';
import TodoListContainer from '@/components/TodoListContainer';


export const TodoApp = () => {

  const [todos, setTodos] = useState<TodoStyle[]>([]);

  const handleAddTodo = (data:TodoStyle) => {
      setTodos((prevTodos) => [...prevTodos, data]);
    };  
  
  const handleDelete = (id: (number[])) => {
    // if id is null, delete all todos
    if (id != null) 
      setTodos((prevTodos) => prevTodos.filter((todo) => !id.includes(todo.id)))
    else
      setTodos([]);
  };

  return (
    <Box sx={{ padding: '20px',justifyContent: 'center', display: 'flex' }}>
      <Typography variant="h1">Todo app</Typography> 
      <TodoAddForm handleAddTodo={handleAddTodo} />
      <TodoListContainer todos = {todos} handleDelete = {handleDelete}/>
    </Box>
  );
}

export default TodoApp;