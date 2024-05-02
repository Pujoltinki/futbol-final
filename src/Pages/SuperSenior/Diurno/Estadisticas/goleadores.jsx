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
  createData('Danton'       , 6, 'R.Gutierrez'),
  createData('Inba'         , 5, 'M.Fricke'   ),
  createData('Aeronautica'  , 5, 'D.Gonzales' ),
  createData('Drivers U.'   , 4, 'P.Correa'   ),
  createData('Feldman'      , 4, 'L.Sanchez'  ),
  createData('Feldman'      , 4, 'H.Ferreira' ),
  createData('U.Catolica'   , 3, 'V.Catalan'  ),
  createData('Aeronautica'  , 3, 'C.Vidal'    ),
  createData('Alianza'      , 2, 'A.Ramirez'  ),
  createData('Aeronautica'  , 2, 'R.Diaz'     ),
  createData('Real fenix'   , 2, 'G.Basso'    ),
  createData('Drivers U.'   , 2, 'J.Ramirez'  ),
  createData('Feldman '     , 2, 'E.Montano'  ),
  createData('Danton'       , 2, 'S.Campos'   ),
  createData('Inba'         , 2, 'P.Peña'     ),
  createData('Feldman'      , 1, 'F.Saavedra' ),
  createData('Feldman'      , 1, 'A.Cárdenas' ),
  createData('Inba'         , 1, 'J.Sánchez'  ),
  createData('Drivers U.'   , 1, 'F.Correa'   ),
  createData('Aeronautica'  , 1, 'N.Aguilar'  ),
  createData('U.Catolica'   , 1, 'I.Tapia'    ),
  createData('Real fenix'   , 1, 'J.Fernandez'),
  createData('Real fenix'   , 1, 'R.Alarcon'  ),
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