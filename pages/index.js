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
import { invoke } from '../utils/bridge';
import { debounce } from '../utils/utils';
import { getScripts } from '../server/scripts';
import useDebounce from '../hooks/useDebounce'

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

  const getInstalled = useDebounce(
    () => {
      invoke('getInstalled', {}, (e) => setInstalledMap(e))
    },
    { delay: 300 }
  )

  useEffect(() => {
    window.addEventListener('load', () => {
      getInstalled()
    })
    getInstalled()
    // FIXME 部署 SSR 后 getInstalled 未缓存，取消下一行注释后可复现
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sessionScrollTop = sessionStorage.getItem('indexScrollTop');
    if (sessionScrollTop) {
      document.documentElement.scrollTop = sessionScrollTop;
    }
    const listener = debounce(() => {
      sessionStorage.setItem('indexScrollTop', document.documentElement.scrollTop);
    }, { delay: 150 });
    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener);
  }, []);

  return (
    <Box
      sx={{
        pb: theme => `calc(${theme.spacing(7)} + env(safe-area-inset-bottom))`,
        pt: 'env(safe-area-inset-top)',
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
          <SList title='桌面组件' list={widgets} installedList={installedMap || []} />
          <SList title='模块' list={modules} installedList={installedMap || []} />
          <SList title='其他' list={others} installedList={installedMap || []} />
        </Stack>
      </Container>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Box
          sx={{
            pb: 'env(safe-area-inset-bottom)',
            bgcolor: 'background.paper',
          }}
        >
          <BottomNavigation value={0} />
        </Box>
      </Paper>
    </Box>
  )
}

export const getStaticProps = () => {
  return {
    props: getScripts(),
  };
};
