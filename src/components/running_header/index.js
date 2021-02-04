import {useState, useMemo} from 'preact/hooks';

import {useInterval} from '../../hooks/use_interval.js';
import {interests} from '../../_data/interests.js';
import {shuffle} from '../../utils/shuffle/shuffle.js';
import {html} from 'htm/preact';
import {useFlyIn} from '../../hooks/use_fly_in';

const RunningHeader = () => {
  const animeRef = useFlyIn(8);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(true);
  const _interests = useMemo(() => shuffle(interests), [interests]);
  const _interestsMaxIndex = _interests.length - 1;
  useInterval(() => {
    if (play) {
      const next = count + 1;
      setCount(next % _interestsMaxIndex)
    }
  }, 1000);
  // const opacity = count > 0 ? 'opacity-100' : 'opacity-0';
  return html`
    <p className="font-normal text-xs flex justify-start items-center opacity-0" ref="${animeRef}" onMouseEnter="${() => setPlay(false)}" onMouseLeave="${() => setPlay(true)}">
      <span className="text-xs pr-2 font-mh">
        Contact me about
      </span>
      <a href="mailto:matthhar12@gmail.com" className="text-xs bg-primary text-secondary py-2 px-2 rounded-full capitalize font-mh">${_interests[count].name}</a>
    </p>
  `
}
export {
  RunningHeader,
}
