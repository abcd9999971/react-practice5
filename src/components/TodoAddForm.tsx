'use client';  
//Attempted import error: 'useForm' is not exported from 'react-hook-form' (imported as 'useForm').
//react-hook-form/issues/11284

import { useForm, SubmitHandler } from 'react-hook-form'

import type { TodoStyle } from '@/type.ts';

//const 
const FIELD_NAMES = {
  title: 'title',
  date: 'date',
  isCompleted: 'isCompleted',
} as const;

//component
export const TodoAddForm = () => {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<TodoStyle>({
        defaultValues: {
          [FIELD_NAMES.date]: new Date().toISOString().split('T')[0], // YYYY-MM-DD
          [FIELD_NAMES.isCompleted]: false, // default value 
        },
      });

      const onSubmit: SubmitHandler<TodoStyle> = (data) => console.log(data)
      
      console.log(watch(FIELD_NAMES.title)) // watch input value by passing the name of it

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register(FIELD_NAMES.title, { required: true })} />
          {errors.title && <span>This field is required</span>}
          
          <button type='submit'/>
        </form>
      )
    }

export default TodoAddForm;
