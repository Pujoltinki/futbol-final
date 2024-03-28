import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import EquipoSuperSenior1  from '../Partidos1/fecha1.jsx';
import EquipoSuperSenior2  from '../Partidos1/fecha2.jsx';
import EquipoSuperSenior3  from '../Partidos1/fecha3.jsx';
import EquipoSuperSenior4  from '../Partidos1/fecha4.jsx';
import EquipoSuperSenior5  from '../Partidos1/fecha5.jsx';
import EquipoSuperSenior6  from '../Partidos1/fecha6.jsx';
import EquipoSuperSenior7  from '../Partidos1/fecha7.jsx';
import EquipoSuperSenior8  from '../Partidos2/fecha8.jsx';
import EquipoSuperSenior9  from '../Partidos2/fecha9.jsx';
import EquipoSuperSenior10 from '../Partidos2/fecha10.jsx';
import EquipoSuperSenior11 from '../Partidos2/fecha11.jsx';
import EquipoSuperSenior12 from '../Partidos2/fecha12.jsx';
import EquipoSuperSenior13 from '../Partidos2/fecha13.jsx';
import EquipoSuperSenior14 from '../Partidos2/fecha14.jsx';


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
        <TabPanel value="1">   <EquipoSuperSenior1  /></TabPanel>
        <TabPanel value="2">   <EquipoSuperSenior2  /></TabPanel>
        <TabPanel value="3">   <EquipoSuperSenior3  /></TabPanel>
        <TabPanel value="4">   <EquipoSuperSenior4  /></TabPanel>
        <TabPanel value="5">   <EquipoSuperSenior5  /></TabPanel>
        <TabPanel value="6">   <EquipoSuperSenior6  /></TabPanel>
        <TabPanel value="7">   <EquipoSuperSenior7  /></TabPanel>
        <TabPanel value="8">   <EquipoSuperSenior8  /></TabPanel>
        <TabPanel value="9">   <EquipoSuperSenior9  /></TabPanel>
        <TabPanel value="10">  <EquipoSuperSenior10 /></TabPanel>
        <TabPanel value="11">  <EquipoSuperSenior11 /></TabPanel>
        <TabPanel value="12">  <EquipoSuperSenior12 /></TabPanel>
        <TabPanel value="13">  <EquipoSuperSenior13 /></TabPanel>
        <TabPanel value="14">  <EquipoSuperSenior14 /></TabPanel>
      </TabContext>
    </Box>
  );
}
