import NextLink from 'next/link';
import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ScriptIcon from './ScriptIcon';

/** App Store 风格的「获取 / 打开 / 更新」胶囊按钮 */
export const PillButton = (props) => {
  const { sx, ...restProps } = props;

  return (
    <LoadingButton
      size='small'
      sx={{
        minWidth: 68,
        px: 2,
        py: 0.375,
        fontWeight: 700,
        bgcolor: 'fill',
        color: 'primary.main',
        '&:hover': { bgcolor: 'fill', filter: 'brightness(0.95)' },
        ...sx,
      }}
      {...restProps}
    />
  );
};

/**
 * 脚本列表中的一行：点击整行进入详情，右侧为操作按钮
 * @param {object} props
 * @param {import('../data/scripts').Script} props.data
 * @param {React.ReactNode} [props.secondary]
 * @param {React.ReactNode} props.action
 * @param {boolean} [props.muted]
 */
const ScriptTile = (props) => {
  const { data, secondary, action, muted } = props;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        px: 2,
        py: 1.25,
        transition: 'background-color 120ms',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 80,
          right: 0,
          borderTop: '1px solid',
          borderColor: 'divider',
        },
        '&:hover': { bgcolor: 'action.hover' },
        '&:focus-within': { bgcolor: 'action.hover' },
      }}
    >
      <ScriptIcon
        icon={data.icon}
        bgcolor={data.bgcolor}
        sx={muted ? { filter: 'grayscale(0.6)', opacity: 0.7 } : undefined}
      />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant='subtitle1'
          component={NextLink}
          href={`/scriptables/${encodeURIComponent(data.name)}`}
          noWrap
          sx={{
            display: 'block',
            outline: 'none',
            // 让整行都可点击进入详情
            '&::after': { content: '""', position: 'absolute', inset: 0 },
            '&:focus-visible::after': {
              outline: '2px solid',
              outlineColor: 'primary.main',
              outlineOffset: '-2px',
            },
          }}
        >{data.name}</Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >{secondary ?? data.intro}</Typography>
      </Box>
      <Box sx={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>{action}</Box>
    </Box>
  );
};

export default ScriptTile;
