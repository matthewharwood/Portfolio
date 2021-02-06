import {InitRouter} from './router';
import {HydrateRoot} from './utils/hydrate-root';
import {FadeIn} from './utils/fade_in';
import {HideWhenBottom} from './utils/hide-when-bottom';


function main() {
  InitRouter.createRouter();
  InitRouter.createQuicklinks();
  customElements.define("hydrate-root", HydrateRoot);
  customElements.define("fade-in", FadeIn);
  customElements.define("hide-when-bottom", HideWhenBottom);
}

main();




