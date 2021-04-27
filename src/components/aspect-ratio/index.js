import {html} from 'htm/preact';
import {ConditionalWrapper} from '../conditional-wrapper';

const AspectRatioBox = (props) => {
  const hasAspectRatios = props.defaultAspectRatio || props.lgAspectRatio;
  return html`
    <${ConditionalWrapper}
      condition=${hasAspectRatios}
      wrapper=${
        ({children}) => html`
          <div className="relative">
            <div className="${props.defaultAspectRatio} ${props.lgAspectRatio} relative">
              ${children}
            </div>
          </div>
        `
      }>
      ${props.children}
    <//>
  `;
};

export {
  AspectRatioBox
};
