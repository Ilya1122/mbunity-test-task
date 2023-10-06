export const checkActivePath = (path: string) => {
  return path?.split('/')?.[1] ? path?.split('/')?.[1] : '/';
};
