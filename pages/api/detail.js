import { getRepoContent } from '../../server/github';

/**
 * @type {import('next').NextApiHandler}
 */
const handler = async (req, res) => {
  const { author, name } = req.query;
  const [owner, repo] = process.env.SCRIPTS_REPO.split('/');
  const files = await getRepoContent({
    owner,
    repo,
    ref: process.env.SCRIPTS_BRANCH,
    path: `scriptables/${author}/${name}`
  });
  const detail = {
    files: [],
    snapshots: []
  };
  for (const file of files) {
    const { type, name, download_url } = file;
    if (type === 'file') {
      if (/\.(jpg|jpeg|png|webp)$/i.test(name)) {
        detail.snapshots.push(download_url);
      }
      if (/\.[cm]?js$/i.test(name)) {
        detail.files.push(download_url);
      }
    }
  }
  res.status(200).json(detail);
};

export default handler;
