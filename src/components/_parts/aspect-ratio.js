const aspectRatios = {
  none: 0,
  square: [1, 1], // or 1 / 1, or simply 1
  "16/9": [16, 9], // or 16 / 9
  "4/3": [4, 3], // or 4 / 3
  "21/9": [21, 9], // or 21 / 9
};

const aspectRatiosMapped = Object.entries(aspectRatios).map(([key, val]) => ({
  title: key,
  value: `aspect-ratio-${key}`,
}));

console.log(aspectRatiosMapped);

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
];
