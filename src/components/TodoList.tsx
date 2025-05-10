import { JSX } from 'react';

import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


type TodoListProps = {
  todos: {
    id: number;
    title: string;
    date: string;
  }[];
  deleteIds : number[];
  isAllSelected : boolean;
  toggleSelect : (id: number) => void;
  toggleSelectAll : () => void;
  handleDeleteThis : (id: number) => void
  deleteSelectedButton : JSX.Element | null;
};

export const TodoList = ({
  todos,
  deleteIds,
  isAllSelected,
  toggleSelect,
  toggleSelectAll,
  handleDeleteThis,
  deleteSelectedButton
  }: TodoListProps) => {


  const columns: GridColDef[] = [
    {
      field:'select',
      headerName: '',
      renderHeader: () => (
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={toggleSelectAll}
        />
      ), width: 100,
      renderCell: (params) => (
        <input
          type="checkbox"
          checked={deleteIds.includes(params.row.id)}
          onChange={() => toggleSelect(params.row.id)}
        />
      ),
      sortable : false,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true,
    },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => {
        const handleDeleteClick = () => {
          handleDeleteThis(params.row.id);
        };
        return (
          <button onClick={handleDeleteClick}>
            Delete
          </button>
        );
      },
    }
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
        <Box sx={{
          height: '40px',
        }}>
          {deleteSelectedButton}
        </Box>
      <DataGrid
        rows={todos}
        columns={columns}
        checkboxSelection={false}
        getRowId={(row) => row.id} 
      />
    </Box>
  );
};

export default TodoList;
