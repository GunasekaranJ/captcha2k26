import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading, RevealOnScroll } from './SectionWrapper'

const socials = [
  { icon: '📸', label: 'Instagram', href: '#' },
  { icon: '🐦', label: 'Twitter/X', href: '#' },
  { icon: '💼', label: 'LinkedIn', href: '#' },
  { icon: '📘', label: 'Facebook', href: '#' },
]

const contacts = [
  { icon: '✉️', label: 'Email', value: 'captcha2k26@dce.edu.in', href: 'mailto:captcha2k26@dce.edu.in' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: '📍', label: 'Address', value: 'Dhanalakshmi College of Engineering, Chennai', href: '#' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', college: '', event: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gold-400/10 bg-crimson-950/90">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="font-display text-sm gold-text mb-1">Department of CSE</div>
            <div className="font-body text-xs text-amber-200/30">Dhanalakshmi College of Engineering · Chennai</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="ornament-line" style={{ maxWidth: '30px' }} />
            <div className="w-1 h-1 rounded-full bg-gold-400/40" />
            <div className="ornament-line-rev" style={{ maxWidth: '30px' }} />
          </div>
          <div className="font-heading text-[0.62rem] tracking-widest uppercase text-amber-400/30 text-center md:text-right">
            © 2026 CAPTCHA 2K26 · All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  )
}
