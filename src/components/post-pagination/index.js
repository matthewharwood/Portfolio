import { html } from "htm/preact";
import { PostPaginationItem } from './item'

export const PostPagination = () => {
  return html`
    <section className="container px-5 lg:px-16 py-16">
      <h2 className="text-4xl uppercase">Related Work</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 mt-10">
        ${[1, 2, 3].map((item) => html` <${PostPaginationItem} key="${item}" /> `)}
      </div>
    </section>
  `;
};

