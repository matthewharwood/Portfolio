import {html} from 'htm/preact';
import {useLayoutEffect, useRef, useState} from 'preact/hooks';
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

export const NavigationBar = () => {

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
    navRef.current.classList.add('transition', 'duration-150', 'ease-in-out');
    const calculatedActiveLinks = calcActiveLink(links, location.pathname);
    updateStateLinks(calculatedActiveLinks);


    // Update
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

  return html`
    <header ref="${navRef}" className="nav-styles hide-nav">
      <div className="px-4 lg:px-16 flex">
        <a href="/" className="flex items-center flex-1">
          <div className="w-8 h-2 p-1 bg-blue-700 transform -rotate-45 box-content"/>
          <span className="hidden sm:flex text-lg font-bold uppercase ml-3 whitespace-no-wrap tracking-wider font-black">
            Morning Harwood
          </span>
        </a>
        <ul className="flex transform translate-x-1">
          ${stateLink.map(
      (link) => html` <${NavLink} ...${link} /> `
  )}
        </ul>
      </div>
    </header>

  `;
};

const NavLink = ({title, href, isActive}) => {
  const activeClass = isActive ? 'font-semibold' : '';
  return html`
    <li className="py-1 md:my-0 md:py-0 ml-1 sm:ml-2 md:ml-4 ">
      <a href="${href}" className=" px-3 py-2 rounded-full bg-transparent hover:bg-gray-300 text-gray-900 uppercase font-normal tracking-wide ${activeClass}">${title}</a>
    </li>
  `;
};
