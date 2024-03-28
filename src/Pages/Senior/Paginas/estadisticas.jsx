import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//Estadisticas
import PosicionesSuperSenior                                          from '../Estadisticas/posiciones.jsx'
import GoleadoresSuperSenior                                          from '../Estadisticas/goleadores.jsx'
import JuegoLimpioSuperSenior                                         from '../Estadisticas/juegoLimpio.jsx'
import JugadoresExpulsadosSuperSenior                                 from '../Estadisticas/jugadorExpulsado.jsx'
import VallaSuperSenior                                               from '../Estadisticas/vallaMenosBatida.jsx'


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"  variant="scrollable" scrollButtons="auto">
            <Tab label="Tabla de posiciones"  value="1" />
            <Tab label="Goleadores"           value="2" />
            <Tab label="Juego limpio"         value="3" />
            <Tab label="Jugadores expulsados" value="4" />
            <Tab label="Valla menos batida"   value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">   <PosicionesSuperSenior          /></TabPanel>
        <TabPanel value="2">   <GoleadoresSuperSenior          /></TabPanel>
        <TabPanel value="3">   <JuegoLimpioSuperSenior         /></TabPanel>
        <TabPanel value="4">   <JugadoresExpulsadosSuperSenior /></TabPanel>
        <TabPanel value="5">   <VallaSuperSenior               /></TabPanel>
      </TabContext>
    </Box>
  );
}
