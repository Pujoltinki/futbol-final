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

function createData(jugador, equipo, art, partido, cumple, multa) {
  return { jugador, equipo, art, partido, cumple, multa};
}

const rows = [
  createData('J.Espinoza' , 'Alianza'   , '', '1', 'Fecha 4', '$5000'),
  createData('R.Rebolledo', 'Drivers U.', '', '2', 'Fecha 5', '$5000'),
];

export default function CustomizedTables() {
  return (
    <Grid className="grisCuadro">
      <h2 style={{ textAlign: 'center' }}>Jugadores expulsados</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Jugador</StyledTableCell>
              <StyledTableCell>Equipo</StyledTableCell>
              <StyledTableCell>Art.</StyledTableCell>
              <StyledTableCell>Partido</StyledTableCell>
              <StyledTableCell>Cumple</StyledTableCell>
              <StyledTableCell>Multa</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.jugador}>
                <StyledTableCell>{row.jugador}</StyledTableCell>
                <StyledTableCell>{row.equipo}</StyledTableCell>
                <StyledTableCell>{row.art}</StyledTableCell>
                <StyledTableCell>{row.partido}</StyledTableCell>
                <StyledTableCell>{row.cumple}</StyledTableCell>
                <StyledTableCell>{row.multa}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}