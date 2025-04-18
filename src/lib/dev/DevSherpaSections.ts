import { makeHomeSherpa } from '../../pages/_/home.sherpa';

const sherpa = makeHomeSherpa();

export interface SherpaItem {
  key: string;
  href: string;
  label: string;
}

export interface SherpaSection {
  id: string;
  label: string;
  items: SherpaItem[];
  sections?: SherpaSection[];
}

export const sherpaSections: SherpaSection[] = [
  {
    id: 'work',
    label: 'Work',
    items: [
      { key: 'work.index', href: sherpa.work.index({}), label: 'Work' },
      { key: 'work.resume', href: sherpa.work.internalResumePage({}), label: 'Resume' },
    ],
  },
  {
    id: 'family',
    label: 'Family',
    items: [{ key: 'family.index', href: sherpa.family.index({}), label: 'Family' }],
  },
  {
    id: 'play',
    label: 'Play',
    items: [{ key: 'play.index', href: sherpa.play.index({}), label: 'Play' }],
  },
];
