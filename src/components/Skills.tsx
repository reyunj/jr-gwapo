import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Cpu, Layout, Database, Globe, Smartphone, Cloud } from 'lucide-react'

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
      icon: <Layout className="w-8 h-8" />,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'GraphQL', 'REST APIs'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Webpack', 'Vite'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
      color: 'from-cyan-500 to-cyan-600',
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
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
