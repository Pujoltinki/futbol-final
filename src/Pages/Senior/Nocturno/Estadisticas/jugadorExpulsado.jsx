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

function createData(jugador, art, partido, cumple, multa) {
  return { jugador, art, partido, cumple, multa};
}

const rows = [
  createData('jugador 1', 4, '12/05', '12/05', '$2'),
  createData('jugador 2', 5, '12/05', '12/05', '$5'),
  createData('jugador 3', 8, '12/05', '12/05', '$200'),
  createData('jugador 4', 9, '12/05', '12/05', '$30000'),
  createData('jugador 5', 9, '12/05', '12/05', '$30000'),
  createData('jugador 6', 9, '12/05', '12/05', '$30000'),
  createData('jugador 7', 9, '12/05', '12/05', '$30000'),
  createData('jugador 8', 9, '12/05', '12/05', '$30000'),
];

export default function CustomizedTables() {
  return (
    <Grid className="grisCuadro">
      <h2 style={{ textAlign: 'center' }}>Jugadores expulsados</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>jugador</StyledTableCell>
              <StyledTableCell>Art.</StyledTableCell>
              <StyledTableCell>Partido</StyledTableCell>
              <StyledTableCell>Cumple</StyledTableCell>
              <StyledTableCell>Multa</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.jugador}>
                <StyledTableCell component="th" scope="row">
                  {row.jugador}
                </StyledTableCell>
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