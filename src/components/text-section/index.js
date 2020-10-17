import { html } from "htm/preact";
import { Spacer } from '../spacer'
import { generateSpacingClassString } from '../_parts/spacer';
import { TextContainer } from '../text-container';

const TextSection = (props) => {
  const textNodes = props.body || [];
  const spacingClasses = generateSpacingClassString(props);
  return html`
    <section className="container px-5 lg:px-16 ${spacingClasses}">
      <${TextContainer} ...${textNodes}/>
    </section>
  `;
};

export { TextSection };

