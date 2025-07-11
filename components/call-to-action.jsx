import { motion } from 'framer-motion'

const CallToAction = () => (
  <section className="py-20 bg-primary-200 text-secondary-900 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">¿Empezamos tu proyecto?</h2>
      <a href="/contact" className="btn-primary inline-block">
        Hablemos
      </a>
    </motion.div>
  </section>
)

export default CallToAction