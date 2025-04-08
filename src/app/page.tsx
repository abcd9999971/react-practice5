'use client';  
// useState only works in client components

import { useState } from 'react';

import type { TodoStyle } from '@/type.ts';

import TodoAddForm from '@/components/TodoAddForm';
import TodoList from '@/components/TodoList';


export default function Home() {

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
    <div>
      <h1>Todo app</h1>
      <TodoAddForm handleAddTodo={handleAddTodo} />
      <TodoList todos = {todos} handleDelete = {handleDelete}/>
    </div>
  );
}
