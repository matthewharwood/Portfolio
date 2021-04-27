import {decode} from 'universal-base64';

const calculateImageSrcFromCloudinary = (src, flags) => {
  if (!src) return;

  const base = 'https://res.cloudinary.com/morningharwood/image/upload/f_auto,q_auto';
  const cloudinaryFlags = flags ? ',' + flags : '';
  const id = src && src.asset && src.asset.source && src.asset.source.id;

  if (!id) return;

  const decodedId = id ? JSON.parse(decode(id)).public_id : '';
  const path = decodedId + '.' + src.asset.extension;

  return `${base}${cloudinaryFlags}/${path}`;
};

const calculateVideoSrcFromCloudinary = (src, flags) => {
  if (!src && typeof src !== 'string') return;
  const base = 'https://res.cloudinary.com/morningharwood/video/upload/f_auto,q_auto';
  const cloudinaryFlags = flags ? ',' + flags : '';
  return `${base}${cloudinaryFlags}/${src}`;
};

const calculatePostersFromCloudinaryVideo = (src, flags) => {
  if (!src && typeof src === 'string') return;
  const cloudinaryFlags = flags ? ',' + flags : '';
  const base = `https://res.cloudinary.com/morningharwood/video/upload/f_auto,q_auto`;
  const path = src.replace(/\.[^/.]+$/, "");

  return `${base}${cloudinaryFlags}/${path}.jpg`;
}




export {
  calculatePostersFromCloudinaryVideo,
  calculateVideoSrcFromCloudinary,
  calculateImageSrcFromCloudinary,
}
