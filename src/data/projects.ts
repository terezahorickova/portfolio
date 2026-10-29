import type { ImageMetadata } from 'astro';
import buildingBlocksToySetCover from '../assets/covers/building-blocks-toy-set.jpg';
import wickerCradleCover from '../assets/covers/wicker-cradle.jpg';
import foldingEaselCover from '../assets/covers/folding-easel.jpg';
import travelChairCover from '../assets/covers/travel-chair.jpg';
import corkCompactCover from '../assets/covers/cork-compact.jpg';
import consoleTableCover from '../assets/covers/console-table.png';
import horiPoster from '../assets/hori-hori/poster.jpg';
import horiBlueprint from '../assets/hori-hori/blueprint.jpg';
import horiSketches from '../assets/hori-hori/sketches.jpg';
import horiClay from '../assets/hori-hori/clay.jpg';
import horiRender from '../assets/hori-hori/render.jpg';
import horiVariants from '../assets/hori-hori/variants.jpg';
import horiSnow1 from '../assets/hori-hori/snow-1.jpg';
import horiSnow2 from '../assets/hori-hori/snow-2.jpg';
import horiGround from '../assets/hori-hori/ground.jpg';
import guardianFigureCover from '../assets/covers/guardian-figure.jpg';
import checkeredLoungerCover from '../assets/covers/checkered-lounger.jpg';
import candleAndTealightSetCover from '../assets/covers/candle-and-tealight-set.jpg';
import postFiestaCover from '../assets/covers/post-fiesta.jpg';
import castMaterialSamplesCover from '../assets/covers/cast-material-samples.jpg';
import wovenWillowStudyCover from '../assets/covers/woven-willow-study.jpg';
import resinAndPigmentFrameCover from '../assets/covers/resin-and-pigment-frame.jpg';
import sidaGirl from '../assets/sida/girl.jpg';
import sidaLounger from '../assets/sida/lounger.jpg';
import sidaChecker from '../assets/sida/checker.jpg';
import sidaSloth from '../assets/sida/sloth.jpg';
import sidaLying from '../assets/sida/lying.jpg';
import sidaTwoKids from '../assets/sida/two-kids.jpg';
import sidaBackToBack from '../assets/sida/back-to-back.jpg';
import sidaRenders from '../assets/sida/renders.jpg';
import sidaParts from '../assets/sida/parts.jpg';
import tarpHero from '../assets/tarp-chair/hero.webp';
import tarpFolded from '../assets/tarp-chair/folded.jpg';
import tarpBending from '../assets/tarp-chair/bending.jpg';
import tarpVelcro from '../assets/tarp-chair/velcro.jpg';
import tarpFabric from '../assets/tarp-chair/fabric.jpg';
import tarpSitting from '../assets/tarp-chair/sitting.jpg';
import tarpSittingBlur from '../assets/tarp-chair/sitting-blur.jpg';
import tarpTubes from '../assets/tarp-chair/tubes.jpg';
import tarpWashing from '../assets/tarp-chair/washing.jpg';
import tarpDrawings from '../assets/tarp-chair/drawings.webp';
import jilemniceIntro from '../assets/jilemnice/intro.jpg';
import jilemniceCyclist from '../assets/jilemnice/cyclist.jpg';
import jilemniceSnow from '../assets/jilemnice/snow.jpg';
import jilemniceLeaf from '../assets/jilemnice/leaf.jpg';
import jilemniceDots from '../assets/jilemnice/dots.jpg';
import jilemniceElevations from '../assets/jilemnice/elevations.jpg';
import jilemniceExploded from '../assets/jilemnice/exploded.jpg';
import ayaHero from '../assets/aya/hero.jpg';
import ayaJointDark from '../assets/aya/joint-dark.jpg';
import ayaFolded from '../assets/aya/folded.jpg';
import ayaPair from '../assets/aya/pair.jpg';
import ayaLegEdge from '../assets/aya/leg-edge.jpg';
import ayaJoint from '../assets/aya/joint.jpg';
import ayaVeneer from '../assets/aya/veneer.jpg';
import kockiHero from '../assets/kocki/hero.jpg';
import kockiShip from '../assets/kocki/ship.jpg';
import kockiRobot from '../assets/kocki/robot.jpg';
import kockiTraffic from '../assets/kocki/traffic.jpg';
import kockiCube from '../assets/kocki/cube.jpg';
import kockiBox from '../assets/kocki/box.jpg';
import kockiPlay1 from '../assets/kocki/play-1.jpg';
import kockiPlay2 from '../assets/kocki/play-2.jpg';
import kockiPlay3 from '../assets/kocki/play-3.jpg';
import rheaHero from '../assets/rhea/hero.jpg';
import rheaWoman from '../assets/rhea/woman.jpg';
import rheaStraw from '../assets/rhea/straw.jpg';
import rheaHands from '../assets/rhea/hands.jpg';
import rheaBelt from '../assets/rhea/belt.jpg';
import rheaRocker from '../assets/rhea/rocker.jpg';
import rheaLegs from '../assets/rhea/legs.jpg';
import rheaSwing from '../assets/rhea/swing.jpg';
import rheaSigns from '../assets/rhea/signs.jpg';
import rheaBaby from '../assets/rhea/baby.jpg';
import spojHero from '../assets/spoj/hero.webp';
import spojHand from '../assets/spoj/hand.jpg';
import spojWardrobe from '../assets/spoj/wardrobe.jpg';
import spojMoodboard from '../assets/spoj/moodboard.jpg';
import spojStep1 from '../assets/spoj/step-1.jpg';
import spojStep2 from '../assets/spoj/step-2.jpg';
import spojStep3 from '../assets/spoj/step-3.jpg';
import spojStep4 from '../assets/spoj/step-4.jpg';
import spojStep5 from '../assets/spoj/step-5.jpg';

export type Section = 'product' | 'research' | 'graphics' | 'interests';

/** Filters on the Interests page. A project can belong to several. */
export const interestFilters = [
  { key: 'photography', label: 'Photography' },
  { key: 'workshops', label: 'Workshops' },
  { key: 'land-art', label: 'Land art' },
  { key: 'diy', label: 'DIY' },
] as const;

export type InterestTag = (typeof interestFilters)[number]['key'];

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
  /** 'full' spans both columns, in a row after the left/right photos. */
  col: 'left' | 'right' | 'full';
  /** Width as a percentage of its column on desktop (default 100). */
  size?: number;
  /** Starts a new aligned row: this photo and the next one in the other column begin at the same height. */
  sync?: boolean;
  /** Already-optimized animated image: shown as-is so it keeps moving. */
  animated?: boolean;
}

/** A photo in the 3-column mosaic layout. Portrait = 3:4 (2 grid rows), landscape = 3:2 (1 row), wide = 3:2 across two columns (2 rows). */
export interface MosaicTile {
  src: ImageMetadata;
  alt: string;
  col: 1 | 2 | 3;
  /** 1-based grid row where the tile starts; rows are half a portrait photo tall. */
  row: number;
  shape: 'portrait' | 'landscape' | 'wide';
}

/** Optional editorial layout for a project's detail page. */
export interface ProjectDetail {
  /** If set, the page uses the full-width 3-column mosaic instead of the standard layout. */
  mosaic?: MosaicTile[];
  /** Mosaic only: an empty row of this many grid rows' height, inserted as row number `row` (a breathing space; tiles after it use the shifted row numbers). */
  mosaicSpacer?: { row: number; size: number };
  /** Mosaic only (desktop): refined opening. The first photo sits centred on the screen (white space under it as well as above), and the text is 4 of 18 grid columns wide with its bottom edge level with the photo's. */
  centerFirstScreen?: boolean;
  /** Portrait photo shown beside the intro text. */
  intro?: ImageMetadata;
  /** Big photo under the intro; defaults to the project's `cover`. Use `null` to show a "coming soon" box instead. */
  hero?: ImageMetadata | null;
  /** Hero is an already-optimized animated image: skip Astro's image processing so it keeps moving. */
  heroAnimated?: boolean;
  credits?: string[];
  /** Two text columns (each a list of paragraphs) shown under the hero photo. */
  columns?: [string[], string[]];
  gallery: GalleryImage[];
  /** A titled row of captioned photos (e.g. the steps of a method) shown after the gallery. */
  steps?: { title: string; items: { src: ImageMetadata; alt: string; caption: string }[] };
}

export interface Project {
  slug: string;
  section: Section;
  title: string;
  description: string;
  /** Overrides the description on the project page's subtitle (the card keeps the description). */
  subtitle?: string;
  year?: string;
  color: string; // CSS custom property name, e.g. 'pastel-blush'
  aspect: string; // CSS aspect-ratio value
  cover?: ImageMetadata;
  /** Interests only: which filters this project shows up under. */
  tags?: InterestTag[];
  body?: string; // longer write-up shown on the project detail page
  detail?: ProjectDetail;
}

// Every project gets the same detail page (see src/pages/work/[slug].astro).
// To fill one in, add to its entry below — each part is optional and the
// page just leaves out whatever is missing:
//   cover   big photo under the intro (also the card photo)
//   body    intro paragraph
//   detail: { intro, credits, columns, gallery }
// Use the "wicker-cradle" (Rhea) entry as the worked example.
export const projects: Project[] = [
  // ---- Product ----
  {
    slug: 'building-blocks-toy-set',
    section: 'product',
    title: 'Kocki',
    description: 'Educational building kit',
    year: '2023',
    color: 'pastel-butter',
    aspect: '4 / 5',
    cover: buildingBlocksToySetCover,
    body: 'My bachelor’s thesis deals with the design of KOCKI, an educational building set for preschool children. Its aim is to connect a didactic aid with a toy, so that while playing the child is not only entertained but also learns something. The set uses traditional wooden blocks in an unconventional way. The combination of colourful pegs and irregularly drilled holes in the blocks lets children create many structures, from various animals and houses to cars and planes. In addition, children can build all kinds of experimental structures in which they explore the laws of balance and gravity. In this way, while playing, children become cubist architects who discover the limits of their imagination as well as the laws of physics.',
    detail: {
      intro: buildingBlocksToySetCover,
      hero: kockiHero,
      columns: [
        [
          'The mathematically oriented placement of the holes offers an opportunity to learn basic mathematical operations. It also includes a cord for threading the blocks.',
        ],
        [
          'Besides joining the individual blocks, the coloured pegs also allow children to decorate their structures graphically, bringing simple geometric shapes to life. The set develops the child’s motor and cognitive skills while also providing plenty of room for imagination.',
        ],
      ],
      gallery: [
        { src: kockiShip, alt: 'A ship built from Kocki blocks with a red cord', col: 'left', size: 82 },
        { src: kockiTraffic, alt: 'A traffic light and a car built from Kocki blocks', col: 'right' },
        { src: kockiCube, alt: 'A single drilled wooden block with green pegs', col: 'left', size: 82 },
        { src: kockiRobot, alt: 'A robot built from Kocki blocks and coloured pegs', col: 'right', size: 82 },
        { src: kockiBox, alt: 'The Kocki set in its wooden box', col: 'left', size: 82 },
        { src: kockiPlay1, alt: 'A child building with Kocki blocks on the floor', col: 'right', size: 82 },
        { src: kockiPlay2, alt: 'Child’s hands holding a block with coloured pegs', col: 'left', size: 82 },
        { src: kockiPlay3, alt: 'A child playing with blocks and pegs', col: 'right', size: 82 },
      ],
    },
  },
  {
    slug: 'folding-easel',
    section: 'product',
    title: 'Aya',
    description: 'Table trestles',
    year: '2022',
    color: '#D7D2C3',
    aspect: '3 / 4',
    cover: foldingEaselCover,
    body: 'The AYA table trestles use the elegance of bent beech plywood combined with a simple construction of boards. The main function of a trestle is to provide stable and firm support for the tabletop, which is excellently ensured by the glued laminated wood. It shows resistance to deformation and damage, so there is no risk of the wood breaking under the weight of the table.\n\nMy goal was to design table trestles that look pleasant and neutral, so that they can be placed both in residential interiors and in public spaces. An important consideration for me was the space they take up, and so the AYA trestles can be easily stacked into one another.',
    detail: {
      intro: foldingEaselCover,
      hero: ayaHero,
      credits: ['Photography: Tereza Horičková'],
      gallery: [
        { src: ayaJointDark, alt: 'Close-up of the joint between the leg and rail of an AYA trestle', col: 'left', size: 91 },
        { src: ayaFolded, alt: 'Two AYA trestles folded against a concrete wall', col: 'right', size: 91 },
        { src: ayaPair, alt: 'An AYA trestle beside a table frame', col: 'left', size: 91 },
        { src: ayaLegEdge, alt: 'The laminated edge of an AYA trestle leg', col: 'right', size: 91 },
        { src: ayaJoint, alt: 'The bent beech joint of an AYA trestle', col: 'left', size: 91 },
        { src: ayaVeneer, alt: 'Layered veneer edges', col: 'right', size: 91 },
      ],
    },
  },
  {
    slug: 'field-knife',
    section: 'product',
    title: 'Hori hori',
    description: 'A gardening knife',
    year: '2025',
    color: 'pastel-seafoam',
    aspect: '2 / 3',
    cover: horiSnow2,
    body: 'The traditional Japanese Hori Hori knife (literally “dig, dig”) originally originated as a versatile tool for mountain gatherers and hunters. Thanks to its remarkable multi-functionality, it gradually became a popular worldwide favorite, fully replacing several specialized tools in the garden at once.\n\nThe primary motivation for designing my own interpretation of this tool was its versatility and strong popularity among users. The design focuses on ergonomics, safety, and diverse practical utility. The dual-sided blade, combining a smooth and a serrated edge, is tailored for both right- and left-handed users, allowing seamless digging, weeding, and cutting without the need to switch tools. An integrated centimeter scale on the blade facilitates precise measurement of planting depth and spacing between seedlings.',
    detail: {
      intro: horiSnow1,
      hero: horiBlueprint,
      gallery: [
        { src: horiRender, alt: 'Render of the Hori hori knife with a Gardena handle', col: 'left' },
        { src: horiSnow2, alt: 'The knife held in a hand over snow, showing the cm ruler', col: 'right', size: 83 },
        { src: horiVariants, alt: 'Four colour variants of the Gardena Hori hori knife', col: 'left' },
        { src: horiPoster, alt: 'Poster with a line drawing of the Hori hori knife', col: 'right', size: 83 },
        { src: horiClay, alt: 'Clay and wood handle prototypes leading to the final knife', col: 'left' },
        { src: horiSketches, alt: 'Pencil sketches of Hori hori handle shapes', col: 'right', size: 83 },
        { src: horiGround, alt: 'The knife lying on the ground', col: 'left', size: 83 },
      ],
    },
  },
  {
    slug: 'cork-compact',
    section: 'product',
    title: 'Enso',
    description: 'Digital biography',
    year: '2023',
    color: 'pastel-periwinkle',
    aspect: '4 / 3',
    cover: corkCompactCover,
  },
  {
    slug: 'post-fiesta',
    section: 'product',
    title: 'Post-fiesta',
    description: 'Playful glass & porcelain for fine dining',
    year: '2025',
    color: 'pastel-rose',
    aspect: '4 / 3',
    cover: postFiestaCover,
  },
  {
    slug: 'wicker-cradle',
    section: 'product',
    title: 'Rhea',
    description: 'A wicker cradle',
    year: '2022',
    color: 'pastel-blush',
    aspect: '3 / 4',
    cover: wickerCradleCover,
    body: 'The wicker cradle Rhea was created as part of the Bohemian Perfection project, a collaboration between students and traditional craftspeople. As part of this initiative, I focused on the craft of basketry and designed a baby cradle for infants up to 8 months of age. My goal was to modernize the craft and traditional production of wicker baskets, maximizing the use of natural materials while giving them a contemporary design. I was personally involved in the fabrication process, spending many days in the workshop with master basket weaver Mr. Král to gain invaluable hands-on experience in this beautiful craft.',
    detail: {
      credits: ['Collaboration: Petr Král', 'Photography: Tereza Horičková'],
      centerFirstScreen: true,
      mosaicSpacer: { row: 3, size: 0.46 },
      mosaic: [
        { src: rheaHero, alt: 'The Rhea wicker cradle on a rocking frame in a concrete hall', col: 2, row: 1, shape: 'wide' },
        { src: rheaHands, alt: 'Fastening the canvas lining inside the cradle', col: 2, row: 4, shape: 'landscape' },
        { src: rheaStraw, alt: 'Bundles of willow rods in the workshop', col: 1, row: 5, shape: 'portrait' },
        { src: rheaLegs, alt: 'A person rocking the cradle with their foot on the wooden runner', col: 3, row: 5, shape: 'landscape' },
        { src: rheaBelt, alt: 'Leather strap and woven rim detail', col: 2, row: 7, shape: 'landscape' },
        { src: rheaWoman, alt: 'A woman leaning over the cradle in a concrete hall', col: 3, row: 7, shape: 'portrait' },
        { src: rheaRocker, alt: 'The cradle’s rocking runner on a tiled floor', col: 1, row: 8, shape: 'landscape' },
        { src: rheaBaby, alt: 'A baby lying in the cradle', col: 2, row: 9, shape: 'portrait' },
        { src: rheaSwing, alt: 'Rhea hung as a swing in the exhibition', col: 1, row: 11, shape: 'portrait' },
        { src: rheaSigns, alt: 'Craft certification signs in the basket weaver’s workshop', col: 3, row: 11, shape: 'landscape' },
      ],
    },
  },
  {
    slug: 'console-table',
    section: 'product',
    title: 'Jilemnice',
    description: 'Bus stops for Jilemnice',
    year: '2024',
    color: 'pastel-rose',
    aspect: '4 / 3',
    cover: consoleTableCover,
    body: 'Jilemnice, a picturesque town in the foothills of the Krkonoše, approached us with a request to create a unified system of urban furniture and bus stops that would look contemporary while respecting the historic atmosphere of the town.\n\nThe design of the bus stops combines the character of urban stops, with their slender construction and glass surfaces, with the robustness typical of stops in rural settings. The welded steel structure is complemented by perforated sheet metal, which gives the stop a distinctive visual character. We moved away from traditional, inconspicuous solutions with a bold red colour and daring shaping.\n\nThe perforation is based on simple circular holes that group into motifs referring to the identity of Jilemnice: a skier on a snowy slope, a symbol of the cradle of Czech skiing, or falling leaves recalling the surrounding landscape.',
    detail: {
      intro: jilemniceIntro,
      credits: ['Team collaboration: Tereza Horičková, Ela Dlugopolská, Jitka Šulcová'],
      columns: [
        [
          'Jilemnice is a picturesque town in the Liberec Region in the north of the Czech Republic, in the foothills of the Krkonoše. It lies in the valley of the small river Jilemka and is known as one of the gateways to the Krkonoše National Park. The first written mention of Jilemnice dates from 1356, although the area had been settled much earlier. In the Middle Ages the town developed as a centre of crafts and trade, and it saw significant growth thanks to textile processing.',
        ],
        [
          'Jilemnice is considered the cradle of Czech skiing. It is home to the Krkonoše Museum, which deals with the history of the town and with winter sports. The town’s landmark is a Baroque château surrounded by a park, which today serves as a cultural and exhibition centre. Visitors are also drawn to the historic houses on the square and the surrounding nature, ideal for hiking or winter sports.',
        ],
      ],
      gallery: [
        { src: jilemniceCyclist, alt: 'The bus stop on a summer street, with a cyclist passing', col: 'left', size: 91 },
        { src: jilemniceSnow, alt: 'The bus stop in winter snow', col: 'right', size: 91 },
        { src: jilemniceLeaf, alt: 'Leaf motifs perforated into the bus stop wall', col: 'left', size: 91 },
        { src: jilemniceDots, alt: 'Detail of the perforation pattern', col: 'right', size: 91 },
        { src: jilemniceElevations, alt: 'Elevations of the bus stop with leaf and figure perforations', col: 'full' },
        { src: jilemniceExploded, alt: 'Exploded drawing of the bus stop construction', col: 'full' },
      ],
    },
  },
  {
    slug: 'travel-chair',
    section: 'product',
    title: 'Tarp chair',
    description: 'A foldable chair made of old truck tarps',
    year: '2025',
    color: '#CCCCCC',
    aspect: '3 / 4',
    cover: travelChairCover,
    body: 'As part of an internship in the product design studio at UMPRUM, we were to design a folding chair in collaboration with a company of our choice. I chose FREITAG, whose specialty is making bags and backpacks from used truck tarps. My folding chair design combines upcycled materials with an adjustable system.\n\nThanks to a detachable backrest and an extendable seat, it can easily be transformed into a low lounge chair. It is made of steel tubes, old truck tarps and seat-belt webbing. The product reflects the philosophy of circular design and offers a new way of rescuing used tarps from waste. Each piece is unique, with its own traces of use and its own colour.',
    detail: {
      intro: travelChairCover,
      hero: tarpHero,
      heroAnimated: true,
      credits: ['Photography: Tereza Horičková'],
      gallery: [
        { src: tarpFolded, alt: 'The tarp chair folded flat against a concrete wall', col: 'left', size: 91 },
        { src: tarpDrawings, alt: 'Line drawings of the tarp chair as a chair and as a lounge chair', col: 'right', size: 91, animated: true },
        { src: tarpWashing, alt: 'Washing a used truck tarp in a bathtub', col: 'left', size: 91, sync: true },
        { src: tarpSitting, alt: 'A person sitting in the tarp chair', col: 'right', size: 91 },
        { src: tarpSittingBlur, alt: 'A person sitting down in the chair', col: 'right', size: 91 },
        { src: tarpBending, alt: 'Attaching the backrest to the chair frame', col: 'left', size: 91 },
        { src: tarpTubes, alt: 'Bent steel tubes and a sketch in the workshop', col: 'right', size: 91 },
        { src: tarpVelcro, alt: 'Fastening the tarp seat with straps', col: 'left', size: 91 },
        { src: tarpFabric, alt: 'Fitting the tarp seat onto the steel frame', col: 'left', size: 91 },
      ],
    },
  },
  {
    slug: 'guardian-figure',
    section: 'product',
    title: 'Pupendo',
    description: 'A beer opener',
    year: '2024',
    color: 'pastel-blush',
    aspect: '4 / 5',
    cover: guardianFigureCover,
  },
  {
    slug: 'checkered-lounger',
    section: 'product',
    title: 'Sida',
    description: 'A multifunctional swing made of recycled materials',
    year: '2023',
    color: 'pastel-mint',
    aspect: '4 / 3',
    cover: checkeredLoungerCover,
    body: 'SIDA is a variable rocker for children up to 7 years old, which can change from a lounger into a rocking chair or a ride-on toy. It is made of recycled materials used in the automotive industry. These materials can no longer be used there, but a good rocker gives them a valuable second life. SIDA also comes in several shapes, from a universal one to animal motifs such as the sloth.\n\nSIDA was created as part of the Reborn Design competition, which focused on using recycled materials from the construction and automotive industries. Besides the categories for a second life of construction waste and of tyres, a category for a second life of a bumper was also announced, and that is where I entered. During the semester we attended several workshops and lectures where we learned about using secondary materials. I decided to use recycled plastic because it is the biggest problem for humankind in terms of volume, and it is also easy to work with. In the end I found a use for another “waste” material as well: offcuts of seat belts.',
    detail: {
      credits: ['Photography: Tereza Horičková'],
      mosaic: [
        { src: sidaGirl, alt: 'A girl sitting on the SIDA rocker under trees', col: 3, row: 1, shape: 'portrait' },
        { src: sidaLounger, alt: 'The woven seat of the SIDA lounger from above', col: 1, row: 3, shape: 'landscape' },
        { src: sidaChecker, alt: 'Close-up of the checkerboard weave of the seat', col: 2, row: 4, shape: 'portrait' },
        { src: sidaSloth, alt: 'The sloth-shaped side of the SIDA rocker', col: 1, row: 6, shape: 'portrait' },
        { src: sidaLying, alt: 'A boy lying back in the SIDA rocker', col: 3, row: 6, shape: 'landscape' },
        { src: sidaRenders, alt: 'Renders of two SIDA variants made from recycled plastic', col: 2, row: 8, shape: 'landscape' },
        { src: sidaTwoKids, alt: 'Two children riding the SIDA rocker together', col: 3, row: 8, shape: 'portrait' },
        { src: sidaParts, alt: 'The parts of SIDA laid out in a box', col: 1, row: 9, shape: 'landscape' },
        { src: sidaBackToBack, alt: 'Two children sitting back to back on the SIDA rocker', col: 2, row: 10, shape: 'landscape' },
      ],
    },
  },
  {
    slug: 'candle-and-tealight-set',
    section: 'product',
    title: 'Svitlo',
    description: 'A first aid light box',
    year: '2021',
    color: 'pastel-butter',
    aspect: '4 / 3',
    cover: candleAndTealightSetCover,
  },

  // ---- Research ----
  {
    slug: 'cast-material-samples',
    section: 'research',
    title: 'Sediments of Vltava',
    description: 'Sensory pathway',
    year: '2026',
    color: 'pastel-mint',
    aspect: '4 / 3',
    cover: castMaterialSamplesCover,
  },
  {
    slug: 'woven-willow-study',
    section: 'research',
    title: 'Virtual craft',
    description: 'Wickering Skills: Digital vs. Physical Learning.',
    year: '2023',
    color: 'pastel-blush',
    aspect: '4 / 3',
    cover: wovenWillowStudyCover,
  },
  {
    slug: 'resin-and-pigment-frame',
    section: 'research',
    title: 'Spoj',
    description: 'Material experimentation with bioplastic',
    year: '2025',
    subtitle: 'Adhesive strength of bioplastic',
    color: 'pastel-butter',
    aspect: '3 / 4',
    cover: resinAndPigmentFrameCover,
    body: 'SPOJ responds to the needs of students and frequent movers looking for lightweight, functional furniture. The initial concept aimed to elevate an ordinary clothes rack into a wardrobe—creating a semi-transparent enclosure that protects garments from dust, keeps the interior visually light, and is easy to clean. Seeking a more practical, washable alternative to the fabric covers typically used in temporary wardrobes, I began exploring bioplastics and their potential in interior spaces.\n\nThrough material experimentation, I developed a method to join the bioplastic panels directly to the frame without any additional fasteners or hardware. When cast into a mold, the bioplastic forms a thin film that hardens as it dries, creating a strong bond with the mold itself. I decided to turn this behavior into a core structural feature: the wardrobe’s cladding is held in place purely by the adhesive properties of the curing bioplastic, eliminating the need for conventional mechanical fixings.',
    detail: {
      intro: resinAndPigmentFrameCover,
      hero: spojHero,
      heroAnimated: true,
      gallery: [
        { src: spojMoodboard, alt: 'Moodboard of translucent wardrobes, screens and orange bioplastic samples', col: 'full' },
        { src: spojHand, alt: 'A hand pressed against a bioplastic panel in a wooden frame', col: 'left', size: 87, sync: true },
        { src: spojWardrobe, alt: 'Render of the SPOJ sideboard with translucent bioplastic doors and a tulip on top', col: 'right', size: 87 },
      ],
      steps: {
        title: 'Method',
        items: [
          { src: spojStep1, alt: 'Wooden frames laid out on a dark board', caption: 'Preparation of molds in the form of frames' },
          { src: spojStep2, alt: 'Dried orange peels and orange powder on a plate', caption: 'The dried orange peels need to be ground into a powder.' },
          { src: spojStep3, alt: 'A pot of bioplastic mixture on a stove', caption: 'Preparation of the bioplastic mixture (specifically, in my case: orange powder, glycerol, gelatin, and water)' },
          { src: spojStep4, alt: 'Bioplastic cast into molds', caption: 'Casting into molds' },
          { src: spojStep5, alt: 'A bioplastic sheet drying in a window with a hand behind it', caption: 'In a home setting, drying takes roughly 5 days.' },
        ],
      },
    },
  },
  // ---- Graphics ----
  {
    slug: 'oloveny-dusan',
    section: 'graphics',
    title: 'Olověný Dušan',
    description: 'Visual identity for a student design competition.',
    year: '2025',
    color: 'pastel-periwinkle',
    aspect: '3 / 4',
  },
  {
    slug: 'city-of-jilemnice',
    section: 'graphics',
    title: 'City of Jilemnice',
    description: 'Identity for a small Czech city.',
    year: '2024',
    color: 'pastel-blush',
    aspect: '3 / 4',
  },
  {
    slug: 'knitted-scarfs',
    section: 'graphics',
    title: 'Knitted scarfs',
    description: 'Merchandise for Olověný Dušan 2025.',
    year: '2025',
    color: 'pastel-rose',
    aspect: '4 / 5',
  },
  {
    slug: 'furoshiki-scarfs-set',
    section: 'graphics',
    title: 'Furoshiki scarfs set',
    description: 'Technology of blueprinting, applied to a set of wrapping cloths.',
    year: '2023',
    color: 'pastel-periwinkle',
    aspect: '4 / 5',
  },
  {
    slug: 'faculty-of-architecture',
    section: 'graphics',
    title: 'Faculty of Architecture',
    description: 'Identity project for the Faculty of Architecture.',
    year: '2024',
    color: 'pastel-seafoam',
    aspect: '3 / 4',
  },
  {
    slug: 'sediments-of-the-vltava-river',
    section: 'graphics',
    title: 'Sediments of the Vltava river',
    description: 'Diploma thesis identity.',
    year: '2022',
    color: 'pastel-mint',
    aspect: '3 / 4',
  },
  {
    slug: 'pod-jednim-nebem',
    section: 'graphics',
    title: 'Pod jedním nebem',
    description: 'Identity and poster for a contemporary dance performance.',
    year: '2026',
    color: 'pastel-seafoam',
    aspect: '3 / 4',
  },
  {
    slug: 'deans-sport-day',
    section: 'graphics',
    title: "Dean's sport day",
    description: 'Event identity built around a foldable chair made of old truck tarp.',
    year: '2025',
    color: 'pastel-seafoam',
    aspect: '3 / 4',
  },

  // ---- Interests ----
  {
    slug: 'ceramics-experiments',
    section: 'interests',
    tags: ['diy', 'workshops'],
    title: 'Ceramics experiments',
    description: 'Small hand-built vessels made between larger projects.',
    year: '2023',
    color: 'pastel-butter',
    aspect: '4 / 5',
  },
  {
    slug: 'embroidery-sketchbook',
    section: 'interests',
    tags: ['diy'],
    title: 'Embroidery sketchbook',
    description: 'Thread studies used as colour and pattern references.',
    year: '2024',
    color: 'pastel-rose',
    aspect: '3 / 4',
  },
  {
    slug: 'foraging-notes',
    section: 'interests',
    tags: ['land-art'],
    title: 'Foraging notes',
    description: 'Seasonal notes on plants and materials found near Prague.',
    year: '2024',
    color: 'pastel-mint',
    aspect: '3 / 4',
  },
  {
    slug: 'film-photography',
    section: 'interests',
    tags: ['photography'],
    title: 'Film photography',
    description: 'A running archive of analogue photographs from travel and studio life.',
    year: '2025',
    color: 'pastel-periwinkle',
    aspect: '3 / 4',
  },
];

export function getBySection(section: Section): Project[] {
  return projects.filter((p) => p.section === section);
}

export function getBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
