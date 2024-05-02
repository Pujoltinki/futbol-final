import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(equipo, gol, jugador) {
  return { equipo, gol, jugador};
}

const rows = [
  createData('Danton'          , 7, 'K.Acevedo'    ),
  createData('Awkan'           , 4, 'F.Rodriguez'  ),
  createData('J.Brasilia'      , 5, '5.Aguilar'    ),
  createData('Lobos'           , 3, 'E.Verdugo'    ),
  createData('Makinones'       , 3, 'A.Lagos'      ),
  createData('Sanches e hijos' , 3, 'E.Herrera'    ),
  createData('Awkan'           , 3, 'A.Vargas'     ),
  createData('Lobos'           , 2, 'Felipe M.'    ),
  createData('Awkan'           , 2, 'C.Gatica'     ),
  createData('Los quesos'      , 2, 'J.Vega'       ),
  createData('Lobos'           , 1, 'C.Farias.'    ),
  createData('Lobos'           , 1, 'A.Céspedes'   ),
  createData('Lobos'           , 1, 'F.Montero'    ),
  createData('Makinones'       , 1, 'C.Olivares'   ),
  createData('Awkan '          , 1, 'A.San Martin' ),
  createData('J.Brasilia '     , 1, 'M.Varela'     ),
];

export default function CustomizedTables() {
  return (
    <Grid className="grisCuadro">
      <h2 style={{ textAlign: 'center' }}>Goleadores</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Equipo</StyledTableCell>
              <StyledTableCell>Goles</StyledTableCell>
              <StyledTableCell>Jugador</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.equipo}>
                <StyledTableCell>{row.equipo}</StyledTableCell>
                <StyledTableCell>{row.gol}</StyledTableCell>
                <StyledTableCell>{row.jugador}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}