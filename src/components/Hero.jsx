import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const headline = 'Where Chemistry Meets Cravings'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax for background layers
  const ySteam = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yCrumbs = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-[#FFF8EE] text-[#3B2F2F]"
    >
      {/* Warm glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <motion.div
          style={{ y: ySteam }}
          className="absolute -top-24 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[#FFD384]/40 blur-3xl"
        />
        <motion.div
          style={{ y: yCrumbs }}
          className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#F9E7D3]/70 blur-2xl"
        />
      </div>

      {/* Floating crumbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#3B2F2F]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0.6, 1],
              y: [0, -15, -5, -20],
            }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, repeatType: 'mirror', delay: i * 0.2 }}
            style={{
              left: `${(i * 83) % 100}%`,
              top: `${(i * 37) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="mb-3 font-medium tracking-[0.2em] text-[#3B2F2F]/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          The Bread Theory
        </motion.p>

        {/* Letter-by-letter headline */}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
          {headline.split(' ').map((word, wi) => (
            <span key={wi} className="mr-3 inline-block">
              {word.split('').map((ch, ci) => (
                <motion.span
                  key={ci}
                  className="inline-block"
                  initial={{ y: '100%', rotateX: 75, opacity: 0 }}
                  whileInView={{ y: 0, rotateX: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: wi * 0.12 + ci * 0.03, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          className="mx-auto max-w-2xl text-base text-[#3B2F2F]/80 md:text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          India’s first bread science QSR. Modern, artisanal, and deliciously experimental.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#story"
            className="rounded-full bg-[#3B2F2F] px-6 py-3 text-sm font-semibold text-[#FFF8EE] shadow-lg shadow-[#3B2F2F]/20 transition hover:scale-[1.02] hover:shadow-xl"
          >
            Explore the Lab
          </a>
          <a
            href="#products"
            className="rounded-full border border-[#3B2F2F]/30 bg-white/70 px-6 py-3 text-sm font-semibold text-[#3B2F2F] backdrop-blur-sm transition hover:bg-white"
          >
            Taste the Menu
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
