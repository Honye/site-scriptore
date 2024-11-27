import { useCallback } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import CropIcon from '@mui/icons-material/Crop';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LayersIcon from '@mui/icons-material/Layers';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BottomNavigation from '../components/BottomNavigation';
import Link from '../components/Link';
import { fetchUser } from '../server/github';

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
      <Container maxWidth='sm'>
        <Stack
          sx={{ py: 2 }}
          direction="row"
          spacing={1}
          alignItems="center"
          onClick={onLogin}
        >
          <Avatar
            sx={{ width: '50px', height: '50px' }}
            src={user?.avatar_url}
          />
          <Typography
            sx={{ textTransform: 'uppercase', color: 'grey.800' }}
            variant="h6"
          >{ user?.login || '未登录' }</Typography>
        </Stack>
        <Typography variant='body1' gutterBottom>Scriptore 是一个 Scriptable 脚本仓库</Typography>
        <Typography variant='body1' gutterBottom>在 Scriptable 应用内使用可安装 <Link href='https://raw.githubusercontent.com/Honye/scriptable-scripts/master/dist/Scriptore.js'>Scriptore</Link> 脚本</Typography>
        <Typography variant='body1' gutterBottom>使用浏览器访问时同样需要安装 <Link href='https://raw.githubusercontent.com/Honye/scriptable-scripts/master/dist/Scriptore.js'>Scriptore</Link> 脚本才能正常使用</Typography>
        <Typography variant='body1'>可通过快捷指令快速安装上述脚本。快捷指令除了可安装上述脚本外，还可以通过扫码、分享和剪贴板链接快速安装脚本</Typography>
        <br />
        <Paper>
          <List>
            <ListItem
              sx={{ color: 'inherit' }}
              disablePadding
              component={NextLink}
              href="/upload"
            >
              <ListItemButton>
                <ListItemIcon><CloudUploadIcon /></ListItemIcon>
                <ListItemText primary="上传脚本" />
                <ChevronRightIcon />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
        <Paper sx={{ mt: 2 }}>
          <List>
            <ListItem
              sx={{ color: 'inherit' }}
              disablePadding
              component={Link}
              href='https://scriptore.imarkr.com/cropper'
            >
              <ListItemButton>
                <ListItemIcon><CropIcon /></ListItemIcon>
                <ListItemText primary="背景裁剪" secondary="裁剪图片区域作为组件背景" />
                <ChevronRightIcon />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem
              sx={{ color: 'inherit' }}
              disablePadding
              component={Link}
              href='https://www.icloud.com/shortcuts/feaba7c97d0c4d0e8f60d246d2359402'
            >
              <ListItemButton>
                <ListItemIcon><LayersIcon /></ListItemIcon>
                <ListItemText primary="脚本安装器（快捷指令）" secondary="通过链接分享菜单、剪贴板链接、链接二维码扫描安装脚本" />
                <ChevronRightIcon />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem
              sx={{ color: 'inherit' }}
              disablePadding
              component={Link}
              href='https://github.com/honye/scriptable-scripts'
            >
              <ListItemButton>
                <ListItemIcon><GitHubIcon /></ListItemIcon>
                <ListItemText primary="Honye/scriptable-scripts" />
                <ChevronRightIcon />
              </ListItemButton>
            </ListItem>
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
          <BottomNavigation value={2} />
        </Box>
      </Paper>
    </Box>
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
