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
      { key: 'work.resume', href: sherpa.work.resume({}), label: 'Resume' },
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
  {
    id: 'admin',
    label: 'Admin',
    items: [{ key: 'admin.index', href: sherpa.admin.index({}), label: 'Admin' }],
    sections: [
      {
        id: 'theme',
        label: 'Theme',
        items: [
          { key: 'admin.theme.index', href: sherpa.admin.theme.index({}), label: 'Overview' },
          { key: 'admin.theme.colors', href: sherpa.admin.theme.colors({}), label: 'Colors' },
          {
            key: 'admin.theme.typography',
            href: sherpa.admin.theme.typography({}),
            label: 'Typography',
          },
          { key: 'admin.theme.spacing', href: sherpa.admin.theme.spacing({}), label: 'Spacing' },
          {
            key: 'admin.theme.borderRadius',
            href: sherpa.admin.theme.borderRadius({}),
            label: 'Border Radius',
          },
          { key: 'admin.theme.shadows', href: sherpa.admin.theme.shadows({}), label: 'Shadows' },
          {
            key: 'admin.theme.transitions',
            href: sherpa.admin.theme.transitions({}),
            label: 'Transitions',
          },
        ],
      },
    ],
  },
];
