module.exports = {
  siteTitle: 'Akhila Muthyala | Full Stack Developer',
  siteDescription:
    'Akhila Muthyala, a full stack developer graduated from ASU looking for full time opportunities',
  siteKeywords:
    'akhila, muthyala, javascript, fullstack, developer, react, arizonastate, asu',
  siteUrl: 'http://localhost:8000/',
  siteLanguage: 'en_US',

  googleVerification: '',

  name: 'Akhila Muthyala',
  location: 'Tempe, AZ',
  email: 'muthyala.akhila07@gmail.com',
  github: 'https://github.com/amuthyal/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/amuthyal/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/akhilamuthyala/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/amuthyal345/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/akreddy07/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/akhilamuthyala/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Education',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@akhilamuthyala',


  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
