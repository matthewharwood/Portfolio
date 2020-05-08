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
import {PostLayout} from '../../layouts/post-layout';

const WorkNikeJordanEditor = () => {
  return html`
    <${PostHeader} ...${data.postHeaderBlockData} />
    <${Summary} ...${data.summaryBlockData} />
    <${Outline} ...${data.outlineBlockData} />
    <${Highlight} ...${data.highlightBlockDataOne} />
    <${Highlight} ...${data.highlightBlockDataTwo} />
    <${HighlightBold} ...${data.highlightBoldBlockData} />
    <${Summary} ...${data.summaryBlockDataTwo} />
    <${Quote} ...${data.quoteBlockData} />
    <${Headline} ...${data.headlineBlockData} />
    <${Headline} ...${data.headlineBlockDataTwo} />
    <${CardTile} ...${data.cardTileBlockData} />
    <${Headline} ...${data.headlineBlockDataThree} />
    <${VideoBlock} ...${data.videoBlockData} />
    <${VideoBlock} ...${data.videoBlockDataTwo} />
    <${VideoBlock} ...${data.videoBlockDataThree} />
    <${VideoBlock} ...${data.videoBlockDataFour} />
    <${VideoBlock} ...${data.videoBlockDataFive} />
    <${Summary} ...${data.summaryBlockDataThree} />
    <${Quote} ...${data.quoteBlockDataTwo} />
    <${Headline} ...${data.headlineBlockDataFour} />
    <${Headline} ...${data.headlineBlockDataFive} />
    <${StepsCards} ...${data.stepCardsBlockData} />
    <${Headline} ...${data.headlineBlockDataSix} />
    <${Headline} ...${data.headlineBlockDataSeven} />
    <${Headline} ...${data.headlineBlockDataEight} />
    <${CardTiles} ...${data.cardTilesTwoData} />
    <${Headline} ...${data.headlineBlockDataNine} />
    <${Headline} ...${data.headlineBlockDataTen} />
    <${Headline} ...${data.headlineBlockDataEleven} />
    <${CardTiles} ...${data.cardTilesTwoDataNodeWebkit} />
    <${Headline} ...${data.headlineBlockDataTwelve} />
    <${Highlight} ...${data.highlightBlockDataThree} />
    <${Highlight} ...${data.highlightBlockDataFour} />
    <${HighlightBold} ...${data.highlightBoldBlockDataTwo} />
    <${Highlight} ...${data.highlightBlockDataFive} />
  `;
};


const WorkNikeJordanEditorPage = (props) => {
  return html`
       <${PostLayout} ...${props}>
        <${WorkNikeJordanEditor} />
    </PostLayout>
  `
};

export {
  WorkNikeJordanEditor,
  WorkNikeJordanEditorPage
}