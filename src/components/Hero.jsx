import { motion } from 'framer-motion'
import captcha from './300-700pxl.png'
import './Hero.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1 } }
}

// Floating particles component
function Particles() {
  const pts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    dur: Math.random() * 6 + 4,
    delay: Math.random() * 4,
    color: Math.random() > 0.5 ? '#FFD700' : '#FF4400',
    opacity: Math.random() * 0.5 + 0.1,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pts.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -80, 0], opacity: [p.opacity, 0, p.opacity] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background (Image + Dark Feel) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80')"
        }}
      />

      {/* Dark Red Gradient Overlay */}
      <div className="absolute inset-0 z-10 video-overlay" />

      {/* Particles */}
      <div className="absolute inset-0 z-10">
        <Particles />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-3 mt-16 md:mt-20"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeIn} className="flex flex-col items-center gap-3">
          <div className="ornament-line" />
          <span className="font-heading text-[1.5rem] md:text-[2rem] uppercase text-amber-300/60">
            Dhanalakshmi College of Engineering
          </span>
          <span className="font-heading text-[0.7rem] tracking-[0.3em] md:text-[1rem] uppercase text-amber-300/60">
            Department of CSE presents
          </span>
          <div className="ornament-line-rev" />
        </motion.div>

        {/* Main Title */}
        <span className="gold-glow">
          <img
            src={captcha}
            alt="captcha2k26"
            className="size-36   w-96 md:size-80 md:w-[950px] captchaimage"
          />
        </span>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="font-heading text-[clamp(0.7rem,2vw,1rem)] tracking-[0.3em] uppercase text-amber-200/70"
        >
          ✦ A National Level Technical Symposium ✦
        </motion.p>

        {/* Date / Time */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          {[
            { icon: '📅', text: '09 April 2026' },
            { icon: '🕘', text: '09:00 AM Onwards' },
          ].map(item => (
            <div
              key={item.text}
              className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm text-amber-100/80"
            >
              <span>{item.icon}</span>
              <span className="font-sans text-xs tracking-wide">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mt-2">
          <a
            href="#events"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="shimmer-btn text-white font-heading text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:scale-105 transition"
          >
            Register Now →
          </a>

          <a
            href="#about"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="font-heading text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full border border-gold-400/40 text-gold-400 hover:bg-gold-400/10 transition"
          >
            Explore
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}