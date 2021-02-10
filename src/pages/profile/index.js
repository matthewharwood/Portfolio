import { html } from "htm/preact";
import { AH } from "../../components/component_map";
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
import {useStatic} from '../../hooks/use_static';
import {Mono, Sans} from '../../components/typography';
import {HR} from '../../components/hr';
import {VideoLoop, VideoOmitLoop} from '../../components/media/video';


export const Profile = () => {
  return html`
    <${IntroSectionRe} />

  `;
};
//   <${ProfileSection} />


const IntroSectionRe = () => {
  return html`
    <section className="container grid grid-cols-12 lg:grid-cols-24 lg:gap-4 mb-48">

        <header className="col-span-12 lg:col-span-11 items-center flex order-3 lg:order-none">
          <div className="p-4 lg:p-0">
            <h2 className="${Mono.xl3} mb-5">${me.title}</h2>
            <p className="${Sans.lg}">My name is <u>Matthew Harwood</u> and I am a <em>generalist</em> ; slowly becoming a specialist in Software Engineering. I mix art, design, and technology, to create effective experiences that deliver value at scale. My professional goals are simple: surround myself by smart, energetic, creative people while working on solving problems that matter.</p>
            <div className="flex mt-10">
              <div className="pr-4">
                <a
                  href="#"
                  aria-label="Email Me"
                  className="bg-primary text-secondary hover:bg-gray-800 py-2 px-10 shadow inline-flex items-center ${Sans.lg}">
                  <span>Email Me</span>
                </a>
              </div>
              <div className="flex items-center">
                <a href="" className="underline">or 1.415.483.6018</a>
              </div>
            </div>
          </div>
        </header>
        <div className="h-4 col-span-12 lg:h-0 lg:col-span-1 order-2 lg:order-none"/>
        <div className="col-span-12 order-1 lg:order-none">
          <${VideoLoop} className="w-full" type="video" src="Profile/matthew-harwood-wavy_q68pdb.mp4" />
        </div>

    </section>
    <${HR} title="What is UX Engineering" omitMargin />
    <fade-in>
      <section className="container">
        <${VideoOmitLoop} className="w-full" type="video" src="Profile/continuum.mp4" omitLoop />
      </section>
    </fade-in>
  `
}

const ProfileSection = () => {
  return html`
    <section className="px-10 lg:px-20 z-10 relative transform lg:-translate-y-40">
      <div className="flex flex-col lg:px-20 bg-secondary lg:bg-secondary-lighter lg:pt-20">
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


// OLD STYLES
/**
 *

const IntroSection = () => {
  return html`
    <section
      className="lg:h-screen flex flex-col lg:flex-row items-center inset-0 z-0"
    >
      <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col">
        <h1 className="text-4xl font-bold mb-5">${me.name}</h1>
        <h2 className="text-3xl font-bold mb-5">${me.title}</h2>
        <p>${me.description}</p>
      </div>
      <img
        src="${useStatic('Profile/matthew-harwood_acf0ft.jpg')}"
        alt=""
        className="h-50vh lg:h-full w-full lg:w-1/2 object-cover order-first lg:order-none"
      />
    </section>
  `;
};
 */
