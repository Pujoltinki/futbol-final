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

function createData(equipo, amarilla, roja) {
  return { equipo, amarilla, roja };
}

const rows = [
  createData('Equipo 1', 4, 8),
  createData('Equipo 2', 5, 2),
  createData('Equipo 3', 8, 3),
  createData('Equipo 4', 9, 0),
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
              <StyledTableCell>Tarjeta amarilla</StyledTableCell>
              <StyledTableCell>Tarjeta roja</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.equipo}>
                <StyledTableCell component="th" scope="row">
                  {row.equipo}
                </StyledTableCell>
                <StyledTableCell>{row.amarilla}</StyledTableCell>
                <StyledTableCell>{row.roja}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}