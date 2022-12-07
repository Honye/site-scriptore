import { useEffect, useState } from 'react';
import { Box, Paper } from '@mui/material';
import BottomNavigation from '../components/BottomNavigation';

const Updates = () => {
  const [installed, setInstalled] = useState('');

  const invoke = (code, data) => {
    console.log(`[Web] invoke "${code}"`);
    window.dispatchEvent(
      new CustomEvent(
        'JBridge',
        { detail: { code, data } }
      )
    );
  };
  
  useEffect(() => {
    console.log('[Web] Updates page mounted');
    invoke('getInstalled');
    const controller = new AbortController();
    const listener = (event) => {
      setInstalled(event.detail);
    };
    window.addEventListener(
      'postInstalled',
      listener,
      { signal: controller.signal }
    );
    return () => controller.abort();
  }, []);

  return (
    <Box sx={{ pb: 7 }}>
      <p>{JSON.stringify(installed) || 'none'}</p>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={1} />
      </Paper>
    </Box>
  );
};

export default Updates;
