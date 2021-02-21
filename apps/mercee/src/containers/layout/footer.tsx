/* eslint-disable linebreak-style */
import {
  Facebook,
  Twitter,
  Youtube,
  Github,
  Instagram,
  Linkedin,
} from 'assets/icons/social-icons';

const social = [
  {
    id: 0,
    link: '/',
    icon: <Facebook />,
    className: 'facebook',
    title: 'facebook',
  },
  {
    id: 1,
    link: '/',
    icon: <Twitter />,
    className: 'twitter',
    title: 'twitter',
  },
  {
    id: 2,
    link: '/',
    icon: <Youtube />,
    className: 'youtube',
    title: 'youtube',
  },
  {
    id: 3,
    link: '/',
    icon: <Github />,
    className: 'github',
    title: 'github',
  },
  {
    id: 4,
    link: '/',
    icon: <Instagram />,
    className: 'instagram',
    title: 'instagram',
  },
  {
    id: 5,
    link: '/',
    icon: <Linkedin />,
    className: 'linkedin',
    title: 'linkedin',
  },
];

const Footer = () => (
  <footer className="w-full flex items-center justify-center bg-white shadow-footer px-4 py-30px lg:px-35px lg:justify-between">
    <p className="text-gray-900">
      Copyright &copy; 2021
      {' '}
      <a
        className="font-semibold transition-colors duration-200 ease-in-out hover:text-red-700"
        href="//github.com/php1301"
        target="__blank"
      >
        php1301
      </a>
      {' '}
      All rights reserved
    </p>

    <div className="items-center hidden lg:flex">
      {social.map((item) => (
        <a
          href={item.link}
          className={`social ${item.className}`}
          key={item.id}
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">{item.title}</span>
          {item.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
