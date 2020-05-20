import {html} from 'htm/preact';
import {Media} from '../media';



const LabCard = ({name, href, src, tags, description, alt}) => {

  return html`
    <a className="bg-secondary-lighter flex flex-col rounded overflow-hidden shadow-lg m-10 no-underline" href="${href}">
    <div className="lab-cards-aspect-ratio relative">
        <div className="absolute top-0 left-0 w-full h-full">
            <${Media} src="${src}" alt="${alt}" />
        </div>
      </div>
    
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">${name}</div>
        <p className="text-primary-lighter text-base">
          ${description}
        </p>
      </div>
      <div className="px-6 py-4">
        ${tags.map((tag) => html`
          <span className="inline-block bg-secondary-lighter rounded-full px-3 py-1 text-sm font-semibold text-primary-lighter mr-2 mb-2">${tag}</span>
          `
        )}
      </div>
    </a>
  `;
};

export {
  LabCard,
};
