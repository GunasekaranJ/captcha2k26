// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import SectionWrapper, { SectionHeading, RevealOnScroll } from './SectionWrapper'

// const testimonials = [
//   {
//     quote: "CAPTCHA 2K26 was the most enriching technical experience of my academic journey. The hackathon pushed us beyond limits and the mentors were extraordinary.",
//     name: "Arjun Venkatesh",
//     role: "3rd Year, CSE — VIT Chennai",
//     avatar: "AV",
//     stars: 5,
//   },
//   {
//     quote: "The AI Arena was incredibly well-organised. The problem statements were real-world, industry-grade challenges that truly tested our skills.",
//     name: "Priya Sundaram",
//     role: "Final Year, IT — Anna University",
//     avatar: "PS",
//     stars: 5,
//   },
//   {
//     quote: "Winning the Paper Presentation track was a dream come true. The jury feedback was insightful and helped us refine our research significantly.",
//     name: "Rohan Krishnamurthy",
//     role: "M.Tech, ECE — NIT Trichy",
//     avatar: "RK",
//     stars: 5,
//   },
//   {
//     quote: "Best symposium I've attended. The production quality, the events, the energy — everything was top notch. Can't wait for 2K26!",
//     name: "Sneha Iyer",
//     role: "2nd Year, AIML — SRM Institute",
//     avatar: "SI",
//     stars: 5,
//   },
// ]

// export default function Testimonials() {
//   const [active, setActive] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => setActive(p => (p + 1) % testimonials.length), 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <SectionWrapper id="testimonials" className="bg-gradient-to-b from-crimson-900/50 to-crimson-950">
//       {/* Glow blob */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-20"
//           style={{ background: 'radial-gradient(ellipse, #8b0000 0%, transparent 70%)', filter: 'blur(60px)' }} />
//       </div>

//       <SectionHeading
//         eyebrow="Voices"
//         title="What Participants Say"
//         subtitle="Stories from the brightest minds who competed"
//       />

//       {/* Large testimonial display */}
//       <RevealOnScroll>
//         <div className="max-w-3xl mx-auto">
//           <div className="glass rounded-3xl p-10 md:p-14 border border-gold-400/15 relative overflow-hidden text-center">
//             <div className="absolute top-6 left-8 text-7xl font-display text-gold-400/10 select-none leading-none">"</div>
//             <div className="absolute bottom-2 right-8 text-7xl font-display text-gold-400/10 select-none leading-none">"</div>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={active}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative z-10"
//               >
//                 {/* Stars */}
//                 <div className="flex justify-center gap-1 mb-6">
//                   {Array(testimonials[active].stars).fill(0).map((_, i) => (
//                     <span key={i} className="text-gold-400 text-lg">★</span>
//                   ))}
//                 </div>

//                 <p className="font-body text-xl md:text-2xl italic text-amber-100/80 leading-relaxed mb-8">
//                   "{testimonials[active].quote}"
//                 </p>

//                 <div className="flex items-center justify-center gap-4">
//                   <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-sm text-crimson-950"
//                     style={{ background: 'linear-gradient(135deg, #FFD700, #FF8C00)' }}>
//                     {testimonials[active].avatar}
//                   </div>
//                   <div className="text-left">
//                     <div className="font-heading text-sm font-bold gold-text">{testimonials[active].name}</div>
//                     <div className="font-body text-xs text-amber-200/40">{testimonials[active].role}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-6">
//             {testimonials.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActive(i)}
//                 className={`rounded-full transition-all duration-300 ${
//                   i === active ? 'w-6 h-2 bg-gold-400' : 'w-2 h-2 bg-gold-400/25 hover:bg-gold-400/50'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </RevealOnScroll>

//       {/* Mini cards below */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
//         {testimonials.map((t, i) => (
//           <RevealOnScroll key={t.name} delay={i * 0.1}>
//             <button
//               onClick={() => setActive(i)}
//               className={`glass rounded-2xl p-5 border text-left w-full transition-all duration-300 ${
//                 i === active
//                   ? 'border-gold-400/40 shadow-[0_0_20px_rgba(255,215,0,0.15)]'
//                   : 'border-gold-400/10 hover:border-gold-400/25'
//               }`}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-bold text-crimson-950 flex-shrink-0"
//                   style={{ background: 'linear-gradient(135deg, #FFD700, #FF8C00)' }}>
//                   {t.avatar}
//                 </div>
//                 <div>
//                   <div className="font-heading text-xs font-bold text-gold-400/90">{t.name}</div>
//                   <div className="text-[0.6rem] font-body text-amber-200/30">{t.role.split(' — ')[1]}</div>
//                 </div>
//               </div>
//               <p className="font-body text-xs text-amber-100/40 leading-relaxed line-clamp-2">"{t.quote}"</p>
//             </button>
//           </RevealOnScroll>
//         ))}
//       </div>
//     </SectionWrapper>
//   )
// }
