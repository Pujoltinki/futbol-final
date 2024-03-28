import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ImagenesSuperSenior         from '../Galeria/imagenes.jsx'

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"  variant="scrollable" scrollButtons="auto">
            <Tab label="Imagenes"  value="1" />
          </TabList>
        </Box>
        <TabPanel value="1">   <ImagenesSuperSenior  /></TabPanel>
      </TabContext>
    </Box>
  );
}
