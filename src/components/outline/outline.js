import {html} from 'htm/preact';
import {OutlineList} from './list';
import {SpacingContainer} from '../_parts/spacer';


const Outline = (props) => {
  const title = props && props.title || 'default title';
  const hasDescriptions = props.hasDescriptions ? ['lg:col-span-4', 'lg:col-span-8'] :  ['lg:col-span-6', 'lg:col-span-6']
  return html`
    <${SpacingContainer} ...${props} name="Outline">
      <section>
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-12 ${hasDescriptions[0]} flex items-center lg:block lg:items-start mb-10 lg:mb-0">
            <h3 className="text-4xl font-mono flex-shrink-0 leading-none">${title}</h3>
          </div>
          <div className="col-span-12 mt-2 pt-1 ${hasDescriptions[1]}">
            <${OutlineList} ...${props} />
          </div>
        </div>
      </section>
    </SpacingContainer>
  `;
};


export {Outline};
