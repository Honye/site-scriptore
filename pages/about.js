import Head from 'next/head';
import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Paper
} from '@mui/material';
import BottomNavigation from '../components/BottomNavigation';

const About = () => {
  return (
    <Box
      sx={{
        pb: theme => `calc(${theme.spacing(7)} + env(safe-area-inset-bottom))`,
        pt: 'env(safe-area-inset-top)'
      }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, viewport-fit=cover' />
        <title>Scriptore - Scriptable store</title>
      </Head>
      <Container maxWidth='sm'>
        <AvatarGroup max={6}>
          <Avatar sx={{ width: '66px', height: '66px' }} alt='Jun' src='https://w.wallhaven.cc/full/jx/wallhaven-jx811m.png' />
          <Avatar sx={{ width: '66px', height: '66px' }} alt='Jackie' src='https://w.wallhaven.cc/full/9d/wallhaven-9d6wg8.jpg' />
        </AvatarGroup>
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
          <BottomNavigation value={2} />
        </Box>
      </Paper>
    </Box>
  );
};

export default About;
