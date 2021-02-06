import {html} from 'htm/preact';
import {MediaNew} from '../../components/media/media';
import {useStatic} from '../../hooks/use_static';
import {Mono, Sans} from '../../components/typography';

const Rorschach = () => {
  return html`
    <${IntroHeadingBlock} />
    <div className="pt-24">
      <${ImageBlock} />
    </div>

    <div className="pt-24">
        <${ImageThumbs} />
    </div>
    <div className="py-24">
        <${CodeBlock} />
    </div>
  `;
};

const IntroHeadingBlock = () => {
  return html`
    <section className="container px-5 pb-8 pt-40">
      <h1 className="${Mono.xl5}">Rorschach and CSS mix-blend-mode</h1>
      <span className="${Sans.lg} my-4">With a little paint, paper, and CSS</span>
    </section>
  `;
};

const ImageBlock = () => {
  return html`
    <p className="rorschach">
      ${'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, odio vel. Ab aliquam, id impedit ipsum iure laudantium nobis quibusdam. Adipisci commodi consequuntur doloremque eos eum itaque possimus repellat sit.'.repeat(125)}
    </p>
    <section className="container px-5 flex flex-col items-center lg:px-32">

      <span className="text-xl md:text-2xl font-mono mt-8 lg:mt-16"
        >With a little paint and paper</span
      >
    </section>
  `;
};
const GridImages = [
  {imgSrc: 'rorschach/r-1.jpg', classNames: 'h-auto'},
  {imgSrc: 'rorschach/r-2.jpg', classNames: 'h-auto'},
  {imgSrc: 'rorschach/r-3.jpg', classNames: 'h-auto'},
  {imgSrc: 'rorschach/r-4.jpg', classNames: 'h-auto'},
  {imgSrc: 'rorschach/r-5.jpg', classNames: 'h-auto'},
  {imgSrc: 'rorschach/r-6.jpg', classNames: 'h-auto'},
  {imgSrc: 'rorschach/r-7.jpg', classNames: 'h-auto'},
  {imgSrc: 'rorschach/rorschach.mp4', classNames: 'h-auto'},
];

const ImageThumbs = () => {
  return html`
    <section className="container px-5 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 py-8 lg:py-16">
        ${GridImages.map(props => {
          if(props.imgSrc.endsWith('.mp4')) {
            return html`<${MediaNew} type="video" videoSrc="${props.imgSrc}" />`
          }
          return html`<img alt="" className="${props.classNames}" src="${useStatic(props.imgSrc)}" />`
        })}
    </section>
  `;
};

const CodeBlock = () => {
  const codeText = `
    .overlap {
        font-size: 10px;
        opacity: .2;
        color: #fff;
        text-align: justify;
        background: #fff url('../../../assets/rorschach-2.gif') center center no-repeat;
        mix-blend-mode: multiply;
    }
  `;
  return html`
    <div className="container px-5 py-8 lg:py-16">
      <pre className="bg-secondary-lighter border-l-4 border-red-500 py-4 lg:py-8 w-full overflow-x-auto">
        <code>
          ${codeText}
        </code>
      </pre>
      <div className="py-24">
        <h2 className="${Mono.xl3} py-24">Inspiration</h2>
        <div className="grid grid-cols-2 gap-5">
          <figure>
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/6/25/15/enhanced-buzz-30772-1372190116-12.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto" alt="" />
          </figure>
          <figure>
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/6/21/16/enhanced-buzz-2608-1371848044-14.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto" alt="" />
          </figure>
          <figure>
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr05/2013/6/21/16/enhanced-buzz-11207-1371848040-9.jpg?downsize=600:*&output-format=auto&output-quality=auto" alt="" />
          </figure>
          <figure>
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr03/2013/6/21/16/enhanced-buzz-11592-1371848039-48.jpg?downsize=600:*&output-format=auto&output-quality=auto" alt="" />
          </figure>
        </div>
      </div>
    </div>
  `;
};

export {
  Rorschach,
};
