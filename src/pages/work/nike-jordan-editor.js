import { html } from "htm/preact";
import {PostHeader} from '../../components/post-header';
import {Summary} from '../../components/summary';
import {VideoCardGrid} from '../../components/video-card-grid';
import {Outline} from '../../components/outline';
import {Highlight} from '../../components/highlight';
import {HighlightBold} from '../../components/highlight-bold';
import {BackgroundColor} from '../../utils/background_colors';




const WorkNikeJordanEditor = (props) => {
  const Render = {
    'postHeader': PostHeader,
    'summary': Summary,
    'videoCardGrid': VideoCardGrid,
    'outline': Outline,
    'highlight': Highlight,
    'highlightBold': HighlightBold,
  }
  return html`
    ${props.section.map((s) => {
      return html`
        <div className="${BackgroundColor[s.backgroundColor || 'secondary']}">
            ${s.content.map(c => {
              return html`
                <${Render[c._type]} ...${c} />
              `  
            })}
        </div>
      `;
    })}
  
  `
  // return html`
  //   ${props.sections.map(s => {
  //     return html`
  //       <div>
  //           <h1>section</h1>
  //         ${s.content.map(c => {
  //           return html`
  //             <${Render[c._type]} ...${c} />
  //           `;
  //         })}
  //       </div>
  //     `
  //   })
  // `;
};


export { WorkNikeJordanEditor };
