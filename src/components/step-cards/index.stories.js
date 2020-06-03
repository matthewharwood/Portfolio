import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {StepsCards} from './';

export default {
  title: 'Step Cards'
};
const FIXTURE = {
  steps: [
  {
    title: "1. Adding Images",
    subtitle: "Drag and Drop",
    image: "https://via.placeholder.com/100",
    category: "add",
  },
  {
    title: "2. Load Images",
    subtitle: "Base64 in Canvas",
    image: "https://via.placeholder.com/100",
    category: "add",
  },
  {
    title: "3. Transform Images",
    subtitle: "JPG to BASE64",
    image: "https://via.placeholder.com/100",
    category: "add",
  },
  {
    title: "4. Transform Images",
    subtitle: "Base64 to JPG",
    image: "https://via.placeholder.com/100",
    category: "extract",
  },
  {
    title: "5. Save Images",
    subtitle: "JPG to Base64",
    image: "https://via.placeholder.com/100",
    category: "extract",
  },
  {
    title: "6. Download Images",
    subtitle: "ZIP all images on a page",
    image: "https://via.placeholder.com/100",
    category: "extract",
  },
]
};

export const Main = () => {
  const Component = html`<${StepsCards} ...${FIXTURE}/>`;
  return render(Component);
};