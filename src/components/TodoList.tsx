import { useState } from 'react';

import type { TodoStyle } from '@/type.ts';

type TodoListProps = {
  todos: TodoStyle[];
  handleDelete: (id: ( number[])) => void;  
}

export const TodoList = ({todos,handleDelete}:TodoListProps) => {

  const [IsChecked, setIsChecked] = useState<number[]>([]);
  const [CheckedAll, setCheckedAll] = useState(false);
  
  const handleChange = (id: number) => {
    if(IsChecked.includes(id))
      setIsChecked(IsChecked.filter((item) => item !== id));
    else
      setIsChecked([...IsChecked, id]);
  };

  const AllId = todos.map(todo => todo.id);

  const handleChangeAll = (e:boolean) => {
    (e)?setIsChecked(AllId):setIsChecked([])
  };

  return (
    <div>
      <h2>
        <input 
          type='checkbox'
          checked = {CheckedAll}
          onChange = { 
          (e) => {setCheckedAll(e.target.checked); handleChangeAll(e.target.checked); }}
        />
        {(IsChecked.length > 0 || CheckedAll === true) && (
          <button onClick={() => { handleDelete(IsChecked); setIsChecked([]); setCheckedAll(false); }}>
            Delete Selected
          </button>
        )}
      </h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={ CheckedAll || IsChecked.includes(todo.id) }
              onChange={() => handleChange(todo.id)} />
            {todo.title}
            <span>{todo.date}</span>
            <button 
              onClick = {() => {handleDelete([todo.id]); setIsChecked(IsChecked.filter((item) => item !== todo.id));}}>
            Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
