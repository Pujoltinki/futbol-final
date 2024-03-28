import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//Copa Oro
import PlataSuperSenior1                                                from '../CopaPlata/fecha1.jsx';
import PlataSuperSenior2                                                from '../CopaPlata/fecha2.jsx';
import PlataSuperSenior3                                                from '../CopaPlata/semiFinal.jsx';
import PlataSuperSenior4                                                from '../CopaPlata/final.jsx';


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
            <Tab label="Semi final"  value="3" />
            <Tab label="Final"  value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">   <PlataSuperSenior1  /></TabPanel>
        <TabPanel value="2">   <PlataSuperSenior2  /></TabPanel>
        <TabPanel value="3">   <PlataSuperSenior3  /></TabPanel>
        <TabPanel value="4">   <PlataSuperSenior4  /></TabPanel>
      </TabContext>
    </Box>
  );
}
