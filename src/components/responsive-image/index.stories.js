import {h} from 'preact';

import {ResponsiveImage} from './';
import {fixtures} from './fixtures';

export default {
  title: 'ResponsiveImages'
};


export const MainAspectRatio = () => {
  return (
    <ResponsiveImage  {...fixtures.MainAspectRatio} />
  );
};

export const MainNoAspectRatio = () => {
  return (
    <ResponsiveImage  {...fixtures.MainNoAspectRatio} />
  );
};

