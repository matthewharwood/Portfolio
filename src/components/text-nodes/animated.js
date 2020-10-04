import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { useInterval } from "../../hooks/use_interval";
import { useIsVisible } from "../../hooks/use_is_visible";

const AnimatedTextNode = ({ beforeText="", afterText, start, end, step, className=""}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useIsVisible();
  useInterval(() => {
    if (inView && count !== end) {
      setCount(count + step);
    }
  }, 80);
  return html`
    <span ref="${ref}" className="${className}">${beforeText}${count}${afterText}</span>
  `
}

const animatedTextNode = {
  name: "animatedTextNode",
  title: "Animated Text Node",
  type: "document",
  fields: [
    {
      type: "string",
      name: "beforeText",
      title: "Before Text",
    },
    {
      type: "number",
      name: "start",
      title: "Start",
    },
    {
      type: "number",
      name: "end",
      title: "End",
    },
    {
      type: "number",
      name: "step",
      title: "Step",
    },
    {
      type: "string",
      name: "afterText",
      title: "After Text",
    },
    {
      name: "className",
      title: "Class Names",
      type: "string",
    },
  ],
};

export { AnimatedTextNode, animatedTextNode }
