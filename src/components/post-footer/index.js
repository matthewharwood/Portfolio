import {html} from 'htm/preact';
import {socialLinks} from './data';
import {AH} from '../component_map';


const PostFooter = () => {

  return html`
    <footer className="border-t border-gray-500 px-5 py-4 flex justify-between">
      <div className="flex flex-1"><span className="flex pr-1 items-center transform translate-y-1 font-mh" >©</span><span className="flex text-xxs items-center font-mh">MORNING HARWOOD<${AH.DateCounter} /></span></div>
      <div className="items-center md:flex hidden">
      <${AH.ThemeChange} />
        ${Object.entries(socialLinks)
      .slice(0, 5)
      .map(
          ([site, data]) => html`
              <a
                href="${data.src}"
                dangerouslySetInnerHTML="${{__html: data.icon}}"
                className="h-5 w-5 ml-3 flex"
              />
            `
      )}

      </div>
    </footer>
  `;
};

export {PostFooter};
