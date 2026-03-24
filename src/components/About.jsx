import SectionWrapper, { SectionHeading, RevealOnScroll } from './SectionWrapper'

const stats = [
  { value: '500+', label: 'Participants Expected' },
  { value: '20+', label: 'Colleges Excepted' },
]

const features = [
  { icon: '🏆', title: 'National Level', desc: 'Open to all engineering colleges across India' },
  { icon: '🤝', title: 'Industry Experts', desc: 'Distinguished jury of academics and professionals' },
  { icon: '💡', title: 'Innovation Focus', desc: 'Real-world problem statements and cutting-edge tracks' },
  { icon: '🎓', title: 'Certifications', desc: 'All participants receive participation certificates' },
]

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-gradient-to-b from-crimson-950 via-crimson-900 to-crimson-950 ">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,0,0,0.2) 0%, transparent 70%)' }} />

      <SectionHeading
        eyebrow="Who We Are"
        title="About CAPTCHA 2K26"
        subtitle="A convergence of intellect, innovation, and inspiration"
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Text */}
        <RevealOnScroll direction="right">
          <div className="space-y-6 text-justify">
            <p className="font-body text-xl text-amber-100/75 leading-relaxed">
              <span className='gold-glow text-gold-400 font-semibold'>CAPTCHA2K26</span> is a prestigious national-level technical symposium that unites students from across India to showcase innovation and technical excellence. 
              It provides a professional platform for aspiring engineers, researchers, and creators to demonstrate their skills and ideas. The event features curated 
              competitions and interactive sessions that foster learning and collaboration.  <span className='gold-glow text-gold-400 font-semibold'>CAPTCHA2K26</span> is dedicated to inspiring innovation and shaping 
              future technology leaders.

            </p>
            {/* <div className="flex flex-wrap gap-3 pt-2">
              {['Engineering', 'AI/ML', 'Cybersecurity', 'Design', 'Research'].map(tag => (
                <span key={tag}
                  className="glass px-3 py-1 rounded-full text-xs font-heading tracking-widest text-gold-400/80 border-gold-400/10">
                  {tag}
                </span>
              ))}
            </div> */}
          </div>
        </RevealOnScroll>

        {/* Stats grid */}
        <RevealOnScroll direction="left" delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={s.label}
                className="glass card-glow rounded-2xl p-6 text-center border border-gold-400/15">
                <div className="font-display text-3xl gold-text mb-2">{s.value}</div>
                <div className="font-heading text-[0.7rem] tracking-widest uppercase text-amber-200/50">{s.label}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <RevealOnScroll key={f.title} delay={i * 0.1}>
            <div className="glass card-glow rounded-2xl p-6 border border-gold-400/10 h-full">
              <div className="text-3xl mb-4 filter drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">{f.icon}</div>
              <h3 className="font-heading text-sm tracking-wide gold-text mb-2">{f.title}</h3>
              <p className="font-body text-sm text-amber-100/50 leading-relaxed">{f.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
