import { useForm, FormProvider } from "react-hook-form";

import TodoAddForm from '@/components/TodoAddForm';
import TodoList from '@/components/TodoList';
import type { TodoStyle } from "@/type.ts";

export default function Home() {
  return (
    <div>
      <h1>Todo app</h1>
      <TodoAddForm/>
      <TodoList/>
    </div>
  );
}
