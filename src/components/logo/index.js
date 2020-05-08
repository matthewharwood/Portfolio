import {html} from 'htm/preact';
import {AH} from '../component_map';
const Logo = () => {
  return html`
    <h1 className="font-mh text-2xl md:text-6xl flex flex-col uppercase font-bold tracking-widest pt-8 md:pt-16 pl-8 md:pb-16 md:pl-16 leading-none text-black">
        ${['Good', 'Morning', 'Harwood'].map((text, index) => {return html`<${AH.Span} text="${text}" index="${index}" />`})}
    </h1>
  `
}


export {
  Logo
}
