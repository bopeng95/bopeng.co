import {
  FaAt,
  FaGithubAlt,
  FaLinkedinIn,
  // FaEnvelope,
  // FaMediumM,
} from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import { IoEllipsisHorizontalCircleSharp } from 'react-icons/io5';

const t = {
  bash: { tag: 'macOS', color: 'gray' },
  js: { tag: 'javascript', color: 'yellow' },
  cheerio: { tag: 'cheerio', color: 'yellow' },
  react: { tag: 'react', color: 'blue' },
  discord: { tag: 'discord', color: 'blue' },
  d3: { tag: 'd3', color: 'orange' },
  redis: { tag: 'redis', color: 'red' },
  electron: { tag: 'electron', color: 'purple' },
  node: { tag: 'node', color: 'green' },
  npm: { tag: 'npm', color: 'teal' },
};

export const nav = ['projects'];

export const icons = [
  {
    Icon: FaGithubAlt,
    name: 'github',
    link: 'https://github.com/bopeng95',
  },
  {
    Icon: FaLinkedinIn,
    name: 'linkedin',
    color: 'blue.400',
    link: 'https://www.linkedin.com/in/bopeng95',
  },
  // {
  //   Icon: FaMediumM,
  //   name: 'medium',
  //   color: 'green.500',
  //   link: 'https://medium.com/@bopeng95',
  // },
  {
    Icon: FaAt,
    name: 'envelope',
    color: 'orange.400',
    link: 'mailto:bopeng95@gmail.com',
  },
];

const p = {
  completed: {
    status: 'completed',
    Icon: MdCheckCircle,
    iconColor: 'green.400',
  },
  inProgress: {
    status: 'in progress',
    Icon: IoEllipsisHorizontalCircleSharp,
    iconColor: 'yellow.400',
  },
};

export const projects = [
  {
    name: 'dotfiles',
    links: [],
    tech: [t.bash],
    ...p.inProgress,
  },
  {
    name: 'valpatches',
    links: [
      {
        title: 'github',
        href: 'https://github.com/bopeng95/ValPatches',
      },
    ],
    tech: [t.node, t.discord],
    ...p.inProgress,
  },
  {
    name: 'valorant patch api',
    links: [
      {
        title: 'api',
        href: 'https://valapi.vercel.app/patches',
      },
      {
        title: 'github',
        href: 'https://github.com/bopeng95/valapi',
      },
    ],
    tech: [t.node, t.cheerio],
    ...p.completed,
  },
  {
    name: 'novaql - desktop',
    links: [
      {
        title: 'github',
        href: 'https://github.com/nova-introspection/novaql',
      },
    ],
    tech: [t.react, t.node, t.d3, t.redis, t.electron],
    ...p.inProgress,
  },
  {
    name: 'novaql - web',
    links: [
      {
        title: 'github',
        href: 'https://github.com/nova-introspection/Nova',
      },
    ],
    tech: [t.react, t.node, t.d3, t.redis],
    ...p.completed,
  },
  {
    name: '@bopeng95/wbpk',
    links: [
      {
        title: 'npm',
        href: 'https://www.npmjs.com/package/@bopeng95/wbpk',
      },
      {
        title: 'github',
        href: 'https://github.com/bopeng95/wbpk',
      },
    ],
    tech: [t.js, t.react, t.node, t.npm],
    ...p.completed,
  },
  {
    name: '@bopeng95/updater',
    links: [
      {
        title: 'github',
        href: 'https://github.com/bopeng95/updater',
      },
    ],
    tech: [t.js, t.node, t.npm],
    ...p.completed,
  },
];
