import createSchema from 'part:@sanity/base/schema-creator';
import tag from './tag';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import route from './route';
import page from './page';
import interest from './interest';
import blockContent from './blockContent';
import labCard from '../../components/lab-card/lab-card.schema';
import video from '../../components/media/video.schema';
import img from '../../components/media/img.schema';
import outline from '../../components/outline/outline.schema';
import summary from '../../components/summary/summary.schema';
import highlightBold from '../../components/highlight-bold/highlight-bold.schema';
import {cardTile, cardTiles} from '../../components/card-tiles/card-tiles.schema';
import {stepCard, stepCards} from '../../components/step-cards/step-cards.schema';
import {info, default as postHeader} from '../../components/post-header/post-header.schema';

import headline from '../../components/headline/headline.schema';
import highlight from '../../components/highlight/highlight.schema';
import quote from '../../components/quote/quote.schema';
import technology from './technology';
import person from './person';
import cloudinary from './cloudinary';
import {cardTilesVertical} from '../../components/card-tiles-vertical/card-tiles-vertical.schema';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    img,
    video,
    route,
    page,
    blockContent,
    cloudinary,
    interest,
    labCard,
    tag,
    technology,
    person,
    outline,
    summary,
    highlightBold,
    cardTile,
    cardTiles,
    cardTilesVertical,
    stepCard,
    stepCards,
    headline,
    highlight,
    quote,
    info,
    postHeader
  ])
});

// https://0eq54p9g.api.sanity.io/v1/data/query/production?query=*