import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import EquipoSuperSenior1  from '../Equipos/equipo1.jsx';
import EquipoSuperSenior2  from '../Equipos/equipo2.jsx';
import EquipoSuperSenior3  from '../Equipos/equipo3.jsx';
import EquipoSuperSenior4  from '../Equipos/equipo4.jsx';
import EquipoSuperSenior5  from '../Equipos/equipo5.jsx';
import EquipoSuperSenior6  from '../Equipos/equipo6.jsx';
import EquipoSuperSenior7  from '../Equipos/equipo7.jsx';
import EquipoSuperSenior8  from '../Equipos/equipo8.jsx';


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
            <Tab label="Fecha 1" value="1" />
            <Tab label="Fecha 2" value="2" />
            <Tab label="Fecha 3" value="3" />
            <Tab label="Fecha 4" value="4" />
            <Tab label="Fecha 5" value="5" />
            <Tab label="Fecha 6" value="6" />
            <Tab label="Fecha 7" value="7" />
            <Tab label="Fecha 8" value="8" />
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
      </TabContext>
    </Box>
  );
}
