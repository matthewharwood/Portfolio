
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import interest from './interest'

import video from '../../components/media/video.schema'
import img from '../../components/media/img.schema';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    img,
    video,
    interest,
  ])
})
