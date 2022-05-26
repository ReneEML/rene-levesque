export const ISSERVER = typeof window === 'undefined';

export const KEYS = {
  COLOR: '__rl_color_mode',
};

export const projects = [
  {
    image: '/images/paranoia-game.png',
    title: 'Paranoia Game',
    tags: ['React', 'Spring Boot', 'Web Sockets'],
    codeLink: 'https://github.com/ReneEML/Paranoia',
    demoLink: 'https://hungry-jang-560516.netlify.app/',
    description: 'Party game to play with friends in person or over discord',
  },
  {
    image: '/images/renelevesque-site.png',
    title: 'Portfolio Website',
    tags: ['Next.js', 'TailwindCSS', 'S3', 'Cloudfront', 'Route53'],
    codeLink: 'https://github.com/ReneEML/rene-levesque',
    demoLink: '/',
    description:
      "Website to display my projects, resume and skills I've learned",
  },
  {
    image: '/images/sorting-visualizer.png',
    title: 'Algorithm Visualizer',
    tags: ['React', 'TailwindCSS', 'Typescript', 'S3', 'Cloudfront', 'Route53'],
    codeLink: 'https://github.com/ReneEML/algo-visualizer',
    demoLink: 'https://algo-visualizer.renelevesque.com/',
    description:
      'Visualizations of sorting algorithms. Planned: graph + pathfinding visualizations.',
  },
];

export const technologies = [
  {
    name: 'Front-End',
    content: 'React.js, Next.js, and TailwindCss',
    icon: 'react',
  },
  {
    name: 'Back-End',
    content: 'Node.js, Spring Boot',
    icon: 'database',
  },
  {
    name: 'Cloud Infrastructure',
    content: 'AWS: API gateway, Lambda, S3, Route53, Cloudfront',
    icon: 'cloud',
  },
];

export const acheivements = [
  {
    description: 'Hackathons Won',
    count: 1,
    plus: false,
  },
  {
    description: 'Magic The Gathering Draft win rate (%)',
    count: 65,
    plus: true,
  },
  {
    description: 'University Average (%)',
    count: 89,
    plus: true,
  },
  {
    description: 'Powerlifting Total (lbs)',
    count: 1000,
    plus: true,
  },
  {
    description: 'Hours debugging',
    count: 999,
    plus: true,
  },
];

export const bioParagraphs = [
  "My name is Rene Levesque, and yes I do have the same name as the founder of the Bloc Quebecois (a blessing and a curse). I'm currently studying Computer Engineering at the University of Waterloo. My main interests are embedded systems, control systems, and machine learning.",
  "I've always been into working out. Currently I'm a powerlifter which means I only squat, bench, and deadlift (I'm only kind of joking). I'm a Jiu Jitsu player and enjoy watching MMA. I play soccer intramurals, I've met some of my best friends at Waterloo Park playing soccer.",
  "Magic the Gathering is my game of choice. My main formats are draft and modern (some historic if I'm playing on Arena). I used to play CSGO and League but I'm quite competitive so these time consuming games lost my interest once I started university and lost all my free time.",
  "I recently bought an arduino, it's been a lot of fun to hack around with. I plan to make a larger hardware project in the near future.",
];
