import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { useInterval } from "../../../hooks/use_interval";
import { useIsVisible } from "../../../hooks/use_is_visible";

const AnimatedTextNode = ({ align="", leading="", size="", type="", beforeText="", afterText, start, end, step}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useIsVisible();
  useInterval(() => {
    if (inView && count !== end) {
      setCount(count + step);
    }
  }, 80);
  return html`
    <span ref="${ref}" className="${align} ${leading} ${size} ${type}">${beforeText}${count}${afterText}</span>
  `
}

export { AnimatedTextNode }

