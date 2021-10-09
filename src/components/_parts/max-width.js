const maxWidth = {
  212: "53rem",
};

const maxWidthDesktopMapped = Object.entries(maxWidth).map(([key, val]) => ({
  title: key,
  value: `lg:max-w-${key}`,
}));

const maxWidthMobileMapped = Object.entries(maxWidth).map(([key, val]) => ({
  title: key,
  value: `max-w-${key}`,
}));

export const MaxWidths = [
  {
    type: "string",
    name: "maxWidthDesktop",
    title: "Max Width (Desktop)",
    options: {
      list: [...maxWidthDesktopMapped],
    },
  },
  {
    type: "string",
    name: "maxWidthMobile",
    title: "Max Width (Mobile)",
    options: {
      list: [...maxWidthMobileMapped],
    },
  },
];
