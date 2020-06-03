import { h } from 'preact';
import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {SummaryCard} from './';

export default {
  title: 'SummaryCard'
};
const FIXTURE = {
  title: 'Steps',
  steps: [
    {text: 'hello'},
    {text: 'world'}
  ]
};

export const Main = () => (
    <SummaryCard {...FIXTURE}>Hello Button</SummaryCard>
);