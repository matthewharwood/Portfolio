export default {
  name: "sandwichLayout",
  title: "SandWich Layout",
  type: "document",
  fields: [
    {
      name: "leftMedia",
      title: "Left Media",
      type: "reference",
      to: [{ type: "media" }]
    },
    {
      name: "rightMedia",
      title: "Right Media",
      type: "reference",
      to: [{ type: "media" }]
    },
    {
      name: "mobileMedia",
      title: "Mobile Media",
      type: "reference",
      to: [{ type: "media" }]
    },
    {
      type: "textContainer",
      name: "textContainer",
      title: "Text Container",
    },
  ],
};
