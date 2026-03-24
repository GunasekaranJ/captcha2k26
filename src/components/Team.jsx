import SectionWrapper, { SectionHeading, RevealOnScroll } from './SectionWrapper'

const nam = [
  { name: 'Dr Ramamurthi v p', role: 'Chairman', dept: 'DCE', avatar: '👩‍🏫' },
  { name: 'Mrs roopa k s', role: 'CEO', dept: 'DCE', avatar: '👨‍🏫' },
  { name: 'Dr pradeep kumar a r', role: 'Principal', dept: 'DCE', avatar: '👩‍🏫' },
  { name: 'Dr vivekanandan s j', role: 'HOD', dept: 'Cse', avatar: '👩‍🏫' },
]



const faculty = [
  { name: 'Mrs Mariammal R', role: 'Faculty Co-ordinator', dept: 'Computer Science', avatar: '👩‍🏫' },
  { name: 'Mrs Arthi Priyadharshini M', role: 'Faculty Co-ordinator', dept: 'Computer Science', avatar: '👨‍🏫' },
  { name: 'Mrs Muthumari L', role: 'Faculty Co-ordinator', dept: 'Computer Science  ', avatar: '👩‍🏫' },
]

const students = [
  { name: 'Gowtham balaji a', role: 'Student Co-ordinator', avatar: '👨‍💻' },
  { name: 'arunagiri m  ', role: 'Student Co-ordinator', avatar: '👩‍💻' },
  { name: 'magesh v', role: 'Student Co-ordinator', avatar: '👨‍💻' },
  { name: 'vigneshwaran k', role: 'Student Co-ordinator', avatar: '👩‍💻' },
]

function MemberCard({ member, showDept, delay }) {
  return (
    <RevealOnScroll delay={delay} direction="up">
      <div className="glass card-glow rounded-2xl p-6 border border-gold-400/10 text-center group">
        <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl relative"
          style={{ background: 'linear-gradient(135deg, #8b0000, #2b0000)', border: '1px solid rgba(255,215,0,0.25)', boxShadow: '0 0 20px rgba(255,215,0,0.1)' }}>
          {member.avatar}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: '0 0 20px rgba(255,215,0,0.4)', border: '1px solid rgba(255,215,0,0.5)' }} />
        </div>
        <h4 className="font-heading uppercase text-base font-bold gold-text mb-1">{member.name}</h4>
        <p className="font-heading text-[0.65rem] tracking-wider uppercase text-amber-500/60">{member.role}</p>
        {showDept && member.dept && (
          <p className="font-body text-xs text-amber-100/30 mt-1">{member.dept}</p>
        )}
      </div>
    </RevealOnScroll>
  )
}

export default function Team() {
  return (
    <SectionWrapper id="team" className="bg-crimson-950">
      <SectionHeading
        eyebrow="Behind The Scenes"
        title="Our Team"
        subtitle="The dedicated minds crafting your CAPTCHA 2K26 experience"
      />

      <div className="grid sm:grid-cols-4 gap-5 mb-14">
        {nam.map((m, i) => (
          <MemberCard key={m.name} member={m} showDept delay={i * 0.1} />
        ))}
      </div>
      

      {/* Faculty */}
      <RevealOnScroll>
        <div className="flex items-center gap-3 mb-6">
          <div className="ornament-line" />
          <span className="font-heading text-[0.8rem] tracking-[0.3em] uppercase text-amber-400/40 whitespace-nowrap">Faculty Coordinators</span>
          <div className="ornament-line-rev" />
        </div>
      </RevealOnScroll>

      <div className="grid sm:grid-cols-3 gap-5 mb-14">
        {faculty.map((m, i) => (
          <MemberCard key={m.name} member={m} showDept delay={i * 0.1} />
        ))}
      </div>

      {/* Students */}
      <RevealOnScroll>
        <div className="flex items-center gap-3 mb-6">
          <div className="ornament-line" />
          <span className="font-heading text-[0.8rem] tracking-[0.3em] uppercase text-amber-400/40 whitespace-nowrap">Student Coordinators</span>
          <div className="ornament-line-rev" />
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12">
        {students.map((m, i) => (
          <MemberCard key={m.name} member={m} showDept={false} delay={i * 0.07} />
        ))}
      </div>
    </SectionWrapper>
  )
}
