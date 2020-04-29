import {html} from '../utils';
import {isClient} from '../utils/which_env';

export function autoHydrate(Component, name) {
  if (isClient) {
    return Component;
  }
  return props => html`
    <component-root name=${name} />
    <${Component} ...${props} />
    <script
        type="text/hydration"
        dangerouslySetInnerHTML=${{
      __html: JSON.stringify({props})
    }}
    />
  `;
}