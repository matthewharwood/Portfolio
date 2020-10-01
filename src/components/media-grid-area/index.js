import { html } from "htm/preact";
import {MediaAspectRatio} from '../media-aspect-ratio';

export const MediaGridArea = (props) => {
  const {areas, templateArea,templateColumns, templateRows, gap} = props;
  return html`
    <div style=${{
        display: 'grid',
        gridTemplateAreas: templateArea,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridGap: gap,

    }}>
      ${areas.map(a => {
        return html
          ` <div style=${{display: 'grid', gridArea: a.areaName}}>
 <div>
                <h3>${a.title}</h3>
                <${MediaAspectRatio} ...${a.media} />
                </div>
            </div>
          `
      })}

  </div>`;
}
