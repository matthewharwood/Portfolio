import {experiences} from '../../content/profile';
import {Sans} from '../typography';
import { html } from "htm/preact";

import {useState, useCallback} from 'preact/hooks';


export const HumbleBeginnings = () => {
  const START = 4;
  const [limit, updateLimit] = useState(START);
  const showAll = useCallback(() => updateLimit(10), [updateLimit]);
  const hideAll = useCallback(() => updateLimit(START), [updateLimit]);
  const toggleLimit = limit === START ? showAll: hideAll;
  const toggleText = limit === START ? 'Show more' : 'Hide the';
  return html`
    <ul>
      ${experiences.slice(0,limit).map(
    (dataItem) => html`
          <li className="flex flex-col my-8">
            <span>${dataItem.place}</span>
            <span className="text-gray-600 mb-5">${dataItem.title}</span>
            <span>${dataItem.dateRange}</span>
            <span>${dataItem.jobDescription}</span>
          </li>
        `
  )}
    </ul>
    <button className="bg-secondary text-primary hover:bg-gray-100 border border-black py-2 px-6 shadow inline-flex items-center ${Sans.base}" onClick="${toggleLimit}">${toggleText} humble beginnings</button>
  `
}
