import { argv } from 'process';
import handlers from '../handlers';

export const getArgument = () => {
  const matchers = Object.keys(handlers);
  return argv.find((arg) => !arg.includes('/') || matchers.includes(arg))?.trim();
};
