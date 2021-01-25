import {
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelope,
  // FaMediumM,
} from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import { IoEllipsisHorizontalCircleSharp } from 'react-icons/io5';

const langTags = {
  bash: { tag: 'bash', color: 'gray' },
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

const {
  js,
  node,
  bash,
  npm,
  react,
  d3,
  electron,
  redis,
  discord,
  cheerio,
} = langTags;

export const nav = ['projects', 'resume'];

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
    Icon: FaEnvelope,
    name: 'envelope',
    color: 'orange.400',
    link: 'mailto:bopeng95@gmail.com',
  },
];

export const pLegend = [
  {
    name: 'done',
    Icon: MdCheckCircle,
    iconColor: 'green.400',
  },
  {
    name: 'in progress',
    Icon: IoEllipsisHorizontalCircleSharp,
    iconColor: 'yellow.400',
  },
];

export const projects = [
  {
    name: 'dotfiles',
    // link: '',
    Icon: IoEllipsisHorizontalCircleSharp,
    iconColor: 'yellow.400',
    tech: [bash],
  },
  {
    name: 'ValPatches',
    link: 'https://github.com/bopeng95/ValPatches',
    Icon: IoEllipsisHorizontalCircleSharp,
    iconColor: 'yellow.400',
    tech: [node, discord],
  },
  {
    name: 'valorant patch api',
    link: 'https://valapi.vercel.app/patches',
    Icon: MdCheckCircle,
    iconColor: 'green.400',
    tech: [node, cheerio],
  },
  {
    name: 'novaql - desktop',
    link: 'https://github.com/nova-introspection/novaql',
    Icon: IoEllipsisHorizontalCircleSharp,
    iconColor: 'yellow.400',
    tech: [react, node, d3, redis, electron],
  },
  {
    name: 'novaql - web',
    link: 'https://github.com/nova-introspection/Nova',
    Icon: MdCheckCircle,
    iconColor: 'green.400',
    tech: [react, node, d3, redis],
  },
  {
    name: '@bopeng95/wbpk',
    link: 'https://www.npmjs.com/package/@bopeng95/wbpk',
    Icon: MdCheckCircle,
    iconColor: 'green.400',
    tech: [js, react, node, npm],
  },
  {
    name: '@bopeng95/updater',
    link: 'https://github.com/bopeng95/updater',
    Icon: MdCheckCircle,
    iconColor: 'green.400',
    tech: [js, node, npm],
  },
];
