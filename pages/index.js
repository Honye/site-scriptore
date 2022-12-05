import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import WidgetsIcon from '@mui/icons-material/Widgets';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import InfoIcon from '@mui/icons-material/Info';
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
import CssBaseline from '@mui/material/CssBaseline'
import SList from '../components/List';
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
  const [value, setValue] = useState(0)

  const listener = (event) => {
    const { code, data } = event.detail
    console.log(`[Web] message from Scriptable. ${JSON.stringify({ code, data })}`)
  }

  useEffect(() => {
    window.addEventListener('JWeb', listener)
    return () => {
      window.removeEventListener('JWeb', listener)
    }
  }, [])

  return (
    <Box sx={{ pb: 7 }}>
      <Head>
        <title>Scriptable Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline enableColorScheme />
      <HideOnScroll {...props}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}
              component={Link}
              href='/'
            >
              <HomeIcon />
            </IconButton>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>Store</Typography>
            <IconButton size='large' edge='end' color='inherit'>
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Container sx={{ p: 2 }} maxWidth='sm'>
        <Stack spacing={2}>
          <SList title='Widgets' list={widgets} />
          <SList title='Modules' list={modules} />
          <SList title='Others' list={others} />
        </Stack>
      </Container>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          value={value}
          showLabels
          onChange={(e, value) => setValue(value)}
        >
          <BottomNavigationAction label='Scripts' icon={<WidgetsIcon />} />
          <BottomNavigationAction label='Updates' icon={<MoveToInboxIcon />} />
          <BottomNavigationAction label='About' icon={<InfoIcon />} />
        </BottomNavigation>
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