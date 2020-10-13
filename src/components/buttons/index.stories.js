import {h} from 'preact';

import {PrimaryButton} from './';

export default {
  title: 'Primary Button'
};

export const MainButton = () => {
  return (
      <PrimaryButton  />
  )
};


export const MainAnchor = () => {
  return (
    <PrimaryButton href={'https://www.uber.com'} target={'_blank'}/>
  )
};
