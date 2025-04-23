'use client';  
// useState only works in client components
import Box from '@mui/material/Box';

import TodoApp  from '@/components/TodoApp';

export default function Home() {

  return (
      <Box>
        <TodoApp />
      </Box>
  );
}
