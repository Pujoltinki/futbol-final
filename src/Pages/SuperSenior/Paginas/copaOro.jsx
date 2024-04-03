import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//Copa Oro
import OroSenior1                                                     from '../CopaOro/fecha1.jsx';
import OroSenior2                                                     from '../CopaOro/fecha2.jsx';
import OroSenior3                                                     from '../CopaOro/fecha3.jsx';
import EstadisticasOro                                                from '../Paginas/estadisticasOro.jsx';
import ResultadosOro                                                  from '../Paginas/resultadosOro.jsx';



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
        <TabPanel value="1">   <OroSenior1       /></TabPanel>
        <TabPanel value="2">   <OroSenior2       /></TabPanel>
        <TabPanel value="3">   <OroSenior3       /></TabPanel>
        <TabPanel value="4">   <EstadisticasOro  /></TabPanel>
        <TabPanel value="5">   <ResultadosOro    /></TabPanel>
      </TabContext>
    </Box>
  );
}
