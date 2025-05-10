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
      padding: '10px',
    }}>   
      <form onSubmit={onSubmit}>
        <Box sx={{ 
          width: '100%', 
          marginBottom: '10px', 
          fontSize : '18px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          '& input': {
            width: '75%',
            borderRadius: '5px',
            border: errors.title ? '2px solid red' : '1px solid #ccc',
            fontSize: 'inherit',
            padding: '10px',
            outline: 'none',
            '&:focus': {
              border: errors.title ? '2px solid red' : '2px solid black',
              },
            },
          '& button': {
            width: '20%',
            fontSize: 'inherit',
            padding: '10px',
          },
          }}>
          <input  
            placeholder={errors.title ? '未入力' : 'TODO入力してください'}
            {...register('title', { required: true })} />
          <button type="submit">
          追加
          </button>
        </Box>


      </form>
    </Box>
  );
};

export default TodoAddForm;
