import {html} from 'htm/preact';
import {PostHeader} from '../../components/post-header';
import {Summary} from '../../components/summary';
import {VideoCardGrid} from '../../components/video-card-grid';
import {Outline} from '../../components/outline';
import {Highlight} from '../../components/highlight';
import {HighlightBold} from '../../components/highlight-bold';
import {BackgroundColor} from '../../utils/background_colors';
import {PrimaryButton} from '../../components/buttons';
import {Quote} from '../../components/quote';
import {Headline} from '../../components/headline';
import {CardTileVertical} from '../../components/card-tiles-vertical';
import {HighlightVideo} from '../../components/highlight-video';
import {StepsCards} from '../../components/step-cards';
import {CardTiles} from '../../components/card-tiles';
import {TeamBubbles} from '../../components/team-bubbles';
import {HighlightVertical} from '../../components/highlight-vertical';
import {SandWichLayout} from '../../components/sandwich-layout';
import {TextContainer} from '../../components/text-container';
import {CardIcons} from '../../components/card-icons';
import {CategoryCards} from '../../components/category-cards';
import {MediaSection} from '../../components/media-section';
import {MediaGrid} from '../../components/media-grid';

const RenderMap = {
  'postHeader': PostHeader,
  'summary': Summary,
  'videoCardGrid': VideoCardGrid,
  'outline': Outline,
  'highlight': Highlight,
  'highlightBold': HighlightBold,
  'primaryButton': PrimaryButton,
  'quote': Quote,
  'headline': Headline,
  'cardTilesVertical': CardTileVertical,
  'highlightVideo': HighlightVideo,
  'stepCards': StepsCards,
  'cardTiles': CardTiles,
  'teamBubbles': TeamBubbles,
  'highlightVertical': HighlightVertical,
  'sandwichLayout': SandWichLayout,
  'textContainer': TextContainer,
  'cardIcons': CardIcons,
  'categoryCards': CategoryCards,
  'mediaSection': MediaSection,
  'mediaGrid': MediaGrid
};

const Renderer = (props) => {
  return html`
    <article>
    ${props.section.map((s) => {
    return html`
        <section className="${BackgroundColor[s.backgroundColor || 'secondary']}">
          ${s.content.map(c => {
      return html`<${RenderMap[c._type]} ...${c} />`;
    })}
        </section>
      `;
  })}
    </article>
  `;
};


export {Renderer};
