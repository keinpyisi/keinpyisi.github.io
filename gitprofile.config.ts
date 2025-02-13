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
          projects: ['keinpyisi/keinpyisi','keinpyisi/keinpyisi.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
         {
          title: 'Myanmar AI ChatBot',
          description:
            'Myanmar AI ChatBot Gathered Dataset and Trained By Me. To Test Press Here.',
          imageUrl:
            'https://assets.gatesnotes.com/8a5ac0b3-6095-00af-c50a-89056fbe4642/e675f5c2-624b-4efd-b82f-99e8a6ed968b/AI_20230215_new%20module_1200x580.jpg',
          link: 'https://colab.research.google.com/drive/1tE8Ev7PFDTJj8HgMSVUZCuOMFkMyxPFB?usp=sharing',
        },
         {
          title: 'Tarot Horroscope',
          description:
            'Tarot Forecasting App Without ADS (IOS)',
          imageUrl:
            'https://metro.co.uk/wp-content/uploads/2022/05/Beginners-guide-to-tarot-part-1-BP-b183.gif?quality=90&strip=all&zoom=1&resize=644%2C338',
          link: 'https://apps.apple.com/app/id1446976990',
        },
         {
          title: 'Mizuho Bank Form Registeration System',
          description:
            'Making A Registeration Systems for Mizuho Bank',
          imageUrl:
            'https://www.mizuhobank.co.jp/favicon.ico',
          link: 'https://e-entry.dpost-k.jp/other/order_wf.php',
        },
         {
          title: 'Otokumiyell',
          description:
            'Pamflet, Products and Promotions Website for Super Markets',
          imageUrl:
            'https://otokumiyell.jp/common/img/favicon.ico',
          link: 'https://otokumiyell.jp/demo/top/10001',
        },
        {
          title: 'Hansoku Manager',
          description:
            'Product Image Database System and Priting Service Management Software',
          imageUrl:
            '',
          link: 'http://hansoku1.ascon.co.jp/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kein Pyi Si',
    description: 'Kein Pyi Si Code Repository',
    imageURL: 'https://avatars.githubusercontent.com/u/38047639?v=4',
  },
  social: {
    linkedin: 'keinpyisi',
    twitter: 'keinpyisi',
    mastodon: '',
    researchGate: '',
    facebook: 'keinpyisi',
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
      '', // Empty fileUrl will hide the `Download Resume` button.
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
      company: '(株)スタッフサービス',
      position: 'Backend Engineer',
      from: 'March 2024',
      to: 'Present',
      companyLink: 'https://www.staffservice.co.jp/',
    },
    {
      company: 'PwR株式会社',
      position: 'Lead Backend Engineer',
      from: 'December 2022',
      to: 'Present',
      companyLink: 'https://domalog.fun/',
    },
    {
      company: '（株）ジェイテックアドバンストテクノロジ',
      position: 'Software Engineer',
      from: 'April 2023',
      to: 'September 2023',
      companyLink: 'https://www.j-tec-cor.co.jp/',
    },
    {
      company: 'Seven Eleven 早稲田店',
      position: 'Parttime',
      from: 'May 2022',
      to: 'March 2023',
      companyLink: 'https://ptj.sej.co.jp/arbeit/recruitment/jobfind-pc/job/All/76527',
    },
    {
      company: 'Myanmar Polestar',
      position: 'Backend Engineer',
      from: 'August 2022',
      to: 'February 2023',
      companyLink: 'https://www.facebook.com/myanmarpolestartours/',
    },
    {
      company: 'Lawson西葛西2丁目',
      position: 'Leader',
      from: 'June 2019',
      to: 'December 2021',
      companyLink: 'https://www.e-map.ne.jp/p/lawson/dtl/213322/',
    },
    {
      company: 'New Worth Asia Company Ltd',
      position: 'Junior Engineer',
      from: 'August 2018',
      to: 'April 2019',
      companyLink: 'https://www.myanmaryp.com/company/85011/New_Worth_Co_Ltd',
    },
  ],
  certifications: [
    {
      name: 'Japanese-Language Proficiency Test',
      body: 'Level N1 Pass',
      year: 'August 2024',
      link: 'https://www.jlpt.jp/e/',
    }, 
    {
      name: 'としまイノベーションプランコンテスト 2022',
      body: 'ドリームビジネスプラン部門　グランプリ From Toshima City',
      year: 'November 2022',
      link: 'https://www.tokyo-cci.or.jp/toshima/innovationplans/2022/',
    },
    {
      name: '特別賞「Special Award」',
      body: 'Won First Prize in the Programming Contest From 早稲田文理専門学校',
      year: 'November 2022',
      link: 'https://www.wbc.ac.jp/',
    },
    {
      name: 'TOEIC',
      body: 'Mark: 880',
      year: 'October 2022',
      link: 'https://www.iibc-global.org/toeic.html',
    },
    {
      name: 'Scholarship from YMCAにほんご学院',
      body: '10万円',
      year: 'July 2020 ~ November 2020',
      link: 'https://tokyo.ymca.or.jp/japanese/',
    },
    {
      name: 'Gold Prize',
      body: 'Metro IT and Japanese Language Center',
      year: 'June 2018',
      link: 'https://metro-myanmar.com/mic/Eindex.html',
    },
    {
      name: 'Information Technology Professionals Examination Council ',
      body: 'FE 「Fundamental Information Technology Engineer Examination」 Pass',
      year: 'October 2017',
      link: 'https://itpec.org/index.html',
    },
  ],
  educations: [
    {
      institution: 'Waseda Bunri College',
      degree: 'Diploma',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Tokyo YMCA Japanese Language School',
      degree: 'Certificate',
      from: '2019',
      to: '2021',
    },
     {
      institution: '専門学校メトロITビジネスカレッジ',
      degree: 'Diploma',
      from: '2016',
      to: '2018',
    },
    {
      institution: 'Basic Education High School Yankin 1',
      degree: 'Bachelor',
      from: '2011',
      to: '2016',
    },
  ],
 
  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-XT40EHN0G7', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

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
      class="text-primary" href="https://github.com/keinpyisi"
      target="_blank"
      rel="noreferrer"
    >Kein Pyi Si</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
