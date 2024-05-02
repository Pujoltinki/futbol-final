//Extensiones
import React, { useState}                                  from 'react';
import { saveAs } from 'file-saver';
import { HashRouter  as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import Link                                                           from '@mui/material/Link'; 
import { Grid, Button }                                               from "@mui/material";
import Table                                                          from '@mui/material/Table';
import TableBody                                                      from '@mui/material/TableBody';
import TableCell                                                      from '@mui/material/TableCell';
import TableContainer                                                 from '@mui/material/TableContainer';
import TableHead                                                      from '@mui/material/TableHead';
import TableRow                                                       from '@mui/material/TableRow';
import Paper                                                          from '@mui/material/Paper';
import ButtonGroup                                                    from '@mui/material/ButtonGroup';
//Paginas
import "./styles.css";
import logo1                                                          from './imagenes/logo.png';
//Senior
//Paginas diurno
import EquipoSeniorD                                                   from './Pages/Senior/Diurno/Paginas/equipos.jsx'
import FechaSeniorD                                                    from './Pages/Senior/Diurno/Paginas/partidos.jsx'
import ResultadosSeniorD                                               from './Pages/Senior/Diurno/Paginas/resultados.jsx'
import OroSeniorD                                                      from './Pages/Senior/Diurno/Paginas/copaOro.jsx'
import PlataSeniorD                                                    from './Pages/Senior/Diurno/Paginas/copaPlata.jsx'
import EstadisticasSeniorD                                             from './Pages/Senior/Diurno/Paginas/estadisticas.jsx'
import GaleriaSeniorD                                                  from './Pages/Senior/Diurno/Paginas/galeria.jsx'

//Paginas nocturno
import EquipoSeniorN                                                   from './Pages/Senior/Nocturno/Paginas/equipos.jsx'
import FechaSeniorN                                                    from './Pages/Senior/Nocturno/Paginas/partidos.jsx'
import ResultadosSeniorN                                               from './Pages/Senior/Nocturno/Paginas/resultados.jsx'
import OroSeniorN                                                      from './Pages/Senior/Nocturno/Paginas/copaOro.jsx'
import PlataSeniorN                                                    from './Pages/Senior/Nocturno/Paginas/copaPlata.jsx'
import EstadisticasSeniorN                                             from './Pages/Senior/Nocturno/Paginas/estadisticas.jsx'
import GaleriaSeniorN                                                  from './Pages/Senior/Nocturno/Paginas/galeria.jsx'

// Paginas Cuadrangular
import EquipoCuadrangular                                              from './Pages/Cuadrangular/Paginas/equipos.jsx'
import FechaCuadrangular                                               from './Pages/Cuadrangular/Paginas/partidos.jsx'
import ResultadosCuadrangular                                          from './Pages/Cuadrangular/Paginas/resultados.jsx'
import EstadisticasCuadrangular                                        from './Pages/Cuadrangular/Paginas/estadisticas.jsx'
import GaleriaCuadrangular                                             from './Pages/Cuadrangular/Paginas/galeria.jsx'

// SuperSenior
//Paginas
import EquipoSuperSeniorD                                              from './Pages/SuperSenior/Diurno/Paginas/equipos.jsx'
import FechaSuperSeniorD                                               from './Pages/SuperSenior/Diurno/Paginas/partidos.jsx'
import ResultadosSuperSeniorD                                          from './Pages/SuperSenior/Diurno/Paginas/resultados.jsx'
import OroSuperSeniorD                                                 from './Pages/SuperSenior/Diurno/Paginas/copaOro.jsx'
import PlataSuperSeniorD                                               from './Pages/SuperSenior/Diurno/Paginas/copaPlata.jsx'
import EstadisticasSuperSeniorD                                        from './Pages/SuperSenior/Diurno/Paginas/estadisticas.jsx'
import GaleriaSuperSeniorD                                             from './Pages/SuperSenior/Diurno/Paginas/galeria.jsx'

import EquipoSuperSeniorN                                              from './Pages/SuperSenior/Diurno/Paginas/equipos.jsx'
import FechaSuperSeniorN                                               from './Pages/SuperSenior/Diurno/Paginas/partidos.jsx'
import ResultadosSuperSeniorN                                          from './Pages/SuperSenior/Diurno/Paginas/resultados.jsx'
import OroSuperSeniorN                                                 from './Pages/SuperSenior/Diurno/Paginas/copaOro.jsx'
import PlataSuperSeniorN                                               from './Pages/SuperSenior/Diurno/Paginas/copaPlata.jsx'
import EstadisticasSuperSeniorN                                        from './Pages/SuperSenior/Diurno/Paginas/estadisticas.jsx'
import GaleriaSuperSeniorN                                             from './Pages/SuperSenior/Diurno/Paginas/galeria.jsx'


export default function App() {

  const [mostrarSeniorD, setMostrarSeniorD] = useState(false);
  const [mostrarSeniorN, setMostrarSeniorN] = useState(false);
  const [mostrarSuperSeniorD, setMostrarSuperSeniorD] = useState(false);
  const [mostrarSuperSeniorN, setMostrarSuperSeniorN] = useState(false);
  const [mostrarCuadrangular, setMostrarCuadrangular] = useState(false);
  const [mostrarInicio, setMostrarInicio] = useState(true);
  const [mostrarPaginas, setMostrarPaginas] = useState(false);
  const [mostrarTablaSeniorD, setMostrarTablaSeniorD] = useState(true);
  const [mostrarTablaSeniorN, setMostrarTablaSeniorN] = useState(true);
  const [mostrarTablaCuadrangular, setMostrarTablaCuadrangular] = useState(true);
  const [mostrarTablaSuperSeniorD, setMostrarTablaSuperSeniorD] = useState(true);
  const [mostrarTablaSuperSeniorN, setMostrarTablaSuperSeniorN] = useState(true);

  const handleDescargar = () => {
    const urlPDF = require('./reglamentos/reglamento.pdf'); // Ruta del PDF
    fetch(urlPDF)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, 'reglamento.pdf')); // Nombre del archivo descargado
  };


  const SeniorDiurno = () => {
    setMostrarSeniorD(true);
    setMostrarSeniorN(false);
    setMostrarCuadrangular(false);
    setMostrarInicio(false);
    setMostrarSuperSeniorD(false);
    setMostrarSuperSeniorN(false);
    setMostrarTablaSeniorD(true);
    setMostrarTablaSeniorN(false);
    setMostrarPaginas(false);
  };

  const SeniorNocturno = () => {
    setMostrarSeniorN(true);
    setMostrarSeniorD(false);
    setMostrarCuadrangular(false);
    setMostrarInicio(false);
    setMostrarSuperSeniorD(false);
    setMostrarSuperSeniorN(false);
    setMostrarTablaSeniorD(false);
    setMostrarTablaSeniorN(true);
    setMostrarPaginas(false);
  //   setMostrarTablaSeniorN(true);
  };

  const Cuadrangular = () => {
    setMostrarCuadrangular(true);
    setMostrarSeniorD(false);
    setMostrarSeniorN(false);
    setMostrarInicio(false);
    setMostrarSuperSeniorD(false);
    setMostrarSuperSeniorN(false);
    setMostrarTablaCuadrangular(true)
    setMostrarPaginas(false);
  };

  const SuperSeniorDiurno = () => {
    setMostrarSuperSeniorD(true);
    setMostrarSuperSeniorN(false);
    setMostrarCuadrangular(false);
    setMostrarSeniorD(false);
    setMostrarSeniorN(false);
    setMostrarInicio(false);
    setMostrarTablaSuperSeniorD(true)
    setMostrarPaginas(false)
  };

  const SuperSeniorNocturno = () => {
    setMostrarSuperSeniorN(true);
    setMostrarSuperSeniorD(false);
    setMostrarCuadrangular(false);
    setMostrarSeniorD(false);
    setMostrarSeniorN(false);
    setMostrarInicio(false);
    setMostrarTablaSuperSeniorN(true)
    setMostrarPaginas(false)
  };

  const pagina = () => {
    setMostrarPaginas(true)
    setMostrarTablaSeniorD(false)
    setMostrarTablaSeniorN(false)
    setMostrarTablaCuadrangular(false)
    setMostrarTablaSuperSeniorD(false)
    setMostrarTablaSuperSeniorN(false)
    
  };

  // Fecha de los partidos Senior
  
  function Fecha1(id, fechas, horas, equipo1, vs, equipo2) {
    return { id, fechas, horas, equipo1, vs, equipo2 };
  }
  // Cololar en ese orden Fecha, hora, equipo 1, vs, equipo 2
  const fechaSeniorDia = [
    Fecha1(1, '27/04/2024', "10:30", "Awkan"       , "vs" , "Danton"          ),
    Fecha1(2, '27/04/2024', "10:30", "Lobos"       , "vs" , "Mosacate"        ),
    Fecha1(3, '27/04/2024', "09:20", "J.Brasilia"  , "vs" , "Los Quesos"      ),
    Fecha1(4, '01/05/2024', "     ", "Makinones"   , "vs" , "Sanchez e hijos" ),
  ];

  function Fecha2(id, fechas, horas, equipo1, vs, equipo2) {
    return { id, fechas, horas, equipo1, vs, equipo2 };
  }
  // Cololar en ese orden Fecha, hora, equipo 1, vs, equipo 2
  const fechaSeniorNoche = [
    Fecha2(1, '12/12/12', "10:30", "Colo 2", "vs", "U de Chile"),
    Fecha2(2, '12/12/12', "10:30", "Colo 2", "vs", "U de Chile"),
    Fecha2(3, '12/12/12', "10:30", "Colo 2", "vs", "U de Chile"),
    Fecha2(4, '12/12/12', "10:30", "Colo 2", "vs", "U de Chile"),
  ];

  function Fecha3(id, fechas, horas, equipo1, vs, equipo2) {
    return { id, fechas, horas, equipo1, vs, equipo2 };
  }
  // Cololar en ese orden Fecha, hora, equipo 1, vs, equipo 2
  const fechaCuadrangular = [
    Fecha3(1, '12/12/12', "10:30", "Colo 3", "vs", "U de Chile"),
    Fecha3(2, '12/12/12', "10:30", "Colo 3", "vs", "U de Chile"),
    Fecha3(3, '12/12/12', "10:30", "Colo 3", "vs", "U de Chile"),
    Fecha3(4, '12/12/12', "10:30", "Colo 3", "vs", "U de Chile"),
  ];

  // Fecha de los partidos Super Senior
  function Fecha4(id, fechas, horas, equipo1, vs, equipo2) {
    return {id, fechas, horas, equipo1, vs, equipo2 };
  }
  
  // Cololar en ese orden Fecha, hora, equipo 1, vs, equipo 2
  const fechaSuperSeniorDia = [
    Fecha4(1,'27/04/2024', "08:10", "Real fenix"  , "vs", "Inba"       ),
    Fecha4(2,'27/04/2024', "08:10", "Aeronautica" , "vs", "Alianza"    ),
    Fecha4(3,'27/04/2024', "09:20", "Danton"      , "vs", "Drivers U." ),
    Fecha4(4,'27/04/2024', "09:20", "Feldman"     , "vs", "U.Catolica" ),
  ];

  function Fecha5(id, fechas, horas, equipo1, vs, equipo2) {
    return {id, fechas, horas, equipo1, vs, equipo2 };
  }
  
  // Cololar en ese orden Fecha, hora, equipo 1, vs, equipo 2
  const fechaSuperSeniorNoche = [
    Fecha5(1,'11/11/11', "11:11", "Real 5", "vs", "U catolica"),
    Fecha5(2,'11/11/11', "11:11", "Real 5", "vs", "U catolica"),
    Fecha5(3,'11/11/11', "11:11", "Real 5", "vs", "U catolica"),
    Fecha5(4,'11/11/11', "11:11", "Real 5", "vs", "U catolica"),
  ];

  return (
    <Router>
      <Grid> 
         {/* Zona roja botones de divisones */}
        <Grid className="Cabecera">
          <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
            <Grid><Button variant="contained" onClick={SuperSeniorDiurno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Super_Senior</Button></Grid>
            <Grid><Button variant="contained" onClick={SeniorDiurno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Senior</Button></Grid>
            <Grid><Button variant="contained" onClick={Cuadrangular} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Cuadrangular</Button></Grid>
          </ButtonGroup>
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
        <Grid> 

          <Grid hidden={!mostrarSeniorD}>
            <Grid className="SubCabecera">
            <Grid container justifyContent="center" >
                <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Grid><Button variant="contained" onClick={SeniorDiurno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Diurno</Button></Grid>
                <Grid><Button variant="contained" onClick={SeniorNocturno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Nocturno</Button></Grid>
                </ButtonGroup>
                </Grid>
              <Grid container justifyContent="center" >
              <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Link  component={RouterLink} to="/EquipoSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Equipos</Button></Link>
                <Link  component={RouterLink} to="/FechaSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Partidos</Button></Link>
                <Link  component={RouterLink} to="/ResultadosSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Resultados</Button></Link>
                {/* <Link  component={RouterLink} to="/OroSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Copa Oro</Button></Link>
                <Link  component={RouterLink} to="/PlataSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Copa Plata</Button></Link> */}
                <Link  component={RouterLink} to="/EstadisticasSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Estadisticas</Button></Link>
                <Link  component={RouterLink} to="/GaleriaSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Galeria</Button></Link>
                <Grid><Button onClick={handleDescargar} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Reglamento</Button></Grid>
              </ButtonGroup>
              </Grid>
                <Grid>
                  <div className="logoAndTitle">
                    <img className="logo" src={logo1} alt="Logotipo de su empresa" />
                  </div>
                </Grid>
            </Grid>
             {mostrarTablaSeniorD && ( 
              <Grid item xs={12} style={{textAlign: 'center'}}>
                <Grid className="grisCuadro">
                <h2>Proximos Partidos Senior Diurno</h2>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
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
                      {fechaSeniorDia.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.fechas}</TableCell>
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

          <Grid hidden={!mostrarSeniorN}>
            <Grid className="SubCabecera">
            <Grid container justifyContent="center" >
                <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
        <Grid><Button variant="contained" onClick={SeniorDiurno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Diurno</Button></Grid>
        <Grid><Button variant="contained" onClick={SeniorNocturno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Nocturno</Button></Grid>
        </ButtonGroup>
                </Grid>
              <Grid container justifyContent="center" >
              <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Link  component={RouterLink} to="/EquipoSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Equipos</Button></Link>
                <Link  component={RouterLink} to="/FechaSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Partidos</Button></Link>
                <Link  component={RouterLink} to="/ResultadosSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Resultados</Button></Link>
                {/* <Link  component={RouterLink} to="/OroSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Copa Oro</Button></Link>
                <Link  component={RouterLink} to="/PlataSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Copa Plata</Button></Link> */}
                <Link  component={RouterLink} to="/EstadisticasSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Estadisticas</Button></Link>
                <Link  component={RouterLink} to="/GaleriaSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Galeria</Button></Link>
                <Grid><Button onClick={handleDescargar} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Reglamento</Button></Grid>
              </ButtonGroup>
              </Grid>
                <Grid>
                  <div className="logoAndTitle">
                    <img className="logo" src={logo1} alt="Logotipo de su empresa" />
                  </div>
                </Grid>
            </Grid>
             {mostrarTablaSeniorN && ( 
              <Grid item xs={12} style={{textAlign: 'center'}}>
                <Grid className="grisCuadro">
                <h2>Proximos Partidos Senior Nocturno</h2>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
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
                      {fechaSeniorNoche.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.fechas}</TableCell>
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

          <Grid hidden={!mostrarCuadrangular}>
            <Grid className="SubCabecera">
              <Grid container justifyContent="center" >
              <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Link  component={RouterLink} to="/EquipoCuadrangular"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Equipos</Button></Link>
                <Link  component={RouterLink} to="/FechaCuadrangular"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Partidos</Button></Link>
                <Link  component={RouterLink} to="/ResultadosCuadrangular"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Resultados</Button></Link>
                <Link  component={RouterLink} to="/EstadisticasCuadrangular"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Estadisticas</Button></Link>
                <Link  component={RouterLink} to="/GaleriaCuadrangular"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Galeria</Button></Link>
                <Grid><Button onClick={handleDescargar} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Reglamento</Button></Grid>
              </ButtonGroup>
              </Grid>
                <Grid>
                  <div className="logoAndTitle">
                    <img className="logo" src={logo1} alt="Logotipo de su empresa" />
                  </div>
                </Grid>
            </Grid>
             {mostrarTablaCuadrangular && ( 
              <Grid item xs={12} style={{textAlign: 'center'}}>
                <Grid className="grisCuadro">
                <h2>Proximos Partidos Cuadrangular</h2>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
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
                      {fechaCuadrangular.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.fechas}</TableCell>
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

          <Grid hidden={!mostrarSuperSeniorD}>
            <Grid className="SubCabecera">
            <Grid container justifyContent="center" >
                <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Grid><Button variant="contained" onClick={SuperSeniorDiurno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Diurno</Button></Grid>
                <Grid><Button variant="contained" onClick={SuperSeniorNocturno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Nocturno</Button></Grid>
                </ButtonGroup>
                </Grid>
              <Grid container justifyContent="center" className="posicionMenu">
              <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Link  component={RouterLink} to="/EquipoSuperSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white' , borderRightColor: 'black'  }}>Equipos</Button></Link>
                <Link  component={RouterLink} to="/FechaSuperSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white'  , borderRightColor: 'black'}}>Partidos</Button></Link>
                <Link  component={RouterLink} to="/ResultadosSuperSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white' , borderRightColor: 'black' }}>Resultados</Button></Link>
                {/* <Link  component={RouterLink} to="/OroSuperSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Copa Oro</Button></Link>
                <Link  component={RouterLink} to="/PlataSuperSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white' , borderRightColor: 'black' }}>Copa Plata</Button></Link> */}
                <Link  component={RouterLink} to="/EstadisticasSuperSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Estadisticas</Button></Link>
                <Link  component={RouterLink} to="/GaleriaSuperSeniorD"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Galeria</Button></Link>
                <Grid><Button onClick={handleDescargar} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Reglamento</Button></Grid>
              </ButtonGroup>
              </Grid>
              <Grid>
                <div className="logoAndTitle">
                  <img className="logo" src={logo1} alt="Logotipo de su empresa" />
                </div>
              </Grid>
            </Grid>
            {mostrarTablaSuperSeniorD && ( 
              <Grid item xs={12} style={{textAlign: 'center'}}>
                <Grid className="grisCuadro">
                <h2>Proximos partidos Super Senior Diurno</h2>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Fechas</TableCell>
                        <TableCell >Hora</TableCell>
                        <TableCell >Equipo local</TableCell>
                        <TableCell ></TableCell>
                        <TableCell >Equipo visita</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                      {fechaSuperSeniorDia.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.fechas}</TableCell>
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

          <Grid hidden={!mostrarSuperSeniorN}>
            <Grid className="SubCabecera">
            <Grid container justifyContent="center" >
                <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Grid><Button variant="contained" onClick={SuperSeniorDiurno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Diurno</Button></Grid>
                <Grid><Button variant="contained" onClick={SuperSeniorNocturno} style={{ backgroundColor: 'yellow' , color: 'black', borderRightColor: 'black'  }}>Nocturno</Button></Grid>
                </ButtonGroup>
                </Grid>
              <Grid container justifyContent="center" className="posicionMenu">
              <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Link  component={RouterLink} to="/EquipoSuperSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white' , borderRightColor: 'black'  }}>Equipos</Button></Link>
                <Link  component={RouterLink} to="/FechaSuperSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white'  , borderRightColor: 'black'}}>Partidos</Button></Link>
                <Link  component={RouterLink} to="/ResultadosSuperSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white' , borderRightColor: 'black' }}>Resultados</Button></Link>
                {/* <Link  component={RouterLink} to="/OroSuperSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Copa Oro</Button></Link>
                <Link  component={RouterLink} to="/PlataSuperSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white' , borderRightColor: 'black' }}>Copa Plata</Button></Link> */}
                <Link  component={RouterLink} to="/EstadisticasSuperSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Estadisticas</Button></Link>
                <Link  component={RouterLink} to="/GaleriaSuperSeniorN"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Galeria</Button></Link>
                <Grid><Button onClick={handleDescargar} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Reglamento</Button></Grid>
              </ButtonGroup>
              </Grid>
              <Grid>
                <div className="logoAndTitle">
                  <img className="logo" src={logo1} alt="Logotipo de su empresa" />
                </div>
              </Grid>
            </Grid>
            {mostrarTablaSuperSeniorN && ( 
              <Grid item xs={12} style={{textAlign: 'center'}}>
                <Grid className="grisCuadro">
                <h2>Proximos partidos Super Senior Nocturno</h2>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Fechas</TableCell>
                        <TableCell >Hora</TableCell>
                        <TableCell >Equipo local</TableCell>
                        <TableCell ></TableCell>
                        <TableCell >Equipo visita</TableCell>
                      </TableRow>
                    </TableHead>
                      <TableBody>
                      {fechaSuperSeniorNoche.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.fechas}</TableCell>
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
        {/* Senior diurno */}
        
        <Route path="/EquipoSeniorD"       element={<EquipoSeniorD />} />
        <Route path="/FechaSeniorD"        element={<FechaSeniorD />} />
        <Route path="/ResultadosSeniorD"   element={<ResultadosSeniorD />} />
        <Route path="/OroSeniorD"          element={<OroSeniorD />} />
        <Route path="/PlataSeniorD"        element={<PlataSeniorD />} />
        <Route path="/EstadisticasSeniorD" element={<EstadisticasSeniorD />} />
        <Route path="/GaleriaSeniorD"      element={<GaleriaSeniorD />} />

        {/* Senior nocturno */}
        <Route path="/EquipoSeniorN"       element={<EquipoSeniorN />} />
        <Route path="/FechaSeniorN"        element={<FechaSeniorN />} />
        <Route path="/ResultadosSeniorN"   element={<ResultadosSeniorN />} />
        <Route path="/OroSeniorN"          element={<OroSeniorN />} />
        <Route path="/PlataSeniorN"        element={<PlataSeniorN />} />
        <Route path="/EstadisticasSeniorN" element={<EstadisticasSeniorN />} />
        <Route path="/GaleriaSeniorN"      element={<GaleriaSeniorN />} />

        {/* Cuadrangular */}
        <Route path="/EquipoCuadrangular"       element={<EquipoCuadrangular />} />
        <Route path="/FechaCuadrangular"        element={<FechaCuadrangular />} />
        <Route path="/ResultadosCuadrangular"   element={<ResultadosCuadrangular />} />
        <Route path="/EstadisticasCuadrangular" element={<EstadisticasCuadrangular />} />
        <Route path="/GaleriaCuadrangular"      element={<GaleriaCuadrangular />} />

        {/* Super Senior diurno */}

        <Route path="/EquipoSuperSeniorD"       element={<EquipoSuperSeniorD />} />
        <Route path="/FechaSuperSeniorD"        element={<FechaSuperSeniorD />} />
        <Route path="/ResultadosSuperSeniorD"   element={<ResultadosSuperSeniorD />} />
        <Route path="/OroSuperSeniorD"          element={<OroSuperSeniorD />} />
        <Route path="/PlataSuperSeniorD"        element={<PlataSuperSeniorD />} />
        <Route path="/EstadisticasSuperSeniorD" element={<EstadisticasSuperSeniorD />} />
        <Route path="/GaleriaSuperSeniorD"      element={<GaleriaSuperSeniorD />} />

        {/* Super Senior nocturno */}

        <Route path="/EquipoSuperSeniorN"       element={<EquipoSuperSeniorN />} />
        <Route path="/FechaSuperSeniorN"        element={<FechaSuperSeniorN />} />
        <Route path="/ResultadosSuperSeniorN"   element={<ResultadosSuperSeniorN />} />
        <Route path="/OroSuperSeniorN"          element={<OroSuperSeniorN />} />
        <Route path="/PlataSuperSeniorN"        element={<PlataSuperSeniorN />} />
        <Route path="/EstadisticasSuperSeniorN" element={<EstadisticasSuperSeniorN />} />
        <Route path="/GaleriaSuperSeniorN"      element={<GaleriaSuperSeniorN />} />


      </Routes>
      )}
    </Router>
  );
}
