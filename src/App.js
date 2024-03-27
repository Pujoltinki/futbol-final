//Extensiones
import React, { useState, useEffect}                                  from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import Link                                                           from '@mui/material/Link'; 
import { Grid, Button }                                               from "@mui/material";
import Table                                                          from '@mui/material/Table';
import TableBody                                                      from '@mui/material/TableBody';
import TableCell                                                      from '@mui/material/TableCell';
import TableContainer                                                 from '@mui/material/TableContainer';
import TableHead                                                      from '@mui/material/TableHead';
import TableRow                                                       from '@mui/material/TableRow';
import Paper                                                          from '@mui/material/Paper';
//Paginas
import "./styles.css";
import logo1                                                          from './imagenes/logo.png';
//Senior
//Equipo
import EquipoSenior1                                                  from './Pages/Senior/Equipos/equipo1.jsx';
import EquipoSenior2                                                  from './Pages/Senior/Equipos/equipo2.jsx';
import EquipoSenior3                                                  from './Pages/Senior/Equipos/equipo3.jsx';
import EquipoSenior4                                                  from './Pages/Senior/Equipos/equipo4.jsx';
import EquipoSenior5                                                  from './Pages/Senior/Equipos/equipo5.jsx';
import EquipoSenior6                                                  from './Pages/Senior/Equipos/equipo6.jsx';
import EquipoSenior7                                                  from './Pages/Senior/Equipos/equipo7.jsx';
import EquipoSenior8                                                  from './Pages/Senior/Equipos/equipo8.jsx';
//Partidos
import FechaSenior1                                                   from './Pages/Senior/Partidos1/fecha1.jsx';
import FechaSenior2                                                   from './Pages/Senior/Partidos1/fecha2.jsx';
import FechaSenior3                                                   from './Pages/Senior/Partidos1/fecha3.jsx';
import FechaSenior4                                                   from './Pages/Senior/Partidos1/fecha4.jsx';
import FechaSenior5                                                   from './Pages/Senior/Partidos1/fecha5.jsx';
import FechaSenior6                                                   from './Pages/Senior/Partidos1/fecha6.jsx';
import FechaSenior7                                                   from './Pages/Senior/Partidos1/fecha7.jsx';
import FechaSenior8                                                   from './Pages/Senior/Partidos2/fecha8.jsx';
import FechaSenior9                                                   from './Pages/Senior/Partidos2/fecha9.jsx';
import FechaSenior10                                                  from './Pages/Senior/Partidos2/fecha10.jsx';
import FechaSenior11                                                  from './Pages/Senior/Partidos2/fecha11.jsx';
import FechaSenior12                                                  from './Pages/Senior/Partidos2/fecha12.jsx';
import FechaSenior13                                                  from './Pages/Senior/Partidos2/fecha13.jsx';
import FechaSenior14                                                  from './Pages/Senior/Partidos2/fecha14.jsx';
//Copa Plata
import PlataSenior1                                                   from './Pages/Senior/CopaPlata/fecha1.jsx';
import PlataSenior2                                                   from './Pages/Senior/CopaPlata/fecha2.jsx';
import PlataSenior3                                                   from './Pages/Senior/CopaPlata/semiFinal.jsx';
import PlataSenior4                                                   from './Pages/Senior/CopaPlata/final.jsx';
//Copa Oro
import OroSenior1                                                     from './Pages/Senior/CopaOro/fecha1.jsx';
import OroSenior2                                                     from './Pages/Senior/CopaOro/fecha2.jsx';
import OroSenior3                                                     from './Pages/Senior/CopaOro/semiFinal.jsx';
import OroSenior4                                                     from './Pages/Senior/CopaOro/final.jsx';
//Estadisticas
import PosicionesSenior                                               from './Pages/Senior/Estadisticas/posiciones.jsx'
import GoleadoresSenior                                               from './Pages/Senior/Estadisticas/goleadores.jsx'
import JuegoLimpioSenior                                              from './Pages/Senior/Estadisticas/juegoLimpio.jsx'
import JugadoresExpulsadosSenior                                      from './Pages/Senior/Estadisticas/jugadorExpulsado.jsx'
import VallaSenior                                                    from './Pages/Senior/Estadisticas/vallaMenosBatida.jsx'
//Galeria
import ImagenesSenior                                                 from './Pages/Senior/Galeria/imagenes.jsx'

// SuperSenior
//Equipo
import EquipoSuperSenior1                                             from './Pages/SuperSenior/Equipos/equipo1.jsx';
import EquipoSuperSenior2                                             from './Pages/SuperSenior/Equipos/equipo2.jsx';
import EquipoSuperSenior3                                             from './Pages/SuperSenior/Equipos/equipo3.jsx';
import EquipoSuperSenior4                                             from './Pages/SuperSenior/Equipos/equipo4.jsx';
import EquipoSuperSenior5                                             from './Pages/SuperSenior/Equipos/equipo5.jsx';
import EquipoSuperSenior6                                             from './Pages/SuperSenior/Equipos/equipo6.jsx';
import EquipoSuperSenior7                                             from './Pages/SuperSenior/Equipos/equipo7.jsx';
import EquipoSuperSenior8                                             from './Pages/SuperSenior/Equipos/equipo8.jsx';
//Partidos
import FechaSuperSenior1                                              from './Pages/SuperSenior/Partidos1/fecha1.jsx';
import FechaSuperSenior2                                              from './Pages/SuperSenior/Partidos1/fecha2.jsx';
import FechaSuperSenior3                                              from './Pages/SuperSenior/Partidos1/fecha3.jsx';
import FechaSuperSenior4                                              from './Pages/SuperSenior/Partidos1/fecha4.jsx';
import FechaSuperSenior5                                              from './Pages/SuperSenior/Partidos1/fecha5.jsx';
import FechaSuperSenior6                                              from './Pages/SuperSenior/Partidos1/fecha6.jsx';
import FechaSuperSenior7                                              from './Pages/SuperSenior/Partidos1/fecha7.jsx';
import FechaSuperSenior8                                              from './Pages/SuperSenior/Partidos2/fecha8.jsx';
import FechaSuperSenior9                                              from './Pages/SuperSenior/Partidos2/fecha9.jsx';
import FechaSuperSenior10                                             from './Pages/SuperSenior/Partidos2/fecha10.jsx';
import FechaSuperSenior11                                             from './Pages/SuperSenior/Partidos2/fecha11.jsx';
import FechaSuperSenior12                                             from './Pages/SuperSenior/Partidos2/fecha12.jsx';
import FechaSuperSenior13                                             from './Pages/SuperSenior/Partidos2/fecha13.jsx';
import FechaSuperSenior14                                             from './Pages/SuperSenior/Partidos2/fecha14.jsx';
//Copa Plata
import PlataSuperSenior1                                              from './Pages/SuperSenior/CopaPlata/fecha1.jsx';
import PlataSuperSenior2                                              from './Pages/SuperSenior/CopaPlata/fecha2.jsx';
import PlataSuperSenior3                                              from './Pages/SuperSenior/CopaPlata/semiFinal.jsx';
import PlataSuperSenior4                                              from './Pages/SuperSenior/CopaPlata/final.jsx';
//Copa Oro
import OroSuperSenior1                                                from './Pages/SuperSenior/CopaOro/fecha1.jsx';
import OroSuperSenior2                                                from './Pages/SuperSenior/CopaOro/fecha2.jsx';
import OroSuperSenior3                                                from './Pages/SuperSenior/CopaOro/semiFinal.jsx';
import OroSuperSenior4                                                from './Pages/SuperSenior/CopaOro/final.jsx';
//Estadisticas
import PosicionesSuperSenior                                          from './Pages/SuperSenior/Estadisticas/posiciones.jsx'
import GoleadoresSuperSenior                                          from './Pages/SuperSenior/Estadisticas/goleadores.jsx'
import JuegoLimpioSuperSenior                                         from './Pages/SuperSenior/Estadisticas/juegoLimpio.jsx'
import JugadoresExpulsadosSuperSenior                                 from './Pages/SuperSenior/Estadisticas/jugadorExpulsado.jsx'
import VallaSuperSenior                                               from './Pages/SuperSenior/Estadisticas/vallaMenosBatida.jsx'
//Resultados
import Tabs1                                                          from './Pages/SuperSenior/Resultados/tab1.jsx'

//Galeria
import ImagenesSuperSenior                                            from './Pages/SuperSenior/Galeria/imagenes.jsx'

export default function App() {

  const [mostrarSenior, setMostrarSenior] = useState(false);
  const [mostrarSuperSenior, setMostrarSuperSenior] = useState(false);
  const [mostrarInicio, setMostrarInicio] = useState(true);
  const [mostrarPaginas, setMostrarPaginas] = useState(false);
  const [mostrarTablaSenior, setMostrarTablaSenior] = useState(true);
  const [mostrarTablaSuperSenior, setMostrarTablaSuperSenior] = useState(false);


  const SeniorPrincipal = () => {
    setMostrarSenior(true);
    setMostrarSuperSenior(false);
    setMostrarInicio(false);
    setMostrarPaginas(false);
    setMostrarTablaSenior(true);
  };

  const SuperSeniorPrincipal = () => {
    setMostrarSuperSenior(true);
    setMostrarSenior(false);
    setMostrarInicio(false);
    setMostrarPaginas(false)
    setMostrarTablaSuperSenior(true)
  };

  const pagina = () => {
    setMostrarPaginas(true)
    setMostrarTablaSenior(false)
    setMostrarTablaSuperSenior(false)
  };

  const ListaMenuSenior = ({ equipos }) => {
    return (
      <div className="listaMenuContainer">
        <ul className="hList">
          {equipos.map((equipo, index) => (
            <li key={index}>
              <div className="menu" onClick={pagina}>
                <h2 className="menu-title">{equipo.nombre}</h2>
                <ul className="menu-dropdown">
                  {equipo.pagina.map((subequipo, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        component={RouterLink}
                        to={subequipo.url}
                        className="subequipo-link"
                      >
                        {subequipo.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ListaMenuSuperSenior = ({ equipos }) => {
    return (
      <div className="listaMenuContainer">
        <ul className="hList">
          {equipos.map((equipo, index) => (
            <li key={index}>
              <div className="menu" onClick={pagina}>
                <h2 className="menu-title">{equipo.nombre}</h2>
                <ul className="menu-dropdown">
                  {equipo.pagina.map((subequipo, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        component={RouterLink}
                        to={subequipo.url}
                        className="subequipo-link"
                      >
                        {subequipo.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
    
  const datosSenior = [
    {
      nombre: 'Equipos',
      pagina: [
        { nombre: 'Equipo 1', url: '/equipoSenior1' },
        { nombre: 'Equipo 2', url: '/equipoSenior2' },
        { nombre: 'Equipo 3', url: '/equipoSenior3' },
        { nombre: 'Equipo 4', url: '/equipoSenior4' },
        { nombre: 'Equipo 5', url: '/equipoSenior5' },
        { nombre: 'Equipo 6', url: '/equipoSenior6' },
        { nombre: 'Equipo 7', url: '/equipoSenior7' },
        { nombre: 'Equipo 8', url: '/equipoSenior8' },
      ],
    },
    {
      nombre: 'Partidos 1',
      pagina: [
        { nombre: 'Fecha 1', url: '/FechaSenior1' },
        { nombre: 'Fecha 2', url: '/FechaSenior2' },
        { nombre: 'Fecha 3', url: '/FechaSenior3' },
        { nombre: 'Fecha 4', url: '/FechaSenior4' },
        { nombre: 'Fecha 5', url: '/FechaSenior5' },
        { nombre: 'Fecha 6', url: '/FechaSenior6' },
        { nombre: 'Fecha 7', url: '/FechaSenior7' },
      ],
    },
    {
      nombre: 'Partidos 2',
      pagina: [
        { nombre: 'Fecha 8', url: '/FechaSenior8' },
        { nombre: 'Fecha 9', url: '/FechaSenior9' },
        { nombre: 'Fecha 10', url: '/FechaSenior10' },
        { nombre: 'Fecha 11', url: '/FechaSenior11' },
        { nombre: 'Fecha 12', url: '/FechaSenior12' },
        { nombre: 'Fecha 13', url: '/FechaSenior13' },
        { nombre: 'Fecha 14', url: '/FechaSenior14' },
      ],
    },
    // {
    //   nombre: 'Copa plata',
    //   pagina: [
    //     { nombre: 'Fecha 1', url: '/PlataSenior1' },
    //     { nombre: 'Fecha 2', url: '/PlataSenior2' },
    //     { nombre: 'Semi final', url: '/PlataSenior3' },
    //     { nombre: 'Final', url: '/PlataSenior4' },
    //   ],
    // },
    // {
    //   nombre: 'Copa oro',
    //   pagina: [
    //     { nombre: 'Fecha 1', url: '/OroSenior1' },
    //     { nombre: 'Fecha 2', url: '/OroSenior2' },
    //     { nombre: 'Semi final', url: '/OroSenior3' },
    //     { nombre: 'Final', url: '/OroSenior4' },
    //   ],
    // },
    {
      nombre: 'Estadisticas',
      pagina: [
        { nombre: 'Tabla de posiciones', url: '/PosicionesSenior' },
        { nombre: 'Goleadores', url: '/GoleadoresSenior' },
        { nombre: 'Juego limpio', url: '/JuegoLimpioSenior' },
        { nombre: 'Jugadores expulsados', url: '/JugadoresExpulsadosSenior' },
        { nombre: 'Valla menos batida', url: '/VallaSenior' }, 
      ],
    },
    {
      nombre: 'Galeria',
      pagina: [
        { nombre: 'Imagenes', url: '/ImagenesSenior' },
      ],
    },
  ];

  // Fecha de los partidos Senior
  function Fecha1(fechas, horas, equipo1, vs, equipo2) {
    return { fechas, horas, equipo1, vs, equipo2 };
  }
  // Cololar en ese orden Fecha, hora, equipo 1, vs, equipo 2
  const fechaSenior = [
    Fecha1('12/12/12', "10:30", "Colo Colo", "vs", "U de Chile"),
    Fecha1('12/12/12', "10:30", "Colo Colo", "vs", "U de Chile"),
    Fecha1('12/12/12', "10:30", "Colo Colo", "vs", "U de Chile"),
    Fecha1('12/12/12', "10:30", "Colo Colo", "vs", "U de Chile"),

  ];

  // Fecha de los partidos Super Senior
  function Fecha2(fechas, horas, equipo1, vs, equipo2) {
    return { fechas, horas, equipo1, vs, equipo2 };
  }
  
  // Cololar en ese orden Fecha, hora, equipo 1, vs, equipo 2
  const fechaSuperSenior = [
    Fecha2('11/11/11', "11:11", "Real madrid", "vs", "U catolica"),
    Fecha2('11/11/11', "11:11", "Real madrid", "vs", "U catolica"),
    Fecha2('11/11/11', "11:11", "Real madrid", "vs", "U catolica"),
    Fecha2('11/11/11', "11:11", "Real madrid", "vs", "U catolica"),
  ];
  
  const datosSuperSenior = [
    {
      nombre: 'Equipos',
      pagina: [
        { nombre: 'Equipo 1', url: '/equipoSuperSenior1' },
        { nombre: 'Equipo 2', url: '/equipoSuperSenior2' },
        { nombre: 'Equipo 3', url: '/equipoSuperSenior3' },
        { nombre: 'Equipo 4', url: '/equipoSuperSenior4' },
        { nombre: 'Equipo 5', url: '/equipoSuperSenior5' },
        { nombre: 'Equipo 6', url: '/equipoSuperSenior6' },
        { nombre: 'Equipo 7', url: '/equipoSuperSenior7' },
        { nombre: 'Equipo 8', url: '/equipoSuperSenior8' },
      ],
    },
    {
      nombre: 'Partidos 1',
      pagina: [
        { nombre: 'Fecha 1', url: '/FechaSenior1' },
        { nombre: 'Fecha 2', url: '/FechaSenior2' },
        { nombre: 'Fecha 3', url: '/FechaSenior3' },
        { nombre: 'Fecha 4', url: '/FechaSenior4' },
        { nombre: 'Fecha 5', url: '/FechaSenior5' },
        { nombre: 'Fecha 6', url: '/FechaSenior6' },
        { nombre: 'Fecha 7', url: '/FechaSenior7' },
      ],
    },
    {
      nombre: 'Partidos 2',
      pagina: [
        { nombre: 'Fecha 8', url: '/FechaSenior8' },
        { nombre: 'Fecha 9', url: '/FechaSenior9' },
        { nombre: 'Fecha 10', url: '/FechaSenior10' },
        { nombre: 'Fecha 11', url: '/FechaSenior11' },
        { nombre: 'Fecha 12', url: '/FechaSenior12' },
        { nombre: 'Fecha 13', url: '/FechaSenior13' },
        { nombre: 'Fecha 14', url: '/FechaSenior14' },
      ],
    },
    {
      nombre: 'Resultados',
      pagina: [
        { nombre: 'Ver resultados', url: '/Tabs1' },
      ],
    },
    // {
    //   nombre: 'Copa plata',
    //   pagina: [
    //     { nombre: 'Fecha 1', url: '/PlataSuperSenior1' },
    //     { nombre: 'Fecha 2', url: '/PlataSuperSenior2' },
    //     { nombre: 'Semi final', url: '/PlataSuperSenior3' },
    //     { nombre: 'Final', url: '/PlataSuperSenior4' },
    //   ],
    // },
    // {
    //   nombre: 'Copa oro',
    //   pagina: [
    //     { nombre: 'Fecha 1', url: '/OroSuperSenior1' },
    //     { nombre: 'Fecha 2', url: '/OroSuperSenior2' },
    //     { nombre: 'Semi final', url: '/OroSuperSenior3' },
    //     { nombre: 'Final', url: '/OroSuperSenior4' },
    //   ],
    // },
    {
      nombre: 'Estadisticas',
      pagina: [
        { nombre: 'Tabla de posiciones', url: '/PosicionesSuperSenior' },
        { nombre: 'Goleadores', url: '/GoleadoresSuperSenior' },
        { nombre: 'Juego limpio', url: '/JuegoLimpioSuperSenior' },
        { nombre: 'Jugadores expulsados', url: '/JugadoresExpulsadosSuperSenior' }, 
        { nombre: 'Valla menos batida', url: '/VallaSuperSenior' }, 
      ],
    },
    {
      nombre: 'Galeria',
      pagina: [
        { nombre: 'Imagenes', url: '/ImagenesSuperSenior' },
      ],
    },
  ];

  return (
    <Router>
      <Grid> 
         {/* Zona roja botones de divisones */}
        <Grid className="Cabecera">
        <Link to="" component={RouterLink}>
        <Button variant="contained" onClick={SeniorPrincipal} style={{ backgroundColor: 'yellow' , color: 'black'  }}>Senior</Button>
        {/* <Button variant="contained" onClick={handleMostrarSenior}>Mostrar Senior</Button> */}
                </Link>
          <Button variant="contained" onClick={SuperSeniorPrincipal} style={{ backgroundColor: 'yellow' , color: 'black'  }}>Super Senior</Button>
          {/* <Button variant="contained" onClick={handleMostrarSuperSenior}>Mostrar Super Senior</Button> */}
        </Grid>

      {/* Pagina de Inicio */}
      {mostrarInicio && (
        <Grid container >
          <Grid container justifyContent="center" className="SubCabecera" >
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <h1 style={{ display: 'block', color: 'white' }}>Bienvenidos</h1>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center', color: 'white'  }}>
              <h2 style={{ display: 'block' }}>Selecciona arriba qué división deseas ver.</h2>
            </Grid>
          </Grid>
            <Grid item xs={12} style={{textAlign: 'center'}}>
              <h1>Historia</h1>
              <Grid className="grisCuadro">
                <h4>"Lorem ipsum dolor sit amet, AAAAAAA consectetur adipiscing elit. Nullam vestibulum ex ac quam tempus, vitae placerat felis ultrices. Donec vehicula tristique justo, eget interdum felis aliquam at. Fusce commodo nunc sit amet magna consectetur, eget bibendum enim interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut auctor, nunc vel fermentum consequat, justo sapien aliquet odio, vel tempor felis libero in leo. Nulla facilisi. Maecenas bibendum odio et lectus rutrum, eget varius leo vehicula. In hac habitasse platea dictumst. Fusce nec ligula a nibh condimentum tristique eget sed tortor. Ut in arcu a ipsum laoreet fringilla. Mauris suscipit libero felis, in vehicula ipsum varius in. Quisque dapibus velit nec ex fringilla, eu aliquet libero volutpat."</h4>
              </Grid>          
              </Grid>
        </Grid>
        )} 
        {/* Datos de cabecera */}
        <Grid>      
          <Grid hidden={!mostrarSenior}>
            <Grid className="SubCabecera">
              <Grid container justifyContent="center" className="posicionMenu">
              <ListaMenuSenior equipos={datosSenior}/>
              </Grid>
                <Grid>
                  <div className="logoAndTitle">
                    <img className="logo" src={logo1} alt="Logotipo de su empresa" />
                  </div>
                </Grid>
            </Grid>
             {mostrarTablaSenior && ( 
              <Grid item xs={12} style={{textAlign: 'center'}}>
                <Grid className="grisCuadro">
                <h2>Proximos partidos Senior</h2>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Hora</TableCell>
                        <TableCell>Equipo local</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Equipo visita</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                      {fechaSenior.map((row) => (
                        <TableRow key={row.id1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">{row.fechas}</TableCell>
                          <TableCell>{row.horas}</TableCell>
                          <TableCell>{row.equipo1}</TableCell>
                          <TableCell>{row.vs}</TableCell>
                          <TableCell>{row.equipo2}</TableCell>
                        </TableRow>
                      ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>          
              </Grid>
                 )} 
          </Grid>
          <Grid hidden={!mostrarSuperSenior}>
            <Grid className="SubCabecera">
              <Grid container justifyContent="center" className="posicionMenu"> {/* Centra horizontalmente */}
              <ListaMenuSuperSenior equipos={datosSuperSenior}/>
              </Grid>
              <Grid>
                <div className="logoAndTitle">
                  <img className="logo" src={logo1} alt="Logotipo de su empresa" />
                </div>
              </Grid>
            </Grid>
            {mostrarTablaSuperSenior && ( 
              <Grid item xs={12} style={{textAlign: 'center'}}>
                <Grid className="grisCuadro">
                <h2>Proximos partidos Super Senior</h2>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Fechas</TableCell>
                        <TableCell >Hora</TableCell>
                        <TableCell >Equipo 1</TableCell>
                        <TableCell ></TableCell>
                        <TableCell >Equipo 2</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                      {fechaSuperSenior.map((row) => (
                        <TableRow key={row.id1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">{row.fechas}</TableCell>
                          <TableCell>{row.horas}</TableCell>
                          <TableCell>{row.equipo1}</TableCell>
                          <TableCell>{row.vs}</TableCell>
                          <TableCell>{row.equipo2}</TableCell>
                        </TableRow>
                      ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>          
              </Grid>
             )} 
          </Grid>

        </Grid>
      </Grid>
      {/* Resultados de cada pagina (Aqui se veran las paginas que se eligieron al hacerle clic)*/}
      {mostrarPaginas && (
      <Routes>
        {/* Senior */}
        <Route path="/equipoSenior1" element={<EquipoSenior1 />} />
        <Route path="/equipoSenior2" element={<EquipoSenior2 />} />
        <Route path="/equipoSenior3" element={<EquipoSenior3 />} />
        <Route path="/equipoSenior4" element={<EquipoSenior4 />} />
        <Route path="/equipoSenior5" element={<EquipoSenior5 />} />
        <Route path="/equipoSenior6" element={<EquipoSenior6 />} />
        <Route path="/equipoSenior7" element={<EquipoSenior7 />} />
        <Route path="/equipoSenior8" element={<EquipoSenior8 />} />
        
        <Route path="/FechaSenior1" element={<FechaSenior1 />} />
        <Route path="/FechaSenior2" element={<FechaSenior2 />} />
        <Route path="/FechaSenior3" element={<FechaSenior3 />} />
        <Route path="/FechaSenior4" element={<FechaSenior4 />} />
        <Route path="/FechaSenior5" element={<FechaSenior5 />} />
        <Route path="/FechaSenior6" element={<FechaSenior6 />} />
        <Route path="/FechaSenior7" element={<FechaSenior7 />} />
        <Route path="/FechaSenior8" element={<FechaSenior8 />} />
        <Route path="/FechaSenior9" element={<FechaSenior9 />} />
        <Route path="/FechaSenior10" element={<FechaSenior10 />} />
        <Route path="/FechaSenior11" element={<FechaSenior11 />} />
        <Route path="/FechaSenior12" element={<FechaSenior12 />} />
        <Route path="/FechaSenior13" element={<FechaSenior13 />} />
        <Route path="/FechaSenior14" element={<FechaSenior14 />} />

        <Route path="/PlataSenior1" element={<PlataSenior1 />} />
        <Route path="/PlataSenior2" element={<PlataSenior2 />} />
        <Route path="/PlataSenior3" element={<PlataSenior3 />} />
        <Route path="/PlataSenior4" element={<PlataSenior4 />} />

        <Route path="/OroSenior1" element={<OroSenior1 />} />
        <Route path="/OroSenior2" element={<OroSenior2 />} />
        <Route path="/OroSenior3" element={<OroSenior3 />} />
        <Route path="/OroSenior4" element={<OroSenior4 />} />

        <Route path="/PosicionesSenior" element={<PosicionesSenior />} />
        <Route path="/GoleadoresSenior" element={<GoleadoresSenior />} />
        <Route path="/JuegoLimpioSenior" element={<JuegoLimpioSenior />} />
        <Route path="/JugadoresExpulsadosSenior" element={<JugadoresExpulsadosSenior />} />
        <Route path="/VallaSenior" element={<VallaSenior />} />

        <Route path="/ImagenesSenior" element={<ImagenesSenior />} />
        

        {/* Super Senior */}
        <Route path="/equipoSuperSenior1" element={<EquipoSuperSenior1 />} />
        <Route path="/equipoSuperSenior2" element={<EquipoSuperSenior2 />} />
        <Route path="/equipoSuperSenior3" element={<EquipoSuperSenior3 />} />
        <Route path="/equipoSuperSenior4" element={<EquipoSuperSenior4 />} />
        <Route path="/equipoSuperSenior5" element={<EquipoSuperSenior5 />} />
        <Route path="/equipoSuperSenior6" element={<EquipoSuperSenior6 />} />
        <Route path="/equipoSuperSenior7" element={<EquipoSuperSenior7 />} />
        <Route path="/equipoSuperSenior8" element={<EquipoSuperSenior8 />} />
        
        <Route path="/FechaSuperSenior1" element={<FechaSuperSenior1 />} />
        <Route path="/FechaSuperSenior2" element={<FechaSuperSenior2 />} />
        <Route path="/FechaSuperSenior3" element={<FechaSuperSenior3 />} />
        <Route path="/FechaSuperSenior4" element={<FechaSuperSenior4 />} />
        <Route path="/FechaSuperSenior5" element={<FechaSuperSenior5 />} />
        <Route path="/FechaSuperSenior6" element={<FechaSuperSenior6 />} />
        <Route path="/FechaSuperSenior7" element={<FechaSuperSenior7 />} />
        <Route path="/FechaSuperSenior8" element={<FechaSuperSenior8 />} />
        <Route path="/FechaSuperSenior9" element={<FechaSuperSenior9 />} />
        <Route path="/FechaSuperSenior10" element={<FechaSuperSenior10 />} />
        <Route path="/FechaSuperSenior11" element={<FechaSuperSenior11 />} />
        <Route path="/FechaSuperSenior12" element={<FechaSuperSenior12 />} />
        <Route path="/FechaSuperSenior13" element={<FechaSuperSenior13 />} />
        <Route path="/FechaSuperSenior14" element={<FechaSuperSenior14 />} />

        <Route path="/PlataSuperSenior1" element={<PlataSuperSenior1 />} />
        <Route path="/PlataSuperSenior2" element={<PlataSuperSenior2 />} />
        <Route path="/PlataSuperSenior3" element={<PlataSuperSenior3 />} />
        <Route path="/PlataSuperSenior4" element={<PlataSuperSenior4 />} />

        <Route path="/OroSuperSenior1" element={<OroSuperSenior1 />} />
        <Route path="/OroSuperSenior2" element={<OroSuperSenior2 />} />
        <Route path="/OroSuperSenior3" element={<OroSuperSenior3 />} />
        <Route path="/OroSuperSenior4" element={<OroSuperSenior4 />} />

        <Route path="/PosicionesSuperSenior" element={<PosicionesSuperSenior />} />
        <Route path="/GoleadoresSuperSenior" element={<GoleadoresSuperSenior />} />
        <Route path="/JuegoLimpioSuperSenior" element={<JuegoLimpioSuperSenior />} />
        <Route path="/JugadoresExpulsadosSuperSenior" element={<JugadoresExpulsadosSuperSenior />} />
        <Route path="/VallaSuperSenior" element={<VallaSuperSenior />} />

        <Route path="/ImagenesSuperSenior" element={<ImagenesSuperSenior />} />
        
        <Route path="/Tabs1" element={<Tabs1 />} />

      </Routes>
      )}
    </Router>
  );
}
