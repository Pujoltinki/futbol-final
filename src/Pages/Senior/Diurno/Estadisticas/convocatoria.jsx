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

function createData( Club, Fecha1 , Fecha2 , Fecha3, Fecha4, Fecha5, Fecha6, Fecha7) {
  return {  Club, Fecha1 , Fecha2 , Fecha3, Fecha4, Fecha5, Fecha6, Fecha7 };
}

const rows = [
  createData('Awkan'            , '14'        , '17', '13', ' ', ' ', ' ', ' '),
  createData('Danton'           , '18'        , '16', '18', ' ', ' ', ' ', ' '),
  createData('J.Brasilia'       , 'Pendiente' , '12', '14', ' ', ' ', ' ', ' '),
  createData('Lobos'            , '17'        , '15', '15', ' ', ' ', ' ', ' '),
  createData('Los Quesos'       , '13'        , '12', '15', ' ', ' ', ' ', ' '),
  createData('Makinones'        , 'Pendiente' , '17', '15', ' ', ' ', ' ', ' '),
  createData('Mosacate'         , '11'        , '13', '12', ' ', ' ', ' ', ' '),
  createData('Sanchez e hijos'  , '13'        , '13', '12', ' ', ' ', ' ', ' '),
];

export default function CustomizedTables() {
  return (
    <Grid className="grisCuadro">
      <h2 style={{ textAlign: 'center' }}>Convocatoria</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Club</StyledTableCell>
              <StyledTableCell>1ra Fecha </StyledTableCell>
              <StyledTableCell>2da Fecha </StyledTableCell>
              <StyledTableCell>2da Fecha </StyledTableCell>
              <StyledTableCell>4ta Fecha </StyledTableCell>
              <StyledTableCell>5ta Fecha </StyledTableCell>
              <StyledTableCell>6ta Fecha </StyledTableCell>
              <StyledTableCell>7ma Fecha </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.jugador}>
                <StyledTableCell>{row.Club}</StyledTableCell>
                <StyledTableCell>{row.Fecha1}</StyledTableCell>
                <StyledTableCell>{row.Fecha2}</StyledTableCell>
                <StyledTableCell>{row.Fecha3}</StyledTableCell>
                <StyledTableCell>{row.Fecha4}</StyledTableCell>
                <StyledTableCell>{row.Fecha5}</StyledTableCell>
                <StyledTableCell>{row.Fecha6}</StyledTableCell>
                <StyledTableCell>{row.Fecha7}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}