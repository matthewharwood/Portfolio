import {html} from 'htm/preact';
import {Mono, Sans} from '../../components/typography';
import {SecondaryButton} from '../../components/buttons';
import {HR} from '../../components/hr';

const Highlight = (props) => {
  const {
    isImageRight,
    imageCols = 6,
    title,
    text,
    image,
    weighted,
  } = props;

  const imageOrder = isImageRight ? "order-last" : "order-first";
  const imageColsClass = `lg:col-span-${imageCols}`;
  const textColsClass = `lg:col-span-${12 - imageCols}`;
  const hasWeight = weighted ? isImageRight ? 'push-1' : 'pull-1' : '';
  return html`
    <section
      className="container px-5 lg:px-16 grid grid-cols-12 lg:gap-10 py-16"
    >
      <div className="flex flex-col col-span-12 ${textColsClass}">
        <h2 className="${Mono.xl4}">${title}</h2>
        <p className="mt-5 leading-loose ${Sans.lg}">${text}</p>
      </div>
      <div className="col-span-12 ${imageOrder} ${imageColsClass} ${hasWeight}">
        <img src="${image}" alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  `;
};

const whatItIs = {
  isImageRight: true,
  imageCols: 6,
  title: "What it is?",
  text:
    "You must save the world! Our city is being overrun by Vampires. They spread their blight, build up their monoliths, and connecting them together through their cybernetic communication cables. Hop into your Mech, walk through the city streets, climb up the vampire’s monoliths, orangatang across their cybernetic cables, destroy everything insight with your neon light whip. Every step of the way, collecting your loot. You must save the world! Upgrade your Mech with the mechanics it takes to explore further and destroy more. You must save the world! Find and destroy the Patient Zero Vampire!",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848200/labs/monkey-mech/city-lights_ylvsez.jpg',
  weighted: true,
}
const metroidvania = {
  isImageRight: true,
  imageCols: 6,
  title: "Metroidvania",
  text:
    "You explore a large interconnected world in which most ways are at first unpassable until you find new abilities to overcome those obstacles. A cornerstone of Monkey Mech’s design was to create abilities that are so versatile, they will keep on surprising you by how many different usages they have. If you combine your abilities, the possibilities become even bigger.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848500/labs/monkey-mech/metroidvania_fxce7s.png',
  weighted: true,
}


const Exploration = {
  isImageRight: false,
  imageCols: 6,
  title: "Exploration",
  text:
    "Most of the game is about exploring the sandbox world to track down secrets. Often you will think you are about to get out of bounds and beat the level designer, but right there is a chest waiting for you with a very rewarding upgrade. Monkey Mechz respects your lifetime and doesn't bloat the playtime with unlimited no-brainer collectibles.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848675/labs/monkey-mech/tbd_ez9a32.png',
  weighted: true,
}

const puzzleDesign = {
  isImageRight: true,
  imageCols: 6,
  title: "Puzzle Design",
  text:
    "The deeper you get into the game the more you will be facing creative puzzles you've never seen anywhere before, encouraging you to stop and think about what abilities you have and how you can use them in yet another way. Puzzle types that I already knew from other games were immediately rejected in the design process. And it's important to me that once you understand the idea behind a puzzle, you can pretty much immediately solve it instead of having to go through a cumbersome, frustrating execution.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848675/labs/monkey-mech/tbd_ez9a32.png',
  weighted: true,
}

const combat = {
  isImageRight: false,
  imageCols: 6,
  title: "Combat",
  text:
    "Use a Whip as a weapon like you’ve never been able to before in mouse and keyboard based game.  Monkey Mech will borrow from old-school, fast-paced shooter games like Unreal, Doom and Quake, encouraging high-speed thinking and reflexes, while throwing shot after shot at hordes of charging enemies.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848675/labs/monkey-mech/tbd_ez9a32.png',
  weighted: true,
}

const MonkeyMech = () => {
  return html`
    <article className="pt-nav">
      <header className="bg-purple-700 py-64">
        <div className="h-full px-16 flex items-center  container">
          <div className="flex flex-col">
            <h1 className="${Mono.lx6} uppercase -mt-4 text-secondary">Monkey Mech</h1>
            <div className="mt-2">
                <${SecondaryButton} link="Sign up to Newsletter" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="container">
          <${Highlight} ...${whatItIs} />
        </section>
        <section>
          <${HR} title="Game Description" />
        </section>
        <section className="container">
          <${Highlight} ...${metroidvania} />
        </section>
        <section className="container">
          <${Highlight} ...${Exploration} />
        </section>

        <section className="container">
          <${Highlight} ...${puzzleDesign} />
        </section>

        <section className="container">
          <${Highlight} ...${combat} />
        </section>

        <section>
          <${HR} title="Art Style" align="center" />
        </section>

        <section>
          <img alt="art style" className="w-full" src="https://res.cloudinary.com/morningharwood/image/upload/v1612848989/labs/monkey-mech/art-style_ji03op.png" />
        </section>

        <section>
          <${HR} title="CURRENT MODEL STATUS" align="center" />
        </section>

        <section className="container">
          <img alt="art style" className="w-full" src="https://res.cloudinary.com/morningharwood/image/upload/v1612849116/labs/monkey-mech/models_lfzvkz.jpg" />
        </section>

        <section>
          <${HR} title="ENVIRONMENT" align="center" />
        </section>

        <section className="container">
          <div className="video-container relative w-full aspect-ratio-16/9">
            <iframe className="inset-0 absolute w-full h-full" src="https://www.youtube.com/embed/dITedcOKWQM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
        <section className="pt-24">
          <div className="bg-purple-700 py-64">
            <div className="h-full px-16 flex items-center  container">
              <div className="flex flex-col">
                <img src="https://res.cloudinary.com/morningharwood/image/upload/v1612849279/labs/monkey-mech/sidequest_nwxxum.png" alt="Sidequest logo"/>
                <div className="mt-6">
                  <${SecondaryButton} link="Join Sidequest Community" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-64">
            <div className="h-full px-16 flex items-center  container">
              <div className="grid grid-cols-12 w-full gap-6">
                <div className="col-span-6 w-full">
                  <div className="${Sans.lg} px-4 py-3 bg-gray-200 "><span>Release Date:</span> <span className="pl-4">Q1 2022</span></div>
                  <div className="${Sans.lg} px-4 py-3 "><span>Players:</span> <span className="pl-4">1</span></div>
                  <div className="${Sans.lg} px-4 py-3 bg-gray-200"><span>Genre:</span> <span className="pl-4">Adventure, Platformer, Puzzle, Action</span></div>
                  <div className="${Sans.lg} px-4 py-3 "><span>Publisher:</span> <span className="pl-4">GMH/VR</span></div>
                  <div className="${Sans.lg} px-4 py-3 bg-gray-200 flex flex-col"><div>Support Us!</div> <div className="flex py-8"> <${SecondaryButton} link="Add To Steam Wishlist" />  <${SecondaryButton} link="Visit us on Oculus Store" /></div></div>

                </div>
                <div className="col-span-6 w-full">
                  <div className="${Sans.lg} px-4 py-3 bg-gray-200"><span>Developer:</span> <span>Good Morning Harwood</span></div>
                  <div className="${Sans.lg} px-4 py-3"><span>Game file Size:</span> <span>TBD</span></div>
                  <div className="${Sans.lg} px-4 py-3 bg-gray-200"><span>Supported Languages:</span> <span>English</span></div>
                  <div className="${Sans.lg} px-4 py-3"><span>Platforms:</span> <span> Oculus Quest, Valve Index</span></div>
                  <div className="${Sans.lg} px-4 py-3 bg-gray-200 flex flex-col"><div>ESRB Rating</div> <div className="flex py-4"> <img src="https://res.cloudinary.com/morningharwood/image/upload/v1612850837/labs/monkey-mech/esrb_gmuh5o.png" alt="esrb Mature"> </div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </article>
  `
};

export {
  MonkeyMech
}
