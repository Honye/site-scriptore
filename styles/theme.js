import { createTheme } from '@mui/material/styles';

const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"SF Pro Text"',
  '"PingFang SC"',
  '"Hiragino Sans GB"',
  '"Microsoft YaHei"',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'sans-serif',
].join(',');

/** iOS 系统色，让页面在 Scriptable 内和桌面浏览器中保持同一种语言 */
const tokens = {
  light: {
    primary: '#007AFF',
    background: '#F2F2F7',
    paper: '#FFFFFF',
    text: '#1C1C1E',
    secondary: '#6C6C70',
    divider: 'rgba(60, 60, 67, 0.14)',
    fill: 'rgba(0, 122, 255, 0.1)',
    springboard: '#1E2A3A',
  },
  dark: {
    primary: '#0A84FF',
    background: '#000000',
    paper: '#1C1C1E',
    text: '#F2F2F7',
    secondary: '#98989F',
    divider: 'rgba(84, 84, 88, 0.55)',
    fill: 'rgba(10, 132, 255, 0.18)',
    springboard: '#1C1C1E',
  },
};

export const createAppTheme = (mode) => {
  const t = tokens[mode];

  return createTheme({
    palette: {
      mode,
      primary: { main: t.primary },
      background: { default: t.background, paper: t.paper },
      text: { primary: t.text, secondary: t.secondary },
      divider: t.divider,
      action: { selected: t.fill },
      springboard: t.springboard,
      fill: t.fill,
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily,
      h1: { fontSize: '2.75rem', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15 },
      h4: { fontSize: '2.125rem', fontWeight: 700, letterSpacing: '-0.02em' },
      h5: { fontSize: '1.375rem', fontWeight: 700, letterSpacing: '-0.01em' },
      h6: { fontSize: '1.0625rem', fontWeight: 600 },
      subtitle1: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.35 },
      body1: { fontSize: '1rem', lineHeight: 1.65 },
      body2: { fontSize: '0.875rem', lineHeight: 1.5 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: { root: { borderRadius: 999 } },
      },
      MuiLoadingButton: {
        defaultProps: { disableElevation: true },
      },
      MuiBottomNavigation: {
        styleOverrides: { root: { backgroundColor: 'transparent' } },
      },
    },
  });
};
