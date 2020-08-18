import {html} from 'htm/preact';
import {Image} from '../media';

const Teammate = (props) =>{
  console.log('innerprops', props)
  return html`
     <div className="h-0 pt-1/1 relative">

       <div className="inset-0 absolute w-full h-full rounded-full overflow-hidden">
         <${Image} src="${props.image}" className="object-cover h-full" />
       </div>
       <div className="absolute bottom-1/5 left-1/2 flex flex-col items-start">
            <span className="bg-white text-black px-2 py-1 mb-2 whitespace-no-wrap">${props.name}</span>
            <span className="bg-white text-black px-2 py-1 whitespace-no-wrap">${props.title}</span>
       </div>
    </div>
  `
}

const TeamBubbles = (props) => {
  return html`
    <section className="">
      <div className="container grid grid-cols-3 gap-20  px-5 lg:px-16 py-8 lg:py-16 ">
        ${props.teammates.map(i => html`<${Teammate} ...${i} />`)}
      </div>
    </section>
  `;
}

export {
  TeamBubbles,
  Teammate,
}
