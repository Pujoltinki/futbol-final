import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import FechaSuperSenior1  from '../Partidos1/fecha1.jsx';
import FechaSuperSenior2  from '../Partidos1/fecha2.jsx';
import FechaSuperSenior3  from '../Partidos1/fecha3.jsx';
import FechaSuperSenior4  from '../Partidos1/fecha4.jsx';
import FechaSuperSenior5  from '../Partidos1/fecha5.jsx';
import FechaSuperSenior6  from '../Partidos1/fecha6.jsx';
import FechaSuperSenior7  from '../Partidos1/fecha7.jsx';
import FechaSuperSenior8  from '../Partidos2/fecha8.jsx';
import FechaSuperSenior9  from '../Partidos2/fecha9.jsx';
import FechaSuperSenior10 from '../Partidos2/fecha10.jsx';
import FechaSuperSenior11 from '../Partidos2/fecha11.jsx';
import FechaSuperSenior12 from '../Partidos2/fecha12.jsx';
import FechaSuperSenior13 from '../Partidos2/fecha13.jsx';
import FechaSuperSenior14 from '../Partidos2/fecha14.jsx';


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
            <Tab label="Fecha 3"  value="3" />
            <Tab label="Fecha 4"  value="4" />
            <Tab label="Fecha 5"  value="5" />
            <Tab label="Fecha 6"  value="6" />
            <Tab label="Fecha 7"  value="7" />
            <Tab label="Fecha 8"  value="8" />
            <Tab label="Fecha 9"  value="9" />
            <Tab label="Fecha 10" value="10" />
            <Tab label="Fecha 11" value="11" />
            <Tab label="Fecha 12" value="12" />
            <Tab label="Fecha 13" value="13" />
            <Tab label="Fecha 14" value="14" />
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
