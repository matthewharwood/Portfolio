import { html } from "htm/preact";
import { useState } from "preact/hooks"
import { Image, MediaNew } from "../media/media";

export const MediaThumbnail = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return html`
    <div className="bg-gray-100">
      <button onClick="${() => setModalOpen(true)}">
        <${Image} src="${props.poster}"/>
      </button>
      ${isModalOpen && html`
        <div className="fixed inset-0 bg-gray-200 m-10" onClick="${() => setModalOpen(false)}">
        <${MediaNew} ...${props}/>
      </div>
      `}
    </div>
  `
};

const ActualContent = (props) => {
  if (props.aspectRatio) {
    return html`
      <div className="relative">
        <div className="${props.aspectRatio} relative"></div>
        <${MediaNew} ...${props} className="absolute inset-0 h-full w-full ${props.className}" />
      </div>
    `;
  } else {
    return html`<${MediaNew} ...${props} />`;
  }
}
