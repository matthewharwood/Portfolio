import {html} from 'htm/preact';
import {Image} from '../media';

const Teammate = (props) =>{
  console.log('innerprops', props)
  return html`
     <div className="h-0 pt-1/1 relative">
      ${props.name && props.title && html`
        <div className="inset-0 absolute w-full h-full rounded-full overflow-hidden">
          <${Image} src="${props.image}" flags="e_grayscale" className="object-cover h-full min-w-full" />
        </div>
      `}
       ${props.name && props.title && html`
         <div className="absolute bottom-1/10 left-1/2 flex flex-col items-start">
            <span className="font-mono text-sm bg-white text-black px-2 py-0 mb-1 whitespace-no-wrap shadow">${props.name}</span>
            <span className="font-mono text-sm bg-white text-black px-2 py-0 whitespace-no-wrap shadow">${props.title}</span>
         </div>
       `}
    </div>
  `
}


const TeamBubbles = (props) => {
  return html`
    <section className="">
      <div className="container grid grid-cols-4 gap-20  px-5 lg:px-16 py-8 lg:py-16 ">
        ${props.teammates.map(i => html`<${Teammate} ...${i} />`)}
      </div>
    </section>
  `;
}

export {
  TeamBubbles,
  Teammate,
}
