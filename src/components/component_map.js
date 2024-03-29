import { NavigationBar } from "./navigation-bar";
import { RunningHeader } from "./running_header";
import { autoHydrate } from "../utils/auto_hydrate";
import { NavigationItem } from "./navigation/item";
import { Polymorph } from "./polymorph";
import { DateCounter } from "./post-footer/date-counter";
import { Span } from "./logo/span";
import { ThemeChange } from "./post-footer/theme-change";
import { VideoCard } from "./video-card";
import { InfiniteImageScroll } from "./infinite-image-scroll";
import { MediaThumbnail } from "./media-thumbnail";
import { AnimatedTextNode } from './text-nodes/animated'
import {Slideshow} from './slideshow';
import {HumbleBeginnings} from './humble-beginnings';


export const COMPONENT_MAP = {
  RunningHeader,
  NavigationItem,
  NavigationBar,
  Polymorph,
  DateCounter,
  Span,
  ThemeChange,
  VideoCard,
  InfiniteImageScroll,
  MediaThumbnail,
  AnimatedTextNode,
  Slideshow,
  HumbleBeginnings,
};

const AH = {};
for (let i in COMPONENT_MAP) {
  AH[i] = autoHydrate(COMPONENT_MAP[i], i);
}

export { AH };
