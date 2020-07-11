import Data from './sanity.json';


export const seed = (type) => {
  return Data.filter(d => d._type === type)[0];
}