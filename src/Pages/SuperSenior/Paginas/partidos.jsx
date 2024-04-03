import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import FechaSuperSenior1  from '../Partidos/fecha1.jsx';
import FechaSuperSenior2  from '../Partidos/fecha2.jsx';
import FechaSuperSenior3  from '../Partidos/fecha3.jsx';
import FechaSuperSenior4  from '../Partidos/fecha4.jsx';
import FechaSuperSenior5  from '../Partidos/fecha5.jsx';
import FechaSuperSenior6  from '../Partidos/fecha6.jsx';
import FechaSuperSenior7  from '../Partidos/fecha7.jsx';
import FechaSuperSenior8  from '../Partidos/fecha8.jsx';
import FechaSuperSenior9  from '../Partidos/fecha9.jsx';
import FechaSuperSenior10 from '../Partidos/fecha10.jsx';
import FechaSuperSenior11 from '../Partidos/fecha11.jsx';
import FechaSuperSenior12 from '../Partidos/fecha12.jsx';
import FechaSuperSenior13 from '../Partidos/fecha13.jsx';
import FechaSuperSenior14 from '../Partidos/fecha14.jsx';


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
            <Tab label="Fecha 1"  value="1" />
            <Tab label="Fecha 2"  value="2" />
            <Tab label="Fecha 3"  value="3"  disabled/>
            <Tab label="Fecha 4"  value="4"  disabled/>
            <Tab label="Fecha 5"  value="5"  disabled/>
            <Tab label="Fecha 6"  value="6"  disabled/>
            <Tab label="Fecha 7"  value="7"  disabled/>
            <Tab label="Fecha 8"  value="8"  disabled/>
            <Tab label="Fecha 9"  value="9"  disabled/>
            <Tab label="Fecha 10" value="10" disabled/>
            <Tab label="Fecha 11" value="11" disabled/>
            <Tab label="Fecha 12" value="12" disabled/>
            <Tab label="Fecha 13" value="13" disabled/>
            <Tab label="Fecha 14" value="14" disabled/>
          </TabList>
        </Box>
        <TabPanel value="1">   <FechaSuperSenior1  /></TabPanel>
        <TabPanel value="2">   <FechaSuperSenior2  /></TabPanel>
        <TabPanel value="3">   <FechaSuperSenior3  /></TabPanel>
        <TabPanel value="4">   <FechaSuperSenior4  /></TabPanel>
        <TabPanel value="5">   <FechaSuperSenior5  /></TabPanel>
        <TabPanel value="6">   <FechaSuperSenior6  /></TabPanel>
        <TabPanel value="7">   <FechaSuperSenior7  /></TabPanel>
        <TabPanel value="8">   <FechaSuperSenior8  /></TabPanel>
        <TabPanel value="9">   <FechaSuperSenior9  /></TabPanel>
        <TabPanel value="10">  <FechaSuperSenior10 /></TabPanel>
        <TabPanel value="11">  <FechaSuperSenior11 /></TabPanel>
        <TabPanel value="12">  <FechaSuperSenior12 /></TabPanel>
        <TabPanel value="13">  <FechaSuperSenior13 /></TabPanel>
        <TabPanel value="14">  <FechaSuperSenior14 /></TabPanel>
      </TabContext>
    </Box>
  );
}
