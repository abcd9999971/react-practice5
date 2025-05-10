import { useRef } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import TodoAddForm from './TodoAddForm';

import type { TodoStyle } from '@/type.ts';

type TodoAddFormProps = {
  handleAddTodo: (data: TodoStyle) => void;
};

export const TodoAddFormContainer = ({ handleAddTodo }: TodoAddFormProps) => {
  //primary key. maybe uuid well be better
  const indexRef = useRef(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
    reset();
    };

  return (
    <TodoAddForm
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
    />
  );
};

export default TodoAddFormContainer;
