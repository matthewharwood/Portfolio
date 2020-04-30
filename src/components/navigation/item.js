
import {useFlyIn} from '../../hooks/use_fly_in';
import {html} from 'htm/preact';

const NavigationItem = ({link, index}) => {
  const animeRef = useFlyIn(index);
  return html`
    <a className="text-accent-hover"
      aria-label="${link.ariaLabel}"
      href="${link.href}">
      <div className="relative text-right py-2 overflow-hidden">
        <div>
          <span ref="${animeRef}" className="navigation-start block text-3xl md:text-6xl text-right font-sans font-bold leading-none mr-8 md:mr-16 sans">${link.text}</span>
          <span className="text-xs absolute bottom-0 right-0 text-right leading-none font-mono transform -translate-y-6 md:-translate-x-8  md:-translate-y-12 rotate-90">0${index}</span>
        </div>
      </div>
    </a>
  `;
}

export {
  NavigationItem
}