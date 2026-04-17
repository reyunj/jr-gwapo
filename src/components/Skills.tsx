import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skillCategories = [
    {
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop',
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=400&h=300&fit=crop',
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'GraphQL', 'REST APIs'],
    },
    {
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
    },
    {
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop',
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Webpack', 'Vite'],
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      title: 'Mobile',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
    },
    {
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop',
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern, scalable applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
