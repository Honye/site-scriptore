import { useState } from 'react'
import {
  Avatar,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const Item = (props) => {
  const { data } = props;

  const [loading, setLoading] = useState(false);

  const invoke = (code, data) => {
    window.dispatchEvent(
      new CustomEvent(
        'JBridge',
        { detail: { code, data } }
      )
    )
  };

  const listener = (event) => {
    const { code, data } = event.detail
    if (code === 'install-success' && data.name === props.data.name) {
      window.removeEventListener('JWeb', listener)
      setLoading(false)
    }
  };

  const install = () => {
    const ua = navigator.userAgent;
    if (/Safari/.test(ua)) {
      location.href = `scriptable:///run/Installer?url=${encodeURIComponent(data.files[0])}`;
    } else {
      setLoading(true);
      window.addEventListener('JWeb', listener);
      invoke('install', data);
    }
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{ borderRadius: 2, bgcolor: data.bgcolor }}
          variant='square'
        >
          <Icon>{data.icon || 'auto_fix_high'}</Icon>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={data.name} secondary={data.intro} />
      <LoadingButton
        sx={{ textTransform:'none' }}
        edge='end'
        variant='outlined'
        size='small'
        loading={loading}
        onClick={install}
      >Install</LoadingButton>
    </ListItem>
  )
}

export default Item;
