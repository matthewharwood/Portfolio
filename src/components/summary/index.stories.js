import {h} from 'preact';
import {Summary} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Summary'
};

export const Main = () => {
  const FIXTURES =  seed('summary', 0);
  return (<Summary {...FIXTURES} />)
};



export const Example1 = () => {
  const FIXTURES = {
    heading: 'wow',
    text: `
      Uber.com is like no website I’ve ever worked on in my past. It touched every line of business at Uber, it had over 4 million pages, and was translated in 50 languages.  The start of this project was difficult for me on so many levels.  In my previous experiences, I’ve always worked on behalf of an agency and this is important because agencies rarely get the opportunity to work on higher level projects like web performance.  So when being tasked by my boss to focus on the performance for uber.com, I started extremely lost on what was expected of me.  Over the next year, I set and iterated on a few goals that led me to success.

      In this writeup we’ll be covering three major topics:
      All that went into to running and maintaining uber.com. My larger contributions to uber.com. How my contributions lead me to being successful at uber.
      `,
    alt: 'alt text',
    ui: {
      lgColumns: '12'
    },
  };

  return (<Summary {...FIXTURES} />)
};
