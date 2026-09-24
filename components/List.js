import { Box, Stack, Typography } from '@mui/material';
import Item from './ListItem';

/**
 * 分组卡片，内部为自适应列数的脚本网格
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export const ScriptGroup = ({ children }) => (
  <Box sx={{ bgcolor: 'background.paper', borderRadius: '18px', overflow: 'hidden' }}>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
        // 隐藏第一行的分隔线
        mt: '-1px',
      }}
    >
      {children}
    </Box>
  </Box>
);

/**
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.title
 * @param {any[]} props.list
 * @param {any[]} [props.installedList]
 * @param {boolean} [props.muted]
 */
const ScriptableList = (props) => {
  const { id, title, list, installedList = [], muted } = props;

  if (!list?.length) return null;

  return (
    <Box component='section' id={id} sx={{ scrollMarginTop: { xs: 16, md: 136 } }}>
      <Stack
        direction='row'
        alignItems='baseline'
        justifyContent='space-between'
        sx={{ px: { xs: 0.5, md: 0 }, mb: 1.25 }}
      >
        <Typography variant='h5' component='h2'>{title}</Typography>
        <Typography variant='body2' color='text.secondary'>{list.length} 个</Typography>
      </Stack>
      <ScriptGroup>
        {list.map((item) => (
          <Item
            key={item.name}
            data={item}
            muted={muted}
            installed={installedList.find((el) =>
              item.type === 'module'
                ? el.name === `${item.name}.module.js`
                : el.name === `${item.name}.js`
            )}
          />
        ))}
      </ScriptGroup>
    </Box>
  );
}

export default ScriptableList;
