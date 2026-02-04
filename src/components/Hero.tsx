import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  // Small counter hook: animates from 0 to target over duration ms
  function useCount(target: number, duration = 1500) {
    const [value, setValue] = useState(0);
    useEffect(() => {
      let rafId: number;
      let start: number | null = null;
      const easeOutQuad = (t: number) => t * (2 - t);

      const step = (timestamp: number) => {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = easeOutQuad(progress);
        setValue(Math.floor(eased * target));
        if (progress < 1) rafId = requestAnimationFrame(step);
      };

      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }, [target, duration]);
    return value;
  }

  // Small presentational card for counters
  function CounterCard({ label, color, target, duration, suffix }: { label: string; color: string; target: number; duration?: number; suffix?: string }) {
    const count = useCount(target, duration);
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${color} mb-1 sm:mb-2`}>{count}{suffix}</div>
        <div className="text-xs sm:text-sm md:text-base text-gray-300">{label}</div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/fondo.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1B]/60 via-[#1D1D1B]/40 to-[#1D1D1B]/60"></div>
      </div>


      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-full mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          <span className="block text-white">SERVICIOS DE LOGÍSTICA Y TRANSPORTE DE CARGA CON EXCESO DE PESO Y DIMENSIONES.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Especialistas en logística portuaria y transporte de carga sobredimensionada
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 bg-gradient-to-br from-[#6D31E8] to-[#F4005E] text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors w-full sm:w-auto justify-center"
          >
            Solicitar Cotización
            <ArrowRight size={18} className="ml-2 sm:size-[20px]" />
          </a>
          {/* <a
            href="#servicios"
            className="inline-flex items-center gap-2 bg-[#FCE7F3] text-[#6D31E8] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors"
          >
            Ver Servicios
          </a> */}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2 sm:px-0"
        >
          <CounterCard label="Años de experiencia" color="text-[#6D31E8]" target={15} duration={1400} suffix="+" />
          <CounterCard label="Operaciones exitosas" color="text-[#F4005E]" target={3000} duration={2000} suffix="+" />
          <CounterCard label="Disponibilidad" color="text-white" target={24} duration={1400} suffix="/7" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
