import {h} from 'preact'
import {SectionContainer} from './';
import {ConditionalWrapper} from '../conditional-wrapper';

export default {
  title: 'SectionContainer'
}
const FIXTURES = {
  paddingClasses: 'py-12 px-8 lg:py-48 lg:px-5',
  backgroundColorClasses: 'bg-primary',
  textColorClasses: 'text-on-primary',
  displayClasses: 'flex',
  marginClasses: 'mx-auto',
  boxSizing: 'border-box',
  positionClasses: 'relative',
  placementClasses: '',

  hasContainer: true,
  hasFadeIn: true,
}
export const Main = () => {

  return (
    <SectionContainer {...FIXTURES}>
        <p>hello world</p>
    </SectionContainer>
  );
};
