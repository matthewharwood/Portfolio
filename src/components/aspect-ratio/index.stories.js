import {h} from 'preact';
import {AspectRatioBox} from './';
import {fixtures} from './fixtures';
import {fixtures as fSectionContainer} from '../section-container/fixtures';
import {SectionContainer} from '../section-container';
export default {
  title: 'Aspect Ratio'
}


export const MainAspectRatio = () => {
  return (
    <SectionContainer {...fSectionContainer.MainSectionContainerTertiary}>
      <AspectRatioBox {...fixtures.MainAspectRatio}>
        <p>Hello Wolrd</p>
      </AspectRatioBox>
    </SectionContainer>
  )
};
