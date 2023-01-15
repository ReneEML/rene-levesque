export const ISSERVER = typeof window === 'undefined';

export const KEYS = {
  COLOR: '__rl_color_mode',
};

export const blog_api_url =
  'https://60jw92fb3b.execute-api.us-east-1.amazonaws.com/rl-blog-api';

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
    image: '/images/happyStocksThumb.png',
    title: 'Happy Stocks',
    tags: ['React', 'TailwindCSS', 'Go', 'Flask', 'Cohere NLP', 'Twitter API'],
    codeLink: 'https://github.com/alex-he8276/hack-the-stocks',
    demoLink:
      'https://www.youtube.com/watch?v=aLN__1DyNQQ&ab_channel=Ren%C3%A9levesque',
    description: 'Classify stock sentiment using tweets from Twitter',
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
    count: 90,
    plus: true,
  },
  {
    description: 'Powerlifting Total (lbs)',
    count: 1100,
    plus: true,
  },
  {
    description: 'Hours debugging',
    count: 999,
    plus: true,
  },
];

export const bioParagraphs = [
  "My name's Rene Levesque - google me and you'll find my famous name twin (epic Quebec separatist)!  I'm studying computer engineering at the University of Waterloo - my main areas of focus are Signal Processing, Communications and Machine Learning.",
  "Outside of school I enjoy programming (check out my Github to see what I've been up to), watching anime - currently watching Tokyo Revengers and Vinland Saga, and Powerlifting - I've competed in 2 competitions including Ontario provincials and I'm planning to compete in the 2024 nationals.",
  "I'm actively looking for internships so reach out on LinkedIn or email if you have an opportunity for me!",
];
