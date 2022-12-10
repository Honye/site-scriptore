import { useState } from 'react'
import {
  Avatar,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { invoke } from '../utils/bridge';

const Item = (props) => {
  const { data } = props;

  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);

  const listener = (event) => {
    const { code, data } = event.detail;
    if (code === 'install-success' && data.name === props.data.name) {
      window.removeEventListener('JWeb', listener);
      setLoading(false);
      setUpdated(true);
    }
  };

  const update = () => {
    const ua = navigator.userAgent;
    if (/Safari/.test(ua)) {
      location.href = `scriptable:///run/Installer?url=${encodeURIComponent(data.files[0])}`;
    } else {
      setLoading(true);
      window.addEventListener('JWeb', listener);
      invoke('updateScript', data);
    }
  };

  const open = () => {
    const { name } = data;
    location.href = `scriptable:///run/${name}`;
  };

  const onClick = () => {
    if (updated) {
      open();
    } else {
      update();
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
      <ListItemText primary={data.name} secondary={`Version ${data.version || '0.0.0'}`} />
      <LoadingButton
        sx={{ textTransform:'none' }}
        edge='end'
        variant='outlined'
        size='small'
        loading={loading}
        onClick={onClick}
      >{updated ? 'Open' : 'Update'}</LoadingButton>
    </ListItem>
  )
}

export default Item;
