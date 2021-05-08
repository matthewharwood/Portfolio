import {h} from 'preact';

import {ResponsiveMedia} from './';
import {fixtures} from './fixtures';
import {SectionContainer} from '../section-container';
import {fixtures as sFixtures} from '../section-container/fixtures';
export default {
  title: 'ResponsiveMedia'
};

export const MainLooping = () => {
  return (
    <SectionContainer {...sFixtures.MainSectionContainer} >
      <ResponsiveMedia  {...fixtures.MainLooping} />
    </SectionContainer>
  );
}
export const MainPlayOnce= () => {
  return (
    <SectionContainer {...sFixtures.MainSectionContainer} >
      <ResponsiveMedia  {...fixtures.MainPlayOnce}  />
    </SectionContainer>
  );
};
export const MainIsControls = () => {
  return (
    <SectionContainer {...sFixtures.MainSectionContainer} >
      <ResponsiveMedia  {...fixtures.MainIsControls}  />
    </SectionContainer>
  );
};

export const MainIsImage = () => {
  return (
    <SectionContainer {...sFixtures.MainSectionContainer} >
      <ResponsiveMedia  {...fixtures.MainIsImage}  />
    </SectionContainer>
  );
};
