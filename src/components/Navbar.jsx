import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollY } from '../hooks/useScrollY'
import foxicon from './foxicon.png'
import logotext from './logotext.png'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)
  const solid = scrollY > 60

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-crimson-950/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(139,0,0,0.5)] border-b border-gold-400/10'
          : 'bg-transparent border-b border-gold-400/10'
      }`}
    >
      <div className="md:max-w-7xl mx-auto px-6 py-4 flex items-center justify-end">
        {/* Logo */}
        {/* <a href="#hero" onClick={e => handleNav(e, '#hero')} className="flex items-center gap-3 group">
          <span className="font-display text-sm tracking-widest gold-text flex logobox">
            <img src={foxicon} alt="" className='size-12 w-8 foxlogo' />
          </span>
        </a> */}

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 ">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                className="font-heading text-xs tracking-[0.18em]  text-amber-200/70 hover:text-gold-400 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#events"
              onClick={e => handleNav(e, '#events')}
              className="font-heading text-xs tracking-[0.18em] uppercase px-5 py-2 rounded-full border border-gold-400/50 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              Register
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} className={`block h-px bg-gold-400 transition-all duration-600 ${
              i === 0 ? (menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6') :
              i === 1 ? (menuOpen ? 'w-0 opacity-0' : 'w-4') :
              (menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6')
            }`} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between"
          >
            <ul className="flex flex-col py-4 px-6 gap-4 ">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => handleNav(e, link.href)}
                    className="font-heading text-sm tracking-widest uppercase text-amber-300/70 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
