import {html} from 'htm/preact';
import {Media} from '../media';


const LabCardName = ({name}) => {
  return html`<div className="font-bold text-xl mb-2 font-mono capitalize">${name}</div>`;
};
const LabCardDescription = ({description}) => {
  return html`
    <p className="text-primary-light text-base no-underline">
      ${description}
    </p>`;
};
const LabCardTags = ({tags}) => {
  return tags && tags.map((tag) => html`
    <span className="inline-block border-solid border-1 bg-tertiary rounded-full px-3 py-1 text-sm font-semibold shadow-inner mr-2 mb-2 ">#${tag.name}</span>
  `
  );
};

const LabCard = ({name, href, src, tags, description, alt, video}) => {
  return html`
  <a className="transition cursor-pointer ease-in duration-100 bg-secondary-lighter flex flex-col rounded overflow-hidden shadow text-primary hover:underline hover:shadow-lg m-10 no-underline" href="${href}">
    <div className="lab-cards-aspect-ratio relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <${Media} src="${src}" video="${video}" alt="${alt}" />
      </div>
    </div>

    <div className="px-6 py-4">
      <${LabCardName} name="${name}" />
      <${LabCardDescription} description="${description}" />
    </div>
    <div className="px-6 py-4">
      <${LabCardTags} tags="${tags}" />
    </div>
  </a>
  `;
};

export {
  LabCard,
};
