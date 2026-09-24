import { Box, Icon } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

/**
 * iOS 风格的圆角方形脚本图标
 * @param {object} props
 * @param {string} [props.icon] Material Icon 名称
 * @param {string} [props.bgcolor]
 * @param {number} [props.size]
 * @param {object} [props.sx]
 */
const ScriptIcon = (props) => {
  const { icon, bgcolor, size = 52, sx } = props;

  return (
    <Box
      aria-hidden
      sx={{
        flexShrink: 0,
        width: size,
        height: size,
        borderRadius: `${Math.round(size * 0.235)}px`,
        bgcolor: bgcolor || blueGrey[400],
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 0 0 0.5px rgba(0, 0, 0, 0.12)',
        // 图标字形按容器尺寸缩放，sx 覆盖宽高时同步覆盖 fontSize 即可
        fontSize: size,
        ...sx,
      }}
    >
      <Icon style={{ fontSize: '52%' }}>{icon || 'auto_fix_high'}</Icon>
    </Box>
  );
};

export default ScriptIcon;
