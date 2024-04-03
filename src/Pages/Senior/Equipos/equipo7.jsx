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

//Imagenes
import logo1                 from '../../../imagenes/Equipo1.jpg';

function createData(numero, nombre, posicion, estado, detalle) {
  return {
    numero,
    nombre,
    posicion,
    estado,
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
        <TableCell component="th" scope="row">{row.numero}</TableCell>
        <TableCell>{row.nombre}</TableCell>
        <TableCell>{row.posicion}</TableCell>
        <TableCell>{row.estado}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">Detalles del jugador</Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Goles</TableCell>
                    <TableCell>Tarjetas amarrillas</TableCell>
                    <TableCell>Tarjetas rojas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detalle.map((detalleRow) => (
                    <TableRow key={detalleRow.gol}>
                      <TableCell component="th" scope="row">{detalleRow.gol}</TableCell>
                      <TableCell>{detalleRow.amarillo}</TableCell>
                      <TableCell>{detalleRow.rojo}</TableCell>
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
    nombre: PropTypes.number.isRequired,
    estado: PropTypes.number.isRequired,
    posicion: PropTypes.number.isRequired,
    detalle: PropTypes.arrayOf(
      PropTypes.shape({
        rojo: PropTypes.number.isRequired,
        amarillo: PropTypes.string.isRequired,
        gol: PropTypes.string.isRequired,
        tiempo: PropTypes.string.isRequired 
      }),
    ).isRequired,
    numero: PropTypes.string.isRequired,
  }).isRequired,
};

// Cambia los datos de la tarjeta
//Jugadores
const rows = [
  // Datos principales
  createData('1', 'Jugador 1', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('2', 'Jugador 2', 'Defensa', 'Lesionado', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('3', 'Jugador 3', 'Central', 'Expulsado', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('4', 'Jugador 4', 'Delantero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('5', 'Jugador 5', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('6', 'Jugador 6', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('7', 'Jugador 7', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('8', 'Jugador 8', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('9', 'Jugador 9', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('10', 'Jugador 10', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('11', 'Jugador 11', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('12', 'Jugador 12', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('13', 'Jugador 13', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('14', 'Jugador 14', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('15', 'Jugador 15', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('16', 'Jugador 16', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('17', 'Jugador 17', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('18', 'Jugador 18', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('19', 'Jugador 19', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('20', 'Jugador 20', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('21', 'Jugador 21', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('22', 'Jugador 22', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('23', 'Jugador 23', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('24', 'Jugador 24', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('25', 'Jugador 25', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('26', 'Jugador 26', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('27', 'Jugador 27', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('28', 'Jugador 28', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('29', 'Jugador 29', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),
  createData('30', 'Jugador 30', 'Arquero', 'Disponible', [
    {
      // Detalles de la tablas
      gol: '1',
      amarillo: ' 1',
      rojo: ' 1',
    },
    {
      gol: '0',
      amarillo: '1',
      rojo: '7',
    },
  ]),

];

export default function CollapsibleTable() {
  return (
    <Grid>

    <h2 style={{ textAlign: 'center' }}>Jugadores del equipo 7</h2>
          <Grid style={{ display: "flex", justifyContent: "center" }}>
            <img src={logo1} alt="" style={{ width: "40%" }}/>
          </Grid>
    
    <Grid className="grisCuadro">
        {/* Ingresa aqui el nombre de los equipos */}

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
            <TableCell />
              <TableCell>Numero</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Posicion</TableCell>
              <TableCell>Estado</TableCell>
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