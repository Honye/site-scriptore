import Head from 'next/head';
import {
  AppBar,
  Avatar,
  Box, Container,
  Divider,
  Icon,
  IconButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { blueGrey } from '@mui/material/colors';
import { widgets, modules, others } from '../../../data/scripts';
import { invoke } from '../../../utils/bridge';
import { compareVersions } from '../../../utils/utils';
import styles from '../[id].module.css'
import { getRepoContent } from '../../../server/github';

/**
 * @param {object} props
 * @param {import('../../../data/scripts').Script} props.data
 */
const Detail = (props) => {
  const { data } = props;

  const router = useRouter();
  const [installed, setInstalled] = useState(null);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});

  const getDetail = useCallback(async () => {
    const { author, name, type } = data;
    const detail = await fetch(`/api/detail?author=${author}&name=${name}${type === 'module' ? '.module' : ''}`)
      .then((resp) => resp.json());
    setDetail(detail);
  }, [data]);

  useEffect(() => {
    getDetail();
  }, [getDetail]);

  const onNativeInstalled = useCallback((e) => {
    const list = e.detail;
    for (const item of list) {
      if (item.name === `${data.name}${data.type === 'module' ? '.module' : ''}.js`) {
        setInstalled(item);
        setShouldUpdate(
          compareVersions(data.version || '0.0.0', item.version || '0.0.0') > 0
        );
        break;
      }
    }
  }, [data]);

  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener(
      'postInstalled',
      onNativeInstalled,
      { signal: controller.signal }
    );
    invoke('getInstalled');
    return () => controller.abort();
  }, [onNativeInstalled]);

  const listener = useCallback((event) => {
    const { code, data } = event.detail;
    if (code === 'install-success' && data.name === props.data.name) {
      window.removeEventListener('JWeb', listener);
      setLoading(false);
      setInstalled(data);
      setShouldUpdate(false);
    }
  }, [props.data.name]);

  const install = useCallback(() => {
    const ua = navigator.userAgent;
    if (/Safari/.test(ua)) {
      location.href = `scriptable:///run/Installer?url=${encodeURIComponent(detail.files[0])}`;
    } else {
      setLoading(true);
      window.addEventListener('JWeb', listener);
      invoke('install', { ...data, ...detail });
    }
  }, [data, detail, listener]);

  const open = useCallback(() => {
    const { name, type } = data;
    location.href = type === 'module'
      ? `scriptable:///open/${encodeURIComponent(`${name}.module`)}`
      : `scriptable:///run/${encodeURIComponent(name)}`;
  }, [data]);

  const update = useCallback(() => {
    const ua = navigator.userAgent;
    if (/Safari/.test(ua)) {
      location.href = `scriptable:///run/Installer?url=${encodeURIComponent(detail.files[0])}`;
    } else {
      setLoading(true);
      window.addEventListener('JWeb', listener);
      invoke('updateScript', {...data, ...detail});
    }
  }, [data, detail, listener]);

  const onBtnClick = useCallback(() => {
    if (shouldUpdate) {
      update();
    } else if (installed) {
      open();
    } else {
      install();
    }
  }, [install, installed, open, shouldUpdate, update]);

  return (
    <Box
      sx={{ pt: 'env(safe-area-inset-top)' }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <title>Scriptore - {data.name}</title>
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            onClick={() => router.back()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>{data.name}</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='sm'>
        <Box
          sx={{
            display: 'flex',
            pt: 2,
            pb: 1
          }}
        >
          <Avatar
            sx={{
              mr: 1.5,
              borderRadius: 2,
              bgcolor: blueGrey['400'],
              width: 100,
              height: 100
            }}
            variant='square'
          >
            <Icon style={{ fontSize: 60 }}>{ data.icon || 'auto_fix_high' }</Icon>
          </Avatar>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <ListItemText
              sx={{ mt: 0 }}
              primary={data.name}
              secondary={data.intro}
            />
            <Stack direction="row" alignItems="flex-end">
              <LoadingButton
                sx={{ alignSelf: 'flex-start' }}
                variant='contained'
                size='small'
                loading={loading}
                onClick={onBtnClick}
              >{shouldUpdate ? '更新' : installed ? '打开' : '获取'}</LoadingButton>
              <Typography ml={1} variant="caption">v{data.version}</Typography>
            </Stack>
          </Box>
        </Box>
        {detail.snapshots?.length && (
          <>
            <Divider sx={{ my: 1 }} />
            <Box>
              <Typography variant='h6'>预览</Typography>
              <Box 
                sx={{
                  display: 'flex',
                  gap: 1,
                  overflow: 'auto',
                  scrollSnapType: 'x mandatory',
                  '::-webkit-scrollbar': { display: 'none' },
                }}
              >
                {detail.snapshots.map((img, index) => (
                  <Box
                    className={styles.snapshotItem}
                    key={index}
                    sx={{
                      minWidth: '60%',
                      aspectRatio: `${375 / 667}`,
                      borderRadius: 2,
                      overflow: 'hidden',
                      scrollSnapAlign: 'start',
                      position: 'relative',
                    }}
                  >
                    <Image
                      style={{ objectFit: 'contain' }}
                      src={img}
                      alt=''
                      fill
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        ) || null}
        <Divider sx={{ my: 1 }} />
        <Typography
          sx={{ whiteSpace: 'pre-wrap'}}
          variant='body1'
        >{data.content}</Typography>
      </Container>
    </Box>
  );
};

/** @type {import('next').GetStaticProps<{data: import('../../../data/scripts').Script}, { id: string; name: string }>} */
export const getStaticProps = async ({ params }) => {
  const { id: author, name } = params;
  const [owner, repo] = process.env.SCRIPTS_REPO.split('/');
  const data = await getRepoContent(
    {
      owner,
      repo,
      ref: process.env.SCRIPTS_BRANCH,
      path: `scriptables/${author}/${name}/scriptable.json`
    },
    {
      headers: {
        accept: 'application/vnd.github.raw+json',
      }
    }
  ).catch(() => null);
  if (data) {
    return {
      props: {
        data: {
          name: name.replace(/\.module$/, ''),
          type: /\.module$/.test(name) ? 'module' : 'widget',
          icon: 'auto_fix_high',
          author,
          ...data
        }
      }
    };
  }
  return { notFound: true };
};

/** @type {import('next').GetStaticPaths} */
export const getStaticPaths = async () => {
  const paths = [...widgets, ...modules, ...others].map((script) => ({
    params: { id: script.name }
  }));
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export default Detail;
