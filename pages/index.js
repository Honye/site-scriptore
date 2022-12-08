import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import MoreIcon from '@mui/icons-material/MoreVert';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Paper,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useScrollTrigger } from '@mui/material';
import SList from '../components/List';
import BottomNavigation from '../components/BottomNavigation';
import {
  red,
  purple,
  deepPurple,
  indigo,
  blue,
  cyan,
  teal,
  green,
  amber,
  brown,
  grey,
  blueGrey,
} from '@mui/material/colors';
import { modules, others, widgets } from '../data/scripts';

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction='down' in={!trigger}>{children}</Slide>
  );
};

export default function Home(props) {
  const { widgets, modules, others } = props;
  const [installedMap, setInstalledMap] = useState(null);

  const invoke = (code, data) => {
    console.log(`[Web] invoke "${code}"`);
    window.dispatchEvent(
      new CustomEvent(
        'JBridge',
        { detail: { code, data } }
      )
    );
  };

  const listener = (event) => {
    const { code, data } = event.detail
    console.log(`[Web] message from Scriptable. ${JSON.stringify({ code, data })}`)
  }

  useEffect(() => {
    console.log('[Web] Index page mounted')
    window.addEventListener('JWeb', listener)
    return () => {
      window.removeEventListener('JWeb', listener)
    }
  }, [])

  useEffect(() => {
    invoke('getInstalled');
    const controller = new AbortController();
    const listener = (event) => {
      setInstalledMap(event.detail);
    };
    window.addEventListener(
      'postInstalled',
      listener,
      { signal: controller.signal }
    );
    return () => controller.abort();
  }, []);

  useEffect(() => {
    // Scriptable 内嵌时无法检测到监听
    window['$index.setInstalledMap'] = setInstalledMap;
    return () => delete window['$index.setInstalledMap'];
  }, [])

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
      <HideOnScroll {...props}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}
              component={Link}
              href='/'
            >
              <HomeIcon />
            </IconButton>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>Scriptore</Typography>
            <IconButton size='large' edge='end' color='inherit'>
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Container sx={{ p: 2 }} maxWidth='sm'>
        <Stack spacing={2}>
          <SList title='Widgets' list={widgets} installedMap={installedMap || {}} />
          <SList title='Modules' list={modules} installedMap={installedMap || {}} />
          <SList title='Others' list={others} installedMap={installedMap || {}} />
        </Stack>
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
          <BottomNavigation value={0} />
        </Box>
      </Paper>
    </Box>
  )
}

export const getStaticProps = () => {
  const colors = [
    red,
    purple,
    deepPurple,
    indigo,
    blue,
    cyan,
    teal,
    green,
    amber,
    brown,
    grey,
    blueGrey,
  ];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)][400];
  return {
    props: {
      widgets: widgets.map((item) => ({
        ...item,
        bgcolor: randomColor(),
      })),
      modules: modules.map((item) => ({
        ...item,
        bgcolor: randomColor(),
      })),
      others: others.map((item) => ({
        ...item,
        bgcolor: randomColor(),
      })),
    }
  };
}