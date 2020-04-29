import {html} from './preact';
import {NavigationItem} from './navigation/mod.js';
import {RunningHeader} from './running_header/running_header';
import {Boner} from './boner/boner';
import {Marquee} from './boner/marquee';
import {isClient} from '../utils/which_env';

function autoHydrate(Component, name) {
  if (isClient) {
    return Component;
  }

  return props => html`
    <component-root name=${name} />
    <${Component} ...${props} />
    <script
      type="text/hydration"
      dangerouslySetInnerHTML=${{
    __html: JSON.stringify({ props })
  }}
    />
  `;
}

const COMPONENT_MAP = {
  NavigationItem,
  Marquee,
  RunningHeader,
  Boner,
}

const AH = {};
for (let i in COMPONENT_MAP) {
  AH[i] = autoHydrate(COMPONENT_MAP[i], i);
}
export {AH};
