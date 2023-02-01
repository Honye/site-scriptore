import formidable from 'formidable';
import fs from 'fs';
import {
  createBlob,
  createCommit,
  createTree,
  fetchUser,
  getTree,
  updateReference,
} from '../../server/github';

/** @type {import('next').PageConfig} */
export const config = {
  api: {
    bodyParser: false
  }
}

/** @type {import('next').NextApiHandler} */
const main = async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).send('请先在关于页登录');
  }

  const user = await fetchUser({ token });

  const form = formidable({ multiples: true });
  /** @type {formidable.File | formidable.File[]} */
  const [fields, formFile] = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, { file }) => {
      if (err) reject(err);
      resolve([fields, file]);
    });
  });
  const files = Array.isArray(formFile) ? formFile : [formFile];
  const repo = { owner: 'Honye', repo: 'applets-fly.io' };
  const folder = files[0].originalFilename.replace(/\.\w+$/, '');
  const [baseTree, ...blobs] = await Promise.all([
    getTree({ ...repo, treeSHA: 'develop' }),
    // 上传 author.json
    createBlob({
      ...repo,
      content: JSON.stringify({
        avatarUrl: user.avatar_url,
        bio: user.bio,
        login: user.login,
        name: user.name,
        email: user.email,
        blog: user.blog
      }),
      encoding: 'utf-8'
    }).then((blob) => ({
      path: `scriptables/${user.login}/author.json`,
      mode: '100644',
      type: 'blob',
      sha: blob.sha
    })),
    // 上传源文件
    ...files.map(async (file) => {
      const base64str = fs.readFileSync(file.filepath).toString('base64');
      const blob = await createBlob({ ...repo, content: base64str, encoding: 'base64' });
      return {
        path: `scriptables/${user.login}/${folder}/${file.originalFilename}`,
        mode: '100644',
        type: 'blob',
        sha: blob.sha
      };
    }),
    // 上传 scriptable.json
    createBlob({
      ...repo,
      content: JSON.stringify({
        version: fields.version || '0.0.0',
        brief: fields.brief || '',
        description: fields.description || '',
        whatIsNew: fields.whatIsNew || '',
      }),
      encoding: 'utf-8'
    }).then((blob) => ({
      path: `scriptables/${user.login}/${folder}/scriptable.json`,
      mode: '100644',
      type: 'blob',
      sha: blob.sha
    }))
  ]);
  const tree = await createTree({
    ...repo,
    base_tree: baseTree.sha,
    tree: blobs
  });
  const commit = await createCommit({
    ...repo,
    message: `scriptable: ${folder} v${fields.version || '0.0.0'}`,
    tree: tree.sha,
    parents: [baseTree.sha],
    author: {
      name: user.name,
      email: user.email
    },
  });
  const reference = await updateReference({
    ...repo,
    ref: 'heads/develop',
    sha: commit.sha
  });

  res.status(200).send('Dear! You are goog.')
};

export default main;
