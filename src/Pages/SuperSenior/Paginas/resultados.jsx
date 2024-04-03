import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ResultadosSenior1  from '../Resultados/resultado1';
import ResultadosSenior2  from '../Resultados/resultado2';
import ResultadosSenior3  from '../Resultados/resultado3';
import ResultadosSenior4  from '../Resultados/resultado4';
import ResultadosSenior5  from '../Resultados/resultado5';
import ResultadosSenior6  from '../Resultados/resultado6';
import ResultadosSenior7  from '../Resultados/resultado7';
import ResultadosSenior8  from '../Resultados/resultado8';
import ResultadosSenior9  from '../Resultados/resultado9';
import ResultadosSenior10 from '../Resultados/resultado10';
import ResultadosSenior11 from '../Resultados/resultado11';
import ResultadosSenior12 from '../Resultados/resultado12';
import ResultadosSenior13 from '../Resultados/resultado13';
import ResultadosSenior14 from '../Resultados/resultado14';


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
            <Tab label="Fecha 1"    value="1" />
            <Tab label="Fecha 2"    value="2" />
            <Tab label="Fecha 3"    value="3" />
            <Tab label="Fecha 4"    value="4" />
            <Tab label="Fecha 5"    value="5" />
            <Tab label="Fecha 6"    value="6" />
            <Tab label="Fecha 7"    value="7" />
            <Tab label="Fecha 8"    value="8" />
            <Tab label="Fecha 9"    value="9" />
            <Tab label="Fecha 10"   value="10"/>
            <Tab label="Fecha 11"   value="11"/>
            <Tab label="Fecha 12"   value="12"/>
            <Tab label="Fecha 13"   value="13"/>
            <Tab label="Fecha 14"   value="14"/>

          </TabList>
        </Box>
        <TabPanel value="1">   <ResultadosSenior1  /></TabPanel>
        <TabPanel value="2">   <ResultadosSenior2  /></TabPanel>
        <TabPanel value="3">   <ResultadosSenior3  /></TabPanel>
        <TabPanel value="4">   <ResultadosSenior4  /></TabPanel>
        <TabPanel value="5">   <ResultadosSenior5  /></TabPanel>
        <TabPanel value="6">   <ResultadosSenior6  /></TabPanel>
        <TabPanel value="7">   <ResultadosSenior7  /></TabPanel>
        <TabPanel value="8">   <ResultadosSenior8  /></TabPanel>
        <TabPanel value="9">   <ResultadosSenior9  /></TabPanel>
        <TabPanel value="10">  <ResultadosSenior10 /></TabPanel>
        <TabPanel value="11">  <ResultadosSenior11 /></TabPanel>
        <TabPanel value="12">  <ResultadosSenior12 /></TabPanel>
        <TabPanel value="13">  <ResultadosSenior13 /></TabPanel>
        <TabPanel value="14">  <ResultadosSenior14 /></TabPanel>
      </TabContext>
    </Box>
  );
}
