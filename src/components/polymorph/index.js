import {html} from 'htm/preact';
import {useLayoutEffect, useRef} from 'preact/hooks';
import anime from 'animejs/lib/anime.es.js';
import {isServer} from '../../utils/which_env';


const calcActiveLink = (s, pathname) => s.map(i => {
  if (isServer) return;
  if (i.href === pathname) {
    i.isActive = true;
  } else {
    i.isActive = false;
  }
  return i;
});

const links = [
  {
    title: 'home',
    href: '/',
    isActive: false,
  },
  {
    title: 'Work',
    href: '/work',
    isActive: false,
  },
  {
    title: 'Lab',
    href: '/lab',
    isActive: false,
  },
  {
    title: 'Profile',
    href: '/profile',
    isActive: false,
  },
];

const Polymorph = () => {
  const polymorphRef = useRef(null);

  useLayoutEffect(() => {
    calcActiveLink(links, location.pathname);
    const {href} = calcActiveLink(links, location.pathname).find(i => Boolean(i.isActive)) || {};
    const isNotPortrait = window.innerWidth/window.innerHeight >= 1;
    const rotateZValue = isNotPortrait ? -(Math.atan(window.innerHeight/window.innerWidth) * 180 / Math.PI) : -30;
    if (href === '/') {
      anime({
        targets: polymorphRef.current,
        transformOrigin: ['0 50%', '50% 50%'],
        scaleX: [
          {value: 0, duration: 0,},
          {value: 1, duration: 1000}
        ],
        rotateZ: [
          {value: 0, duration: 0, delay: 800,},
          {value: rotateZValue, duration: 2000, delay: 800, easing: 'spring(1, 100, 5, 5)'},
        ],
        duration: 4000,
        easing: 'easeInOutSine'
      });
    }
  });
  return html`
    <div className="absolute z-0 inset-0 flex justify-center items-center pointer-events-none lg:px-20 lg:py-16 py-4 px-6">
      <div className="w-3/4 md:w-3/4 xl:w-1/2 h-16 md:h-40 bg-primary polymorph-home" ref="${polymorphRef}" />
    </div>`;
};

export {
  Polymorph
};