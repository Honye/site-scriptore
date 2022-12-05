import { useState } from 'react'
import {
  Avatar,
  Icon,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
  red,
  purple,
  deepPurple,
  indigo,
  blue,
  cyan,
  teal,
  green,
  amber,
  brown,
  grey,
  blueGrey,
} from '@mui/material/colors';

const Item = (props) => {
  const { data, onClick } = props;

  const [loading, setLoading] = useState(false)

  const listener = (event) => {
    const { code, data } = event.detail
    if (code === 'install-success' && data.name === props.data.name) {
      window.removeEventListener('JWeb', listener)
      setLoading(false)
    }
  }

  const _onClick = () => {
    onClick?.();
    setLoading(true)
    window.addEventListener('JWeb', listener)
  }

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
        onClick={_onClick}
      >Install</LoadingButton>
    </ListItem>
  )
}

export default Item;
