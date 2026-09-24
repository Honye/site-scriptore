import { useEffect, useMemo, useState } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Button,
  ButtonBase,
  InputBase,
  Stack,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Layout from '../components/Layout';
import Link from '../components/Link';
import SList from '../components/List';
import ScriptIcon from '../components/ScriptIcon';
import { invoke } from '../utils/bridge';
import { debounce } from '../utils/utils';
import { getScripts } from '../server/scripts';
import useDebounce from '../hooks/useDebounce'

const SCRIPTORE_URL = 'https://raw.githubusercontent.com/Honye/scriptable-scripts/master/dist/Scriptore.js';

/** 像 iPhone 主屏幕一样陈列小组件图标，仅宽屏显示 */
const Springboard = ({ list }) => (
  <Box
    sx={{
      bgcolor: 'springboard',
      borderRadius: '36px',
      p: 3.5,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 72px)',
      columnGap: 3,
      rowGap: 2.5,
      justifyContent: 'center',
    }}
  >
    {list.map((item) => (
      <Stack
        key={item.name}
        component={NextLink}
        href={`/scriptables/${encodeURIComponent(item.name)}`}
        alignItems='center'
        spacing={0.75}
        sx={{
          minWidth: 0,
          transition: 'transform 160ms',
          '&:hover': { transform: 'translateY(-2px)' },
        }}
      >
        <ScriptIcon icon={item.icon} bgcolor={item.bgcolor} size={60} />
        <Typography
          noWrap
          sx={{ width: '100%', textAlign: 'center', fontSize: 12, color: 'rgba(255, 255, 255, 0.88)' }}
        >{item.name}</Typography>
      </Stack>
    ))}
  </Box>
);

const Hero = ({ count, showcase }) => (
  <Box
    sx={{
      display: { xs: 'none', md: 'grid' },
      gridTemplateColumns: 'minmax(0, 1fr) auto',
      alignItems: 'center',
      gap: 8,
      mb: 6,
    }}
  >
    <Box sx={{ maxWidth: 520 }}>
      <Typography variant='h1' sx={{ mb: 2.5 }}>
        为 iPhone 桌面<br />挑选 Scriptable 脚本
      </Typography>
      <Typography variant='body1' color='text.secondary' sx={{ fontSize: 18, mb: 4 }}>
        这里收录了 {count} 个开源脚本，包括桌面小组件、可复用的模块和实用工具。在 iPhone 上用 Scriptore 打开本页，即可一键安装和更新。
      </Typography>
      <Stack direction='row' spacing={1.5}>
        <Button
          variant='contained'
          size='large'
          component={Link}
          href={SCRIPTORE_URL}
          sx={{ px: 3, color: '#fff' }}
        >获取 Scriptore</Button>
        <Button
          size='large'
          component={NextLink}
          href='/about'
          sx={{ px: 2 }}
        >安装说明</Button>
      </Stack>
    </Box>
    <Springboard list={showcase} />
  </Box>
);

const matches = (item, keyword) => {
  const k = keyword.trim().toLowerCase();
  if (!k) return true;
  return item.name.toLowerCase().includes(k) || (item.intro || '').toLowerCase().includes(k);
};

export default function Home(props) {
  const { widgets, modules, others, deprecated } = props;
  const [installedMap, setInstalledMap] = useState(null);
  const [keyword, setKeyword] = useState('');

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

  const sections = useMemo(() => [
    { id: 'widgets', title: '桌面组件', list: widgets },
    { id: 'modules', title: '模块', list: modules },
    { id: 'others', title: '其他', list: others },
    { id: 'deprecated', title: '已过时', list: deprecated, muted: true },
  ].map((section) => ({
    ...section,
    list: section.list.filter((item) => matches(item, keyword)),
  })), [widgets, modules, others, deprecated, keyword]);

  const total = widgets.length + modules.length + others.length;
  const found = sections.reduce((sum, section) => sum + section.list.length, 0);

  return (
    <Layout
      nav={0}
      title='脚本'
      hideDesktopTitle
      description='Scriptore 是一个开源的 iOS Scriptable 脚本和桌面小组件商店'
    >
      <Hero count={total} showcase={widgets.slice(0, 16)} />

      <Box
        sx={(theme) => ({
          position: { md: 'sticky' },
          top: { md: 60 },
          zIndex: 1,
          mx: { md: -3 },
          px: { md: 3 },
          py: { xs: 0, md: 1.5 },
          mb: 3,
          bgcolor: { md: alpha(theme.palette.background.default, 0.85) },
          backdropFilter: { md: 'saturate(180%) blur(20px)' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'center' },
          gap: 1.5,
        })}
      >
        <Box
          component='label'
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 1.5,
            height: 40,
            width: { md: 320 },
            borderRadius: '12px',
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(118, 118, 128, 0.24)' : 'rgba(118, 118, 128, 0.12)',
            color: 'text.secondary',
          }}
        >
          <SearchIcon fontSize='small' />
          <InputBase
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='搜索脚本名称或简介'
            inputProps={{ 'aria-label': '搜索脚本', type: 'search' }}
            sx={{ flex: 1, color: 'text.primary', fontSize: 15 }}
          />
        </Box>
        <Stack
          component='nav'
          aria-label='脚本分类'
          direction='row'
          spacing={1}
          sx={{
            overflowX: 'auto',
            mx: { xs: -2, sm: -3, md: 0 },
            px: { xs: 2, sm: 3, md: 0 },
            '::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {sections.filter((section) => section.list.length).map((section) => (
            <ButtonBase
              key={section.id}
              component='a'
              href={`#${section.id}`}
              sx={{
                flexShrink: 0,
                px: 1.5,
                height: 32,
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                '&:hover': { borderColor: 'text.secondary' },
              }}
            >
              {section.title}
              <Box component='span' sx={{ ml: 0.75, color: 'text.secondary' }}>{section.list.length}</Box>
            </ButtonBase>
          ))}
        </Stack>
      </Box>

      <Stack spacing={{ xs: 3.5, md: 5 }}>
        {sections.map((section) => (
          <SList
            key={section.id}
            id={section.id}
            title={section.title}
            list={section.list}
            muted={section.muted}
            installedList={installedMap || []}
          />
        ))}
      </Stack>

      {found === 0 && (
        <Box sx={{ py: 10, textAlign: 'center' }}>
          <Typography variant='h6' gutterBottom>没有找到与“{keyword.trim()}”相关的脚本</Typography>
          <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>换个关键词试试，比如脚本的英文名。</Typography>
          <Button onClick={() => setKeyword('')}>清除搜索</Button>
        </Box>
      )}
    </Layout>
  )
}

export const getStaticProps = () => {
  return {
    props: getScripts(),
  };
};
