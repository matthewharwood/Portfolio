import { html } from "htm/preact";
import { MediaNew } from "../media/media";
import { TextContainer } from "../text-container";
import {generateSpacingClassString} from '../_parts/spacer';

const SandWichLayout = (props) => {
  const {leftMedia, rightMedia, mobileMedia, textNodes} = props;
  const spacingClasses = generateSpacingClassString(props);
  return html`
    <section data-comp-name="sandwhich-layout" className="flex flex-col lg:flex-row items-center relative ${spacingClasses}">
      <div className="h-full w-full hidden lg:flex z-0 absolute inset-0">
        <div className="w-full">
          <${MediaNew} ...${leftMedia} className="w-full object-cover object-right"/>
        </div>
        <div className="flex-shrink-0 container flex items-center justify-center text-center">
        </div>
        <div className="w-full">
          <${MediaNew} ...${rightMedia} alt="" className="w-full object-cover object-left"/>
        </div>
      </div>
      <div className="relative z-10 min-h-64 w-full flex justify-center items-center">
        <div className="container text-center">
          <${TextContainer} nodes="${textNodes.nodes}"/>
        </div>
      </div>
      <div className="container lg:hidden mt-8">
        <${MediaNew} ...${mobileMedia} alt="" className="mx-auto"/>
      </div>
    </section>
  `;
};

export { SandWichLayout }
