import React, { useState } from 'react';
import { HardHat, Settings, Facebook, Instagram, Twitter, X } from 'lucide-react';
import LogoSWP from '../assets/LogoSWP.png';

const ConstructionWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-3 right-3 sm:left-4 sm:right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 w-auto md:w-full max-w-md sm:max-w-2xl md:max-w-5xl mx-auto md:mx-0 animate-in slide-in-from-bottom-10 fade-in duration-700">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200 p-4 md:p-5 relative flex flex-col gap-4 md:gap-5">
        {/* Botón de Cerrar */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Cerrar aviso"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
          {/* Sección Izquierda: Icono y Estado */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-xl">
              <Settings className="absolute w-10 h-10 text-blue-100 animate-[spin_10s_linear_infinite]" />
              <HardHat className="relative z-10 w-8 h-8 text-blue-700" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            
            <div className="text-left">
              <span className="inline-flex items-center text-[10px] font-extrabold tracking-widest text-blue-700 uppercase bg-blue-50 px-2 py-0.5 rounded-full mb-1">
                En Progreso
              </span>
              <h3 className="font-bold text-slate-800 leading-tight text-sm sm:text-base">Sitio en Construcción</h3>
            </div>
          </div>

          {/* Texto descriptivo */}
          <p className="text-slate-600 text-sm leading-relaxed md:flex-1 text-center md:text-left">
            Estamos preparando nuevas funcionalidades para ti. <span className="hidden lg:inline">Mientras tanto, puedes seguir navegando por la versión actual de nuestra web.</span>
          </p>

          {/* Redes y Branding */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 w-full md:w-auto">
            <div className="flex items-center justify-center gap-2">
              <SocialButton icon={<Facebook size={16} />} href="#" />
              <SocialButton icon={<Instagram size={16} />} href="#" />
              <SocialButton icon={<Twitter size={16} />} href="#" />
            </div>
            <div className="flex items-center justify-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-3">
              <img 
                src={LogoSWP} 
                alt="Logo SimpleWeb" 
                className="h-5 sm:h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, href }) => (
  <a 
    href={href}
    className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-100 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
  >
    {icon}
  </a>
);

export default ConstructionWidget;
