import {LabCard} from '../../components/card/lab_card';
import { AH } from "../../components/component_map";
import { useStatic } from "../../hooks/use_static";
import { html } from "htm/preact";
const PADDING = "p-10";

export const Lab = () => {
  return html`
    <div className="pt-32 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-router-view="lab">
      <div className="col-span-1 leading-tight border ${PADDING}">
        <h1 className="text-6xl font-bold">Lab</h1>
        <span className="text-xl font-bold">A Laboratory of Experiments</span>
      </div>
      <div className="border-l border-r px-2 hidden lg:block">
        <div className="w-full h-full border"></div>
      </div>
      <div className="border"></div>
      <${Row} hasBorderLeft="${false}" hasBorderRight="${false}" />
      <${Row} hasBorderLeft="${true}" hasBorderRight="${true}" />
      <${Row} />
    </div>
  `;
};

const HeadingBlock = ({ hasBorderLeft = false, hasBorderRight = false }) => {
  const borderLeft = hasBorderLeft ? "lg:ml-2 lg:border-l" : "";
  const borderRight = hasBorderRight ? "lg:mr-2 lg:border-r" : "";
  return html`
    <div className="border-t border-b ${borderLeft} ${borderRight} ${PADDING}">
      <h2 className="text-3xl font-bold">Todo</h2>
    </div>
  `;
};

const Row = ({ hasBorderLeft = false, hasBorderRight = false }) => {
  const borderLeft = hasBorderLeft ? "lg:ml-2 lg:border-l" : "";
  const borderRight = hasBorderRight ? "lg:mr-2 lg:border-r" : "";
  return html`
    <div className="min-h-screen border py-2 flex flex-col mb-10">
      <${HeadingBlock}
        hasBorderLeft="${hasBorderLeft}"
        hasBorderRight="${hasBorderRight}"
      />
      <div className="border-t ${borderLeft} ${borderRight} mt-2">
        ${[1, 2].map(
          (card) => html`
            <div className="lg:mb-10 border-b">
              <${LabCard} />
              <div className="lg:border-b mb-2" />
            </div>
          `
        )}
      </div>
    </div>
  `;
};

