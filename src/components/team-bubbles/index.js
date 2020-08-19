import {html} from 'htm/preact';
import {Image} from '../media';

const Teammate = (props) =>{
  return html`
      ${props.name && props.title && html`
        <div class="w-48 sm:w-64 flex-shrink-0 relative lg:row-start-${props.rowIndex+1} mx-5">
          <div className="h-0 pt-1/1 relative">
            <div className="inset-0 absolute w-full h-full rounded-full overflow-hidden">
              <${Image} src="${props.image}" flags="e_grayscale" className="object-cover h-full min-w-full" />
            </div>
          </div>
          <div className="lg:absolute bottom-1/10 left-1/2 flex flex-col items-start mt-8 lg:mt-0">
            <span className="font-mono text-sm lg:bg-white text-black px-2 py-0 mb-1 whitespace-no-wrap lg:shadow">${props.name}</span>
            <span className="font-mono text-sm lg:bg-white text-black px-2 py-0 whitespace-no-wrap lg:shadow">${props.title}</span>
          </div>
        </div>
      `}
  `
}

const TeamBubbles = (props) => {
  const rows = arrangeTeamIntoRows(props.teammates.slice(0));
  return html`
    <section>
      <div className="container lg:px-16 py-8 lg:py-16 flex lg:grid lg:grid-cols-${rows.length} lg:gap-24 overflow-x-auto">
        ${rows.map((row, rowIndex) => 
          row.map(teammate => html`
            <${ Teammate } ...${teammate} rowIndex="${rowIndex}"/>
          `)
        )}
      </div>
    </section>
  `;
}

const arrangeTeamIntoRows = (teammates) => {
  const rows = [];
  for(let i = 1; teammates.length > 0 ; i++){
    rows.push(teammates.splice(0,i));
  }
  return rows;
}

export {
  TeamBubbles,
  Teammate,
}
