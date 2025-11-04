import { motion } from 'framer-motion'

const items = [
  {
    title: 'Sourdough Melt',
    desc: 'Caramelized onions, aged cheddar, tangy crumb.',
    img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Brioche Royale',
    desc: 'Buttery soft, rich and golden — dessert adjacent.',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Focaccia Stack',
    desc: 'Herby olive oil, blistered crust, airy bite.',
    img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1600&auto=format&fit=crop',
  },
]

function Showcase() {
  return (
    <section id="products" className="relative w-full bg-[#FFF8EE] py-24 text-[#3B2F2F]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Gourmet, Engineered</h2>
            <p className="mt-2 max-w-xl text-[#3B2F2F]/80">
              Floating 3D cards rotate with depth. Hover to tilt and feel the warmth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(59,47,47,0.25)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              style={{ perspective: 1000 }}
              whileHover={{ rotateX: -6, rotateY: 6 }}
            >
              <div className="absolute inset-0">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3B2F2F]/70 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-xl font-bold">{it.title}</h3>
                <p className="text-sm opacity-90">{it.desc}</p>
              </div>
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FFD384]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
