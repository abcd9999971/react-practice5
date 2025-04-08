'use client';  
//Attempted import error: 'useForm' is not exported from 'react-hook-form' (imported as 'useForm').
//react-hook-form/issues/11284

import { useRef } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form'

import type { TodoStyle } from '@/type.ts';

//const 
const FIELD_NAMES = {
  title: 'title',
  date: 'date',
  isSelected: 'isSelected',
} as const;

type TodoAddFormProps = {
  handleAddTodo: (data: TodoStyle) => void;
}

//component
export const TodoAddForm = ({handleAddTodo}:TodoAddFormProps) => {
  
  const indexRef = useRef(0);    
  
  const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
  } = useForm<TodoStyle>({
    defaultValues: {
      [FIELD_NAMES.date]: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      [FIELD_NAMES.isSelected]: false, // default value 
    },
  });

      const onSubmit: SubmitHandler<TodoStyle> = (data) => {
        handleAddTodo({ ...data, id: indexRef.current });
        console.log({ ...data, id: indexRef.current }); 
        indexRef.current += 1; // increment the id for next todo
      };
      
      // watch input value by passing the name of it 
      // console.log(watch(FIELD_NAMES.title)) 

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register(FIELD_NAMES.title, { required: true })} />
          {errors.title && <span>This field is required</span>}
          <button type='submit'>追加</button>
        </form>
      )
    }

export default TodoAddForm;
