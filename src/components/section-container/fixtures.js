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


export const fixtures = {
  MainSectionContainer: FIXTURES,
  MainSectionContainerSecondary: {...FIXTURES, backgroundColorClasses: 'bg-secondary', textColorClasses: 'text-on-secondary'},
  MainSectionContainerTertiary: {...FIXTURES, backgroundColorClasses: 'bg-tertiary', textColorClasses: 'text-on-tertiary'}
}
