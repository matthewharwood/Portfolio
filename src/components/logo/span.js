import {html} from 'htm/preact';
import {useFlyIn} from '../../hooks/use_fly_in';


const Span = ({text, index}) => {
  const animeRef = useFlyIn(index);
  return html`
    <div className="overflow-hidden">
        <span ref="${animeRef}" className="flex ">${text}</span>
    </div>
  `
}

export {
  Span
}
