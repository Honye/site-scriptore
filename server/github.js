import nodeFetch from 'node-fetch';
import HttpsProxyAgent from 'https-proxy-agent';

const fetch = async (...args) => {
  const [url = '', options = {} ] = args;
  const { headers, ...otherOptions } = options;
  const httpProxy = process.env.http_proxy;
  const resp = await nodeFetch(
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
  if (resp.ok) return resp.json();
  return Promise.reject(await resp.json());
};

export const fetchUser = ({ token }) => {
  return fetch('/user', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const createBlob = async (params) => {
  const { owner, repo, ...data } = params;
  return fetch(`/repos/${owner}/${repo}/git/blobs`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export const createCommit = async (params) => {
  const { owner, repo, ...data } = params;
  return fetch(`/repos/${owner}/${repo}/git/commits`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export const createTree = async (params) => {
  const { owner, repo, ...data } = params;
  return fetch(`/repos/${owner}/${repo}/git/trees`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export const getTree = async (params) => {
  const { owner, repo, treeSHA, ...data } = params;
  const searchParams = new URLSearchParams(data);
  return fetch(`/repos/${owner}/${repo}/git/trees/${treeSHA}?${searchParams.toString()}`);
};

export const updateReference = async (params) => {
  const { owner, repo, ref, ...data } = params;
  return fetch(`/repos/${owner}/${repo}/git/refs/${ref}`, {
    method: 'PATCH',
    body: JSON.stringify(data)
  });
};

export const getRepoContent = async (params, options) => {
  const { owner, repo, path, ...data } = params;
  const searchParams = new URLSearchParams(data);
  return fetch(`/repos/${owner}/${repo}/contents/${path}?${searchParams.toString()}`, options);
};