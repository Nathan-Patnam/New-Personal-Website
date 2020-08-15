export const NAVIGATION_HEADERS = [
  { title: 'Home', url: '/' },
  { title: 'About', url: 'about' },
  { title: 'Experience', url: 'experience' },
  { title: 'Resume', url: '/' },
];

export const RESUME_LINK =
  'https://drive.google.com/file/d/1jr5YxjCF1HYgWsUKv_t8Simzrz8WV5CX/view';

export const FOOTER_ICONS = [
  {
    type: 'Linkedin',
    link: 'https://www.linkedin.com/in/nathan-patnam/',
  },
  { type: 'GitHub', link: 'https://github.com/Nathan-Patnam' },
  { type: 'Medium', link: 'https://medium.com/@nathanpatnam' },
  { type: 'Email', link: 'mailto:nathanpatnam@gmail.com' },
  { type: 'Resume', link: RESUME_LINK },
  {
    type: 'Youtube',
    link: 'https://www.youtube.com/user/vert3737/videos',
  },
  { type: 'Calendly', link: 'https://calendly.com/nathanpatnam' },
];

export const PROJECT_FILTER_BUTTONS = ['All', 'Videos', 'Apps', 'Articles'];

export const PROJECTS = [
  {
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
    imagePath: require('../assets/img/projects/facebookClone.png'),
    imageAltDescription: 'Profile page that resembles Facebook UI',
    title: 'Facebook clone',
    description:
      "Took a PSD of Facebook's profile screen and wanted to build the view layer using HTML and CSS.",
    tags: ['HTML', 'CSS'],
    viewLink: 'https://hardcore-leavitt-747d51.netlify.com/',
    githubLink: 'https://github.com/Nathan-Patnam/facebookClone',
    date: 'March 2018',
  },
  {
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription:
      'Final Presentation for Capstone Class where I created this Java package',
    title: 'Java Argument Parser',
    description:
      'Java package that parses arguments from the command line. Created during Wofford’s Computer Science Capstone Class with three other people.',
    tags: ['Java', 'Gradle', 'Travis', 'JUnit', 'Robot Framework', 'Coveralls'],
    githubLink: 'https://github.com/WoffordCollege-COSC410/project-todo',
    liveWebsiteLink: null,
    date: 'Fall 2017',
  },
  {
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

export const VIDEOS_CREATED = [
  {
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'powerpoint presentation with title about queues',
    title:
      'Pass By Reference vs Pass By Value and Implementing Examples in Python',
    description:
      'Youtube video I created about how pass by references and pass by value work in Python.',
    tags: ['Python'],
    viewLink: 'https://www.youtube.com/watch?v=hV4QoJGw7LU&t=395s',
    githubLink:
      'https://github.com/Nathan-Patnam/Data-Structures-and-Algorithms-in-Python/blob/master/queue_class/queue/Queue.py',
    date: 'March 2018',
  },
  {
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'powerpoint presentation with title about queues',
    title: 'What Is A Trie and How Do We Build One In Python?',
    description:
      'Youtube video I created about an easy way to implement a trie in Python using a implementation of nested dictionaries.',
    tags: ['Pytest', 'Python'],
    viewLink: 'https://www.youtube.com/watch?v=hV4QoJGw7LU&t=395s',
    githubLink:
      'https://github.com/Nathan-Patnam/Data-Structures-and-Algorithms-in-Python/blob/master/queue_class/queue/Queue.py',
    date: 'March 2018',
  },
  {
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
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'powerpoint presentation with title about stacks',
    title: 'What is a Queue and Implementing a Queue class in Python',
    description:
      'Youtube video I created about the stack data structure and how to implement it in Python',
    tags: ['Pytest', 'Python'],
    viewLink: 'https://youtu.be/jF3AK4fQtiM',
    githubLink: null,
    date: 'Feb 2018',
  },
];

export const ARTICLES_WRITTEN = [
  {
    imagePath: null,
    imageAltDescription: 'TODO',
    title: 'How GiftPocket Uses Jest to Write Unit Tests',
    description:
      "1st Medium Article I'm writing for GiftPocket's engineering blog about how we unit test helper function in the new React Native rebuild of our app using Jest.",
    tags: ['JavaScript', 'Jest', 'React Native', 'Testing'],
    viewLink: null,
    date: 'Coming Soon',
  },
  {
    imagePath: null,
    imageAltDescription: 'TODO',
    title: 'Automate Testing REST APIs with Frisby',
    description:
      'Medium Article I am writing about how we can use Frisby, a JavaScript-based testing framework, to test APIs.',
    tags: ['JavaScript', 'Jest', 'APIs', 'Testing', 'Frisby'],
    viewLink: null,
    date: 'Coming Soon',
  },
  {
    imagePath: null,
    imageAltDescription: 'TODO',
    title: 'What Is Polymorphism — and How Do We Implement It in Python',
    description:
      'Medium Article explaining what polymorphism is through a couple of examples in Python. Article was published on my behalf by Better Programming.',
    tags: ['Python', 'PyTest', 'Testing', 'Object-Oriented Programing'],
    viewLink:
      'https://medium.com/better-programming/what-is-polymorphism-and-how-to-implement-it-in-python-391683307543?source=friends_link&sk=5c80415f07d5b2ab465637d6e17556db',
    date: new Date(2020, 0, 29),
  },
  {
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: null,
    title: 'How Python Lazily Evaluates Boolean-Based Expressions',
    description:
      'Medium Article about how Python use short-circuiting to lazily evaluate boolean-based expressions at run-time. Article was published on my behalf by Better Programming.',
    tags: ['Python'],
    viewLink:
      'https://medium.com/better-programming/how-python-lazily-evaluates-boolean-based-expressions-fc9d55d20d8d?source=friends_link&sk=3b5620a2da66a77052e3881f4aa6b5b9',
    date: new Date(2020, 0, 27),
  },
  {
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'Terminal Screenshot of failing unit test',
    title: 'Unit Testing in Python',
    description:
      'Medium Article about what unit testing and code coverage are, and how to implement them in Python using PyTest & Coveralls.',
    tags: ['Python', 'PyTest', 'Testing', 'Code Coverage'],
    viewLink:
      'https://medium.com/@nathanpatnam/what-is-unit-testing-code-coverage-and-how-to-implement-and-use-them-in-python-a8f029558fe7',
    date: new Date(2018, 2, 17),
  },
  {
    imagePath: require('../assets/img/projects/herokuDemo.jpg'),
    imageAltDescription: 'TODO',
    title: 'My experiences freelancing (first 30 days)',
    description:
      'Medium article about what I learned during my first 30 days of web freelancing.',
    tags: ['Web Development', 'Freelance'],
    viewLink:
      'https://medium.com/@nathanpatnam/my-experiences-freelancing-first-30-days-43e0ef0ac2ca',
    date: new Date(2018, 2, 15),
  },
];
