import { useCallback } from 'react';
import NextLink from 'next/link';
import {
  Avatar,
  Box,
  ButtonBase,
  Stack,
  Typography,
} from '@mui/material';
import CropIcon from '@mui/icons-material/Crop';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LayersIcon from '@mui/icons-material/Layers';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { blue, blueGrey, grey, indigo } from '@mui/material/colors';
import Layout from '../components/Layout';
import Link from '../components/Link';

const SCRIPTORE_URL = 'https://raw.githubusercontent.com/Honye/scriptable-scripts/master/dist/Scriptore.js';

const Group = ({ title, children }) => (
  <Box component='section'>
    {title && (
      <Typography variant='body2' color='text.secondary' sx={{ px: 2, mb: 0.75 }}>{title}</Typography>
    )}
    <Box sx={{ bgcolor: 'background.paper', borderRadius: '18px', overflow: 'hidden' }}>
      {children}
    </Box>
  </Box>
);

const Row = ({ icon, color, primary, secondary, ...linkProps }) => (
  <ButtonBase
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      px: 2,
      py: 1.25,
      textAlign: 'left',
      cursor: 'pointer',
      color: 'text.primary',
      textDecoration: 'none',
      '&:hover': { bgcolor: 'action.hover' },
      '& + &': { borderTop: 1, borderColor: 'divider' },
    }}
    {...linkProps}
  >
    <Box
      sx={{
        flexShrink: 0,
        width: 32,
        height: 32,
        borderRadius: '8px',
        bgcolor: color,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': { fontSize: 20 },
      }}
    >{icon}</Box>
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography sx={{ fontSize: 16 }}>{primary}</Typography>
      {secondary && <Typography variant='body2' color='text.secondary'>{secondary}</Typography>}
    </Box>
    <ChevronRightIcon sx={{ color: 'text.disabled' }} />
  </ButtonBase>
);

const steps = [
  <>在 Scriptable 中安装 <Link href={SCRIPTORE_URL}>Scriptore</Link> 脚本，也可以用下方的快捷指令一键安装。</>,
  '在 Scriptable 里运行 Scriptore，它会打开本站并能读取已安装的脚本。',
  '点击脚本右侧的「获取」即可安装，有新版本时在「更新」页一键升级。',
];

const About = (props) => {
  const { user } = props;

  const onLogin = useCallback(() => {
    if (user) return;

    const searchParams = new URLSearchParams();
    searchParams.append('client_id', process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID);
    searchParams.append('scope', 'repo admin:repo_hook read:user');
    searchParams.append('state', 'imark');
    searchParams.append('redirect_uri', `https://www.imarkr.com/api/authorize?redirect=${encodeURIComponent(location.href)}`);
    location.href = `https://github.com/login/oauth/authorize?${searchParams.toString()}`;
  }, [user]);

  return (
    <Layout
      nav={2}
      title='关于'
      subtitle='Scriptore 是一个开源的 Scriptable 脚本仓库，收录桌面小组件、模块和实用工具。'
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' },
          gap: { xs: 3, md: 5 },
          alignItems: 'start',
        }}
      >
        <Stack spacing={3}>
          <Group>
            <ButtonBase
              onClick={onLogin}
              disabled={Boolean(user)}
              sx={{ width: '100%', justifyContent: 'flex-start', gap: 1.5, px: 2, py: 1.5, textAlign: 'left' }}
            >
              <Avatar sx={{ width: 52, height: 52 }} src={user?.avatar_url} />
              <Box>
                <Typography variant='subtitle1'>{user?.login || '未登录'}</Typography>
                <Typography variant='body2' color='text.secondary'>
                  {user ? '已通过 GitHub 登录' : '使用 GitHub 账号登录'}
                </Typography>
              </Box>
            </ButtonBase>
          </Group>

          <Box component='section'>
            <Typography variant='h5' component='h2' sx={{ mb: 1.5 }}>如何使用</Typography>
            <Box component='ol' sx={{ m: 0, p: 0, listStyle: 'none' }}>
              {steps.map((step, index) => (
                <Stack
                  key={index}
                  component='li'
                  direction='row'
                  spacing={1.5}
                  sx={{ py: 1.25, '& + &': { borderTop: 1, borderColor: 'divider' } }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 26,
                      height: 26,
                      mt: '1px',
                      borderRadius: '50%',
                      bgcolor: 'fill',
                      color: 'primary.main',
                      fontSize: 14,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >{index + 1}</Box>
                  <Typography>{step}</Typography>
                </Stack>
              ))}
            </Box>
            <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
              在电脑或 Safari 中浏览时，同样需要在 iPhone 上安装 Scriptore 才能安装脚本。
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={3}>
          <Group title='工具'>
            <Row
              component={NextLink}
              href='/upload'
              icon={<CloudUploadIcon />}
              color={blue[500]}
              primary='上传脚本'
              secondary='提交新脚本或新版本'
            />
            <Row
              component={Link}
              href='https://scriptore.imarkr.com/cropper'
              underline='none'
              icon={<CropIcon />}
              color={indigo[400]}
              primary='背景裁剪'
              secondary='裁剪图片区域作为组件背景'
            />
            <Row
              component={Link}
              href='https://www.icloud.com/shortcuts/feaba7c97d0c4d0e8f60d246d2359402'
              underline='none'
              icon={<LayersIcon />}
              color={blueGrey[500]}
              primary='脚本安装器（快捷指令）'
              secondary='通过分享菜单、剪贴板链接或扫描二维码安装脚本'
            />
          </Group>
          <Group title='开源'>
            <Row
              component={Link}
              href='https://github.com/honye/scriptable-scripts'
              underline='none'
              icon={<GitHubIcon />}
              color={grey[900]}
              primary='Honye/scriptable-scripts'
              secondary='脚本源码与问题反馈'
            />
          </Group>
        </Stack>
      </Box>
    </Layout>
  );
};

/** @type {import('next').GetServerSideProps} */
export const getServerSideProps = async ({ req, query }) => {
  const props = {};

  const { token } = req.cookies;
  if (token) {
    const user = await fetchUser({ token });
    props.user = user;
  }

  return { props };
};

export default About;
