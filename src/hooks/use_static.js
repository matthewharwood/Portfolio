export const useStatic = (path, flags) => {
  if (!path) return;

  let base = 'https://res.cloudinary.com/morningharwood/image/upload/f_auto,q_auto';
  if (path.includes('.mp4')) {
    base = `https://res.cloudinary.com/morningharwood/video/upload/`;
  }
  const f = ',' + flags;
  return `${base}${flags ? f : ''}/${path}`;
};
