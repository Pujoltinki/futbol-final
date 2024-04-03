import * as React            from 'react';
import PropTypes             from 'prop-types';
import Box                   from '@mui/material/Box';
import Collapse              from '@mui/material/Collapse';
import IconButton            from '@mui/material/IconButton';
import Table                 from '@mui/material/Table';
import TableBody             from '@mui/material/TableBody';
import TableCell             from '@mui/material/TableCell';
import TableContainer        from '@mui/material/TableContainer';
import TableHead             from '@mui/material/TableHead';
import TableRow              from '@mui/material/TableRow';
import Typography            from '@mui/material/Typography';
import Paper                 from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon   from '@mui/icons-material/KeyboardArrowUp';
import { Grid }              from "@mui/material";


function createData(partido, equipo1, vs, equipo2, ganador, detalle) {
  return {
    partido,
    equipo1,
    vs,
    equipo2,
    ganador,
    detalle,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.partido}</TableCell>
        <TableCell>{row.equipo1}</TableCell>
        <TableCell>{row.vs}</TableCell>
        <TableCell>{row.equipo2}</TableCell>
        <TableCell>{row.ganador}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">Jugadas destacadas</Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Accion</TableCell>
                    <TableCell>Equipo</TableCell>
                    <TableCell>Jugador</TableCell>
                    <TableCell>Tiempo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detalle.map((detalleRow) => (
                    <TableRow key={detalleRow.accion}>
                      <TableCell component="th" scope="row">{detalleRow.accion}</TableCell>
                      <TableCell>{detalleRow.equipo}</TableCell>
                      <TableCell>{detalleRow.jugador}</TableCell>
                      <TableCell>{detalleRow.tiempo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    equipo1: PropTypes.number.isRequired,
    equipo2: PropTypes.number.isRequired,
    vs: PropTypes.number.isRequired,
    detalle: PropTypes.arrayOf(
      PropTypes.shape({
        jugador: PropTypes.number.isRequired,
        equipo: PropTypes.string.isRequired,
        accion: PropTypes.string.isRequired,
        tiempo: PropTypes.string.isRequired 
      }),
    ).isRequired,
    partido: PropTypes.string.isRequired,
    ganador: PropTypes.number.isRequired,
  }).isRequired,
};

// Cambia los datos de la tarjeta

const rows = [
  // Datos principales
  createData('Partido 1', 'Equipo 1 (5)', 'vs', 'Equipo 2 (0)', 'Equipo 1', [
    {
      // Detalles de la tablas
      accion: 'Falta (Tarjeta roja)',
      equipo: 'Equipo 1',
      jugador: 'Jugador 1',
      tiempo: '10:30',
    },
    {
      accion: 'Gol',
      equipo: 'Equipo 1',
      jugador: 'Jugador 5',
      tiempo: '19:35',
    },
  ]),

  createData('Partido 2', 'Equipo 3 (3)', 'vs', 'Equipo 4 (7)', 'Equipo 4', [
    {
      accion: 'Falta (Tarjeta amarilla)',
      equipo: 'equipo 4',
      jugador: 'Jugador 7',
      tiempo: '33:17',

    },
    {
      accion: 'Gol',
      equipo: 'Equipo 9',
      jugador: 'Jugador 4',
      tiempo: '40:47',

    },
  ]),
  createData('Partido 3', 'Equipo 1 (5)', 'vs', 'Equipo 2 (0)', 'Equipo 1', [
    {
      // Detalles de la tablas
      accion: 'Falta (Tarjeta roja)',
      equipo: 'Equipo 1',
      jugador: 'Jugador 1',
      tiempo: '10:30',
    },
    {
      accion: 'Gol',
      equipo: 'Equipo 1',
      jugador: 'Jugador 5',
      tiempo: '19:35',
    },
  ]),

  createData('Partido 4', 'Equipo 3 (3)', 'vs', 'Equipo 4 (7)', 'Equipo 4', [
    {
      accion: 'Falta (Tarjeta amarilla)',
      equipo: 'equipo 4',
      jugador: 'Jugador 7',
      tiempo: '33:17',

    },
    {
      accion: 'Gol',
      equipo: 'Equipo 9',
      jugador: 'Jugador 4',
      tiempo: '40:47',

    },
  ]),

];

export default function CollapsibleTable() {
  
  return (
    <Grid>
      <Grid className="grisCuadro">
        <h2 style={{ textAlign: 'center' }}>Resultados fecha 10</h2>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
              <TableCell />
                <TableCell>Partido</TableCell>
                <TableCell>Equipo 1 (Goles)</TableCell>
                <TableCell></TableCell>
                <TableCell>Equipo 2 (Goles)</TableCell>
                <TableCell>Ganador</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.partido} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}