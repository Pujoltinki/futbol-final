import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//Copa Oro
import OroSuperSenior1                                                from '../CopaOro/fecha1.jsx';
import OroSuperSenior2                                                from '../CopaOro/fecha2.jsx';
import OroSuperSenior3                                                from '../CopaOro/semiFinal.jsx';
import OroSuperSenior4                                                from '../CopaOro/final.jsx';


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
        <TabPanel value="1">   <OroSuperSenior1  /></TabPanel>
        <TabPanel value="2">   <OroSuperSenior2  /></TabPanel>
        <TabPanel value="3">   <OroSuperSenior3  /></TabPanel>
        <TabPanel value="4">   <OroSuperSenior4  /></TabPanel>
      </TabContext>
    </Box>
  );
}
