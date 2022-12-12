import { useState } from 'react'
import {
  Avatar,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemButton,
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
    location.href = type === 'module'
      ? `scriptable:///open/${encodeURIComponent(`${name}.module`)}`
      : `scriptable:///run/${encodeURIComponent(name)}`;
  };

  const onClick = () => {
    if (updated) {
      open();
    } else {
      update();
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
          sx={{ textTransform:'none' }}
          edge='end'
          variant='outlined'
          size='small'
          loading={loading}
          onClick={onClick}
        >{updated ? '打开' : '更新'}</LoadingButton>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: data.bgcolor }}
            variant='square'
          >
            <Icon>{data.icon || 'auto_fix_high'}</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={data.name} secondary={`版本 ${data.version || '0.0.0'}`} />
      </ListItemButton>
    </ListItem>
  )
}

export default Item;
