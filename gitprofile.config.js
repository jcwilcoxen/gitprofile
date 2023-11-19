// gitprofile.config.js

const config = {
  github: {
    username: 'jcwilcoxen', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'justinwilcoxen',
    email: 'justinwilcoxennc@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Microsoft Excel',
    'Microsoft Access',
    'C#',
    'MySQL',
    'Microsoft Access',
    'HTML',
  ],
  experiences: [
    {
      company: 'ECU Baseball',
      position: 'Player',
      from: 'August 2019',
      to: 'Present',
    },
  ],
  certifications: [
    {
      name: 'Prepare for ISC2 CSSLP',
      body: '',
      year: 'November 2023',
      link: 'https://www.linkedin.com/in/justinwilcoxen/'
    },
  ], 
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Bachelors of Science in Business Admiistration (MIS)',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'East Carolina University',
      degree: 'Masters of Business Administration',
      from: '2022',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Professional Statement',
      description:
        'My name is Justin Wilcoxen. I am passionate about creating solutions and solving people’s problems through software development. I am interested in working with new technology and want to solve problems through these technologies to better an organization as well as its customers.',
    },
    {
      title: 'Elevator Pitch',
      description:
        'Pitch video describing personal qualifications and experience. Click here to access video. ',
      link: 'https://ecu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=eef93ac4-6b79-4f36-a854-b0bf0105ef27',
    },
    {
      title: 'SA&D Project Pitch',
      description:
        'Pitch video discussing key takeaways of SA&D class project. Click here to access video. ',
      link: 
        },
        {
      title: 'Elevator Pitch',
      description:
        'Pitch video describing personal qualifications and experience. Click here to access video. ',
      link: 'https://ecu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=eef93ac4-6b79-4f36-a854-b0bf0105ef27',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
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
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
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
};

export default config;
