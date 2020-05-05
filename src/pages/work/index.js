import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';

const articles = [
  {
    name: 'Nike Jordan Editor',
    description: 'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.',
    href: '/work/nike-jordan-editor',
    img: useStatic('jordan.svg', 'f_svg')
  },
  {
    name: 'Marketing Pathfinder',
    description: 'Internal project name for an internal web application that manage marketing budgets globally for Google.',
    href: '/work/marketing-pathfinder',
    img: useStatic('super-g.svg', 'f_svg')
  },
  {
    name: 'Uber.com Performance',
    description: 'Internal project name for an internal web application that manage marketing budgets globally for Google.',
    href: '/work/uber-dotcom-performance',
    img: useStatic('uber.svg', 'f_svg')
  }
];
export const Work = () => {
  return html`
    <div data-router-view="work">
    ${articles.map((nl, index) =>
      html`<${WorkItem} ...${nl} index="${index}" />`
    )}
    </div>
  `;
};
//
const WorkItem = ({name, description, href, img}) => {

  return html`

    <div className="h-screen px-4 md:px-12 relative pb-4 md:pb-12">
      <div
        className="h-full w-full bg-gray-200 flex flex-col justify-center items-center text-center font-bold relative"
      >
        <img src="${img}" alt="" className="inset-0 absolute h-full w-full object-fill p-48 justify-center items-center self-center opacity-10" />     
        <div
          className="flex flex-col items-center justify-center px-4 md:px-10 md:px-16 w-full md:w-10/12 lg:w-8/12 relative"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl">${name}</h1>
  
          <p className="font-normal md:font-bold text-md md:text-2xl mt-3 mb-10">
           ${description}
          </p>
          <a
            href="${href}"
            className="bg-blue-700 text-white px-10 py-4 font-bold uppercase hover:bg-blue-900"
            >Enter</a
          >
          
        </div>
      </div>
    </div>
  `;
};
