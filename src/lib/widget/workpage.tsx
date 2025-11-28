// import React from 'react';
// import { motion } from 'framer-motion';
// import { HardHat, Settings, Instagram, Twitter, Facebook, Hammer } from 'lucide-react';

// // --- Fondo Sutil (Mantiene la identidad limpia) ---
// const BackgroundParticles = () => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50">
//     <div 
//       className="absolute inset-0 opacity-[0.3]"
//       style={{
//         backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
//         backgroundSize: '40px 40px'
//       }}
//     ></div>
//     {/* Un solo orbe de luz muy suave para dar profundidad */}
//     <motion.div
//       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-100/30 rounded-full blur-3xl"
//       animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
//       transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//     />
//   </div>
// );

// // --- Animación de "Trabajo en Progreso" ---
// const ConstructionVisual = () => {
//   return (
//     <div className="relative w-32 h-32 mx-auto mb-10 flex items-center justify-center">
//       {/* Círculo base */}
//       <motion.div 
//         className="absolute inset-0 bg-slate-100 rounded-full border border-slate-200"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.2, type: "spring" }}
//       />
      
//       {/* Engranaje girando suavemente (Representa la parte técnica) */}
//       <motion.div
//         className="absolute -right-2 -top-2 text-slate-300"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//       >
//         <Settings size={48} />
//       </motion.div>

//       {/* Casco (Representa el trabajo humano) */}
//       <motion.div
//         className="relative z-10 text-slate-800 drop-shadow-xl"
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.4, type: "spring" }}
//       >
//         <HardHat size={64} strokeWidth={1.5} />
//       </motion.div>

//       {/* Martillo animado (Acción) */}
//       <motion.div
//         className="absolute -left-4 bottom-2 text-red-500"
//         initial={{ rotate: -45, x: -10, opacity: 0 }}
//         animate={{ 
//           rotate: [-45, -15, -45],
//           x: 0,
//           opacity: 1
//         }}
//         transition={{ 
//           delay: 0.6,
//           duration: 1.5,
//           repeat: Infinity,
//           repeatDelay: 1
//         }}
//       >
//         <Hammer size={40} />
//       </motion.div>
//     </div>
//   );
// };

// // --- Componente Principal ---
// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans text-slate-800 p-6">
//       <BackgroundParticles />

//       {/* Tarjeta Principal */}
//       <motion.main 
//         className="z-10 w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-[2rem] p-12 sm:p-20 shadow-2xl shadow-slate-200/50 ring-1 ring-white/50 relative text-center"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Curva de animación elegante
//       >
//         {/* Etiqueta de Estado */}
//         <motion.div 
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <span className="relative flex h-2.5 w-2.5">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
//           </span>
//           <span className="text-xs font-bold tracking-widest uppercase">En Desarrollo</span>
//         </motion.div>

//         {/* Visual Central */}
//         <ConstructionVisual />

//         {/* Titular */}
//         <motion.h1 
//           className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           Sitio en <br className="sm:hidden" /> Construcción
//         </motion.h1>

//         {/* Descripción corta */}
//         <motion.p 
//           className="text-lg text-slate-500 max-w-md mx-auto leading-relaxed mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           Estamos diseñando algo excepcional desde cero. 
//           <br className="hidden sm:block" /> 
//           Volveremos pronto con una experiencia renovada.
//         </motion.p>

//         {/* Separador */}
//         <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full opacity-200 mb-12"></div>

//         {/* Redes Sociales - Ahora son el foco de acción principal */}
//         <motion.div 
//           className="flex justify-center gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           {[
//             { icon: Facebook, href: "#" }, 
//             { icon: Instagram, href: "#" }, 
//             { icon: Twitter, href: "#" },
//           ].map((Social, index) => (
//             <motion.a
//               key={index}
//               href={Social.href}
//               whileHover={{ y: -4, scale: 1.1, color: '#3b82f6' }}
//               whileTap={{ scale: 0.95 }}
//               className="text-slate-400 p-3 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50 transition-all duration-300"
//             >
//               <Social.icon size={24} strokeWidth={1.5} />
//             </motion.a>
//           ))}
        
//         </motion.div>
//         <div className='mt-6 w-20 mx-auto flex justify-center'>
//           <a
//           href="https://simplewebperu.com"
//           >
//           <img 
//             src="./LogoSWP1.svg" 
//             alt="logo"
//             className="w-full h-auto"
//           /> 
//           </a>
//         </div>
//       </motion.main>
      
//       {/* Footer Simple */}
//       <motion.footer 
//         className="z-10 mt-12 text-[#3b82f6] text-xs font-bold tracking-wide uppercase"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.9 }}
//         transition={{ delay: 1 }}
//       >
//         <a
//           href="https://simplewebperu.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             transition-all
//             hover:text-[#0450cf]
//             ]
//           "
//         >
//         Simple Web Perú &copy; {new Date().getFullYear()}
//         </a>
//       </motion.footer>
//     </div>
//   );
// }