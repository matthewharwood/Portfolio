import {RunningHeader} from './running_header';
import {autoHydrate} from '../utils/auto_hydrate';

export const COMPONENT_MAP = {
  RunningHeader
}

const AH = {};
for (let i in COMPONENT_MAP) {
  AH[i] = autoHydrate(COMPONENT_MAP[i], i);
}

export {AH};
