import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { useInterval } from "../../hooks/use_interval";
import { useIsVisible } from "../../hooks/use_is_visible";



const AnimatedTextNodeCount = (props) => {
  return html`
    <span className="${props.cn}">${props.count}</span>
  `;
};

const AnimatedTextNodeEdges = (props) => {
  return html`
    <span className="${props.cn}">${props.text}</span>
  `;
};

const AnimatedTextNode = (props) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useIsVisible();

  useInterval(() => {
    if (inView && count !== props.end) {
      setCount(count + props.step);
    }
  }, 80);

  return html`
    <span ref="${ref}" className="pt-20 text-center">
      <${AnimatedTextNodeEdges} cn="${props.classNameEdges}" text="${props.beforeText}"/>
      <${AnimatedTextNodeCount} cn="${props.classNameCount}" count="${count}" />
      <${AnimatedTextNodeEdges} cn="${props.classNameEdges}" text="${props.afterText}" />
    </span>
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
      name: "classNameEdges",
      title: "Class Names Edges",
      type: "string",
    },
    {
      name: "classNameCount",
      title: "Class Names Count",
      type: "string",
    },
  ],
};

export { AnimatedTextNode, animatedTextNode }
