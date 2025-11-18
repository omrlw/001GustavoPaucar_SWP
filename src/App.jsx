import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Brain,
  HeartHandshake,
  Activity,
  CalendarCheck,
  MessageCircle
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Datos extraídos del perfil
  const doctorInfo = {
    name: "Dr. Gustavo Paucar Chávez",
    specialty: "Médico Psiquiatra",
    cmp: "079326",
    rne: "048301",
    address: "Calle Ricardo Palma 305 Umacollo, Magisterial, Arequipa",
    locationName: "GALENE SALUD MENTAL E INTEGRATIVA",
    phones: ["953 42X XXX", "993 65X XXX"],
    prices: {
      consult: "S/ 120 - S/ 150",
      successive: "S/ 120",
      certificate: "S/ 100 - S/ 150"
    }
  };

  // Detectar scroll para efectos del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 antialiased">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className={`font-bold text-xl leading-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                  Dr. Gustavo Paucar
                </h1>
                <p className={`text-xs ${scrolled ? 'text-slate-600' : 'text-slate-600 lg:text-teal-50'}`}>Psiquiatría Integrativa</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['Inicio', 'Sobre Mí', 'Servicios', 'Opiniones', 'Ubicación'].map((item, idx) => {
                const ids = ['hero', 'about', 'services', 'reviews', 'location'];
                return (
                  <button 
                    key={idx}
                    onClick={() => scrollToSection(ids[idx])}
                    className={`font-medium hover:text-teal-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'}`}
                  >
                    {item}
                  </button>
                )
              })}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-teal-500/30"
              >
                Agendar Cita
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-800 p-2">
              {isMenuOpen ? <X /> : <Menu className={scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute w-full border-b border-gray-100 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Inicio', 'Sobre Mí', 'Servicios', 'Opiniones', 'Ubicación'].map((item, idx) => {
                 const ids = ['hero', 'about', 'services', 'reviews', 'location'];
                 return (
                  <button 
                    key={idx}
                    onClick={() => scrollToSection(ids[idx])}
                    className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-teal-50 hover:text-teal-600 rounded-lg"
                  >
                    {item}
                  </button>
                 )
              })}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-teal-600 text-white px-3 py-3 rounded-lg font-bold"
              >
                Agendar Cita Ahora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-teal-900/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" 
            alt="Consulta médica tranquila" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="lg:w-1/2">
            <span className="inline-block bg-teal-500/20 text-teal-100 border border-teal-400/30 px-4 py-1 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Atención Presencial en Arequipa y Online
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Recupera tu bienestar emocional con <span className="text-teal-400">empatía y respeto</span>.
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Atención psiquiátrica especializada enfocada en escucharte. Tratamientos personalizados para ansiedad, depresión y adicciones en un ambiente seguro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => scrollToSection('contact')} className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/40 flex items-center justify-center gap-2">
                <CalendarCheck className="w-5 h-5" />
                Reservar Cita
              </button>
              <button onClick={() => scrollToSection('services')} className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Ver Servicios
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-300 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="bg-teal-500/20 p-1 rounded-full"><Star className="w-4 h-4 text-teal-400 fill-teal-400" /></div>
                <span>5.0 Estrellas en Doctoralia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-teal-500/20 p-1 rounded-full"><Activity className="w-4 h-4 text-teal-400" /></div>
                <span>CMP {doctorInfo.cmp}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full opacity-50 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-full opacity-50 z-0"></div>
              {/* Placeholder for Doctor's Photo */}
              <div className="relative z-10 bg-gray-200 w-full aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center group">
                 <div className="text-center p-8">
                    <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Brain className="w-12 h-12 text-slate-500" />
                    </div>
                    <p className="text-slate-500 italic">Foto del Dr. Gustavo Paucar</p>
                 </div>
                 {/* Simulación de imagen real */}
                 {/* <img src="/path-to-doctor-photo.jpg" className="w-full h-full object-cover" /> */}
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Experiencia</p>
                    <p className="text-slate-900 font-bold text-lg">Hospital Honorio Delgado</p>
                    <p className="text-slate-900 font-bold text-lg">Hospital III Yanahuara</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-3">Sobre Mí</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Atención médica con calidez humana
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Soy el <strong>Dr. Gustavo Paucar Chávez</strong>, médico psiquiatra en la ciudad de Arequipa. Mi enfoque se basa en brindar atención cálida, con total empatía y respeto hacia la historia de cada paciente.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Entiendo que buscar ayuda no es fácil, por eso me esfuerzo en crear un espacio donde te sientas escuchado y comprendido, ya sea para tratar adicciones, ansiedad, depresión o cualquier desafío emocional.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <HeartHandshake className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Trato Humano</h4>
                    <p className="text-sm text-slate-600">Empatía garantizada en cada consulta.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Idiomas</h4>
                    <p className="text-sm text-slate-600">Atención en Español, Inglés y Alemán.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-sm text-slate-500">Colegiaturas:</p>
                <p className="font-mono text-slate-700 font-medium">CMP: {doctorInfo.cmp} | RNE: {doctorInfo.rne}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Especialidades y Tratamientos</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Abordaje integral de las principales condiciones de salud mental con tratamientos basados en evidencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Ansiedad y Pánico", desc: "Tratamiento para crisis de angustia y ansiedad generalizada.", icon: Activity },
              { title: "Depresión", desc: "Apoyo profesional para superar estados depresivos y recuperar el ánimo.", icon: Brain },
              { title: "Adicciones", desc: "Alcoholismo, drogas y ludopatía. Recuperación paso a paso.", icon: HeartHandshake },
              { title: "Trastornos Alimentarios", desc: "Atención especializada para Anorexia y Bulimia.", icon: Activity },
              { title: "TDAH", desc: "Diagnóstico y manejo del Déficit de Atención en adultos y adolescentes.", icon: Brain },
              { title: "Personalidad", desc: "Manejo de trastornos de personalidad y conducta.", icon: Activity },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                  <service.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <a href="#contact" className="text-teal-600 font-semibold text-sm hover:text-teal-800 inline-flex items-center">
                  Consultar <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
                </a>
              </div>
            ))}
          </div>

          {/* Pricing Info */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-slate-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Transparencia en Precios</h3>
                <p className="text-slate-600">Sin costos ocultos. Facturación electrónica disponible.</p>
              </div>
              <div className="space-y-3 w-full md:w-auto">
                <div className="flex justify-between items-center gap-8 border-b border-slate-100 pb-2">
                  <span className="font-medium text-slate-700">Consulta Especializada</span>
                  <span className="font-bold text-teal-600">{doctorInfo.prices.consult}</span>
                </div>
                <div className="flex justify-between items-center gap-8 border-b border-slate-100 pb-2">
                  <span className="font-medium text-slate-700">Visitas sucesivas</span>
                  <span className="font-bold text-teal-600">{doctorInfo.prices.successive}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Lo que dicen mis pacientes</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
              <Star className="fill-current w-6 h-6" /><Star className="fill-current w-6 h-6" /><Star className="fill-current w-6 h-6" /><Star className="fill-current w-6 h-6" /><Star className="fill-current w-6 h-6" />
            </div>
            <p className="text-slate-500 font-medium">Basado en 12 opiniones verificadas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "JJG", date: "Nov 2025", text: "Muy buena atención, resultados con el tratamiento. Me llena de satisfacción haber sido ayudado en mi recuperación.", tag: "Cita verificada" },
              { name: "Stephani", date: "Abr 2025", text: "El Dr. Gustavo es muy empático con sus pacientes y tiene mucha paciencia para explicar los tratamientos. Lo recomiendo mucho.", tag: "Empatía" },
              { name: "Luis Alberto", date: "Sep 2025", text: "La atención fue excelente, me explicó a detalle mi padecimiento y me dio mucha confianza para hablar. Gracias doctor.", tag: "Excelente atención" },
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative">
                <div className="absolute -top-4 right-8 text-6xl text-teal-200 font-serif">"</div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full font-semibold">
                    {review.tag}
                  </div>
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed relative z-10">
                  {review.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                    <p className="text-xs text-slate-500">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Dudas Frecuentes Resueltas</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cómo funciona el tratamiento de adicciones?", a: "Las adicciones conductuales (juego, celular) o a sustancias se tratan de forma progresiva, buscando la causa raíz y proporcionando herramientas para recuperar el control sin juicios." },
              { q: "¿El medicamento para la ansiedad es para siempre?", a: "No necesariamente. Las benzodiacepinas y otros fármacos se usan con cautela. Si se requiere retirarlos, se hace de forma progresiva y segura bajo supervisión médica." },
              { q: "¿Aceptan seguros médicos?", a: "Actualmente atendemos a pacientes privados (sin seguro) para garantizar una atención personalizada y sin limitaciones de tiempo." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-lg mb-2 text-teal-300">{faq.q}</h4>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-3xl overflow-hidden shadow-xl">
            {/* Contact Info */}
            <div id="contact" className="lg:w-2/5 p-10 flex flex-col justify-center bg-slate-900 text-white">
              <h2 className="text-3xl font-bold mb-6">Visítanos en Arequipa</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Consultorio Privado</h3>
                    <p className="text-gray-300">{doctorInfo.locationName}</p>
                    <p className="text-gray-400 text-sm">{doctorInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Teléfonos</h3>
                    <p className="text-gray-300 block">{doctorInfo.phones[0]}</p>
                    <p className="text-gray-300 block">{doctorInfo.phones[1]}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horarios</h3>
                    <p className="text-gray-300">Lunes a Sábado</p>
                    <p className="text-teal-400 text-sm mt-1">Previa Cita</p>
                  </div>
                </div>
              </div>

              <button className="mt-10 w-full bg-teal-500 hover:bg-teal-400 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-teal-900/50 transition-all transform hover:-translate-y-1">
                Solicitar Cita por WhatsApp
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="lg:w-3/5 bg-gray-200 min-h-[400px] relative">
               {/* Simulando Mapa de Google */}
               <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Mapa Interactivo de Google Maps</p>
                    <p className="text-xs">Calle Ricardo Palma 305, Umacollo</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg">{doctorInfo.name}</h3>
            <p className="text-sm mt-1">Psiquiatría y Salud Mental en Arequipa</p>
          </div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Facebook</a>
             <a href="#" className="hover:text-white transition-colors">Doctoralia</a>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>&copy; 2025 Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;