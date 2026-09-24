import { useEffect, useMemo, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { ScriptGroup } from '../components/List';
import Item from '../components/UpdateItem';
import { invoke } from '../utils/bridge';
import { getScripts } from '../server/scripts';
import { compareVersions } from '../utils/utils';

const Empty = ({ title, description, action }) => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      borderRadius: '18px',
      px: 3,
      py: { xs: 6, md: 10 },
      textAlign: 'center',
    }}
  >
    <Typography variant='h6' gutterBottom>{title}</Typography>
    <Typography
      variant='body2'
      color='text.secondary'
      sx={{ maxWidth: 420, mx: 'auto', mb: action ? 3 : 0 }}
    >{description}</Typography>
    {action}
  </Box>
);

const Updates = (props) => {
  const { widgets, modules, others } = props;
  const [installed, setInstalled] = useState(null);

  const updates = useMemo(() => {
    if (!installed) return [];

    const list = [];
    for (const item of installed) {
      const widget = widgets.find((el) => 
        `${el.name}.js` === item.name &&
        compareVersions(el.version || '0.0.0', item.version || '0.0.0') > 0
      );
      if (widget) {
        list.push(widget);
        continue;
      }

      const mod = modules.find((el) =>
        `${el.name}.module.js` === item.name &&
        compareVersions(el.version || '0.0.0', item.version || '0.0.0') > 0
      );
      if (mod) {
        list.push(mod);
        continue;
      }

      const other = others.find((el) =>
        `${el.name}.js` === item.name &&
        compareVersions(el.version || '0.0.0', item.version || '0.0.0') > 0
      );
      if (other) {
        list.push(other);
        continue;
      }
    }
    return list;
  }, [installed, modules, others, widgets]);

  useEffect(() => {
    invoke('getInstalled', {}, (data) => setInstalled(data));
  }, []);

  let content;
  if (!installed) {
    content = (
      <Empty
        title='在 Scriptable 中检查更新'
        description='本页需要读取 iPhone 上已安装的脚本。请在 Scriptable 中运行 Scriptore 脚本打开本页，已安装脚本的新版本会列在这里。'
        action={
          <Button
            variant='contained'
            component={Link}
            href='https://raw.githubusercontent.com/Honye/scriptable-scripts/master/dist/Scriptore.js'
            sx={{ color: '#fff', px: 3 }}
          >获取 Scriptore</Button>
        }
      />
    );
  } else if (!updates.length) {
    content = (
      <Empty
        title='已全部是最新版本'
        description={`已安装的 ${installed.length} 个脚本都没有可用更新。`}
      />
    );
  } else {
    content = (
      <ScriptGroup>
        {updates.map((item) => (
          <Item key={item.name} data={item} />
        ))}
      </ScriptGroup>
    );
  }

  return (
    <Layout
      nav={1}
      title='更新'
      subtitle={updates.length ? `${updates.length} 个脚本有新版本` : undefined}
    >
      {content}
    </Layout>
  );
};

export const getStaticProps = () => {
  return {
    props: getScripts(),
  };
};

export default Updates;
