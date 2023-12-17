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
import { widgets, modules, others, deprecated } from '../data/scripts';

export const colors = [
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
];

let scripts;
export const getScripts = () => {
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)][400];

  if (!scripts) {
    scripts = {
      widgets: widgets.map((item) => ({
        type: 'widget',
        bgcolor: randomColor(),
        ...item,
      })),
      modules: modules.map((item) => ({
        type: 'module',
        bgcolor: randomColor(),
        ...item,
      })),
      others: others.map((item) => ({
        type: 'other',
        bgcolor: randomColor(),
        ...item,
      })),
      deprecated: deprecated.map((item) => ({
        type: 'deprecated',
        bgcolor: randomColor(),
        ...item,
      })),
    };
  }

  return scripts;
};
