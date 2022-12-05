import {
  Paper,
  List,
  ListSubheader,
} from '@mui/material';
import Item from './ListItem';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {any[]} props.list
 */
const ScriptableList = (props) => {
  const { title, list } = props;

  const invoke = (code, data) => {
    window.dispatchEvent(
      new CustomEvent(
        'JBridge',
        { detail: { code, data } }
      )
    )
  };

  const install = (data) => {
    invoke('install', data)
  };

  return (
    <Paper sx={{ borderRadius: 2 }} elevation={6}>
      <List subheader={
        <ListSubheader disableSticky>{title}</ListSubheader>
      }>
        {(list || []).map((item) => (
          <Item key={item.name} data={item} onClick={() => install(item)} />
        ))}
      </List>
    </Paper>
  );
}

export default ScriptableList;