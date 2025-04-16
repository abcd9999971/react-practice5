import { Alert } from '@mui/material';
import Box from '@mui/material/Box';
import { UseFormRegister , FieldErrors } from 'react-hook-form';


type TodoAddFormProps = {
  onSubmit: () => void;
  errors : FieldErrors<{title: string}>;
  register: UseFormRegister<{title: string}>;
}

export const TodoAddForm = ({ onSubmit, errors,register }: TodoAddFormProps) => {

  return (
    <Box sx={{ 
      padding: '20px',
      width: '30%',
      justifyContent: 'center', 
      display: 'flex',
      flexDirection: 'column', 
      fontSize: '20px',
      alignItems: 'center'
      }}>
      
      <form onSubmit={onSubmit}>
        <input  
          style={{ 
            width: '80%',
            fontSize: '20px',
            padding: '10px',
            borderRadius: '5px',
          }} 
          placeholder='TODOを入力してください'
          {...register('title', { required: true })} />
        <button type="submit" >追加</button>
      </form>
      
        <Box sx={{ width: '80%', height: '40px', marginTop: '10px' }}>
        {errors.title && (<Alert severity="warning">未入力</Alert>)}
        </Box>
    </Box>
  );
};

export default TodoAddForm;
