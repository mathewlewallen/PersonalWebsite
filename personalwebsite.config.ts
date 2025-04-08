const CONFIG = {
  github: {
    username: 'mathewlewallen',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        projects: ['mathewlewallen/cloudcontext', 'mathewlewallen/awesome-free-tools'], 
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.cloudcontext.cc',
        },
        {
          title: 'Project Name',
          description:
            'Still working on this page.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mathew Lewallen',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'mathewlewallen',
    x: 'Cloud_Context_',
    mastodon: 'mathewlewallen@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: 'cloud_context',
    reddit: 'Cloud_Context',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'mathewlewallen',
    dev: 'mathewlewallen',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://www.mathewlewallen.com',
    phone: '+49 015152547133',
    email: 'mathewlewallen@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.mathewlewallen.com/resume.pdf', // TODO: Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Typescript',
    'React',
    'Next.js',
    'Node.js',
    'Nest.js',
    'Vercel',
    'PostgreSQL',
    'Git',
    'Docker',
    'HTML',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Liberty University',
      degree: 'PhD Aviation',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'American Military University',
      degree: 'MS Aeronaspace Studies',
      from: '2022',
      to: '2023',
    },
{
      institution: 'Embry-Riddle Aero University',
      degree: 'BS Aeronautics',
      from: '2019',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'A Proposal for a New System for Air Traffic to Accomodate Spacecraft Launches',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'mathewlewallen', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'nord',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#c6262e',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
      class="text-primary" href="https://github.com/mathewlewallen/personalwebsite"
      target="_blank"
      rel="noreferrer"
    >Mathew Lewallen</a> with ❤️`,

  enablePWA: false,
};

export default CONFIG;
