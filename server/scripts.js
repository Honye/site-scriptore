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
/**
 * @returns {Record<'widgets'|'modules'|'others', import('../data/scripts').Script[]>}
 */
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
  const [owner, repo] = process.env.SCRIPTS_REPO.split('/');
  return getRepoContent(
    {
      owner,
      repo,
      ref: process.env.SCRIPTS_BRANCH,
      path: `scriptables/${author}/${name}/scriptable.json`
    },
    {
      headers: {
        accept: 'application/vnd.github.raw+json',
      }
    }
  );
};

export const getRemoteScripts = async () => {
  const [owner, repo] = process.env.SCRIPTS_REPO.split('/');
  const { tree } = await getTree({
    owner,
    repo,
    treeSHA: process.env.SCRIPTS_BRANCH,
    recursive: '1'
  });
  const ret = {
    widgets: [],
    modules: [],
    others: []
  };
  const scriptablePromises = []
  for (const [i, item] of tree.entries()) {
    const matched = item.path.match(/^scriptables\/([^/]+)\/([^/]+)$/);
    if (matched && item.type === 'tree') {
      const [, author, name] = matched;
      scriptablePromises.push(
        getScriptable({ author, name }).then((data) => {
          const info = {
            name: name.replace(/\.module$/, ''),
            icon: 'auto_fix_high',
            author,
            ...data
          };
          if (/\.module$/.test(name)) {
            info.type = 'module';
            ret.modules.push(info);
          } else {
            info.type = 'widget';
            ret.widgets.push(info);
          }
        })
      )
    }
  }
  await Promise.all(scriptablePromises)
  return ret;
};
