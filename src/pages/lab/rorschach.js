import { html } from "htm/preact";

export const Rorschach = () => {
  return html`
    <${IntroHeadingBlock} />
    <${ImageBlock} />
    <${ImageThumbs} />
    <${CodeBlock} />
  `;
};

const IntroHeadingBlock = () => {
  return html`
    <section className="container px-5 py-8 lg:py-16">
      <h1 className="text-4xl sm:text-5xl">Rorschach</h1>
      <span className="text-xl">With a little paint and paper</span>
    </section>
  `;
};

export const ImageBlock = () => {
  return html`
    <section className="container px-5 flex flex-col items-center lg:px-32">
      <img src="https://via.placeholder.com/1280x800" alt="" />
      <span className="text-xl md:text-2xl font-mono mt-8 lg:mt-16"
        >With a little paint and paper</span
      >
    </section>
  `;
};

export const ImageThumbs = () => {
  return html`
    <section className="container px-5 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 py-8 lg:py-16">
      <${ImageThumb} />
      <${ImageThumb} />
      <${ImageThumb} />
      <${ImageThumb} />
      <${ImageThumb} />
      <${ImageThumb} />
      <${ImageThumb} />
      <${ImageThumb} />
    </section>
  `;
};

const ImageThumb = () => {
  return html`
    <div className="w-full h-full">
      <img src="https://via.placeholder.com/400" alt="" />
    </div>
  `;
};

const CodeBlock = () => {
  const codeText = `
        if(x>y){
          console.log(x);
        } else {
          console.log(y)
        }
  `
  return html`
    <div className="container px-5 py-8 lg:py-16">
    <pre className="bg-gray-200 border-l-4 border-red-500 py-4 lg:py-8 w-full overflow-x-auto">
      <code>
        ${codeText}
      </code>
    </pre>
    </div>
  `
}
