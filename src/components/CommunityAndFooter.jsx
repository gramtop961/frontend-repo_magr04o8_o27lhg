import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Counter({ to, label, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({ count: to, transition: { duration: 1.6, ease: 'easeOut', delay } })
    }
  }, [inView, to, delay, controls])

  return (
    <div className="text-center" ref={ref}>
      <motion.span
        initial={{ count: 0 }}
        animate={controls}
      >
        {({ count }) => (
          <span className="text-3xl font-extrabold md:text-5xl">{Math.floor(count).toLocaleString()}+</span>
        )}
      </motion.span>
      <div className="mt-1 text-sm text-[#3B2F2F]/70">{label}</div>
    </div>
  )
}

function CommunityAndFooter() {
  return (
    <section className="w-full bg-[#FFF8EE] text-[#3B2F2F]">
      {/* Community */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Community</h2>
            <p className="mt-2 max-w-xl text-[#3B2F2F]/80">
              10,000+ bread lovers and counting — from students to professionals.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <Counter to={10000} label="Bread Lovers" />
            <Counter to={50} label="Cafes" delay={0.2} />
            <Counter to={1000} label="Daily Loaves" delay={0.4} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="h-36 overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img
                className="h-full w-full object-cover"
                src={`https://images.unsplash.com/photo-15${40 + i}06259751-${i}1b9${i}bd3e3?q=80&w=1200&auto=format&fit=crop`}
                alt="Community"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* B2B strip */}
      <div className="relative overflow-hidden bg-[#3B2F2F] py-14 text-[#FFF8EE]">
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(255,211,132,0.3),transparent_60%)]" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold">Trusted by brands and campuses</h3>
            <p className="mt-1 text-[#FFF8EE]/80">50+ cafes, 10+ corporates, and growing every week.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold">50+</div>
              <div className="text-sm opacity-80">Cafes</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">10+</div>
              <div className="text-sm opacity-80">Corporates</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">1000+</div>
              <div className="text-sm opacity-80">Daily Loaves</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-[#FFF8EE] py-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {[...Array(20)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-[#3B2F2F]/20"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -12, 0] }}
              transition={{ duration: 5 + (i % 5), repeat: Infinity }}
              style={{ left: `${(i * 41) % 100}%`, top: `${(i * 29) % 100}%` }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="mb-3 text-sm font-medium tracking-[0.2em] text-[#3B2F2F]/70">The Bread Theory</div>
          <div className="text-2xl font-bold text-[#3B2F2F]">Innovative. Youthful. Appetizing.</div>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm text-[#3B2F2F]/80">
            <a href="#" className="underline-offset-4 hover:underline">Contact</a>
            <a href="#" className="underline-offset-4 hover:underline">Instagram</a>
            <a href="#" className="underline-offset-4 hover:underline">Careers</a>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default CommunityAndFooter
