import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react'
import {
  Avatar,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const Item = (props) => {
  const { data } = props;

  const [installed, setInstalled] = useState(props.installed);
  const [loading, setLoading] = useState(false);

  useEffect(() => setInstalled(props.installed), [props.installed])

  const invoke = (code, data) => {
    window.dispatchEvent(
      new CustomEvent(
        'JBridge',
        { detail: { code, data } }
      )
    )
  };

  const listener = useCallback((event) => {
    const { code, data } = event.detail
    if (code === 'install-success' && data.name === props.data.name) {
      window.removeEventListener('JWeb', listener);
      setInstalled(true);
      setLoading(false)
    }
  }, [props.data.name]);

  const install = useCallback(async () => {
    const { author, name, type } = data;
    let script = data;
    if (author) {
      const detail = await fetch(`/api/detail?author=${author}&name=${name}${type === 'module' ? '.module' : ''}`)
        .then((resp) => resp.json());
      script = {...detail, ...data};
    }

    const ua = navigator.userAgent;
    if (/Safari/.test(ua)) {
      location.href = `scriptable:///run/Installer?url=${encodeURIComponent(script.files[0])}`;
    } else {
      setLoading(true);
      window.addEventListener('JWeb', listener);
      invoke('install', script);
    }
  }, [data, listener]);

  const open = () => {
    const { type, name } = data;
    location.href = type === 'module'
      ? `scriptable:///open/${encodeURIComponent(`${name}.module`)}`
      : `scriptable:///run/${encodeURIComponent(name)}`;
  };

  const onClick = () => {
    if (installed) {
      open();
    } else {
      install();
    }
  };

  return (
    <ListItem
      sx={{
        '>.MuiListItemButton-root': {
          pr: 11
        }
      }}
      secondaryAction={
        <LoadingButton
          edge='end'
          variant='outlined'
          size='small'
          loading={loading}
          onClick={onClick}
        >{installed ? '打开' : '获取'}</LoadingButton>
      }
      disablePadding
    >
      <ListItemButton
        component={Link}
        href={
          data.author
          ? `/scriptables/${data.author}/${data.name}${data.type === 'module' ? '.module' : ''}`
          : `/scriptables/${data.name}`
        }
      >
        <ListItemAvatar>
          <Avatar
            sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: data.bgcolor }}
            variant='square'
          >
            <Icon>{data.icon || 'auto_fix_high'}</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={data.name} secondary={data.intro} />
      </ListItemButton>
    </ListItem>
  )
}

export default Item;
