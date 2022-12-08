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
  const { title, list, installedMap = {} } = props;

  return (
    <Paper sx={{ borderRadius: 2 }} elevation={6}>
      <List subheader={
        <ListSubheader disableSticky>{title}</ListSubheader>
      }>
        {(list || []).map((item) => (
          <Item
            key={item.name}
            data={item}
            installed={installedMap[`${item.name}.js`]?.version}
          />
        ))}
      </List>
    </Paper>
  );
}

export default ScriptableList;