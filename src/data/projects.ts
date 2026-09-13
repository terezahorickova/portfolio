import type { ImageMetadata } from 'astro';
import buildingBlocksToySetCover from '../assets/covers/building-blocks-toy-set.jpg';
import wickerCradleCover from '../assets/covers/wicker-cradle.jpg';
import foldingEaselCover from '../assets/covers/folding-easel.jpg';
import travelChairCover from '../assets/covers/travel-chair.jpg';
import corkCompactCover from '../assets/covers/cork-compact.jpg';
import consoleTableCover from '../assets/covers/console-table.png';
import fieldKnifeCover from '../assets/covers/field-knife.jpg';
import guardianFigureCover from '../assets/covers/guardian-figure.jpg';
import checkeredLoungerCover from '../assets/covers/checkered-lounger.jpg';
import candleAndTealightSetCover from '../assets/covers/candle-and-tealight-set.jpg';
import castMaterialSamplesCover from '../assets/covers/cast-material-samples.jpg';
import wovenWillowStudyCover from '../assets/covers/woven-willow-study.jpg';
import resinAndPigmentFrameCover from '../assets/covers/resin-and-pigment-frame.jpg';

export type Section = 'product' | 'research' | 'graphics' | 'interests';

export interface Project {
  slug: string;
  section: Section;
  title: string;
  description: string;
  year?: string;
  color: string; // CSS custom property name, e.g. 'pastel-blush'
  aspect: string; // CSS aspect-ratio value
  cover?: ImageMetadata;
}

// Real cover photography is added later — each card renders a
// placeholder cover until then, keyed by the same `color`.
export const projects: Project[] = [
  // ---- Product ----
  {
    slug: 'building-blocks-toy-set',
    section: 'product',
    title: 'Building blocks toy set',
    description: 'Stackable wooden toys exploring texture, colour and open-ended play.',
    year: '2022',
    color: 'pastel-butter',
    aspect: '4 / 5',
    cover: buildingBlocksToySetCover,
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
  },
  {
    slug: 'folding-easel',
    section: 'product',
    title: 'Folding easel',
    description: 'A beech-wood easel that collapses flat, designed around a single locking joint.',
    year: '2023',
    color: 'pastel-mint',
    aspect: '3 / 4',
    cover: foldingEaselCover,
  },
  {
    slug: 'travel-chair',
    section: 'product',
    title: 'Travel chair',
    description: 'A lightweight folding chair with a striped textile seat for outdoor use.',
    year: '2023',
    color: 'pastel-seafoam',
    aspect: '3 / 4',
    cover: travelChairCover,
  },
  {
    slug: 'cork-compact',
    section: 'product',
    title: 'Cork compact',
    description: 'A small cork and metal vessel exploring natural, biodegradable materials.',
    year: '2024',
    color: 'pastel-periwinkle',
    aspect: '4 / 3',
    cover: corkCompactCover,
  },
  {
    slug: 'console-table',
    section: 'product',
    title: 'Console table',
    description: 'A slim console table with a woven cord shelf, shown here in early blueprint form.',
    year: '2024',
    color: 'pastel-rose',
    aspect: '4 / 3',
    cover: consoleTableCover,
  },
  {
    slug: 'field-knife',
    section: 'product',
    title: 'Field knife',
    description: 'A foraging knife concept balancing safety, grip and material honesty.',
    year: '2024',
    color: 'pastel-butter',
    aspect: '4 / 5',
    cover: fieldKnifeCover,
  },
  {
    slug: 'guardian-figure',
    section: 'product',
    title: 'Guardian figure',
    description: 'A small cast-metal figure, part of a series on protective household objects.',
    year: '2024',
    color: 'pastel-blush',
    aspect: '4 / 5',
    cover: guardianFigureCover,
  },
  {
    slug: 'checkered-lounger',
    section: 'product',
    title: 'Checkered lounger',
    description: 'A folding lounger frame with a woven checkerboard textile seat.',
    year: '2025',
    color: 'pastel-mint',
    aspect: '4 / 3',
    cover: checkeredLoungerCover,
  },
  {
    slug: 'candle-and-tealight-set',
    section: 'product',
    title: 'Candle & tealight set',
    description: 'A pair of patinated metal holders designed to nest together for travel.',
    year: '2025',
    color: 'pastel-seafoam',
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
    color: 'pastel-butter',
    aspect: '3 / 4',
    cover: resinAndPigmentFrameCover,
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
    title: 'Ceramics experiments',
    description: 'Small hand-built vessels made between larger projects.',
    year: '2023',
    color: 'pastel-butter',
    aspect: '4 / 5',
  },
  {
    slug: 'embroidery-sketchbook',
    section: 'interests',
    title: 'Embroidery sketchbook',
    description: 'Thread studies used as colour and pattern references.',
    year: '2024',
    color: 'pastel-rose',
    aspect: '3 / 4',
  },
  {
    slug: 'foraging-notes',
    section: 'interests',
    title: 'Foraging notes',
    description: 'Seasonal notes on plants and materials found near Prague.',
    year: '2024',
    color: 'pastel-mint',
    aspect: '3 / 4',
  },
  {
    slug: 'film-photography',
    section: 'interests',
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
