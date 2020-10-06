import { html } from "htm/preact";
import { useState } from "preact/hooks"
import { Image, MediaNew } from "../media/media";

export const MediaThumbnail = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const posterImage = props.media.type === "image" ? props.media.imgSrc : props.media.poster;
  return html`
    <div className="bg-gray-100 ${props.className}">
      <button onClick="${() => setModalOpen(true)}" className="w-full">
        <${Image} src="${posterImage}" className="w-full"/>
      </button>
      ${isModalOpen && html`
        <div className="fixed inset-0 bg-gray-200 m-10" onClick="${() => setModalOpen(false)}">
        <${MediaNew} ...${props.media} className="w-full"/>
      </divObject.keys(props)
      `}
    </div>
  `
};
