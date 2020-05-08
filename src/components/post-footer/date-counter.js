import {html} from 'htm/preact';
import {useState} from 'preact/hooks';
import {useInterval} from '../../hooks/use_interval';
export const getAge = (birthDate) => {
  const date = new Date();
  const time = new Date(birthDate).getTime();

  const diff = (date - time) / 3.15576e10;
  return Math.floor(diff);
};

export const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map(i => i + startAt);
};


const BIRTH_YEAR = '1985-09-03';

const DateCounter = () => {
  const [count, setCount] = useState(0);
  const mattAge = getAge(BIRTH_YEAR);
  const years = range(mattAge + 1, new Date().getFullYear() - mattAge);
  useInterval(() => {
      const len = years.length - 1;
      const next = count + 1;
      setCount(Math.min(next, len));
  }, 80);

  return html`
    <span>${years[count]}</span>
  `
}

export {
  DateCounter
}