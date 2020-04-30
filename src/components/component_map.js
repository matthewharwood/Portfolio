import {RunningHeader} from './running_header';
import {autoHydrate} from '../utils/auto_hydrate';
import {NavigationBar} from './navigation-bar/index'
import {Navigation} from './navigation/index';
import {NavigationItem} from './navigation/item';
import {Boner} from './boner/boner';
export const COMPONENT_MAP = {
  RunningHeader,
  Navigation,
  NavigationItem,
  NavigationBar,
  Boner
}

const AH = {};
for (let i in COMPONENT_MAP) {
  AH[i] = autoHydrate(COMPONENT_MAP[i], i);
}

export {AH};
