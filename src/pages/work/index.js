import {html} from 'htm/preact';

const articles = [
  {
    name: 'Nike Jordan Editor',
    description: 'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.',
    href: '/work/nike-jordan-editor'
  },
  {
    name: 'Marketing Pathfinder',
    description: 'Internal project name for an internal web application that manage marketing budgets globally for Google.',
    href: '/work/marketing-pathfinder'
  },
  {
    name: 'Uber.com Performance',
    description: 'Internal project name for an internal web application that manage marketing budgets globally for Google.',
    href: '/work/uber-dotcom-performance'
  }
];
export const Work = () => {
  return html`
    <div data-router-view="work">
    ${articles.map((nl, index, arr) =>
      html`<${WorkItem} name="${nl.name}" description="${nl.description}" href="${nl.href}" index="${index}" last="${index === arr.length -1}" />`
    )}
    </div>
  `;
};

const WorkItem = ({name, description, href, index, last}) => {
  const isFirstOrLast = (index === 0 || last) && 'pb-4 md:pb-12';
  const isSecond = index === 1 ? 'pt-0' : 'pt-4 md:pt-12';
  return html`

    <div className="h-screen px-4 md:px-12 relative ${isFirstOrLast} ${isSecond}">
      <div
        className="h-full w-full bg-gray-200 flex flex-col justify-center items-center text-center font-bold"
      >
        <div
          className="flex flex-col items-center justify-center px-4 md:px-10 md:px-16 w-full md:w-10/12 lg:w-8/12 xl:w-7/12"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl">${name}</h1>
          <p className="font-normal md:font-bold text-md md:text-2xl mt-3 mb-10">
           ${description}
          </p>
          <a
            href="${href}"
            className="bg-blue-700 text-white px-10 py-4 font-bold uppercase"
            >Enter</a
          >
        </div>
      </div>
    </div>
  `;
};
