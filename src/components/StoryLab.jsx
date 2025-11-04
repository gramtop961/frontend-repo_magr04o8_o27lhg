import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function StoryLab() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="story" ref={ref} className="relative w-full bg-[#F9E7D3] py-24 text-[#3B2F2F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#FFF8EE,transparent_60%),radial-gradient(circle_at_80%_80%,#FFD384,transparent_50%)] opacity-60" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Science x Art</h2>
          <p className="mb-4 text-[#3B2F2F]/80">
            We treat bread as both science and art. In our futuristic bread lab, stainless counters meet
            slow fermentation, steam meets precision, and curiosity fuels every loaf.
          </p>
          <p className="text-[#3B2F2F]/80">
            From controlled hydration to Maillard magic, every sandwich is engineered for flavor and texture.
          </p>
        </motion.div>

        <motion.div
          style={{ y }}
          className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-[#3B2F2F] shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Simulated lab with blur-on-scroll steam */}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#3B2F2F_0%,#5a4a4a_100%)]" />
          <motion.div
            className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            animate={{ y: [0, -20, 0], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-4 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-2xl"
            animate={{ y: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  )
}

export default StoryLab
