import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Container,
  List,
  ListSubheader,
  Paper,
} from '@mui/material';
import BottomNavigation from '../components/BottomNavigation';
import Item from '../components/UpdateItem';
import { invoke } from '../utils/bridge';
import { getRemoteScripts, getScripts } from '../server/scripts';
import { compareVersions } from '../utils/utils';

const Updates = (props) => {
  const { widgets, modules, others } = props;
  const [installed, setInstalled] = useState(null);

  const updates = useMemo(() => {
    if (!installed) return [];

    const list = [];
    for (const item of installed) {
      const widget = widgets.find((el) => 
        `${el.name}.js` === item.name &&
        compareVersions(el.version || '0.0.0', item.version || '0.0.0') > 0
      );
      if (widget) {
        list.push(widget);
        continue;
      }

      const mod = modules.find((el) =>
        `${el.name}.module.js` === item.name &&
        compareVersions(el.version || '0.0.0', item.version || '0.0.0') > 0
      );
      if (mod) {
        list.push(mod);
        continue;
      }

      const other = others.find((el) =>
        `${el.name}.js` === item.name &&
        compareVersions(el.version || '0.0.0', item.version || '0.0.0') > 0
      );
      if (other) {
        list.push(other);
        continue;
      }
    }
    return list;
  }, [installed, modules, others, widgets]);

  useEffect(() => {
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
        <Paper sx={{ borderRadius: 2 }} elevation={6}>
          <List
            subheader={
              <ListSubheader disableSticky>可用更新</ListSubheader>
            }
          >
            {(updates || []).map((item) => (
              <Item key={item.name} data={item} />
            ))}
          </List>
        </Paper>
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
          <BottomNavigation value={1} />
        </Box>
      </Paper>
    </Box>
  );
};

export const getStaticProps = async () => {
  const remote = await getRemoteScripts();
  const local = getScripts();
  return {
    props: {
      widgets: [...remote.widgets, ...local.widgets],
      modules: [...remote.modules, ...local.modules],
      others: [...remote.others, ...local.others]
    },
  };
};

export default Updates;
