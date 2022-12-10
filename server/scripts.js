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
import { widgets, modules, others } from '../data/scripts';

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
        ...item,
        bgcolor: randomColor(),
      })),
      modules: modules.map((item) => ({
        ...item,
        bgcolor: randomColor(),
      })),
      others: others.map((item) => ({
        ...item,
        bgcolor: randomColor(),
      })),
    };
  }

  return scripts;
};
