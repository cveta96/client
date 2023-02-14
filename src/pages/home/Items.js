import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';

const Items = () => {
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      flex: 1,
    },
  ];

  const onRowClick = (selected) => {
    console.log(selected);
  };

  return (
    <Box m='20px'>
      <h1>List of items</h1>
      <Box m='40px 0 0 0' height='75vh'>
        <DataGrid
          rows={mockDataContacts}
          sx={{ backgroundColor: 'rgba(34, 197, 94)' }}
          columns={columns}
          onRowDoubleClick={onRowClick}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Items;
