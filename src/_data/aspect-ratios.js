const ASPECT_RATIOS = {
  none: 0,
  square: [1, 1],
  "9/16": [9, 16],
  "16/9": [16, 9],
  "4/3": [4, 3],
  "4/5": [4, 5],
  '3/4': [3, 4],
  "21/9": [21, 9],
  '3/2': [3, 2],
  '2/1': [2, 1],
  '6/1': [6, 1],
  '6/7': [6, 7],
  '5/2': [5,2],
};
function calcForSanity(tailwindClassName) {
  return Object.entries(ASPECT_RATIOS).map(([key, val]) => {
    return {
      title: key,
      value: `${tailwindClassName}-${key}`
    }
  })
}

module.exports = {
  ASPECT_RATIOS,
  calcForSanity
};
