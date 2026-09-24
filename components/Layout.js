import Head from 'next/head';
import NextLink from 'next/link';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, ButtonBase, Container, IconButton, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import BottomNavigation, { navItems } from './BottomNavigation';
import Link from './Link';

const blurBar = (theme) => ({
  bgcolor: alpha(theme.palette.background.default, 0.8),
  backdropFilter: 'saturate(180%) blur(20px)',
  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
});

const Logo = () => (
  <Stack
    component={NextLink}
    href='/'
    direction='row'
    alignItems='center'
    spacing={1}
    sx={{ mr: 4 }}
  >
    <Box
      component='img'
      src='/favicon.svg'
      alt=''
      sx={{
        width: 32,
        height: 32,
        p: 0.5,
        borderRadius: '9px',
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
      }}
    />
    <Typography sx={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>Scriptore</Typography>
  </Stack>
);

/** 宽屏顶部导航，窄屏隐藏 */
const DesktopHeader = ({ nav }) => (
  <Box
    component='header'
    sx={(theme) => ({
      display: { xs: 'none', md: 'block' },
      position: 'sticky',
      top: 0,
      zIndex: 'appBar',
      borderBottom: 1,
      borderColor: 'divider',
      ...blurBar(theme),
    })}
  >
    <Container maxWidth='lg'>
      <Stack direction='row' alignItems='center' sx={{ height: 60 }}>
        <Logo />
        <Stack component='nav' direction='row' spacing={0.5} sx={{ flexGrow: 1 }}>
          {navItems.map((item, index) => (
            <ButtonBase
              key={item.href}
              component={NextLink}
              href={item.href}
              aria-current={nav === index ? 'page' : undefined}
              sx={{
                px: 1.75,
                py: 0.75,
                borderRadius: 999,
                fontSize: 15,
                fontWeight: nav === index ? 600 : 500,
                color: nav === index ? 'primary.main' : 'text.secondary',
                bgcolor: nav === index ? 'fill' : 'transparent',
                '&:hover': { color: nav === index ? 'primary.main' : 'text.primary' },
              }}
            >{item.label}</ButtonBase>
          ))}
        </Stack>
        <IconButton
          component={Link}
          href='https://github.com/honye/scriptable-scripts'
          aria-label='GitHub 仓库'
          sx={{ color: 'text.secondary' }}
        >
          <GitHubIcon />
        </IconButton>
      </Stack>
    </Container>
  </Box>
);

/** 窄屏二级页面的导航栏 */
const MobileBar = ({ title, actions }) => {
  const router = useRouter();

  const onBack = useCallback(() => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  }, [router]);

  return (
    <Box
      sx={(theme) => ({
        display: { xs: 'block', md: 'none' },
        position: 'sticky',
        top: 0,
        zIndex: 'appBar',
        pt: 'env(safe-area-inset-top)',
        borderBottom: 1,
        borderColor: 'divider',
        ...blurBar(theme),
      })}
    >
      <Stack direction='row' alignItems='center' sx={{ height: 48, px: 0.5 }}>
        <IconButton color='primary' aria-label='返回' onClick={onBack}>
          <ArrowBackIosNewIcon fontSize='small' />
        </IconButton>
        <Typography
          variant='h6'
          noWrap
          sx={{ flex: 1, textAlign: 'center', px: 1 }}
        >{title}</Typography>
        <Box sx={{ minWidth: 40, display: 'flex', justifyContent: 'flex-end' }}>{actions}</Box>
      </Stack>
    </Box>
  );
};

/**
 * 页面骨架：宽屏为顶部导航，窄屏为底部标签栏 / 返回导航栏
 * @param {object} props
 * @param {number} [props.nav] 当前所在的一级导航，二级页面不传
 * @param {string} [props.title] 页面标题，二级页面仅在窄屏导航栏显示
 * @param {React.ReactNode} [props.subtitle] 标题下的说明
 * @param {boolean} [props.hideDesktopTitle] 宽屏不显示标题（页面自带头图时使用）
 * @param {boolean} [props.back] 窄屏是否显示返回导航栏
 * @param {React.ReactNode} [props.actions] 窄屏导航栏右侧操作
 * @param {string} [props.pageTitle] 文档标题
 * @param {string} [props.description]
 * @param {false|'sm'|'md'|'lg'} [props.maxWidth]
 * @param {React.ReactNode} props.children
 */
const Layout = (props) => {
  const {
    nav,
    title,
    subtitle,
    hideDesktopTitle,
    back,
    actions,
    pageTitle = 'Scriptore - Scriptable store',
    description,
    maxWidth = 'lg',
    children,
  } = props;
  const hasTabs = typeof nav === 'number';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: back ? 0 : { xs: 'env(safe-area-inset-top)', md: 0 },
        pb: hasTabs
          ? { xs: 'calc(56px + env(safe-area-inset-bottom))', md: 0 }
          : 'env(safe-area-inset-bottom)',
      }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <title>{pageTitle}</title>
        {description && <meta name='description' content={description} />}
      </Head>
      <DesktopHeader nav={nav} />
      {back && <MobileBar title={title} actions={actions} />}
      <Container
        component='main'
        maxWidth={maxWidth}
        sx={{ pt: { xs: 2, md: 5 }, pb: { xs: 3, md: 8 } }}
      >
        {title && !back && (
          <Box sx={{ display: { md: hideDesktopTitle ? 'none' : 'block' }, mt: { xs: 1, md: 0 }, mb: { xs: 2, md: 4 } }}>
            <Typography
              variant='h4'
              component='h1'
              sx={{ fontSize: { md: 40 } }}
            >{title}</Typography>
            {subtitle && (
              <Typography color='text.secondary' sx={{ mt: 0.5, maxWidth: '60ch' }}>{subtitle}</Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
      {hasTabs && (
        <Box
          sx={(theme) => ({
            display: { xs: 'block', md: 'none' },
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 'appBar',
            pb: 'env(safe-area-inset-bottom)',
            borderTop: 1,
            borderColor: 'divider',
            ...blurBar(theme),
          })}
        >
          <BottomNavigation value={nav} />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
