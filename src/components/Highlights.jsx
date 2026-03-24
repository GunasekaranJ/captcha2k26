// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import SectionWrapper, { SectionHeading, RevealOnScroll } from './SectionWrapper'

// const highlights = [
//   {
//     id: 1,
//     type: 'image',
//     src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
//     label: 'Opening Ceremony',
//     span: 'col-span-2 row-span-2',
//   },
//   {
//     id: 2,
//     type: 'image',
//     src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
//     label: 'Coding Competition',
//     span: '',
//   },
//   {
//     id: 3,
//     type: 'image',
//     src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
//     label: 'Hackathon Finals',
//     span: '',
//   },
//   {
//     id: 4,
//     type: 'image',
//     src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
//     label: 'AI Workshop',
//     span: '',
//   },
//   {
//     id: 5,
//     type: 'image',
//     src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
//     label: 'Award Night',
//     span: '',
//   },
//   {
//     id: 6,
//     type: 'image',
//     src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
//     label: 'Tech Talks',
//     span: '',
//   },
// ]

// function HighlightCard({ item, delay }) {
//   const [hovered, setHovered] = useState(false)

//   return (
//     <RevealOnScroll delay={delay} direction="scale" className={item.span}>
//       <motion.div
//         onHoverStart={() => setHovered(true)}
//         onHoverEnd={() => setHovered(false)}
//         className="relative overflow-hidden rounded-2xl cursor-pointer h-full min-h-[200px]"
//         style={{
//           boxShadow: hovered ? '0 0 40px rgba(255,215,0,0.2), 0 0 80px rgba(139,0,0,0.3)' : 'none',
//           transition: 'box-shadow 0.35s'
//         }}
//       >
//         <motion.img
//           src={item.src}
//           alt={item.label}
//           className="w-full h-full object-cover"
//           style={{ minHeight: item.span ? '400px' : '200px' }}
//           animate={{ scale: hovered ? 1.07 : 1 }}
//           transition={{ duration: 0.5, ease: 'easeOut' }}
//           loading="lazy"
//         />

//         {/* Base overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-crimson-950/80 via-transparent to-transparent" />

//         {/* Hover overlay */}
//         <AnimatePresence>
//           {hovered && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 border-2 border-gold-400/40 rounded-2xl pointer-events-none"
//               style={{ boxShadow: 'inset 0 0 30px rgba(255,215,0,0.1)' }}
//             />
//           )}
//         </AnimatePresence>

//         {/* Label */}
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 p-4"
//           animate={{ y: hovered ? 0 : 4 }}
//           transition={{ duration: 0.3 }}
//         >
//           <span className="font-heading text-xs tracking-widest uppercase text-gold-400">
//             {item.label}
//           </span>
//         </motion.div>
//       </motion.div>
//     </RevealOnScroll>
//   )
// }

// export default function Highlights() {
//   return (
//     <SectionWrapper id="highlights" className="bg-crimson-950">
//       <SectionHeading
//         eyebrow="Past Events"
//         title="Highlights"
//         subtitle="Reliving the energy, passion, and brilliance of previous years"
//       />

//       {/* Bento grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
//         {highlights.map((item, i) => (
//           <HighlightCard key={item.id} item={item} delay={i * 0.07} />
//         ))}
//       </div>

//       {/* Embedded video teaser */}
//       <RevealOnScroll delay={0.2} className="mt-8">
//         <div className="glass rounded-2xl overflow-hidden border border-gold-400/10 relative"
//           style={{ paddingTop: '56.25%' }}>
//           <div className="absolute inset-0 flex items-center justify-center bg-crimson-950">
//             <div className="text-center space-y-3">
//               <div className="w-16 h-16 rounded-full border-2 border-gold-400/40 flex items-center justify-center mx-auto glass cursor-pointer hover:border-gold-400 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all duration-300">
//                 <span className="text-gold-400 text-xl ml-1">▶</span>
//               </div>
//               <p className="font-heading text-xs tracking-widest uppercase text-amber-400/60">
//                 Watch the Aftermovie
//               </p>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </SectionWrapper>
//   )
// }
