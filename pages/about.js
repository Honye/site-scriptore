import Head from 'next/head';
import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import BottomNavigation from '../components/BottomNavigation';
import Link from '../components/Link';

const About = () => {

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
        <AvatarGroup max={6}>
          <Avatar sx={{ width: '66px', height: '66px' }} alt='Jun' src='https://w.wallhaven.cc/full/jx/wallhaven-jx811m.png' />
          <Avatar sx={{ width: '66px', height: '66px' }} alt='Jackie' src='https://w.wallhaven.cc/full/9d/wallhaven-9d6wg8.jpg' />
        </AvatarGroup>
        <Typography variant='body1' gutterBottom>Scriptore 是一个 Scriptable 脚本仓库</Typography>
        <Typography variant='body1' gutterBottom>使用浏览器访问时需要安装 <Link href='https://raw.githubusercontent.com/Honye/scriptable-scripts/master/dist/Installer.js'>Installer</Link> 脚本才能正常使用</Typography>
        <Typography variant='body1' gutterBottom>在 Scriptable 应用内使用可安装 <Link href='https://raw.githubusercontent.com/Honye/scriptable-scripts/master/dist/Scriptore.js'>Scriptore</Link> 脚本</Typography>
        <Typography variant='body1'>可通过捷径快速安装上述脚本。捷径除了可安装上述脚本外，还可以扫码、分享和剪贴板链接快速安装脚本</Typography>
        <br />
        <Typography variant='body1'>GitHub：<Link href='https://github.com/honye/scriptable-scripts'>Honye/scriptable-scripts</Link></Typography>
        <Typography variant='body1'>捷径：<Link href='https://www.icloud.com/shortcuts/72468242c20248e786d352580aabbbef'>Install in Scriptable</Link></Typography>
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

export default About;