import {h} from 'preact'
import {SectionContainer} from './';
import {fixtures} from './fixtures';

export default {
  title: 'SectionContainer'
}

export const MainSectionContainer = () => {

  return (
    <SectionContainer {...fixtures.MainSectionContainer}>
        <p>hello world</p>
    </SectionContainer>
  );
};
export const MainSectionContainerSecondary = () => {

  return (
    <SectionContainer {...fixtures.MainSectionContainerSecondary}>
        <p>hello world</p>
    </SectionContainer>
  );
};

export const MainSectionContainerTertiary = () => {

  return (
    <SectionContainer {...fixtures.MainSectionContainerTertiary}>
        <p>hello world</p>
    </SectionContainer>
  );
};
