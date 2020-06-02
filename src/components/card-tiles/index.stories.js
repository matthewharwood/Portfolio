import {html} from 'htm/preact';
import {render} from 'preact-render-to-string';

import {CardTile} from './';

export default {
  title: 'Card Tiles'
};

const FIXTURE = {
  cards: [
    {
      image: 'rorschach/r-1.jpg',
      title: 'title',
      subtitle: 'text text text'
    },
    {
      image: 'rorschach/r-1.jpg',
      title: 'title',
      subtitle: 'text text text'
    },
    {
      image: 'rorschach/r-1.jpg',
      title: 'title',
      subtitle: 'text text text'
    }
  ]

}

export const Main = () => {
  const Component = html`<${CardTile} ...${FIXTURE}/>`;
  return render(Component);
};