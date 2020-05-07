import { html } from "htm/preact";
const BG_COLOR = "bg-gray-100";

export const StepsCards = ({ hasBackground, steps }) => {
  const bgClass = hasBackground ? BG_COLOR : "";
  const colorsArray = [
    "teal-400",
    "red-400",
    "blue-400",
    "green-400",
    "yellow-400",
    "orange-400",
  ];
  const categories = [...new Set(steps.map((step) => step.category))];
  const categoryData = categories.map((category) => ({
    name: category,
    cards: steps.filter((step) => step.category === category),
  }));
  return html`
    <section className="${bgClass} py-16">
      <div className="container sm:px-5 lg:px-16 grid grid-cols-3">
        <div
          className="lg:col-start-2 col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          ${categoryData.map(
            (category, index) => html`
              <div className="grid grid-cols-1 gap-5 lg:gap-10">
                <${StepLabel}
                  name="${category.name}"
                  color="${colorsArray[index]}"
                  mobileOnly="${true}"
                />
                ${category.cards.map(
                  (card) => html`
                    <${StepCard} data="${card}" color="${colorsArray[index]}" />
                  `
                )}
              </div>
            `
          )}
        </div>
        <div className="hidden lg:flex col-start-2 col-span-2 justify-end mt-5">
          ${categories.map(
            (category, index) =>
              html`<${StepLabel}
                name="${category}"
                color="${colorsArray[index]}"
              />`
          )}
        </div>
      </div>
    </section>
  `;
};

const StepCard = ({ data, color }) => {
  const borderColor = `border-${color}`;
  return html`
    <div
      className="bg-gray-200 grid grid-cols-4 gap-10 p-5 border-t-4 ${borderColor} shadow"
    >
      <div className="col-span-1">
        <img src="${data.image}" alt="" />
      </div>
      <div className="col-span-3 flex flex-col">
        <h5 className="font-bold uppercase text-gray-600">${data.title}</h5>
        <span className="uppercase text-xs text-gray-600"
          >${data.subtitle}</span
        >
      </div>
    </div>
  `;
};

const StepLabel = ({
  name = "test",
  color = "red-400",
  mobileOnly = false,
}) => {
  const backgroundColor = `bg-${color}`;
  const display = mobileOnly ? "flex lg:hidden" : "flex";
  return html`
    <div className="${display} items-center ml-5">
      <div className="h-5 w-5 ${backgroundColor} mr-3" />
      <span className="text-gray-600 uppercase text-sm">${name}</span>
    </div>
  `;
};

