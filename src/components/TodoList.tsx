import type { TodoStyle } from '@/type.ts';

interface TodoListProps {
  todos: TodoStyle[];  
}

export const TodoList = ({todos}:TodoListProps) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isCompleted} />
            {todo.title}
            <span>{todo.date}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
