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

function Fecha1(fechas, horas, equipo1, vs, equipo2) {
  return { fechas, horas, equipo1, vs, equipo2 };
}

const rows = [
  Fecha1('20/04/2024', " ", "Makinones"       , "vs" , "Lobos"      ),
  Fecha1('20/04/2024', " ", "Sanchez e hijos" , "vs" , "Danton"     ),
  Fecha1('20/04/2024', " ", "Awkan"           , "vs" , "J.Brasilia" ),
  Fecha1('20/04/2024', "", "Los Quesos"      , "vs" , "Mosacate"   ),
];

export default function CustomizedTables() {
  return (
    <Grid className="grisCuadro">
      <h2 style={{ textAlign: 'center' }}>Partidos fecha 4</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Fecha</StyledTableCell>
              <StyledTableCell>Hora</StyledTableCell>
              <StyledTableCell>Equipo local</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Equipo visita</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.fechas}>
                <StyledTableCell>{row.fechas}</StyledTableCell>
                <StyledTableCell>{row.horas}</StyledTableCell>
                <StyledTableCell>{row.equipo1}</StyledTableCell>
                <StyledTableCell >{row.vs}</StyledTableCell>
                <StyledTableCell>{row.equipo2}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}