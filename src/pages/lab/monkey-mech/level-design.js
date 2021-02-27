import {html} from 'htm/preact';
import {Mono, Sans} from '../../../components/typography';
import {SecondaryButton} from '../../../components/buttons';
import {HR} from '../../../components/hr';
import {MediaNew} from '../../../components/media/media';
import {Quote} from '../../../components/quote';
import {Summary} from '../../../components/summary';

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
  title: "Brutalism",
  text:
    "I've gone back and forth regarding the look of the game's world.  Although I am not an art director by any means, I feel that I have an aesthetic.  I spent hours researching and creating mood boards on Pinterest before finally settling on Brutalist Architecture. I have a few reason why I went with Brutalism:\n",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848200/labs/monkey-mech/level-design/brutalism-1_oxcgeq.jpg',
  weighted: true,
}
const point1 = {
  isImageRight: true,
  imageCols: 6,
  title: "3D Modeling is Hard",
  text:
    "Brutalism uses a lot of primitive shapes that are easy to prototype.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848500/labs/monkey-mech/level-design/blender_nusfzk.jpg',
  weighted: true,
}


const point2 = {
  isImageRight: false,
  imageCols: 6,
  title: "Textures are difficult too!",
  text:
    "Concrete has traditionally been used in brutalism, so the materials are kept simple.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848675/labs/monkey-mech/level-design/texture_rers8w.jpg',
  weighted: true,
}

const point3 = {
  isImageRight: true,
  imageCols: 6,
  title: "Hardware limitations",
  text:
    "Brutalism makes use of a lot of primitive geometry and is therefore low-polygon. VR headsets such as Oculus Quest 2 suffer from performance bottlenecks.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848675/labs/monkey-mech/level-design/VR_lnxnph.jpg',
  weighted: true,
}

const point4 = {
  isImageRight: false,
  imageCols: 6,
  title: "Level Building",
  text:
    "The brutalistic aesthetic lends itself well to building dungeons, with its colossal forms, sharp edges, physically defying cantilevers, and repetitive shapes.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1612848675/labs/monkey-mech/level-design/level-building_cicvu4',
  weighted: true,
}

const point5 = {
  isImageRight: true,
  imageCols: 6,
  title: "Scale & Elevation",
  text:
    "Once I had a piece of grid paper filled with a level that was 20x25; however, there were 2 problems.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1614407955/labs/monkey-mech/level-design/Group_112_kkjssi.png',
  weighted: false,
}

const point6 = {
  isImageRight: true,
  imageCols: 6,
  title: "Paper Prototype",
  text:
    "I outlined elevations on a grid paper, but paper as a 2d medium has its limitations.",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1614407756/labs/monkey-mech/level-design/Group_113_i8ozrb.png',
  weighted: false,
}
const point7 = {
  isImageRight: true,
  imageCols: 6,
  title: "Scale in VR",
  text:
    "What is the optimum size of one grid unit in VR?",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1614407756/labs/monkey-mech/level-design/Group_114_dadm6x.png',
  weighted: false,
}
const point8 = {
  isImageRight: true,
  imageCols: 6,
  title: "Probuilder",
  text:
    "I started in probuilder and progrids and built out the level to a 1m scale.  At this scale, in VR the scale was just tiny and claustrophobic. I decided that 1 grid unit would be x:5, y:5, z:5. This sense of scale felt amazing in VR.\n",
  image: 'https://res.cloudinary.com/morningharwood/image/upload/v1614407755/labs/monkey-mech/level-design/Group_109_xizbmj.png',
  weighted: false,
}

const Index = () => {
  return html`
    <article className="pt-nav bg-gray-200">
      <header className="bg-purple-700 py-64 relative">
        <${MediaNew} type="video" className="object-cover inset-0 absolute h-full w-full" videoSrc="${"labs/monkey-mech/level-design/hero_jmq7xc.mp4"}" alt="${''}" />
        <div className="h-full px-16 flex items-center relative container z-10">
          <div className="flex flex-col ">
            <h1 className="${Mono.lx6} uppercase -mt-4 text-secondary">Level Design</h1>

          </div>
        </div>

      </header>
      <main>
        <section className="container">
          <${Highlight} ...${whatItIs} />
        </section>
        <section>
          <${HR} title="FOUR REASONS FOR BRUTALISM" />
        </section>
        <section className="container">
          <${Highlight} ...${point1} />
        </section>
        <section className="container">
          <${Highlight} ...${point2} />
        </section>

        <section className="container">
          <${Highlight} ...${point3} />
        </section>

        <section className="container">
          <${Highlight} ...${point4} />
        </section>
        <section className="container py-64">
          <${Quote} quote="In my view, brutalism is beautiful. Imagine a colossal brutalist maze-like city, where 5x5x5m shapes transform, oscillate, and permeate through the space. In VR, this fantasy world is now a reality. I could build levels block by block into a cityscape, in an architectural movement that is familiar to those who have experienced it, as well as, taking someone to a space that they cannot be."/>
        </section>
        <section>
          <${HR} title="THE PROCESS; THE CHALLENGE" align="center" />
        </section>
        <${Summary} text="Now that Art Direction has been decided, the new question is how do I construct it.  I went back and forth between a workflow with myself. I thought I could do it all myself, but I soon realized I'm terrible with Blender and the city will still require objects and details beyond cubes. So I went to find help and I found a 3d Modeller named Pedras from a subreddit r/INAT that was also interested in making a game. Within the first few weeks it became clear that there is a shit ton of work that goes into making a 3d space. The first thing I did was go through a huge humble bundle of 2d game title bundles and made a huge list of what “could” be relevant to my brutalist city. This included objects like trash cans and sidewalks and trees.   While Pedras was getting warmed up building those small low poly models; I pulled out some grid paper and paper prototyping out my game’s first level.  Exploration, puzzle and fighting are at the core of Monkey Mech. Climbing up, Oranagatanging across, gliding between structures, whipping to kill vampires, are mechanics that I strove to introduce naturally into the level design. By “naturally” I mean as iterative puzzles and not as dialogue based tutorials."/>
        <section className="container">
          <${Highlight} ...${point5} />
        </section>
        <section className="container">
          <${Highlight} ...${point6} />
        </section>
        <section className="container">
          <${Highlight} ...${point7} />
        </section>
        <section className="container">
          <${Highlight} ...${point8} />
        </section>
        <section>
          <${HR} title="LEVEL DESIGN" />
        </section>
        <${Summary} text="I found Probuilder full of bugs and difficult to understand when building out my levels in Probuilder. With those limitations in mind, I looked for a better way to design my maze-like fantasy brutalist city.  After some research and experimentation with other tools Modeling in VR, to a game called townscape, I decided to use Magicavoxel.  With Magicavoxel, I was able to quickly build out like I would with 2d grid paper but detail elevations and even detail using color on what could be in that gridspace e.g. the pink spot is the start position and yellow means climbable. Magicavoxel can export to an OBJ format and I was able to bring that into Unity. By default Magicavoxel maps 128^3 = 2,097,152 units or 6515sq miles if you were to lay out everything flat.  Obviously that's not realistic to finish by a solo developer but for this first prototype I got the map down to 20x25x10"/>

        <section className="container">
          <img alt="art style" className="w-full" src="https://res.cloudinary.com/morningharwood/image/upload/v1614407482/labs/monkey-mech/level-design/Probuilder-level_mbfhfd.jpg" />
        </section>

        <section>
          <${HR} title="ENVIRONMENT DESIGN" />
        </section>
        <${Summary} text="Working with Pedras now we decided on what the brutalist buildings would look like. After a lot of Pinterest mood boards, we became very inspired by Habitat 67. Pedras went off to make a few dozen cube’s with cutouts for windows.  But the variety was seemingly too difficult to have 1 offs cubes.  So after some careful planning we decided to go with just building out faces of a cube with a variety of cutouts and styles. Then we could assemble these few faces into a greater variety of cubes as prefabs in unity. As a calculated side-effect, making these prefabs afford the opportunity to add collision detection, script windows that could be destroyed, make walls climbable, essentially bake all mechanics into the game"/>
        <section className="container">
          <img alt="art style" className="w-full" src="https://res.cloudinary.com/morningharwood/image/upload/v1613196419/labs/monkey-mech/level-design/tiles_pofflc.png" />
        </section>
        <section className="container py-6">
          <img alt="art style" className="w-full" src="https://res.cloudinary.com/morningharwood/image/upload/v1614408489/labs/monkey-mech/level-design/The_Map_zruxz9.jpg" />
        </section>
        <section className="container py-6">
          <img alt="art style" className="w-full" src="https://res.cloudinary.com/morningharwood/image/upload/v1614408489/labs/monkey-mech/level-design/The_Park_zlbqfs.jpg" />
        </section>
        <section className="container py-6 relative aspect-ratio-16/9 py-6">
          <div className="absolute inset-0 w-full h-full">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dInOW0np_Rg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  Index
}
