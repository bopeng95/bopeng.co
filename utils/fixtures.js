import {
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelope,
  // FaMediumM,
} from 'react-icons/fa';

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
