'use client';  
//Attempted import error: 'useForm' is not exported from 'react-hook-form' (imported as 'useForm').
//react-hook-form/issues/11284

import { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { TodoStyle } from '@/type.ts';

type TodoAddFormProps = {
  handleAddTodo: (data: TodoStyle) => void;
};

export const TodoAddForm = ({ handleAddTodo }: TodoAddFormProps) => {
  //primary key. maybe uuid well be better
  const indexRef = useRef(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ title: string }>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<{ title: string }> = (data) => {
    handleAddTodo({ 
      ...data, 
      id: indexRef.current,
      date: new Date().toISOString().split('T')[0] 
    });
    indexRef.current += 1;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} />
      {errors.title && <span>🔺This field is required🔺</span>}

      <button type="submit">追加</button>
    </form>
  );
};

export default TodoAddForm;
