import { html } from "htm/preact";
import { useState } from "preact/hooks"
import { Image, MediaNew } from "../media/media";
import { MediaAspectRatio } from "../media-aspect-ratio";

export const MediaThumbnail = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const posterImage = props.media.type === "image" ? props.media.imgSrc : props.media.poster;
  return html`
    <div className="${props.className}">
      ${ props.aspectRatio ? html`
        <button onClick="${() => setModalOpen(true)}" className="w-full relative z-0">
          <div className="${props.aspectRatio} relative"></div>
          <${MediaNew} ...${props.media} className="absolute inset-0 h-full w-full object-contain"/>
        </button>
      ` : html`
        <button onClick="${() => setModalOpen(true)}" className="w-full">
          <${MediaNew} ...${props.media} className="absolute inset-0 h-full w-full object-contain"/>
        </button>
      ` }
      ${isModalOpen && html`
        <div className="fixed inset-0 z-50 h-screen w-screen flex flex-col" style="background:rgba(0,0,0,0.8)">
          <button className="absolute right-0 top-0 bg-white text-black h-10 w-10 m-5 rounded-full shadow flex items-center justify-center" onClick="${() => setModalOpen(false)}">
            <span>X</span>
          </button>
          <div className="m-10">
            <${MediaNew} ...${props.media} className="h-full w-full"/>
          </div>
        </div>
      `}
    </div>
  `
};
