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
      <div className="container flex flex-col md:flex-row justify-between">
        <a href="/" className="flex items-center">
          <img src="https://via.placeholder.com/100" alt="" className="h-10" />
          <span className="text-xl font-bold uppercase ml-3 whitespace-no-wrap">
            Morning Harwood
          </span>
        </a>
        <ul className="flex flex-col md:flex-row items-start md:items-center">
          ${stateLink.map(
      (link) => html` <${NavLink} ...${link} /> `
  )}
        </ul>
      </div>
    </header>

  `;
};

const NavLink = ({title, href, isActive}) => {
  const activeClass = isActive ? 'bg-gray-900' : '';
  return html`
    <li className="mt-2 py-1 md:my-0 md:py-0 md:ml-4 ">
      <a href="${href}" className="md:px-3 py-2 rounded-full bg-transparent hover:bg-gray-800 ${activeClass}">${title}</a>
    </li>
  `;
};
