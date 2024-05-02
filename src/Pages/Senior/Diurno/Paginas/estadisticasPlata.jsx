import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//Estadisticas
import PosicionesSenior                                          from '../EstadisticasPlata/posiciones.jsx'
import GoleadoresSenior                                          from '../EstadisticasPlata/goleadores.jsx'
import JuegoLimpioSenior                                         from '../EstadisticasPlata/juegoLimpio.jsx'
import JugadoresExpulsadosSenior                                 from '../EstadisticasPlata/jugadorExpulsado.jsx'
import VallaSenior                                               from '../EstadisticasPlata/vallaMenosBatida.jsx'


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable" scrollButtons allowScrollButtonsMobile>
            <Tab label="Tabla de posiciones"  value="1" />
            <Tab label="Goleadores"           value="2" />
            <Tab label="Juego limpio"         value="3" />
            <Tab label="Jugadores expulsados" value="4" />
            <Tab label="Valla menos batida"   value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">   <PosicionesSenior          /></TabPanel>
        <TabPanel value="2">   <GoleadoresSenior          /></TabPanel>
        <TabPanel value="3">   <JuegoLimpioSenior         /></TabPanel>
        <TabPanel value="4">   <JugadoresExpulsadosSenior /></TabPanel>
        <TabPanel value="5">   <VallaSenior               /></TabPanel>
      </TabContext>
    </Box>
  );
}
