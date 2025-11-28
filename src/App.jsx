import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, Star, 
  ChevronDown, ChevronUp, Brain, HeartHandshake, 
  Activity, CalendarCheck, MessageCircle, ArrowRight,
  ShieldCheck
} from 'lucide-react';
import LogoGalene from './assets/LogoGalene.svg';
import ConstructionWidget from './module/trabajando';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Datos del Doctor (Centralizados para fácil edición)
  const doctorInfo = {
    name: "Dr. Gustavo Paucar Chávez",
    shortName: "Dr. Paucar",
    specialty: "Médico Psiquiatra",
    cmp: "079326",
    rne: "048301",
    address: "Calle Ricardo Palma 305 Umacollo, Magisterial, Arequipa",
    locationName: "GALENE SALUD MENTAL E INTEGRATIVA",
    phones: ["953420000", "993650000"], // Reemplaza con los reales para el link
    displayPhones: ["953 42X XXX", "993 65X XXX"],
    prices: {
      consult: "S/ 120 - S/ 150",
      successive: "S/ 120",
      certificate: "S/ 100 - S/ 150"
    },
    whatsappMessage: "Hola Dr. Paucar, me gustaría solicitar información para una consulta psiquiátrica."
  };

  // Función para abrir WhatsApp
  const handleWhatsAppClick = () => {
    const phone = doctorInfo.phones[0]; // Usa el principal
    const text = encodeURIComponent(doctorInfo.whatsappMessage);
    window.open(`https://wa.me/51${phone}?text=${text}`, '_blank');
  };

  // Detectar scroll para efectos del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensación por el navbar fijo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 antialiased selection:bg-[var(--primary-200)] selection:text-[var(--primary-900)]">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => window.scrollTo(0,0)}
              role="button"
              tabIndex={0}
              aria-label="Ir al inicio"
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && window.scrollTo(0,0)}
            >
              <div className={`p-2 rounded-xl transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md shadow-lg'}`}>
                <img 
                  src={LogoGalene} 
                  alt="Logo Galene Salud Mental" 
                  className="h-10 w-auto"
                />
              </div>
              <span className="sr-only">Dr. Paucar - Psiquiatría Integrativa</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {['Sobre Mí', 'Servicios', 'Opiniones', 'Ubicación'].map((item, idx) => {
                const ids = ['about', 'services', 'reviews', 'location'];
                return (
                  <button 
                    key={idx}
                    onClick={() => scrollToSection(ids[idx])}
                    className={`text-sm font-semibold transition-colors ${scrolled ? 'text-slate-600 hover:text-[var(--primary-600)]' : 'text-slate-100 hover:text-white'}`}
                  >
                    {item}
                  </button>
                )
              })}
              <button 
                onClick={handleWhatsAppClick}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 ${
                  scrolled 
                    ? 'bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white shadow-[0_12px_30px_rgba(var(--primary-rgb),0.2)]' 
                    : 'bg-white text-[var(--primary-700)] hover:bg-[var(--primary-50)] shadow-black/10'
                }`}
              >
                Agendar Cita
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
          <div className="p-4 space-y-1">
            {['Inicio', 'Sobre Mí', 'Servicios', 'Opiniones', 'Ubicación'].map((item, idx) => {
               const ids = ['hero', 'about', 'services', 'reviews', 'location'];
               return (
                <button 
                  key={idx}
                  onClick={() => scrollToSection(ids[idx])}
                  className="block w-full text-left px-4 py-3 text-slate-600 font-medium hover:bg-[var(--primary-50)] hover:text-[var(--primary-700)] rounded-xl transition-colors"
                >
                  {item}
                </button>
               )
            })}
            <div className="pt-4 px-2">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-[var(--primary-600)] text-white px-4 py-3.5 rounded-xl font-bold shadow-lg shadow-[0_12px_30px_rgba(var(--primary-rgb),0.2)] active:scale-95 transition-transform"
              >
                <MessageCircle size={20} />
                Agendar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-[rgba(var(--primary-rgb),0.35)] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" 
            alt="Consultorio médico tranquilo" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
          <div className="lg:w-7/12">
            <div className="inline-flex items-center gap-2 bg-[rgba(var(--primary-rgb),0.1)] backdrop-blur-md border border-[rgba(var(--primary-rgb),0.2)] text-[var(--primary-100)] px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgba(var(--primary-rgb),0.5)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary-600)]"></span>
              </span>
              Atención Presencial en Arequipa y Online
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Tu salud mental <br/>
              en manos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-400)] to-[var(--primary-200)]">expertos.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Un enfoque psiquiátrico integral que une la evidencia científica con la empatía humana. Recupera tu bienestar en un espacio seguro y confidencial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleWhatsAppClick} className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-[0_15px_35px_rgba(var(--primary-rgb),0.4)] flex items-center justify-center gap-2 group">
                <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Reservar Cita
              </button>
              <button onClick={() => scrollToSection('services')} className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Conocer Tratamientos
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-[rgba(var(--primary-rgb),0.2)] p-2 rounded-lg"><Star className="w-5 h-5 text-[var(--primary-400)] fill-[var(--primary-400)]" /></div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">5.0</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">Doctoralia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg"><ShieldCheck className="w-5 h-5 text-blue-400" /></div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">CMP {doctorInfo.cmp}</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">Médico Verificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[var(--primary-50)] rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image/Profile Card */}
            <div className="lg:w-1/2 w-full">
              <div className="relative mx-auto max-w-sm lg:max-w-md">
                <div className="absolute inset-0 bg-[var(--primary-600)] rounded-[2rem] rotate-3 opacity-10"></div>
                <div className="relative bg-slate-50 border border-slate-100 rounded-[2rem] overflow-hidden shadow-2xl">
                   <div className="aspect-[4/5] bg-slate-200 w-full relative group cursor-default">
                      {/* En producción, pon aquí la etiqueta <img> real */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-100">
                          <Brain className="w-20 h-20 mb-4 opacity-20" />
                          <p className="font-medium text-sm">Foto del Dr. Gustavo Paucar</p>
                          <p className="text-xs opacity-60">(Reemplazar con imagen real)</p>
                      </div>
                      
                      {/* Overlay con datos rápidos */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-24 text-white">
                        <p className="text-[var(--primary-200)] font-bold tracking-wide text-sm mb-1">MÉDICO PSIQUIATRA</p>
                        <h3 className="text-2xl font-bold">{doctorInfo.name}</h3>
                      </div>
                   </div>
                </div>
                
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 max-w-xs hidden sm:block">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[var(--primary-100)] p-2 rounded-full">
                      <Activity className="w-6 h-6 text-[var(--primary-600)]" />
                    </div>
                    <span className="font-bold text-slate-800">Experiencia Clínica</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--primary-500)] rounded-full"></div>Hospital Honorio Delgado</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--primary-500)] rounded-full"></div>Hospital III Yanahuara</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="lg:w-1/2">
              <span className="text-[var(--primary-600)] font-bold tracking-wider uppercase text-sm bg-[var(--primary-50)] px-3 py-1 rounded-full">Sobre Mí</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
                No solo tratamos síntomas,<br/>
                <span className="relative">
                  comprendemos historias.
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[rgba(var(--primary-rgb),0.25)] -z-10"></span>
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Soy el <strong>Dr. Gustavo Paucar Chávez</strong>, médico psiquiatra en Arequipa. Mi práctica se distingue por romper con el estigma frío de la salud mental, ofreciendo un trato <strong>cálido y humano</strong>.
                </p>
                <p>
                  Entiendo que buscar ayuda requiere valentía. Por eso, me esfuerzo en crear un espacio libre de juicios donde trabajaremos juntos para encontrar el equilibrio emocional que necesitas, ya sea mediante psicoterapia, medicación o un enfoque integrativo.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <HeartHandshake className="w-8 h-8 text-[var(--primary-600)] mb-2" />
                  <h4 className="font-bold text-slate-900">Enfoque Humano</h4>
                  <p className="text-sm text-slate-600">Escucha activa y empatía garantizada.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <MessageCircle className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-bold text-slate-900">Multilingüe</h4>
                  <p className="text-sm text-slate-600">Español, Inglés y Alemán.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Especialidades y Tratamientos</h2>
            <p className="text-lg text-slate-600">
              Utilizo tratamientos basados en la última evidencia científica, personalizados para tu situación única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Ansiedad y Pánico", desc: "Tratamiento para crisis de angustia, fobia social y ansiedad generalizada.", icon: Activity, color: "bg-orange-50 text-orange-600" },
              { title: "Depresión", desc: "Apoyo profesional para superar estados depresivos, distimia y duelo.", icon: Brain, color: "bg-blue-50 text-blue-600" },
              { title: "Adicciones", desc: "Manejo integral de alcoholismo, dependencia a sustancias y ludopatía.", icon: HeartHandshake, color: "bg-purple-50 text-purple-600" },
              { title: "TCA", desc: "Atención especializada para Anorexia, Bulimia y atracones.", icon: Activity, color: "bg-pink-50 text-pink-600" },
              { title: "TDAH Adultos", desc: "Diagnóstico y estrategias para el Déficit de Atención en la vida adulta.", icon: Brain, color: "bg-yellow-50 text-yellow-600" },
              { title: "Personalidad", desc: "Terapia y manejo de trastornos de personalidad (Bordeline, etc).", icon: Activity, color: "bg-[var(--primary-50)] text-[var(--primary-600)]" },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <button onClick={handleWhatsAppClick} className="text-[var(--primary-600)] font-bold text-sm hover:text-[var(--primary-800)] inline-flex items-center group-hover:gap-2 transition-all">
                  Consultar <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-500)] rounded-full blur-[100px] opacity-20"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Inversión en tu Salud Mental</h3>
                <p className="text-slate-300 mb-6">
                  Precios transparentes y justos. Emitimos boleta o factura electrónica para tu seguro o reembolso.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs border border-white/20">Pago Efectivo</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs border border-white/20">Yape / Plin</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs border border-white/20">Transferencia</span>
                </div>
              </div>

              <div className="w-full md:w-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 min-w-[300px]">
                <div className="space-y-4">
                  <div className="flex justify-between items-center gap-8 border-b border-white/10 pb-3">
                    <span className="text-slate-300">Consulta Inicial</span>
                    <span className="font-bold text-xl text-[var(--primary-300)]">{doctorInfo.prices.consult}</span>
                  </div>
                  <div className="flex justify-between items-center gap-8 border-b border-white/10 pb-3">
                    <span className="text-slate-300">Control / Psicoterapia</span>
                    <span className="font-bold text-xl text-[var(--primary-300)]">{doctorInfo.prices.successive}</span>
                  </div>
                  <div className="flex justify-between items-center gap-8">
                    <span className="text-slate-300">Certificado Salud Mental</span>
                    <span className="font-bold text-xl text-[var(--primary-300)]">{doctorInfo.prices.certificate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[var(--primary-600)] font-bold uppercase text-sm tracking-widest mb-2">Testimonios</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Lo que dicen mis pacientes</h2>
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              {[1,2,3,4,5].map((s) => <Star key={s} className="fill-current w-5 h-5" />)}
            </div>
            <p className="text-slate-500 text-sm">Basado en opiniones reales verificadas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "JJG", date: "Hace 1 mes", text: "Muy buena atención, resultados con el tratamiento desde la primera semana. Me llena de satisfacción haber sido ayudado en mi recuperación.", tag: "Eficacia" },
              { name: "Stephani", date: "Hace 3 meses", text: "El Dr. Gustavo es muy empático con sus pacientes y tiene mucha paciencia para explicar los tratamientos. Lo recomiendo mucho.", tag: "Empatía" },
              { name: "Luis Alberto", date: "Hace 6 meses", text: "La atención fue excelente, me explicó a detalle mi padecimiento y me dio mucha confianza para hablar de temas difíciles.", tag: "Confianza" },
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--primary-100)] rounded-full flex items-center justify-center text-[var(--primary-800)] font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 leading-tight">{review.name}</p>
                    <p className="text-xs text-slate-400">{review.date}</p>
                  </div>
                  <div className="ml-auto bg-white text-[var(--primary-700)] text-[10px] font-bold px-2 py-1 rounded border border-slate-200 shadow-sm">
                    {review.tag}
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed text-sm">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://www.doctoralia.pe/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[var(--primary-600)] hover:text-[var(--primary-800)] font-semibold border-b border-[rgba(var(--primary-rgb),0.35)] hover:border-[var(--primary-800)] transition-colors pb-0.5"
            >
              Ver más opiniones en Doctoralia <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section className="py-24 bg-[var(--primary-900)] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <Brain className="absolute -left-20 top-20 w-96 h-96 text-white" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cómo sé si necesito ir al psiquiatra o al psicólogo?", a: "Ambos profesionales trabajamos juntos. Si tus síntomas (ansiedad, insomnio, tristeza profunda) afectan tu funcionamiento diario o físico, es recomendable una evaluación psiquiátrica para determinar si es necesario apoyo farmacológico junto con la terapia." },
              { q: "¿Los medicamentos generan dependencia?", a: "No todos. Los antidepresivos y estabilizadores del ánimo NO generan dependencia. Las benzodiacepinas (ansiolíticos) se usan con precaución y por tiempo limitado bajo estricta supervisión para evitarla." },
              { q: "¿Aceptan seguros médicos?", a: "Trabajamos de manera particular para garantizar el tiempo y calidad que cada paciente merece. Sin embargo, te entregamos la documentación necesaria para que solicites el reembolso si tu seguro lo permite." },
              { q: "¿Realizan atención virtual?", a: "Sí, realizamos teleconsultas a través de Google Meet o Zoom con la misma validez y calidez que una consulta presencial, incluyendo receta médica electrónica." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-colors hover:bg-white/10">
                <button 
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-[var(--primary-50)]">{faq.q}</span>
                  {activeAccordion === idx ? <ChevronUp className="flex-shrink-0 text-[var(--primary-300)]" /> : <ChevronDown className="flex-shrink-0 text-[var(--primary-300)]" />}
                </button>
                <div 
                  className={`px-6 text-slate-300 leading-relaxed overflow-hidden transition-all duration-300 ${activeAccordion === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
            
            {/* Contact Info */}
            <div id="contact" className="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center bg-slate-900 text-white relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-500)] rounded-full blur-[80px] opacity-10 pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold mb-2 relative z-10">Agenda tu Cita</h2>
              <p className="text-slate-400 mb-10 relative z-10">Estamos listos para escucharte.</p>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><MapPin className="w-6 h-6 text-[var(--primary-300)]" /></div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Consultorio</h3>
                    <p className="text-slate-300 text-sm">{doctorInfo.locationName}</p>
                    <p className="text-slate-400 text-sm mt-1">{doctorInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Phone className="w-6 h-6 text-[var(--primary-300)]" /></div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Contacto Directo</h3>
                    <p className="text-slate-300 block">{doctorInfo.displayPhones[0]}</p>
                    <p className="text-slate-300 block">{doctorInfo.displayPhones[1]}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Clock className="w-6 h-6 text-[var(--primary-300)]" /></div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horarios</h3>
                    <p className="text-slate-300">Lunes a Sábado: 9:00am - 8:00pm</p>
                    <p className="text-[var(--primary-300)] text-sm font-medium mt-1">Previa Cita</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleWhatsAppClick}
                className="mt-12 w-full bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-[0_25px_60px_rgba(var(--primary-rgb),0.5)] transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 relative z-10"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Cita por WhatsApp
              </button>
            </div>

            {/* Google Map Real Integration */}
            <div className="lg:w-3/5 h-[400px] lg:h-auto bg-slate-200 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.464878415254!2d-71.5456389239665!3d-16.3996204381882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a5eb6d3e183%3A0x6b0934159518063a!2sCalle%20Ricardo%20Palma%20305%2C%20Arequipa%2004001!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                title="Mapa de ubicación consultorio"
               ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg flex items-center gap-2 justify-center md:justify-start">
              <img src={LogoGalene} alt="Logo Galene" className="h-6 w-auto" />
              {doctorInfo.name}
            </h3>
            <p className="text-sm mt-2">Cuidando tu salud mental en Arequipa.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium">
             <a href="#" className="hover:text-[var(--primary-300)] transition-colors">Facebook</a>
             <a href="#" className="hover:text-[var(--primary-300)] transition-colors">Instagram</a>
             <a href="#" className="hover:text-[var(--primary-300)] transition-colors">Doctoralia</a>
          </div>
          <div className="text-sm text-center md:text-right text-slate-600">
            <p>&copy; 2025 Dr. Gustavo Paucar. CMP {doctorInfo.cmp}</p>
          </div>
        </div>
      </footer>

      {/* Aviso de sitio en construcción */}
      <ConstructionWidget />
    </div>
  
  );
};

export default App;
