import {useLayoutEffect, useRef, useState} from 'preact/hooks';
import {html} from 'htm/preact';
import {isServer} from '../../utils/which_env';
import anime from 'animejs/lib/anime.es.js';


const calcActiveLink = (s, pathname) => s.map(i => {
  if (isServer) return;
  if (i.href === pathname) {
    i.isActive = true;
  } else {
    i.isActive = false;
  }
  return i;
});

const Polymorph = () => {
  const links = [
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

  const navRef = useRef(null);
  const [stateLink, updateStateLinks] = useState(links);
  useLayoutEffect(() => {
    const hide = () => {
      navRef.current.classList.add('hide-nav');
      navRef.current.classList.remove('show-nav');
    };
    const show = () => {
      navRef.current.classList.add('show-nav');
      navRef.current.classList.remove('hide-nav');
    };
    if (location.pathname !== '/') {
      show();
    }

    // Init

    const calculatedActiveLinks = calcActiveLink(links, location.pathname);
    updateStateLinks(calculatedActiveLinks);


    console.log('wtf is happening here')
    import('../../router').then(({InitRouter}) => {
      InitRouter.getRouter().on('NAVIGATE_IN', ({to, trigger, location}) => {
        updateStateLinks(calcActiveLink(links, location.pathname));
        if (location.pathname === '/') {
          hide();
        } else {
          show();
        }
      });
    });
  }, []);
  // useLayoutEffect(() => {
  //
  //   const calculatedActiveLinks = calcActiveLink(links, location.pathname);
  //   const activeLink = calculatedActiveLinks.find(i => Boolean(i.isActive));
  //   console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", activeLink, calculatedActiveLinks)
  //   if (activeLink.href === '/') {
  //     anime({
  //       targets: polymorphRef.current,
  //       scaleX: [
  //         {value: 0, duration: 0,},
  //         {value: 1, duration: 1000}
  //       ],
  //       rotateZ: [
  //         {value: 0, duration: 0, delay: 800,},
  //         {value: -30, duration: 2000, delay: 800, easing: 'spring(1, 100, 5, 5)'},
  //       ],
  //       translateX: [
  //         {value: 0, duration: 0},
  //         {value: '-10%', duration: 1000, delay: 1600}
  //       ],
  //       translateY: [
  //         {value: 0, duration: 0},
  //         {value: '200%', duration: 2000, delay: 1600, easing: 'spring(1, 100, 10, 5)'}
  //       ],
  //       duration: 4000,
  //       easing: 'easeInOutSine'
  //     });
  //   }
  //   console.log(activeLink)
  //   if (activeLink.href === '/work') {
  //     anime({
  //       targets: polymorphRef.current,
  //       scaleX: [
  //         {value: 0, duration: 0,},
  //         {value: 1, duration: 1000}
  //       ],
  //       scaleY: [
  //         {value: 0, duration: 0,},
  //         {value: 1, duration: 1000}
  //       ],
  //       // rotateZ: [
  //       //   {value: 0, duration: 0, delay: 800,},
  //       //   {value: -30, duration: 2000, delay: 800, easing: 'spring(1, 100, 5, 5)'},
  //       // ],
  //       // translateX: [
  //       //   {value: 0, duration: 0},
  //       //   {value: '-10%', duration: 1000, delay: 1600}
  //       // ],
  //       // translateY: [
  //       //   {value: 0, duration: 0},
  //       //   {value: '200%', duration: 2000, delay: 1600, easing: 'spring(1, 100, 10, 5)'}
  //       // ],
  //       duration: 4000,
  //       easing: 'easeInOutSine'
  //     });
  //   }
  // }, []);
  return html`
<p>Hello world</p>
    <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
      <div className="polymorph h-40 bg-gray-200 polymorph-shadow polymorph-home" ref="${polymorphRef}" />
    </div>
  `;
}

export {
  Polymorph,
}