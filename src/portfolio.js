const header = {
  homepage: 'https://A1eeex.github.io/Portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Oleksandr Petrovskyi',
  role: 'Frontend developer',
  description: `Extremely passionate about software architecture and design combined
    with sensitivity to serve the needs of the business balanced with the
    delivery of high-quality solutions.
    Having a positive outlook and am always willing to learn new traits and
    expand my skills. Able to stretch the personal and work boundaries to
    help your company stand out.`,
  resume:
    'https://drive.google.com/file/d/1GUZKH2F84Z1sTmtD3lodDr4THVKCpIax/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/oleksandr-petrovskyi-6b1010196/',
    github: 'https://github.com/A1eeex',
  },
}

const projects = [
  {
    name: 'Apple Gadgets',
    class_name: 'apple_gadgets',
    description: 'Apple Gadgets for a company that sells mobile phones',
    stack: [
      'React-js',
      'Typescript',
      'Node.js',
      'SCSS',
      'CSS modules',
      'react-slick',
      'REST API',
      'Fetch',
    ],
    sourceCode: 'https://github.com/orgs/fe-aug23-team-disband/repositories',
    livePreview: 'https://fe-aug23-team-disband.github.io/phone_catalog/',
  },
  {
    name: 'Medical Rehabilitation',
    class_name: 'rehabilitacja_praktika',
    description:
      "Physical therapy, Manual therapy, Kinesitherapy, Therapeutic massage, Rehabilitation at the patient's home",
    stack: ['Next.js', 'Tailwind'],
    sourceCode: 'https://github.com/A1eeex/praktika_rehabilitacja',
    livePreview: 'https://praktika-rehabilitacja.vercel.app/',
  },
  {
    name: 'MyBike',
    class_name: 'myBike',
    description: 'Your cycling paradise where you will find a huge selection of the best bike models',
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/A1eeex/layout_landing-page/tree/develop',
    livePreview: 'https://a1eeex.github.io/layout_landing-page/',
  },
  {
    name: 'Mogo',
    class_name: 'mogo_layout',
    description: 'Mogo Services and history, samples of the best work',
    stack: ['HTML', 'CSS', 'JS'],
    sourceCode: 'https://github.com/A1eeex/Layouts/tree/master/Mogo',
    livePreview: 'https://a1eeex.github.io/Layouts/Mogo/',
  },
  {
    name: 'Car service',
    class_name: 'car_service',
    description: 'To book car repairs and maintenance services"',
    stack: ['HTML', 'CSS', 'Slik'],
    sourceCode: 'https://github.com/A1eeex/Layouts/tree/master/Car_Service',
    livePreview: 'https://a1eeex.github.io/Layouts/Car_Service',
  },
  {
    name: 'Yoga',
    class_name: 'yoga',
    description: 'Fitness, yoga, relax',
    stack: ['HTML', 'CSS', 'JS'],
    sourceCode: 'https://github.com/A1eeex/Layouts/tree/master/Yoga',
    livePreview: 'https://a1eeex.github.io/Layouts/Yoga/',
  },
  {
    name: 'React-redux todo',
    class_name: 'redux_todo',
    description: 'Todo',
    stack: ['React.js', 'Redux', 'Tailwind'],
    sourceCode: 'https://github.com/A1eeex/todo-redux',
    livePreview: 'https://a1eeex.github.io/todo-redux/',
  },
  // {
  //   name: 'Bike store',
  //   class_name: 'bike_store',
  //   description: 'Bicycle shop product card',
  //   stack: ['HTML', 'CSS', 'Bootstrap'],
  //   sourceCode: 'https://github.com/A1eeex/Layouts/tree/master/bike_store',
  //   livePreview: 'https://a1eeex.github.io/Layouts/bike_store/',
  // },
  {
    name: 'Fullscreen slider',
    class_name: 'fullscreen_slider',
    description: 'slider',
    stack: ['HTML', 'CSS', 'JS'],
    sourceCode: 'https://github.com/A1eeex/atoms/tree/master/03-slider',
    livePreview: 'https://a1eeex.github.io/atoms/03-slider/',
  },

  // {
  //   name: 'PDR_Zbarzh',
  //   class_name: 'pdr_zbarzh',
  //   description:
  //     'Amet1 asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['React', 'CSS Modules', 'React'],
  //   sourceCode: 'https://github.com/A1eeex/PDR_Zbarazh_React',
  //   livePreview: 'https://a1eeex.github.io/PDR_Zbarazh_React/',
  // },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Less',
  'SCSS',
  'Material UI',
  'Tailwindcss',
  'Git',
]

const contact = {
  email: 'opetrovskyi423@gmail.com',
}

export { header, about, projects, skills, contact }
