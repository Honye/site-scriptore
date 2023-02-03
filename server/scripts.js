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
import { getRepoContent, getTree } from './github';
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
    };
  }

  return scripts;
};

const getScriptable = async ({ author, name }) => {
  return getRepoContent(
    {
      owner: 'Honye',
      repo: 'applets-fly.io',
      path: `scriptables/${author}/${name}/scriptable.json`
    },
    {
      headers: {
        accept: 'application/vnd.github.raw+json',
      }
    });
};

const getRemoveScripts = async () => {
  const { tree } = await getTree({
    owner: 'Honye',
    repo: 'applets-fly.io',
    treeSHA: 'develop',
    recursive: '1'
  });
  const ret = {
    widgets: [],
    modules: [],
    others: []
  };
  for (const [i, item] of tree.entries()) {
    const matched = item.path.match(/^scriptables\/([^/]+)\/([^/]+)$/);
    if (matched) {
      const [, author, name] = matched;
      getScriptable({ author, name }).then((data) => {
        if (/\.module$/.test(name)) {
          ret.modules.push({
            type: 'module',
            name: name.replace(/\.module$/, ''),
            ...data
          });
        } else {
          ret.widgets.push({
            type: 'widget',
            name,
            ...data
          });
        }
      })
    }
  }
};
