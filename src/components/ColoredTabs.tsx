import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabPanel } from '@mui/lab';
import { Typography } from '@mui/material';
import TreeDisplay from './TreeDisplay';
import { GridDisplay } from './GridDisplay';

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

export default function ColorTabs() {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


  return (
    <Box>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="grid" label="2-Level Grid" />
        <Tab value="tree" label="Navigation Tree" />
      </Tabs>
    </Box>
    <TabPanel value={value} index="grid">
        <Box className='sectionGrid'>
            <GridDisplay/>
        </Box>
    </TabPanel>
    <TabPanel value={value} index="tree">
        <Box className="sectionTree">
            <TreeDisplay />             
        </Box>
    </TabPanel>
    </Box>
  );
}