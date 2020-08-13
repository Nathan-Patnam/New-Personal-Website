export const NAVIGATION_HEADERS = [
  { title: 'Home', url: '/' },
  { title: 'About', url: 'about' },
  { title: 'Experience', url: 'experience' },
  { title: 'Services', url: 'services' },
  { title: 'Projects', url: 'projects' },
];

export const FOOTER_ICONS = [
  { type: 'Linkedin', link: '' },
  { type: 'GitHub', link: '' },
  { type: 'Medium', link: '' },
  { type: 'Email', link: '' },
  { type: 'Resume', link: '' },
  { type: 'Youtube', link: '' },
];

export const PROJECT_FILTER_BUTTONS = ['All', 'Videos', 'Apps', 'Articles'];

export const PROJECTS = [
  {
    type: ['Videos', 'Apps'],
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription:
      "A PowerPoint Title Screen that has 'GitHub Triage Tool' for the title and my name",
    title: 'GitHub-Issue Triage Tool',
    description:
      'Web Service I built during my internship at Heroku what automated the long & tedious process of adding issues created in GitHub to Salesforce"s Grand Unified Ticketing System (GUS).',
    tags: ['Ember.js', 'GraphQL', 'Purple3', 'Heroku', 'Mirage', 'QUnit'],
    viewLink: 'https://youtu.be/M_qvAdgDZ38',
    githubLink: null,
    date: 'Summer 2019',
  },
  {
    type: ['Apps'],
    imagePath: require('../assets/img/projects/realEstate.png'),
    imageAltDescription: 'list of housing properties with filters',
    title: 'Real Estate App',
    description:
      'Progressive React Web App that allows users to filter and search through all the available listing near them.',
    tags: ['React', 'SASS', 'CSS', 'HTML', 'Javascript', 'jQuery', 'Bootstrap'],
    viewLink: '',
    githubLink: null,
    date: 'April 2019',
  },
  {
    type: ['Apps'],
    imagePath: require('../assets/img/projects/facebookClone.png'),
    imageAltDescription: 'Profile page that resembles Facebook UI',
    title: 'Facebook clone',
    description:
      "Took a PSD of Facebook's profile screen and wanted to build the view layer using HTML and CSS.",
    tags: ['HTML', 'CSS'],
    viewLink: 'https://hardcore-leavitt-747d51.netlify.com/',
    githubLink: 'https://github.com/Nathan-Patnam/facebook-clone',
    date: 'March 2018',
  },
  {
    type: ['Videos'],
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'powerpoint presentation with title about queues',
    title: 'What is a Queue',
    description:
      'Youtube video I created about the queue data structure and how to implement it in Python',
    tags: ['Pytest', 'Python'],
    viewLink: 'https://www.youtube.com/watch?v=hV4QoJGw7LU&t=395s',
    githubLink:
      'https://github.com/Nathan-Patnam/Data-Structures-and-Algorithms-in-Python/blob/master/queue_class/queue/Queue.py',
    date: 'March 2018',
  },
  {
    type: ['Videos'],
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'powerpoint presentation with title about queues',
    title: 'What is a Queudqwd',
    description:
      'Youtube video I created about the queue data structure and how to implement it in Python',
    tags: ['Pytest', 'Python'],
    viewLink: 'https://www.youtube.com/watch?v=hV4QoJGw7LU&t=395s',
    githubLink:
      'https://github.com/Nathan-Patnam/Data-Structures-and-Algorithms-in-Python/blob/master/queue_class/queue/Queue.py',
    date: 'March 2018',
  },
  {
    type: ['Videos'],
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'powerpoint presentation with title about stacks',
    title:
      'Implementing a Stack in Python with Memory Management and Error Handling',
    description:
      'Youtube video I created about the stack data structure and how to implement it in Python',
    tags: ['Pytest', 'Python'],
    viewLink: 'https://youtu.be/jF3AK4fQtiM',
    githubLink: null,
    date: 'Feb 2018',
  },
  {
    type: ['Articles'],
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'Terminal Screenshot of failing unit test',
    title: 'What Is Polymorphism — and How Do We Implement It in Python',
    description:
      'Article I wrote on Medium about what unit testing and code coverage are, and how to implement them in Python using PyTest/Coveralls.',
    tags: ['Python', 'Pytest'],
    githubLink: null,
    viewLink:
      'https://medium.com/better-programming/what-is-polymorphism-and-how-to-implement-it-in-python-391683307543?source=friends_link&sk=5c80415f07d5b2ab465637d6e17556db',
    date: 'Jan 29 2020',
  },
  {
    type: ['Articles'],
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: null,
    title: 'How Python Lazily Evaluates Boolean-Based Expressions',
    description:
      'Article I wrote on Medium about how Python use short-circuiting to lazily evaluate boolean-based expressions',
    tags: ['Python'],
    githubLink: null,
    viewLink:
      'https://medium.com/better-programming/how-python-lazily-evaluates-boolean-based-expressions-fc9d55d20d8d?source=friends_link&sk=3b5620a2da66a77052e3881f4aa6b5b9',
    date: 'Jan 27 2020',
  },
  {
    type: ['Articles'],
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'Terminal Screenshot of failing unit test',
    title: 'Unit Testing in Python',
    description:
      'Article I wrote on Medium about what unit testing and code coverage are, and how to implement them in Python using PyTest/Coveralls.',
    tags: ['Python', 'Pytest'],
    githubLink: null,
    viewLink:
      'https://medium.com/@nathanpatnam/what-is-unit-testing-code-coverage-and-how-to-implement-and-use-them-in-python-a8f029558fe7',
    date: 'Feb 2018',
  },
  {
    type: ['Apps'],
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription:
      'Final Presentation for Capstone Class where I created this Java package',
    title: 'Java Argument Parser',
    description:
      'Java package that parses arguments from the command line. Created during Wofford’s Computer Science Capstone Class with three other people.',
    tags: [
      'Java',
      'Gradle',
      'Travis',
      'JUnit',
      'Robot Framework',
      'Coveralls.io',
    ],
    githubLink: 'https://github.com/WoffordCollege-COSC410/project-todo',
    liveWebsiteLink: null,
    date: 'Fall 2017',
  },
  {
    type: ['Apps'],
    imagePath: require('../assets/img/projects/needlExchange.jpg'),
    imageAltDescription: '',
    title: 'NeedleXchange',
    description:
      "Web app to help organize and publicize needle exchange programs. Created during Hop Hacks '17 and won Deloitte's prize for having the app with the best UX.",
    tags: ['Flask', 'Python', 'SQlite', 'HTML', 'CSS', 'Google Maps API'],
    viewLink: 'https://devpost.com/software/needlexchange',
    githubLink: 'https://github.com/zsilver1/NeedleExchange',
    date: 'Sept 2017',
  },
];
