import { html } from "htm/preact";
import {
  awards,
  education,
  experiences,
  interests,
  me,
  socials,
  techniques,
  visited,
} from "../../content/profile";

export const Profile = () => {
  return html`
    <div data-router-view="profile">
      <${IntroSection} />
      <${ProfileSection} />
    </div>
  `;
};

const IntroSection = () => {
  return html`
    <section
      className="lg:h-screen flex flex-col lg:flex-row items-center lg:fixed inset-0 z-0"
    >
      <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col">
        <h1 className="text-4xl font-bold mb-5">${me.name}</h1>
        <h2 className="text-3xl font-bold mb-5">${me.title}</h2>
        <p>${me.description}</p>
      </div>
      <img
        src="https://via.placeholder.com/900x1080"
        alt=""
        className="h-50vh lg:h-full w-full lg:w-1/2 object-cover order-first lg:order-none"
      />
    </section>
  `;
};

const ProfileSection = () => {
  return html`
    <section className="px-10 lg:px-20 z-10 relative lg:mt-80vh">
      <div className="flex flex-col lg:px-20 bg-white lg:bg-gray-200 lg:pt-20">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h2 className="text-4xl font-bold">Résumé</h2>
          <div className="flex flex-col text-blue-600 text-left lg:text-right">
            <span>${me.domain}</span>
            <span>${me.email}</span>
            <span>${me.phone}</span>
          </div>
        </div>
        <div className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <${ProfileColumnDateRange}
              title="Experiences"
              data="${experiences}"
              expandable="true"
            />
          </div>
          <div>
            <${ProfileColumnDateRange} title="Education" data="${education}" />
            <${ProfileColumnDateRange} title="Awards" data="${awards}" />
          </div>
          <div>
            <${ProfileColumnText}
              title="Technical"
              data="${techniques.join(", ")}"
            />
            <${ProfileColumnText}
              title="Interests"
              data="${interests.join(", ")}"
            />
            <${ProfileColumnSocial} title="Interests" data="${socials}" />
            <${ProfileColumnVisited} title="Visited" data="${visited}" />
          </div>
        </div>
      </div>
    </section>
  `;
};

const ProfileColumnDateRange = ({ title, data, expandable = false }) => {
  return html`
    <div className="flex flex-col">
      <h3 className="text-3xl font-bold">${title}</h3>
      <ul>
        ${data.map(
          (dataItem) => html`
            <li className="flex flex-col my-8">
              <span>${dataItem.place}</span>
              <span className="text-gray-600 mb-5">${dataItem.title}</span>
              <span>${dataItem.dateRange}</span>
              <span>${dataItem.jobDescription}</span>
            </li>
          `
        )}
      </ul>
      ${expandable &&
      html`
        <div className="flex items-center">
          <button
            className="flex-shrink-0 bg-gray-900 text-white rounded-full px-5 py-2 flex items-center"
          >
            See More <span className="ml-2 text-2xl font-bold">+</span>
          </button>
          <div className="w-full h-px bg-gray-900 ml-10"></div>
        </div>
      `}
    </div>
  `;
};

const ProfileColumnText = ({ title, data }) => {
  return html`
    <div className="flex flex-col">
      <h3 className="text-3xl font-bold">${title}</h3>
      <p className="my-8">${data}</p>
    </div>
  `;
};

const ProfileColumnSocial = ({ title, data }) => {
  return html`
    <div className="flex flex-col">
      <h3 className="text-3xl font-bold mb-4">${title}</h3>
      <ul>
        ${data.map(
          (dataItem) => html`
            <li className="flex flex-col my-4">
              <span>${dataItem.place}</span>
              <a href="${dataItem.url}" className="text-blue-600"
                >${dataItem.text}</a
              >
            </li>
          `
        )}
      </ul>
    </div>
  `;
};

const ProfileColumnVisited = ({ title, data }) => {
  return html`
    <div className="flex flex-col">
      <h3 className="text-3xl font-bold my-8">${title}</h3>
      <ul>
        ${data.map(
          (dataItem) => html`
            <li className="flex">
              <span>${dataItem.flag}</span>
              <span className="ml-2">${dataItem.countryName}</span>
            </li>
          `
        )}
      </ul>
    </div>
  `;
};
