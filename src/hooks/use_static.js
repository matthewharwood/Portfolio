export const useStatic = (path, ...flags) => {
  if (!path) return
  let base = `https://res.cloudinary.com/morningharwood/image/upload/${['f_auto','q_auto', ...flags].join(',')}/`;
  if(path.includes('.mp4')) {
    base =  `https://res.cloudinary.com/morningharwood/video/upload/${[...flags].join(',')}/`;
  }
  return `${base}${path}`;
}
