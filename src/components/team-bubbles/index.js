import {html} from 'htm/preact';
import {Image} from '../media';

const Teammate = (props) =>{
  const gridClasses = `lg:col-start-${(props.colIndex * 3) + 1} col-span-3 lg:row-start-${props.rowIndex+1} lg:grid grid-cols-3`
  return html`
      ${props.name && props.title && html`
        <div class="w-40 sm:w-64 lg:w-full flex-shrink-0 relative mx-5 lg:mx-0 lg:my-5 ${gridClasses}">
          <div className="h-0 pt-1/1 relative col-span-2">
            <div className="inset-0 absolute w-full h-full rounded-full overflow-hidden">
              <${Image} src="${props.image}" flags="e_grayscale" className="object-cover h-full min-w-full" />
            </div>
          </div>
          <div className="lg:absolute bottom-1/10 flex flex-col items-center lg:items-start left-1/3 items-start mt-8 lg:mt-0">
            <span className="text-sm lg:text-base lg:bg-white text-black px-2 py-0 mb-1 whitespace-no-wrap lg:shadow">${props.name}</span>
            <span className="text-sm lg:text-base lg:bg-white text-black px-2 py-0 whitespace-no-wrap lg:shadow">${props.title}</span>
          </div>
        </div>
      `}
  `
}

const TeamBubbles = ({ teammates, gridCols = 9 }) => {
  const rows = arrangeTeamIntoRows(teammates.slice(0));
  return html`
    <section>
      <div className="container lg:px-16 flex lg:grid lg:grid-cols-9 xl:grid-cols-12 lg:gap-4 overflow-x-auto">
        ${rows.map((row, rowIndex) => 
          row.map((teammate, colIndex) => html`
            <${ Teammate } ...${teammate} rowIndex="${rowIndex}" colIndex="${colIndex}"/>
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
