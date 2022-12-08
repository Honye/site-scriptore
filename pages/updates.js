import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Paper,
} from '@mui/material';
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
    <Box
      sx={{
        pb: theme => `calc(${theme.spacing(7)} + env(safe-area-inset-bottom))`,
        pt: 'env(safe-area-inset-top)'
      }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <title>Scriptore - Scriptable store</title>
      </Head>
      <Container sx={{ p: 2 }} maxWidth='sm'>
        <p>{JSON.stringify(installed) || 'none'}</p>
      </Container>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Box
          sx={{
            pb: 'env(safe-area-inset-bottom)',
            bgcolor: theme => theme.palette.background.paper
          }}
        >
          <BottomNavigation value={1} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Updates;
