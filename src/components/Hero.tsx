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
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className={`text-4xl font-bold ${color} mb-2`}>{count}{suffix}</div>
        <div className="text-gray-300">{label}</div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1D1D1B]"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1B]/80 via-[#1D1D1B]/60 to-[#1D1D1B]"></div>
      </div>

      {/* Minimal: no decorative blurred blobs (keep background image only) */}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          <span className="block text-white">SERVICIOS DE LOGÍSTICA</span>
          <span className="block text-[#A78BFA]">
            y transporte de carga sobredimensionada y maniobras portuarias.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Especialistas en logística portuaria y transporte de{' '}
          <span className="text-[#A78BFA] font-semibold">carga sobredimensionada</span>. Excelencia operativa y servicio personalizado que transforma desafíos en soluciones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 bg-[#7147ee] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors"
          >
            Solicitar Cotización
            <ArrowRight size={20} className="ml-2" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 bg-[#FCE7F3] text-[#7C3AED] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors"
          >
            Ver Servicios
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <CounterCard label="Años de experiencia" color="text-[#6D31E8]" target={15} duration={1400} suffix="+" />
          <CounterCard label="Operaciones exitosas" color="text-[#F4005E]" target={1000} duration={2000} suffix="+" />
          <CounterCard label="Disponibilidad" color="text-white" target={24} duration={1400} suffix="/7" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
