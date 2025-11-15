import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
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

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6D31E8] rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F4005E] rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
        >
          <Sparkles size={20} className="text-[#F4005E]" />
          <span className="text-sm font-semibold">Líderes en logística especializada</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
        >
          <span className="block text-white">VÍREMO</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6D31E8] via-[#F4005E] to-[#6D31E8] animate-gradient">
            Movilidad sin límites
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Especialistas en logística portuaria y transporte de{' '}
          <span className="text-[#6D31E8] font-semibold">carga sobredimensionada</span>.
          Excelencia operativa y servicio personalizado que transforma desafíos en soluciones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#6D31E8] to-[#5a28c4] hover:from-[#5a28c4] hover:to-[#4a1fa0] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-[#6D31E8]/50 hover:shadow-xl hover:shadow-[#6D31E8]/60"
          >
            Solicitar Cotización
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-lg font-semibold transition-all"
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
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-[#6D31E8] mb-2">+15</div>
            <div className="text-gray-300">Años de experiencia</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-[#F4005E] mb-2">1000+</div>
            <div className="text-gray-300">Operaciones exitosas</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Disponibilidad</div>
          </div>
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
