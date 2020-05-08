import {html} from 'htm/preact';


const RouterLayout = ({title, children}) => {
  return html`
     <div data-router-view="${title}">
        ${children}
     </div>
  `;
}

export {
  RouterLayout
}