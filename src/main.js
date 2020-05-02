import {InitRouter} from './router';
import {HydrateRoot} from './hydrate-root';


function main() {
  InitRouter.createRouter();
  InitRouter.createQuicklinks();
  customElements.define("hydrate-root", HydrateRoot);
}

main();




