import {useStatic} from '../../hooks/use_static';
import {html} from 'htm/preact';


const LabCard = ({ link }) => {
  const src = useStatic("sample.jpg");
  return html`
    <div className="rounded overflow-hidden shadow-lg m-10">
      <img className="w-full" src="${src}" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        ${["photography", "travel", "winter"].map(
          (tag) => html`
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >${tag}</span>
          `
        )}
      </div>
    </div>
  `;
};

export {
  LabCard,
}
