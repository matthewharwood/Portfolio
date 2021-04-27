import {html} from 'htm/preact';
import {ConditionalWrapper} from '../conditional-wrapper';

export const SectionContainer = (props) => {
  const {
    paddingClasses,
    backgroundColorClasses,
    textColorClasses,
    displayClasses,
    marginClasses,
    boxSizing,
    positionClasses,
    placementClasses,

    hasContainer,
    hasFadeIn,
  } = props;
  const classNames = [
    paddingClasses,
    backgroundColorClasses,
    textColorClasses,
    displayClasses,
    marginClasses,
    boxSizing,
    positionClasses,
    placementClasses,
  ].join(' ');
  // TODO (harwood) make this work for all different theme types.
  // TODO (harwood) make this work for cards.
  // TODO (harwood) maybe make this have some other transitions
  return html`
    <section className="${classNames}" data-title="${props.title}">
      <${ConditionalWrapper}
        condition=${hasContainer}
        wrapper=${({children}) => html`
          <div className="container">${children}</div>
          `
        }
      >
        <${ConditionalWrapper}
          condition=${hasFadeIn}
          wrapper=${({children}) => html`
            <fade-in>${children}</fade-in>
          `
          }
        >
        ${props.children}
        <//>
      <//>
    </section>
  `;
};
