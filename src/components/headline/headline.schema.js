import { Header, UI } from "../_parts/header";
import { Spacers, generateCustomSpacers } from "../_parts/spacer";

const TextSpacers = generateCustomSpacers("text");

export default {
  name: "headline",
  title: "Headline",
  type: "document",
  fieldsets: [Spacers.fieldset, TextSpacers.fieldset],
  fields: [...Spacers.fields, ...TextSpacers.fields, ...Header, ...UI],
};
