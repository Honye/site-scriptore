import nodeFetch from 'node-fetch';
import HttpsProxyAgent from 'https-proxy-agent';

const fetch = (...args) => {
  const [url = '', options = {} ] = args;
  const { headers, otherOptions } = options;
  const httpProxy = process.env.http_proxy;
  return nodeFetch(
    new URL(url, 'https://api.github.com').href,
    {
      agent: httpProxy ? new HttpsProxyAgent(httpProxy) : null,
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        accept: 'application/vnd.github.v3+json',
        ...headers,
      },
      ...otherOptions,
    },
  );
};

export const fetchUser = ({ token }) => {
  return fetch('/user', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
