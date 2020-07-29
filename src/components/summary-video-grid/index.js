import { html } from "htm/preact";
import {AH} from '../component_map';


const VideoList = ({videos}) => (videos && videos.map(p => html`<${AH.VideoCard} ..${p} />`));
const Border = ({hasBorder}) => (hasBorder &&
    html`
      <div className="container px-5 lg:px-16 w-full">
          <div className="h-px w-full bg-border"></div>
      </div>
    `
);

export const SummaryVideoGrid = ({
  hasBorder = false,
  videos,
}) => {
  console.log(videos);
  return html`
    <section className="flex flex-col items-center">
      <div className="container py-16 px-5 lg:px-16 grid grid-cols-6">
        <div className="lg:row-start-2 col-span-6 lg:col-span-4 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <${VideoList} videos="${videos}" />
        </div>
      </div>
      <${Border} hasBorder="${hasBorder}"/>
    </section>
  `;
};
