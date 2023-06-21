const header = {
  homepage: 'https://A1eeex.github.io/Portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Oleksandr Petrovskyi',
  role: ' Junior/Trainee Frontend developer',
  description:
    `Extremely passionate about software architecture and design combined
    with sensitivity to serve the needs of the business balanced with the
    delivery of high-quality solutions.
    Having a positive outlook and am always willing to learn new traits and
    expand my skills. Able to stretch the personal and work boundaries to
    help your company stand out.`,
  resume: 'https://drive.google.com/file/d/1NNcVYcDgKrCEcQwU6Qq934b1FJGVNSMy/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/oleksandr-petrovskyi-6b1010196/',
    github: 'https://github.com/A1eeex',
  },
}

const projects = [
  {
    name: 'Medical Rehabilitation',
    class_name: 'rehabilitacja_praktika',
    description:
      'Physical therapy, Manual therapy, Kinesitherapy, Therapeutic massage, Rehabilitation at the patient\'s home',
    stack: ['Next.js', 'Tailwin'],
    sourceCode: 'https://github.com/A1eeex/praktika_rehabilitacja',
    livePreview: 'https://praktika-rehabilitacja.vercel.app/',
  },
  {
    name: 'Car service',
    class_name: 'car_service',
    description:
      'To book car repairs and maintenance services"',
    stack: ['HTML', 'CSS', 'Slik'],
    sourceCode: 'https://github.com/A1eeex/Layouts/tree/master/Car_Service',
    livePreview: 'https://a1eeex.github.io/Layouts/Car_Service',
  },
  {
    name: 'Bike store',
    class_name: 'bike_store',
    description:
      'Bicycle shop product card',
    stack: ['HTML', 'CSS', 'Bootstrap'],
    sourceCode: 'https://github.com/A1eeex/Layouts/tree/master/bike_store',
    livePreview: 'https://a1eeex.github.io/Layouts/bike_store/',
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
  'Material UI',
  'Tailwindcss',
  'Git',
]

const contact = {
  email: 'opetrovskyi423@gmail.com',
}

export { header, about, projects, skills, contact }
