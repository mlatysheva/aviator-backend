import path, { dirname } from 'path';

export const getResolvedPath = (filename, ...paths) => {
  const _dirname = dirname(filename);
  const resolvedPath = path.join(_dirname, ...paths);
  return resolvedPath;
}