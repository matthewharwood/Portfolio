import { html } from "htm/preact";
import {PrimaryButton} from '../buttons';

export const ButtonsGrid = (props) => {

  return html`
    <div className="inline-grid grid-flow-col gap-4" >
      ${props.buttons.map((button) => html`
        <${PrimaryButton} ...${button}/>
      `)}
    </div>
  `;
};

