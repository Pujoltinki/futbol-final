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
  createData('Danton'          , 5, 'Jugador 1'),
  createData('J.Brasilia'      , 5, 'Jugador 2'),
  createData('Lobos'           , 3, 'Jugador 3'),
  createData('Awkan'           , 3, 'Jugador 4'),
  createData('Makinones'       , 3, 'Jugador 4'),
  createData('Lobos'           , 2, 'Jugador 4'),
  createData('Awkan'           , 2, 'Jugador 4'),
  createData('Awkan'           , 2, 'Jugador 4'),
  createData('Los quesos'      , 2, 'Jugador 4'),
  createData('Sanches e hijos' , 2, 'Jugador 4'),
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
                <StyledTableCell component="th" scope="row">
                  {row.equipo}
                </StyledTableCell>
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