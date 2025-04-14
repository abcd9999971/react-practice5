import Box from '@mui/material/Box';
import { UseFormRegister , FieldErrors } from 'react-hook-form';


type TodoAddFormProps = {
  onSubmit: () => void;
  errors : FieldErrors<{title: string}>;
  register: UseFormRegister<{title: string}>;
}

export const TodoAddForm = ({ onSubmit, errors,register }: TodoAddFormProps) => {

  return (
    <Box sx={{ padding: '20px',justifyContent: 'center', display: 'flex' }}>
      <form onSubmit={onSubmit}>
        <input {...register('title', { required: true })} />
        {errors.title && <span>🔺This field is required🔺</span>}
        <button type="submit">追加</button>
      </form>
    </Box>
  );
};

export default TodoAddForm;
