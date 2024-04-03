import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import OroSenior1  from '../ResultadosOro/resultado1';
import OroSenior2  from '../ResultadosOro/resultado2';
import OroSenior3  from '../ResultadosOro/resultado3';


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
            <Tab label="Fecha 2"  value="2" disabled/>
            <Tab label="Fecha 3"  value="3" disabled/>

          </TabList>
        </Box>
        <TabPanel value="1">   <OroSenior1  /></TabPanel>
        <TabPanel value="2">   <OroSenior2  /></TabPanel>
        <TabPanel value="3">   <OroSenior3  /></TabPanel>

      </TabContext>
    </Box>
  );
}
