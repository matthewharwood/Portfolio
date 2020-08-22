import { AH } from "../components/component_map";
import { html } from "htm/preact";
import { SandWichLayout } from "../components/sandwich-layout";

export const Test = () => {
  return html`
    <div className="pt-32">
      <${SandWichLayout} />
      <${AH.InfiniteImageScroll} />
    </div>
  `;
};
