// const config = require("../../../tailwind.config");
// import * as config from "../../../tailwind.config";

const defaultSpacing = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
};

const otherSpacing = {
  "1/1": "100%",
  "1/2": "50%",
  "80vh": "80vh",
  "1/5": "20%",
  "1/6": "16.6666667",
  "16/9": "56.25%",
};

const spacersMapped = Object.entries({
  ...defaultSpacing,
  ...otherSpacing,
}).map(([key, val]) => ({ title: key, value: key }));

export const SpacerFields = [
  { name: "marginTop", title: "mt desktop", prefix: "lg:mt-" },
  { name: "marginBottom", title: "mb desktop", prefix: "lg:mb-" },
  { name: "marginLeft", title: "ml desktop", prefix: "lg:ml-" },
  { name: "marginRight", title: "mr desktop", prefix: "lg:mr-" },
  { name: "paddingTop", title: "pt desktop", prefix: "lg:pt-" },
  { name: "paddingBottom", title: "pb desktop", prefix: "lg:pb-" },
  { name: "paddingLeft", title: "pl desktop", prefix: "lg:pl-" },
  { name: "paddingRight", title: "pr desktop", prefix: "lg:pr-" },

  { name: "marginTopMobile", title: "mt mobile", prefix: "mt-" },
  { name: "marginBottomMobile", title: "mb mobile", prefix: "mb-" },
  { name: "marginLeftMobile", title: "ml mobile", prefix: "ml-" },
  { name: "marginRightMobile", title: "mr mobile", prefix: "mr-" },
  { name: "paddingTopMobile", title: "pt mobile", prefix: "pt-" },
  { name: "paddingBottomMobile", title: "pb mobile", prefix: "pb-" },
  { name: "paddingLeftMobile", title: "pl mobile", prefix: "pl-" },
  { name: "paddingRightMobile", title: "pr mobile", prefix: "pr-" },
];

export const Spacers = {
  fields: SpacerFields.map((field) => ({
    type: "string",
    name: field.name,
    title: field.title,
    options: {
      list: [...spacersMapped],
    },
    fieldset: "spacer",
  })),
  fieldset: {
    name: "spacer",
    title: "Spacers",
    options: {
      collapsible: true, // Makes the whole fieldset collapsible
      collapsed: true, // Defines if the fieldset should be collapsed by default or not
      columns: 4, // Defines a grid for the fields and how many columns it should have
    },
  }
};

export const generateSpacingClassString = ( props ) => {
  const classString = SpacerFields.map(field => {
    if(props.hasOwnProperty(field.name)){
      return `${field.prefix}${props[field.name]}` 
    }
  }).join(" ");
  return classString;
}

