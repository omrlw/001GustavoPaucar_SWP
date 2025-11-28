// import React, { useState } from 'react';
// import { HardHat, Settings, Facebook, Instagram, Twitter, X } from 'lucide-react';
// import LogoSWP from '../assets/LogoSWP.png';

// const ConstructionWidget = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   if (!isVisible) return null;

//   return (
//     // Contenedor principal: Fijo en la parte inferior, centrado, con margen para que "flote"
//     <div className="fixed bottom-6 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 w-full max-w-5xl animate-in slide-in-from-bottom-10 fade-in duration-700">
      
//       <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200 p-4 md:pr-12 relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 group">
        
//         {/* Botón de Cerrar (X) - Posicionado absoluto a la derecha */}
//         <button 
//           onClick={() => setIsVisible(false)}
//           className="absolute top-2 right-2 md:top-1/2 md:-translate-y-1/2 md:right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
//           aria-label="Cerrar aviso"
//         >
//           <X size={20} />
//         </button>

//         {/* Sección Izquierda: Icono y Estado */}
//         <div className="flex items-center gap-4 min-w-max">
//           <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-xl">
//             <Settings className="absolute w-10 h-10 text-blue-500 animate-[spin_10s_linear_infinite]" />
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full border-2 border-white animate-pulse"></div>
//           </div>
          
//           <div className="text-left">
//             <div className="flex items-center gap-2 mb-0.5">
//               <span className="text-[10px] font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded-full">
//                 En Progreso
//               </span>
//             </div>
//             <h3 className="font-bold text-slate-800 leading-tight">Sitio en Construcción</h3>
//           </div>
//         </div>

//         {/* Sección Central: Texto descriptivo */}
//         <p className="text-slate-500 text-sm leading-relaxed text-center md:text-left border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 flex-grow">
//           Estamos preparando nuevas funcionalidades para ti. <span className="hidden lg:inline">Mientras tanto, puedes seguir navegando por la versión actual de nuestra web.</span>
//         </p>

//         {/* Sección Derecha: Redes y Branding */}
//         <div className="flex items-center gap-4 flex-shrink-0">
          
//           {/* Pequeño branding vertical */}
//           <div className="hidden md:flex flex-col items-end border-l border-slate-100 pl-10 ml-2">
//             <img 
//               src={LogoSWP} 
//               alt="Logo SimpleWeb" 
//               className="h-8 w-auto pr-10"
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// const SocialButton = ({ icon, href }) => (
//   <a 
//     href={href}
//     className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-100 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
//   >
//     {icon}
//   </a>
// );

// export default ConstructionWidget;
