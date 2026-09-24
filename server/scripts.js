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

/**
 * 根据脚本名得到固定的图标底色，保证列表页与详情页颜色一致
 * @param {string} name
 */
export const colorOf = (name) => {
  let hash = 0;
  for (const char of name) {
    hash = (hash * 31 + char.charCodeAt(0)) | 0;
  }
  return colors[Math.abs(hash) % colors.length][400];
};

let scripts;
export const getScripts = () => {
  if (!scripts) {
    scripts = {
      widgets: widgets.map((item) => ({
        type: 'widget',
        bgcolor: colorOf(item.name),
        ...item,
      })),
      modules: modules.map((item) => ({
        type: 'module',
        bgcolor: colorOf(item.name),
        ...item,
      })),
      others: others.map((item) => ({
        type: 'other',
        bgcolor: colorOf(item.name),
        ...item,
      })),
      deprecated: deprecated.map((item) => ({
        type: 'deprecated',
        bgcolor: colorOf(item.name),
        ...item,
      })),
    };
  }

  return scripts;
};
