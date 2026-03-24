import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper, { SectionHeading, RevealOnScroll } from './SectionWrapper'

const tracks = [
  {
    icon: '💻',
    title: 'Tech and non-tech',
    category: 'Competitive',
    desc: 'A dynamic blend of technical innovation and creative non-technical excellence.',
    prize: '₹149',
    color: '#ffd700',
    link: 'https://forms.gle/C7EhKr3JsHYCZCDz7'
  },
  {
    icon: '🎮',
    title: 'E - sports',
    category: 'Competitive',
    desc: 'A high-intensity arena where survival and strategy crown the champions.',
    prize: '₹249',
    color: '#ffd700',
    link: 'https://forms.gle/2gMJAgik33HTqTRWA'
  },
  {
    icon: '🏏',
    title: 'Cricket',
    category: 'Competitive',
    desc: 'A thrilling contest of skill, teamwork and sportsmanship where every run and wicket counts.',
    prize: '₹799',
    color: '#ffd700',
    link: 'https://forms.gle/jvUfz9JAPxbggadD6'
  },
  {
    icon: '🌐',
    title: 'Online Events',
    category: 'Competitive',
    desc: 'Compete, create and connect online — where ideas and skills come alive virtually.',
    prize: '₹99',
    color: '#ffd700',
    link: 'https://forms.gle/WTGPjTdVGY8Dge4t5'
  },
]

function TrackCard({ track, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <RevealOnScroll delay={delay} direction="scale">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{
          y: hovered ? 0 : 0,
          scale: hovered ? 1 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="glass rounded-2xl p-6 border border-gold-400/10 h-full flex flex-col cursor-default relative overflow-hidden"
        style={{
          boxShadow: hovered
            ? `0 0 40px ${track.color}22, 0 0 80px rgba(139,0,0,0.25)`
            : '0 0 0 transparent',
          borderColor: hovered ? `${track.color}44` : 'rgba(255,180,0,0.1)',
          transition: 'box-shadow 0.35s, border-color 0.35s',
        }}
      >
        {/* Top glow accent */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${track.color}, transparent)`
              }}
            />
          )}
        </AnimatePresence>

        {/* Icon + Category */}
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-3xl"
            style={{ filter: `drop-shadow(0 0 10px ${track.color}88)` }}
          >
            {track.icon}
          </span>

          <span
            className="font-heading text-[0.6rem] tracking-widest uppercase px-2.5 py-1 rounded-full border"
            style={{
              color: track.color,
              borderColor: `${track.color}44`,
              background: `${track.color}11`
            }}
          >
            {track.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold gold-text mb-2">
          {track.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-amber-100/50 leading-relaxed flex-1">
          {track.desc}
        </p>

        {/* Bottom Section */}
        <div className="mt-4 pt-4 border-t border-gold-400/10 flex items-center justify-between">
          
          {/* Entry Fee */}
          <div>
            <div className="text-[0.8rem] font-heading tracking-widest uppercase text-gold-400 mb-0.5">
              Entry Fee
            </div>
            <div
              className="font-heading text-xl font-bold"
              style={{ color: track.color }}
            >
              {track.prize}
            </div>
          </div>

          {/* Register Button */}
          <a
            href={track.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-heading tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300"
            style={{
              borderColor: `${track.color}66`,
              color: track.color,
              background: hovered ? `${track.color}22` : 'transparent'
            }}
          >
            Register 
          </a>

        </div>
      </motion.div>
    </RevealOnScroll>
  )
}

export default function Events() {
  return (
    <SectionWrapper id="events" className="bg-gradient-to-b from-crimson-950 to-crimson-900/50">
      <SectionHeading
        eyebrow="Compete & Conquer"
        title="Events"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {tracks.map((track, i) => (
          <TrackCard key={track.title} track={track} delay={i * 0.08} />
        ))}
      </div>
    </SectionWrapper>
  )
}