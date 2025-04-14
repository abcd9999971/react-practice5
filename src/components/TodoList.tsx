import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


type TodoListProps = {
  todos: {
    id: number;
    title: string;
    date: string;
  }[];
  selectedIds : number[];
  isAllSelected : boolean;
  toggleSelect : (id: number) => void;
  toggleSelectAll : () => void;
  handleDeleteThis : (id: number) => void
  handleDeleteSelected : () => void
  
};

export const TodoList = ({
  todos,
  selectedIds,
  isAllSelected,
  toggleSelect,
  toggleSelectAll,
  handleDeleteThis,
  handleDeleteSelected
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
          checked={selectedIds.includes(params.row.id)}
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
      renderCell: (params) => (
        <button
          onClick={() => {
            handleDeleteThis(params.row.id);
          }}
        >
          Delete
        </button>
      )
    }

  ];

  

  return (
    <Box sx={{ height: 400, width: '100%' }}>

        {(selectedIds.length > 0) && (
          <button onClick={handleDeleteSelected}>Delete Selected</button>
        )}
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
