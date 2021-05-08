import {h} from 'preact';

import {ResponsiveImage} from './';
import {fixtures} from './fixtures';
import {fixtures as fAspectRatio} from '../aspect-ratio/fixtures';

export default {
  title: 'ResponsiveImages'
};


export const MainAspectRatio = () => {
  return (
    <ResponsiveImage  {...fixtures.MainAspectRatio} aspectRatios={fAspectRatio.MainAspectRatio} />
  );
};

export const MainNoAspectRatio = () => {
  return (
    <ResponsiveImage  {...fixtures.MainNoAspectRatio} aspectRatios={fAspectRatio.MainAspectRatio}  />
  );
};

