import {html} from 'htm/preact';
import {PostLayout} from '../../layouts/post-layout';

const UberDotcomPerformance = () => {
  return html`
    <div data-router-view="uber-dotcom-performance">
        <h1>Uber.com Performance</h1>
    </div>
  `;
}


const UberDotcomPerformancePage = (props) => {
  return html`
     <${PostLayout} ...${props}>
        <${UberDotcomPerformance} />
    </PostLayout>
  `
};

export {
  UberDotcomPerformance,
  UberDotcomPerformancePage
}