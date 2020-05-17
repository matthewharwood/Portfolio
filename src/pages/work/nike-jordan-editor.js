import { html } from "htm/preact";
// import { AH } from "../../components/component_map";
import { data } from "./data/nike-jordan-editor";

import { PostHeader } from "../../components/post-header";
import { Summary } from "../../components/summary";
import { Outline } from "../../components/outline";
import { Highlight } from "../../components/highlight";
import { HighlightBold } from "../../components/highlight-bold";
import { Quote } from "../../components/quote";
import { Headline } from "../../components/headline";
import { CardTile } from "../../components/card-tile";
import { CardTiles } from "../../components/card-tiles";
import { VideoBlock } from '../../components/video-block'
import { StepsCards } from '../../components/step-cards'

const WorkNikeJordanEditor = () => {
  return html`
   <fade-in><${PostHeader} ...${data.postHeaderBlockData} /></fade-in>
   <fade-in><${Summary} ...${data.summaryBlockData} /></fade-in>
   <fade-in><${Outline} ...${data.outlineBlockData} /></fade-in>
   <fade-in><${Highlight} ...${data.highlightBlockDataOne} /></fade-in>
   <fade-in><${Highlight} ...${data.highlightBlockDataTwo} /></fade-in>
   <fade-in><${HighlightBold} ...${data.highlightBoldBlockData} /></fade-in>
   <fade-in><${Summary} ...${data.summaryBlockDataTwo} /></fade-in>
   <fade-in><${Quote} ...${data.quoteBlockData} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockData} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataTwo} /></fade-in>
   <fade-in><${CardTile} ...${data.cardTileBlockData} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataThree} /></fade-in>
   <fade-in><${VideoBlock} ...${data.videoBlockData} /></fade-in>
   <fade-in><${VideoBlock} ...${data.videoBlockDataTwo} /></fade-in>
   <fade-in><${VideoBlock} ...${data.videoBlockDataThree} /></fade-in>
   <fade-in><${VideoBlock} ...${data.videoBlockDataFour} /></fade-in>
   <fade-in><${VideoBlock} ...${data.videoBlockDataFive} /></fade-in>
   <fade-in><${Summary} ...${data.summaryBlockDataThree} /></fade-in>
   <fade-in><${Quote} ...${data.quoteBlockDataTwo} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataFour} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataFive} /></fade-in>
   <fade-in><${StepsCards} ...${data.stepCardsBlockData} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataSix} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataSeven} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataEight} /></fade-in>
   <fade-in><${CardTiles} ...${data.cardTilesTwoData} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataNine} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataTen} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataEleven} /></fade-in>
   <fade-in><${CardTiles} ...${data.cardTilesTwoDataNodeWebkit} /></fade-in>
   <fade-in><${Headline} ...${data.headlineBlockDataTwelve} /></fade-in>
   <fade-in><${Highlight} ...${data.highlightBlockDataThree} /></fade-in>
   <fade-in><${Highlight} ...${data.highlightBlockDataFour} /></fade-in>
   <fade-in><${HighlightBold} ...${data.highlightBoldBlockDataTwo} /></fade-in>
   <fade-in><${Highlight} ...${data.highlightBlockDataFive} /></fade-in>
  `;
};

export {
  WorkNikeJordanEditor,
}
