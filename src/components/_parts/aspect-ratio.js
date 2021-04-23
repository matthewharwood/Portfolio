const aspectRatios = {
  none: 0,
  square: [1, 1],
  "9/16": [9, 16],
  "16/9": [16, 9],
  "4/3": [4, 3],
  "4/5": [4, 5],
  '3/4': [3, 4],
  '5/2': [5, 2],
  "21/9": [21, 9],
  '3/2': [3, 2],
  '2/1': [2, 1],
  '6/1': [6, 1],
  '6/7': [6, 7],
};

const aspectRatiosMapped = Object.entries(aspectRatios).map(([key, val]) => ({
  title: key,
  value: `lg:aspect-ratio-${key}`,
}));

const aspectRatiosMobileMapped = Object.entries(aspectRatios).map(([key, val]) => ({
  title: key,
  value: `aspect-ratio-${key}`,
}));

export const AspectRatios = [
  {
    type: "string",
    name: "aspectRatio",
    title: "Aspect Ratio",
    options: {
      list: [...aspectRatiosMapped],
      layout: "radio",
      direction: "horizontal",
    },
  },
  {
    type: "string",
    name: "aspectRatioMobile",
    title: "Aspect Ratio Mobile",
    options: {
      list: [...aspectRatiosMobileMapped],
      layout: "radio",
      direction: "horizontal",
    },
  },
];
