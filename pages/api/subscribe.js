import { widgets, modules, others } from '../../data/scripts';

/**
 * @type {import('next').NextApiHandler}
 */
const handler = (req, res) => {
  const apps = [];
  for (const widget of widgets) {
    apps.push({
      version: widget.version || '1.0.0',
      description: widget.intro || '',
      scriptURL: widget.files[0],
      thumb: widget.snapshots?.[0] || 'https://avatars.githubusercontent.com/u/19296374?v=4',
      name: widget.name,
      title: widget.name,
      html: (widget.content || '').split('\n')
    });
  }
  for (const mod of modules) {
    apps.push({
      version: mod.version || '1.0.0',
      description: mod.intro || '',
      scriptURL: mod.files[0],
      thumb: 'https://avatars.githubusercontent.com/u/19296374?v=4',
      name: mod.name,
      title: mod.name,
      html: []
    })
  }
  for (const other of others) {
    apps.push({
      version: other.version || '1.0.0',
      description: other.intro || '',
      scriptURL: other.files[0],
      thumb: other.snapshots?.[0] || 'https://avatars.githubusercontent.com/u/19296374?v=4',
      name: other.name,
      title: other.name,
      html: other.content ? other.content.split('\n') : []
    })
  }
  const result = {
    author: 'Honye',
    scriptable: true,
    icon: 'https://avatars.githubusercontent.com/u/19296374?v=4',
    repo: 'https://github.com/Honye/scriptable-scripts',
    apps,
  };
  res.status(200).json(result);
};

export default handler;
