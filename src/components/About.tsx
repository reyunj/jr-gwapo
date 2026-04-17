import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Code, Zap, Target } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and staying updated with industry trends',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Problem Solver',
      description: 'Approaching challenges with analytical thinking and creative solutions',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
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
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Rocillo Antipuesto Jr."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">RAJ</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300">
              Hello! I'm Rocillo Antipuesto Jr., a passionate developer dedicated to creating
              exceptional digital experiences. With a strong foundation in modern web technologies,
              I transform ideas into beautiful, functional, and user-centered applications.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300">
              I believe in writing clean, maintainable code and continuously learning to stay ahead
              in the ever-evolving tech landscape. My goal is to build solutions that not only meet
              requirements but exceed expectations.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
