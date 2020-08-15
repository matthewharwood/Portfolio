import Data from './sanity.json';


export const seed = (type, idx = 0) => {
  return Data.filter(d => d._type === type)[idx];
}