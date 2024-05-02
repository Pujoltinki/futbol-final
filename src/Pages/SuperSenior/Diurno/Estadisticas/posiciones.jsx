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
  createData('Danton'         , 3 ,2 ,1 ,0 ,9	  ,6	,3	,7 ),
  createData('Feldman'        , 3 ,2 ,1 ,0 ,12  ,6	,6	,7 ),
  createData('Real fenix'     , 3 ,1 ,2 ,0 ,6	  ,4	,2	,5 ),
  createData('Drivers U.'     , 3 ,1 ,2 ,0 ,8	  ,6	,2	,5 ),
  createData('Aeronautica'    , 3 ,1 ,0 ,2 ,7	  ,9	,-2	,3 ),
  createData('Inba'           , 3 ,1 ,0 ,2 ,7	  ,9	,-2	,3 ),
  createData('U.Catolica'     , 3 ,1 ,0 ,2 ,6	  ,9	,-3	,3 ),
  createData('Alianza'        , 3 ,0 ,0 ,3 ,5	  ,14 ,-9 ,0 ),
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