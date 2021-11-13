import { FaReact, FaDatabase, FaTools } from 'react-icons/fa'

import TechItem from './TechItem'

export default function Technologies() {
  return (
    <section id='technologies' className='my-20'>
      <h1 className='text-2xl lg:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600'>
        Technologies
      </h1>
      <p className='text-gray-400 mt-8'>
        I've worked with a range of technologies in the web development world
        from back-end to front-end.
      </p>
      <div className='flex flex-col md:flex-row md:justify-evenly'>
        <TechItem
          Icon={FaReact}
          title='Front-End'
          experience='Experience with'
          list='React.js and React Native'
        />
        <TechItem
          Icon={FaDatabase}
          title='Back-End'
          experience='Experience with'
          list='Spring Boot, Django, Node.js, and Databases'
        />
        <TechItem
          Icon={FaTools}
          title='UI/UX'
          experience='Experience with'
          list='tools like Tailwind and Material-UI'
        />
      </div>
    </section>
  )
}
