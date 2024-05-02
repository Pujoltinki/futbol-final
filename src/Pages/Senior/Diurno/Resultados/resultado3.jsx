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


function createData(partido, equipo1, vs, equipo2, resultado, detalle) {
  return {
    partido,
    equipo1,
    vs,
    equipo2,
    resultado,
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
        <TableCell>{row.resultado}</TableCell>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detalle.map((detalleRow) => (
                    <TableRow key={detalleRow.accion}>
                      <TableCell component="th" scope="row">{detalleRow.accion}</TableCell>
                      <TableCell>{detalleRow.equipo}</TableCell>
                      <TableCell>{detalleRow.jugador}</TableCell>
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
      }),
    ).isRequired,
    partido: PropTypes.string.isRequired,
    resultado: PropTypes.number.isRequired,
  }).isRequired,
};

// Cambia los datos de la tarjeta

const rows = [
  // Datos principales
  createData('Partido 1', 'Makinones (2)', 'vs', 'Danton (1)', 'Ganador (Makinones)', [
    {
      // Detalles de la tablas
      accion: ' ',
      equipo: ' ',
      jugador: ' ',
    },

  ]),

  createData('Partido 2', 'Lobos (5)', 'vs', 'Los quesos (2)', 'Ganador (Lobos)', [
    {
      accion: ' ',
      equipo: ' ',
      jugador: ' ',

    },
  ]),
  createData('Partido 3', 'Awkan (5)', 'vs', 'Mosacate (0)', 'Ganador (Awkan)', [
    {
      // Detalles de la tablas
      accion: ' ',
      equipo: ' ',
      jugador: ' ',
    },

  ]),

  createData('Partido 4', 'J.Brasilia (2)', 'vs', 'Sanchez e hijos (1)', 'Ganador (J.Brasilia)', [
    {
      accion: ' ',
      equipo: ' ',
      jugador: ' ',

    },

  ]),

];

export default function CollapsibleTable() {
  
  return (
    <Grid>
      <Grid className="grisCuadro">
        <h2 style={{ textAlign: 'center' }}>Resultados fecha 3</h2>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
              <TableCell />
                <TableCell>Partido</TableCell>
                <TableCell>Equipo 1 (Goles)</TableCell>
                <TableCell></TableCell>
                <TableCell>Equipo 2 (Goles)</TableCell>
                <TableCell>Resultado</TableCell>
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