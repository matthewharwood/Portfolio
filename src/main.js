import {InitRouter} from './router';
import {HydrateRoot} from './utils/hydrate-root';
import {FadeIn} from './utils/fade_in';


function main() {
  InitRouter.createRouter();
  InitRouter.createQuicklinks();
  customElements.define("hydrate-root", HydrateRoot);
  customElements.define("fade-in", FadeIn);
}

main();




