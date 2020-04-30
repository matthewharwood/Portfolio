import { html } from "htm/preact";

export const Work = () => {
  return html`
    <div data-router-view="work">
      <${WorkItem} />
      <${WorkItem} />
      <${WorkItem} />
    </div>
  `;
};

const WorkItem = () => {
  return html`
    <div className="h-screen p-10 relative">
      <div
        className="h-full w-full absolute inset-0 z-10 flex flex-col justify-center items-center text-center font-bold"
      >
        <h1 className="text-6xl">Stanley Editor</h1>
        <span className="text-2xl mt-3 mb-10 w-1/3"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et
          iure ab ea, fugiat minus?</span
        >
        <a
          href="/"
          className="bg-blue-700 text-white px-10 py-4 font-bold uppercase"
          >Enter</a
        >
      </div>
      <img
        src="https://via.placeholder.com/1920x1080/EEEEEE/CCCCCC"
        alt=""
        className="z-0 relative h-full w-full object-cover"
      />
    </div>
  `;
};
