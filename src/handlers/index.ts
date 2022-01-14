import resolvers from '../resolvers';

const matchers: Record<string, string> = {
  status: 'status',
};

const handlers: Record<string, () => unknown> = {};

Object.entries(resolvers).forEach(([name, resolver]) => {
  const matcher = matchers[name];
  if (matcher && typeof matcher === 'string') {
    handlers[matcher] = resolver;
  }
});

export default handlers;
