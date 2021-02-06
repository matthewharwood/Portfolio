import {html} from 'htm/preact';
import {MediaNew} from '../../components/media/media';
import {useStatic} from '../../hooks/use_static';
import {Mono, Sans} from '../../components/typography';

const MonkeyMech = () => {
  return html`
    <article>
      <header>
        <h1 className="${Mono.lx6} uppercase">Monkey Mech</h1>
      </header>

    </article>
  `
};

export {
  MonkeyMech
}
