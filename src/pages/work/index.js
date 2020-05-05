import {html} from 'htm/preact';
import {useStatic} from '../../hooks/use_static';

const articles = [
  {
    name: 'Uber.com Performance',
    description: 'A six month audit and refactor of uber.com\'s performance',
    href: '/work/uber-dotcom-performance',
    img: useStatic('uber.svg', 'f_svg')
  },
  {
    name: 'Marketing Pathfinder',
    description: 'Internal project name for an internal web application that manage marketing budgets globally for Google.',
    href: '/work/marketing-pathfinder',
    img: useStatic('super-g.svg', 'f_svg')
  },
  {
    name: 'Nike Jordan Editor',
    description: 'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.',
    href: '/work/nike-jordan-editor',
    img: useStatic('jordan.svg', 'f_svg')
  },


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

    <div className="h-screen px-4 md:px-16 relative pb-4 md:pb-16">
      <div
        className="h-full w-full  flex flex-col justify-center items-center text-center font-bold relative"
      >
        <img src="${img}" alt="" className="inset-0 absolute h-full w-full object-fill p-48 justify-center items-center self-center opacity-10" />     
        <div
          className="flex flex-col items-center justify-center px-4 md:px-10 md:px-16 w-full md:w-10/12 lg:w-8/12 relative"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-mh tracking-wide text-black font-normal">${name}</h1>
  
          <p className="font-normal md:font-normal text-md md:text-md mt-3 mb-10  text-black font-body xl:w-6/12">
           ${description}
          </p>
          <a
            href="${href}"
            className="bg-black text-white px-10 py-4 font-normal uppercase hover:bg-gray-900 font-mh tracking-widest"
            >Enter</a
          >
          
        </div>
      </div>
    </div>
  `;
};
