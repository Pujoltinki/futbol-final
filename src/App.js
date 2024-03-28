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
import ButtonGroup                                                    from '@mui/material/ButtonGroup';
//Paginas
import "./styles.css";
import logo1                                                          from './imagenes/logo.png';
//Senior
//Paginas
import EquipoSenior                                              from './Pages/Senior/Paginas/equipos.jsx'
import FechaSenior                                               from './Pages/Senior/Paginas/partidos.jsx'
import ResultadosSenior                                          from './Pages/Senior/Paginas/resultados.jsx'
import OroSenior                                                 from './Pages/Senior/Paginas/copaOro.jsx'
import PlataSenior                                               from './Pages/Senior/Paginas/copaPlata.jsx'
import EstadisticasSenior                                        from './Pages/Senior/Paginas/estadisticas.jsx'
import GaleriaSenior                                             from './Pages/Senior/Paginas/galeria.jsx'

// SuperSenior
//Paginas
import Tabs1                                                          from './Pages/SuperSenior/Resultados/tab1.jsx'
import EquipoSuperSenior                                              from './Pages/SuperSenior/Paginas/equipos.jsx'
import FechaSuperSenior                                               from './Pages/SuperSenior/Paginas/partidos.jsx'
import ResultadosSuperSenior                                          from './Pages/SuperSenior/Paginas/resultados.jsx'
import OroSuperSenior                                                 from './Pages/SuperSenior/Paginas/copaOro.jsx'
import PlataSuperSenior                                               from './Pages/SuperSenior/Paginas/copaPlata.jsx'
import EstadisticasSuperSenior                                        from './Pages/SuperSenior/Paginas/estadisticas.jsx'
import GaleriaSuperSenior                                             from './Pages/SuperSenior/Paginas/galeria.jsx'


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
  
  return (
    <Router>
      <Grid> 
         {/* Zona roja botones de divisones */}
        <Grid className="Cabecera">
        <Button variant="contained" onClick={SeniorPrincipal} style={{ backgroundColor: 'yellow' , color: 'black'  }}>Senior</Button>
        <Button variant="contained" onClick={SuperSeniorPrincipal} style={{ backgroundColor: 'yellow' , color: 'black'  }}>Super Senior</Button>
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
              <Grid container justifyContent="center" >
              <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Link  component={RouterLink} to="/EquipoSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Equipos</Button></Link>
                <Link  component={RouterLink} to="/FechaSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Partidos</Button></Link>
                <Link  component={RouterLink} to="/ResultadosSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Resultados</Button></Link>
                <Link  component={RouterLink} to="/OroSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Copa Oro</Button></Link>
                <Link  component={RouterLink} to="/PlataSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Copa Plata</Button></Link>
                <Link  component={RouterLink} to="/EstadisticasSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Estadisticas</Button></Link>
                <Link  component={RouterLink} to="/GaleriaSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Galeria</Button></Link>
              </ButtonGroup>
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
                        <TableRow>
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
          <Grid hidden={!mostrarSuperSenior}>
            <Grid className="SubCabecera">
              <Grid container justifyContent="center" className="posicionMenu">
              <ButtonGroup variant="contained" style={{ display: 'flex', overflowX: 'auto' }}>
                <Link  component={RouterLink} to="/EquipoSuperSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white' , borderRightColor: 'black'  }}>Equipos</Button></Link>
                <Link  component={RouterLink} to="/FechaSuperSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white'  , borderRightColor: 'black'}}>Partidos</Button></Link>
                <Link  component={RouterLink} to="/ResultadosSuperSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white' , borderRightColor: 'black' }}>Resultados</Button></Link>
                <Link  component={RouterLink} to="/OroSuperSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Copa Oro</Button></Link>
                <Link  component={RouterLink} to="/PlataSuperSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white' , borderRightColor: 'black' }}>Copa Plata</Button></Link>
                <Link  component={RouterLink} to="/EstadisticasSuperSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Estadisticas</Button></Link>
                <Link  component={RouterLink} to="/GaleriaSuperSenior"><Button variant="contained" onClick={pagina} style={{ backgroundColor: 'green' , color: 'white', borderRightColor: 'black'  }}>Galeria</Button></Link>
                
              </ButtonGroup>
              {/* <ListaMenuSuperSenior equipos={datosSuperSenior}/> */}
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
                        <TableRow >
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
        {/* Senior */}
        
        <Route path="/EquipoSenior"       element={<EquipoSenior />} />
        <Route path="/FechaSenior"        element={<FechaSenior />} />
        <Route path="/ResultadosSenior"   element={<ResultadosSenior />} />
        <Route path="/OroSenior"          element={<OroSenior />} />
        <Route path="/PlataSenior"        element={<PlataSenior />} />
        <Route path="/EstadisticasSenior" element={<EstadisticasSenior />} />
        <Route path="/GaleriaSenior"      element={<GaleriaSenior />} />

        <Route path="/Tabs1" element={<Tabs1 />} />

        {/* Super Senior */}

        <Route path="/EquipoSuperSenior"       element={<EquipoSuperSenior />} />
        <Route path="/FechaSuperSenior"        element={<FechaSuperSenior />} />
        <Route path="/ResultadosSuperSenior"   element={<ResultadosSuperSenior />} />
        <Route path="/OroSuperSenior"          element={<OroSuperSenior />} />
        <Route path="/PlataSuperSenior"        element={<PlataSuperSenior />} />
        <Route path="/EstadisticasSuperSenior" element={<EstadisticasSuperSenior />} />
        <Route path="/GaleriaSuperSenior"      element={<GaleriaSuperSenior />} />

      </Routes>
      )}
    </Router>
  );
}
