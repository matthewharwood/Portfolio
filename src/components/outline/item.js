import {html} from 'htm/preact';

const OutlineListItem = (props) => {
  const text = props?.text ?? 'hello';
  const height = props.isLast ? 'h-0' : 'h-10';
  return html`
    <li className="flex flex-col justify-start">
      <div className="flex items-center">
        <div className="h-2 w-2 rounded-full bg-border mr-20"></div>
        <span
          className="font-bold uppercase text-primary leading-none text-sm"
        >
          ${text}
        </span>
      </div>
      <div
        className="${height} ml-1 border-l border-dotted my-2 border-border"
      ></div>
    </li>
  `;
};

export {
  OutlineListItem
}