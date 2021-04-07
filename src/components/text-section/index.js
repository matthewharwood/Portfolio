import { html } from "htm/preact";
import { Spacer } from '../spacer'
import {generateSpacingClassString, SpacingContainer} from '../_parts/spacer';
import { TextContainer } from '../text-container';

const TextSection = (props) => {
  const textNodes = props.body || [];
  return html`
    <${SpacingContainer} ...${props}>
      <section className="container ">
        <${TextContainer} ...${textNodes}/>
      </section>
    <//>
  `;
};

export { TextSection };

