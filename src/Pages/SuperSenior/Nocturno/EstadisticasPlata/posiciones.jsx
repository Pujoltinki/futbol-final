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

function createData(equipo, punto, pj, pg, pe, pp, gf, gc, difG) {
  return { equipo, punto, pj, pg, pe, pp, gf, gc, difG };
}

const rows = [
  createData('Equipo 1', 4, 8, 5, 2, 4, 8, 5, 2),
  createData('Equipo 2', 5, 2, 8, 1, 4, 8, 5, 2),
  createData('Equipo 3', 8, 3, 7, 3, 4, 8, 5, 2),
  createData('Equipo 4', 9, 0, 2, 7, 4, 8, 5, 2),
];

export default function CustomizedTables() {
  return (
    <Grid className="grisCuadro">
      <h2 style={{ textAlign: 'center' }}>Tabla de posiciones</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Equipo</StyledTableCell>
              <StyledTableCell>Puntos</StyledTableCell>
              <StyledTableCell>PJ</StyledTableCell>
              <StyledTableCell>PG</StyledTableCell>
              <StyledTableCell>PE</StyledTableCell>
              <StyledTableCell>PP</StyledTableCell>
              <StyledTableCell>GF</StyledTableCell>
              <StyledTableCell>GC</StyledTableCell>
              <StyledTableCell>Dif.G</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.equipo}>
                <StyledTableCell component="th" scope="row">
                  {row.equipo}
                </StyledTableCell>
                <StyledTableCell>{row.punto}</StyledTableCell>
                <StyledTableCell>{row.pj}</StyledTableCell>
                <StyledTableCell>{row.pg}</StyledTableCell>
                <StyledTableCell>{row.pe}</StyledTableCell>
                <StyledTableCell>{row.pp}</StyledTableCell>
                <StyledTableCell>{row.gf}</StyledTableCell>
                <StyledTableCell>{row.gc}</StyledTableCell>
                <StyledTableCell>{row.difG}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}