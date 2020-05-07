import {useStatic} from '../../hooks/use_static';
import {html} from 'htm/preact';


const Video = ({src}) => {
  return html`
    <video className="flex" autoplay muted loop>
      <source src="${useStatic(src)}" type="video/mp4" />
       Your browser does not support the video tag.
    </video>`;
};
const LabCard = ({name, href, src, tags, description}) => {
  const isVideo = src.includes('.mp4');
  const Media = () => isVideo ? html`<${Video} src=${src} />`
      : html`<img className="w-full" src="${useStatic(src)}" alt="Sunset in the mountains" />`;
  return html`
    <a className="flex flex-col rounded overflow-hidden shadow-lg m-10 no-underline" href="${href}">
      <${Media} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">${name}</div>
        <p className="text-gray-700 text-base">
          ${description}
        </p>
      </div>
      <div className="px-6 py-4">
        ${tags.map((tag) => html`
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${tag}</span>
          `
        )}
      </div>
    </a>
  `;
};

export {
  LabCard,
};
