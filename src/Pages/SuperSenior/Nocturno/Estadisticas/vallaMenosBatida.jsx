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

function createData( equipo, jugador, goles) {
  return {  equipo, jugador, goles };
}

const rows = [
  createData('equipo 1', 'jugador 1', 8),
  createData('equipo 2', 'jugador 2', 2),
  createData('equipo 3', 'jugador 3', 3),
  createData('equipo 4', 'jugador 4', 0),
  createData('equipo 5', 'jugador 5', 0),
  createData('equipo 6', 'jugador 6', 0),
  createData('equipo 7', 'jugador 7', 0),
  createData('equipo 8', 'jugador 8', 0),
];

export default function CustomizedTables() {
  return (
    <Grid className="grisCuadro">
      <h2 style={{ textAlign: 'center' }}>Juego limpio</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Equipo</StyledTableCell>
              <StyledTableCell>Jugador</StyledTableCell>
              <StyledTableCell>Goles recibidos</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.jugador}>
                <StyledTableCell>{row.equipo}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.jugador}
                </StyledTableCell>
                <StyledTableCell>{row.goles}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}