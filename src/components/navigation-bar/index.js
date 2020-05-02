import { html } from "htm/preact";
import {useRef, useLayoutEffect} from 'preact/hooks';


export const NavigationBar = () => {
  const links = [
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Lab",
      href: "/lab",
    },
    {
      title: "Profile",
      href: "/profile",
    },
  ];
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current.classList.add("transition", "duration-150", "ease-in-out");
    const hide = () => {
      navRef.current.classList.add("hide-nav");
      navRef.current.classList.remove("show-nav");
    }
    const show = () =>  {
      navRef.current.classList.add("show-nav");
      navRef.current.classList.remove("hide-nav");
    }

    if(location.pathname !== '/') {
      show();
    }
    import('../../router').then(({InitRouter}) => {
      console.log(InitRouter.getRouter());
      InitRouter.getRouter().on('NAVIGATE_IN', ({ to, trigger, location }) => {
        console.log('is this working');
        if(location.pathname === '/') {
          console.log('is this working /', navRef.current);
          hide();
        } else {
          console.log('is this not working /', navRef.current);
          show();
        }
      });
    })
  })

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
          <${NavLink}
            data="${{ title: "Active", href: "test" }}"
            isActive="${true}"
          />
          ${links.map(
            (link) => html` <${NavLink} data="${link}" isActive="${false}" /> `
          )}
        </ul>
      </div>
    </header>
  `;
};

const NavLink = ({ data, isActive }) => {
  const activeClass = isActive ? "font-bold" : "";
  return html`
    <li className="mt-2 py-1 md:my-0 md:py-0 md:ml-4 ${activeClass}">
      <a href="${data.href}" className="md:px-3 py-2 rounded-full bg-transparent hover:bg-gray-800">${data.title}</a>
    </li>
  `;
};
