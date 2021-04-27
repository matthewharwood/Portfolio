import {h} from 'preact';

import {ResponsiveMedia} from './';
import {fixtures} from './fixtures';

export default {
  title: 'ResponsiveMedia'
};

export const MainLooping = () => {
  return (
    <div className={'container'}>
      <ResponsiveMedia  {...fixtures.MainLooping} />
    </div>
  );
}
export const MainPlayOnce= () => {
  return (
    <div className={'container'}>
      <ResponsiveMedia  {...fixtures.MainPlayOnce}  />
    </div>
  );
};
export const MainIsControls = () => {
  return (
    <div className={'container'}>
      <ResponsiveMedia  {...fixtures.MainIsControls}  />
    </div>
  );
};

export const MainIsImage = () => {
  return (
    <div className={'container'}>
      <ResponsiveMedia  {...fixtures.MainIsImage}  />
    </div>
  );
};
