import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

interface TableUIProps {
    lista: any[];
}

function combineArrays(lista: any[]) {
    return lista.map((reseña, index) => ({
        id: index,
        ...reseña
    }));
}

export default function TableUI({ lista }: TableUIProps) {

    const columns: GridColDef[] = [];

    for (const key in lista[0]) {
        columns.push({ field: key, headerName: key, width: 160 });
    }

    const rows = combineArrays(lista);

    return (
        <Box sx={{ height: 350, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}