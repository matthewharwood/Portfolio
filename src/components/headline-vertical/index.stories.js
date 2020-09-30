import {h} from 'preact';
import {HeadlineVertical} from './';

export default {
  title: 'Headline Vertical'
};

export const Main = () => {
  const props = {
    "_key": "0fb8777a50aa",
    "_type": "headlineVertical",
    "text": "If you feel like the dumbest person in the room then you're in the correct room. Below showcases the engineering team of Uber.com.",
    "title": "Who is Uber.com?",
    "gridColsDesktop": 7
  }
  return (
      <HeadlineVertical {...props} />
  )
};

export const WithEightCols = () => {
  const props = {
    "_key": "0fb8777a50aa",
    "_type": "headlineVertical",
    "text": "If you feel like the dumbest person in the room then you're in the correct room. Below showcases the engineering team of Uber.com.",
    "title": "Who is Uber.com?",
    "gridColsDesktop": 8
  }
  return (
      <HeadlineVertical {...props} />
  )
};
