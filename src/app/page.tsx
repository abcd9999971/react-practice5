'use client';  
// useState only works in client components

import { useState } from 'react';

import type { TodoStyle } from '@/type.ts';

import TodoAddForm from '@/components/TodoAddForm';
import TodoList from '@/components/TodoList';


export default function Home() {

  const [todos, setTodos] = useState<TodoStyle[]>([]);

  return (
    <div>
      <h1>Todo app</h1>
      <TodoAddForm setTodos={setTodos} />
      <TodoList todos = {todos}/>
    </div>
  );
}
