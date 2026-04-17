import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team features, and productivity analytics.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management tool for scheduling posts, analyzing engagement, and managing multiple accounts.',
      technologies: ['React', 'GraphQL', 'MongoDB', 'Express', 'JWT'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant powered by machine learning, capable of natural language processing and context awareness.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A selection of projects that showcase my skills and passion for building great products
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
