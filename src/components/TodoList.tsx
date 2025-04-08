'use client';  

import { useForm } from "react-hook-form"

import type { TodoStyle } from "@/type.ts";

export const TodoList = () => {
    const { getValues } = useForm<TodoStyle>();

    const allValues = getValues();
    console.log(allValues);
  return (
    <div>
        <p>List</p>
    </div>
  );
}
export default TodoList;
