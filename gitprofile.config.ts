// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'keinpyisi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
       // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'DoMaLoG',
          description:
            'Domalog is perfect for turning experiences into value, breaking out of your shell and unlocking your potential. Not only can you easily take and review notes, You can also organize your thinking based on the gap between your peers" perspectives.We will continue to evolve in order to overcome the barriers of taste together with you.',
          imageUrl:
            'https://domalog.fun/images/fav-icon.png',
          link: 'https://domalog.fun/',
        },
        {
          title: 'Myanmar Polestar',
          description:
            'Myanmar Polestar  is a fully Myanmar owned Destination Management(DMC) and MICE Management Company, first established in 2001. With an office of 30 staff based in Yangon',
          imageUrl:
            'https://www.myanmarpolestar.com/dist/front/img/logo1.png',
          link: 'https://www.myanmarpolestar.com/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kein Pyi Si',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'keinpyisi',
    twitter: 'keinpyisi',
    mastodon: '',
    researchGate: '',
    facebook: 'Kein Pyi Si',
    instagram: 'krulkein39',
    youtube: 'keinpyisi1190', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: 'keinpyisi',
    telegram: '',
    website: 'https://keinpyisi.github.io/',
    phone: '+81 70 7532 1236',
    email: 'keinpyisi@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'Codeigniter',
    'Java',
    'Android',
    'Python',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Vagrant',
    'Ionic',
    'Ajax',
    
  ],
  experiences: [
    {
      company: '株式会社アスコン',
      position: 'Backend Engineer',
      from: 'March 2024',
      to: 'Present',
      companyLink: 'https://www.ascon.co.jp/',
    },
    {
      company: 'PwR株式会社',
      position: 'Lead Backend Engineer',
      from: 'December 2022',
      to: 'Present',
      companyLink: 'https://domalog.fun/',
    },
    {
      company: '株式会社DNPデジタルソリューション',
      position: 'Software Engineer',
      from: 'December 2023',
      to: 'February 2024',
      companyLink: 'https://www.dnp-ds.co.jp/',
    },
    {
      company: '技術商社 株式会社ジェイテック',
      position: 'Software Engineer',
      from: 'April 2023',
      to: 'Octiber 2023',
      companyLink: 'https://www.j-tec-cor.co.jp/',
    },
    {
      company: 'Myanmar Polestar',
      position: 'Backend Engineer',
      from: 'April 2021',
      to: 'September 2021',
      companyLink: 'https://www.facebook.com/myanmarpolestartours/',
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
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
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
    username: 'arifszn', // to hide blog section, keep it empty
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
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
