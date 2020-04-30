import {RunningHeader} from './running_header';
import {autoHydrate} from '../utils/auto_hydrate';
import {NavigationItem} from './navigation/item';
import {Boner} from './boner/boner';
export const COMPONENT_MAP = {
  RunningHeader,
  NavigationItem,
  Boner
}

const AH = {};
for (let i in COMPONENT_MAP) {
  AH[i] = autoHydrate(COMPONENT_MAP[i], i);
}

export {AH};
