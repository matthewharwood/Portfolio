
import {useFlyIn} from '../../hooks/use_fly_in';
import {html} from 'htm/preact';

const NavigationItem = ({link, index}) => {
  const animeRef = useFlyIn(index);
  return html`
    <a className="text-accent-hover"
      aria-label="${link.ariaLabel}"
      href="${link.href}">
      <div className="relative text-right py-1 md:py-2 overflow-hidden">
        <div>
          <span ref="${animeRef}" className="navigation-start block text-3xl md:text-6xl text-right font-mh leading-none mr-8 md:mr-16 capitalize font-bold opacity-0">${link.text}</span>
        </div>
      </div>
    </a>
  `;
}

export {
  NavigationItem
}
