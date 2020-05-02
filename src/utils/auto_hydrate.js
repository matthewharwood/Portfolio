
import {isClient} from '../utils/which_env';
import {html} from 'htm/preact';

export function autoHydrate(Component, name) {
  if (isClient) {
    return Component;
  }
  return props => html`
    <hydrate-root name=${name} />
    <${Component} ...${props} />
    <script
        type="text/hydration"
        dangerouslySetInnerHTML=${{
      __html: JSON.stringify({props})
    }}
    />
  `;
}