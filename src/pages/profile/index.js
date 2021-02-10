import { html } from "htm/preact";
import { AH } from "../../components/component_map";
import {useState, useCallback} from 'preact/hooks';
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
    <${ProfileSectionRe} />
    <${HR} title="Recent Activity" omitMargin />
    <p className="container">Nothing to see here - Thanks covid ☹️ </p>
  `;
};
//   <${ProfileSection} />


const IntroSectionRe = () => {
  return html`
    <fade-in>
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
        <div className="col-span-12 order-1 lg:order-none ">
          <${VideoLoop} className="w-full" type="video" src="Profile/matthew-harwood-wavy_q68pdb.mp4" />
        </div>

    </section>
    </fade-in>
    <${HR} title="What is UX Engineering" omitMargin />
    <fade-in>
      <section className="container mb-48">
        <${VideoOmitLoop} className="w-full" type="video" src="Profile/continuum_dh6vah.mp4" omitLoop />
      </section>
    </fade-in>
    <${HR} title="Resume" omitMargin />
  `
}
const ProfileSectionRe = () => {
  return html`
    <section className="container relative grid grid-cols-12 lg:grid-cols-24 lg:gap-4">
      <div className="lg:col-span-7">
        <h3 className="${Mono.xl3}">Experiences</h3>
        <${AH.HumbleBeginnings} />

      </div>
      <div className="lg:col-span-1" />
      <div className="lg:col-span-7">
        <h3 className="${Mono.xl3}">Education</h3>

        <ul>
          ${education.map(
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
        <h3 className="${Mono.xl3}">Awards</h3>
        <ul>
          ${awards.map(
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
      </div>
      <div className="lg:col-span-1" />
      <div className="lg:col-span-7">
        <h3 className="${Mono.xl3}">Technical</h3>
        <p className="my-8">${techniques.join(", ")}</p>
        <h3 className="${Mono.xl3}">Interests</h3>

        <p className="my-8">${interests.join(", ")}</p>
        <h3 className="${Mono.xl3}">Social</h3>
        <ul>
          ${socials.map(
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
    </section>
  `;
};

export const HumbleBeginnings = () => {
  const START = 4;
  const [limit, updateLimit] = useState(START);
  const showAll = useCallback(() => updateLimit(10), [updateLimit]);
  const hideAll = useCallback(() => updateLimit(START), [updateLimit]);
  const toggleLimit = limit === START ? showAll: hideAll;
  const toggleText = limit === START ? 'Show more' : 'Hide the';
  return html`
    <ul>
      ${experiences.slice(0,limit).map(
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
    <button className="bg-secondary text-primary hover:bg-gray-100 border border-black py-2 px-6 shadow inline-flex items-center ${Sans.base}" onClick="${toggleLimit}">${toggleText} humble beginnings</button>
  `
}
