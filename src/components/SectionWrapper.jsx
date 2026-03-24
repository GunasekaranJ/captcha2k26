import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-16 flex flex-col items-center gap-4">
      {eyebrow && (
        <div className="flex items-center gap-3">
          <div className="ornament-line" />
          <span className="font-heading text-[0.62rem] tracking-[0.4em] uppercase text-amber-400/50">{eyebrow}</span>
          <div className="ornament-line-rev" />
        </div>
      )}
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight gold-text gold-glow">
        {title}
      </h2>
      <div className="gold-divider mt-1" />
      {subtitle && (
        <p className="text-amber-100/50 font-body text-lg max-w-xl">{subtitle}</p>
      )}
    </div>
  )
}

export function RevealOnScroll({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      scale: direction === 'scale' ? 0.9 : 1,
    },
    visible: {
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
