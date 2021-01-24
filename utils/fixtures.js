import {
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelope,
  // FaMediumM,
} from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import { IoEllipsisHorizontalCircleSharp } from 'react-icons/io5';

const langTags = {
  js: { tag: 'javascript', color: 'yellow' },
  node: { tag: 'node', color: 'green' },
};

const { js, node } = langTags;

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
    name: 'project 1',
    // link: '',
    Icon: MdCheckCircle,
    iconColor: 'green.400',
    tech: [js, node],
  },
  {
    name: 'project 2',
    // link: '',
    Icon: IoEllipsisHorizontalCircleSharp,
    iconColor: 'yellow.400',
    tech: [js, node],
  },
  {
    name: 'project 3',
    // link: '',
    Icon: IoEllipsisHorizontalCircleSharp,
    iconColor: 'yellow.400',
    tech: [js, node],
  },
];
