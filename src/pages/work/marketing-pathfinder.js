import {html} from 'htm/preact';
import {PostLayout} from '../../layouts/post-layout';

const MarketingPathfinder = () => {
  return html`
    <div data-router-view="marketing-pathfinder">
        <h1>Marketing Pathfinder</h1>
    </div>
  `;
}

const MarketingPathFinderPage = (props) => {
  return html`
    <${PostLayout} ...${props}>
        <${MarketingPathfinder} />
    </PostLayout>
  `
};

export {
  MarketingPathfinder,
  MarketingPathFinderPage
}
