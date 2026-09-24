import NextLink from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import ScriptIcon from '../../components/ScriptIcon';
import { widgets, modules, others, deprecated } from '../../data/scripts';
import { colorOf } from '../../server/scripts';
import { invoke } from '../../utils/bridge';
import { compareVersions } from '../../utils/utils';
import styles from './[id].module.css'

const typeLabels = {
  widget: '桌面组件',
  module: '模块',
  other: '其他',
  deprecated: '已过时',
};

const Heading = ({ children }) => (
  <Typography variant='h5' component='h2' sx={{ mb: 1.5 }}>{children}</Typography>
);

const InfoRow = ({ label, children }) => (
  <Stack
    direction='row'
    justifyContent='space-between'
    spacing={2}
    sx={{
      py: 1.25,
      '& + &': { borderTop: 1, borderColor: 'divider' },
    }}
  >
    <Typography variant='body2' color='text.secondary' sx={{ flexShrink: 0 }}>{label}</Typography>
    <Typography variant='body2' sx={{ textAlign: 'right', minWidth: 0, wordBreak: 'break-all' }}>{children}</Typography>
  </Stack>
);

/**
 * @param {object} props
 * @param {import('../../data/scripts').Script & { type: string }} props.data
 */
const Detail = (props) => {
  const { data } = props;
  const [installed, setInstalled] = useState(null);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const onNativeInstalled = useCallback((list) => {
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
    invoke('getInstalled', {}, onNativeInstalled);
  }, [onNativeInstalled]);

  const listener = useCallback((data) => {
    if (data.name === props.data.name) {
      setLoading(false);
      setInstalled(data);
      setShouldUpdate(false);
    }
  }, [props.data.name]);

  const install = useCallback(() => {
    const ua = navigator.userAgent;
    if (/Safari/.test(ua)) {
      location.href = `scriptable:///run/Scriptore?url=${encodeURIComponent(data.files[0])}`;
    } else {
      setLoading(true);
      invoke('install', data, listener);
    }
  }, [data, listener]);

  const open = useCallback(() => {
    const { name, type } = data;
    location.href = type === 'module'
      ? `scriptable:///open/${encodeURIComponent(`${name}.module`)}`
      : `scriptable:///run/${encodeURIComponent(name)}`;
  }, [data]);

  const update = useCallback(() => {
    const ua = navigator.userAgent;
    if (/Safari/.test(ua)) {
      location.href = `scriptable:///run/Scriptore?url=${encodeURIComponent(data.files[0])}`;
    } else {
      setLoading(true);
      invoke('updateScript', data, listener);
    }
  }, [data, listener]);

  const onBtnClick = useCallback(() => {
    if (shouldUpdate) {
      update();
    } else if (installed) {
      open();
    } else {
      install();
    }
  }, [install, installed, open, shouldUpdate, update]);

  const dependencies = Object.keys(data.dependencies || {});

  return (
    <Layout
      back
      title={data.name}
      pageTitle={`Scriptore - ${data.name}`}
      description={data.intro}
      actions={
        <IconButton color='primary' aria-label='首页' component={NextLink} href='/'>
          <HomeIcon />
        </IconButton>
      }
    >
      <Stack
        direction='row'
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={{ xs: 2, md: 3.5 }}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <ScriptIcon
          icon={data.icon}
          bgcolor={data.bgcolor}
          size={128}
          sx={{ width: { xs: 96, md: 128 }, height: { xs: 96, md: 128 }, fontSize: { xs: 96, md: 128 }, borderRadius: { xs: '22px', md: '30px' } }}
        />
        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant='h4'
            component='h1'
            sx={{ fontSize: { xs: 24, md: 36 }, lineHeight: 1.2, wordBreak: 'break-word' }}
          >{data.name}</Typography>
          <Typography color='text.secondary' sx={{ mt: 0.5, fontSize: { xs: 15, md: 18 } }}>{data.intro}</Typography>
          <Stack direction='row' alignItems='center' spacing={1.5} sx={{ mt: { xs: 1.5, md: 2.5 } }}>
            <LoadingButton
              variant='contained'
              loading={loading}
              onClick={onBtnClick}
              sx={{ minWidth: 84, px: 3, fontWeight: 700 }}
            >{shouldUpdate ? '更新' : installed ? '打开' : '获取'}</LoadingButton>
            <Typography variant='body2' color='text.secondary'>
              v{data.version}{typeLabels[data.type] ? `，${typeLabels[data.type]}` : ''}
            </Typography>
          </Stack>
        </Box>
      </Stack>

      {data.snapshots?.length > 0 && (
        <Box component='section' sx={{ mb: { xs: 3, md: 5 } }}>
          <Heading>预览</Heading>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1.5, md: 2 },
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              mx: { xs: -2, sm: -3, md: 0 },
              px: { xs: 2, sm: 3, md: 0 },
              scrollPaddingInline: { xs: 16, sm: 24, md: 0 },
              '::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {data.snapshots.map((img, index) => (
              <Box
                className={styles.snapshotItem}
                key={index}
                sx={{
                  flex: { xs: '0 0 62%', sm: '0 0 280px', md: '0 0 260px' },
                  aspectRatio: `${375 / 667}`,
                  borderRadius: '18px',
                  overflow: 'hidden',
                  scrollSnapAlign: 'start',
                  position: 'relative',
                  bgcolor: 'background.paper',
                }}
              >
                <Image
                  style={{ objectFit: 'contain' }}
                  src={img}
                  alt={`${data.name} 预览图 ${index + 1}`}
                  sizes='(min-width: 600px) 280px, 62vw'
                  fill
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 320px' },
          gap: { xs: 3, md: 6 },
          alignItems: 'start',
        }}
      >
        <Box component='section'>
          <Heading>介绍</Heading>
          <Typography
            sx={{ whiteSpace: 'pre-wrap', maxWidth: '68ch' }}
            variant='body1'
          >{(data.content || data.intro || '').trim()}</Typography>
        </Box>
        <Box component='aside'>
          <Heading>信息</Heading>
          <Box sx={{ bgcolor: 'background.paper', borderRadius: '18px', px: 2, py: 0.5 }}>
            <InfoRow label='版本'>{data.version}</InfoRow>
            <InfoRow label='分类'>{typeLabels[data.type] || '-'}</InfoRow>
            <InfoRow label='文件'>{data.files.length} 个</InfoRow>
            {dependencies.length > 0 && (
              <InfoRow label='依赖'>{dependencies.join('、')}</InfoRow>
            )}
            <InfoRow label='源码'>
              <Link href={data.files[0]} sx={{ cursor: 'pointer' }}>查看入口文件</Link>
            </InfoRow>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

/** @type {import('next').GetStaticProps<{data: typeof widgets[0]}, { id: string}>} */
export const getStaticProps = ({ params }) => {
  const { id } = params;
  const widget = widgets.find((item) => item.name === decodeURIComponent(id))
  if (widget) {
    return {
      props: {
        data: { type: 'widget', bgcolor: colorOf(widget.name), ...widget }
      },
    };
  }
  const mod = modules.find((item) => item.name === decodeURIComponent(id))
  if (mod) {
    return {
      props: {
        data: { type: 'module', bgcolor: colorOf(mod.name), ...mod }
      },
    };
  }
  const other = others.find((item) => item.name === decodeURIComponent(id))
  if (other) {
    return {
      props: {
        data: { type: 'other', bgcolor: colorOf(other.name), ...other }
      },
    };
  }

  const dep = deprecated.find((item) => item.name === decodeURIComponent(id))
  if (dep) {
    return {
      props: {
        data: { type: 'deprecated', bgcolor: colorOf(dep.name), ...dep }
      },
    };
  }

  return {
    notFound: true,
  };
};

/** @type {import('next').GetStaticPaths} */
export const getStaticPaths = async () => {
  const paths = [...widgets, ...modules, ...others, ...deprecated].map((script) => ({
    params: { id: script.name }
  }));
  return {
    paths,
    fallback: 'blocking'
  };
};

export default Detail;
