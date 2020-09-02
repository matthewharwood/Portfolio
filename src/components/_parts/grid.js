const spansList = {
  auto: "auto",
  "span-1": "span 1 / span 1",
  "span-2": "span 2 / span 2",
  "span-3": "span 3 / span 3",
  "span-4": "span 4 / span 4",
  "span-5": "span 5 / span 5",
  "span-6": "span 6 / span 6",
  "span-7": "span 7 / span 7",
  "span-8": "span 8 / span 8",
  "span-9": "span 9 / span 9",
  "span-10": "span 10 / span 10",
  "span-11": "span 11 / span 11",
  "span-12": "span 12 / span 12",
}

const spansDesktopMapped = Object.entries(spansList)
  .map(([key, val]) => ({ title: key, value: `col-${key}` }));

const spansMobileMapped = Object.entries(spansList)
  .splice(0,5)
  .map(([key, val]) => ({ title: key, value: `col-${key}` }));

export const Spans = [
  {
    type: "string",
    name: "colSpanMobile",
    title: "Grid Col Span (Mobile)",
    options: {
      list: [...spansMobileMapped],
    },
  },
  {
    type: "string",
    name: "colSpanDesktop",
    title: "Grid Col Span (Desktop)",
    options: {
      list: [...spansDesktopMapped],
    },
  },
];
