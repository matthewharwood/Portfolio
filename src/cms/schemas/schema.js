
import createSchema from 'part:@sanity/base/schema-creator'
import tag from './tag';
import schemaTypes from 'all:part:@sanity/base/schema-type'
import route from './route';
import page from './page';
import interest from './interest'
import blockContent from './blockContent';
import labCard from '../../components/lab-card/lab-card.schema';
import video from '../../components/media/video.schema'
import img from '../../components/media/img.schema';
import outline from '../../components/outline/outline.schema';
import technology from './technology';
import person from './person';
import cloudinary from './cloudinary';

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
  ])
})

// https://0eq54p9g.api.sanity.io/v1/data/query/production?query=*