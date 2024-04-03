import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//Copa Oro
import PlataSenior1                                                from '../CopaPlata/fecha1.jsx';
import PlataSenior2                                                from '../CopaPlata/fecha2.jsx';
import PlataSenior3                                                from '../CopaPlata/fecha3.jsx';
import EstadisticasPlata                                           from '../Paginas/estadisticasPlata.jsx';
import ResultadosPlata                                             from '../Paginas/resultadosPlata';



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
            <Tab label="Fecha 1"             value="1" />
            <Tab label="Fecha 2"             value="2" disabled/>
            <Tab label="Fecha 3"             value="3" disabled/>
            <Tab label="Estadisticas"        value="4" />
            <Tab label="Resultados"          value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">   <PlataSenior1       /></TabPanel>
        <TabPanel value="2">   <PlataSenior2       /></TabPanel>
        <TabPanel value="3">   <PlataSenior3       /></TabPanel>
        <TabPanel value="4">   <EstadisticasPlata  /></TabPanel>
        <TabPanel value="5">   <ResultadosPlata    /></TabPanel>
      </TabContext>
    </Box>
  );
}
