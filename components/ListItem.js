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

  const colors = [
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
  ]

  const bgcolor = colors[Math.floor(Math.random() * colors.length)][400]

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{ borderRadius: 2, bgcolor }}
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
        loading={false}
        onClick={onClick}
      >Install</LoadingButton>
    </ListItem>
  )
}

export default Item;