import { motion } from 'framer-motion';
import { Target, TrendingUp } from 'lucide-react';

export default function MisionVision() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#6D31E8]/5 to-[#6D31E8]/10 p-8 rounded-2xl border border-[#6D31E8]/20"
        >
          <div className="w-12 h-12 bg-[#6D31E8] rounded-lg flex items-center justify-center mb-6">
            <Target size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Misión</h3>
          <p className="text-gray-700 leading-relaxed">
            Brindar soluciones de logística portuaria y transporte terrestre especializado, garantizando excelencia operativa y cumplimiento normativo que genere valor para nuestros clientes, a través de un servicio seguro y eficiente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F4005E]/5 to-[#F4005E]/10 p-8 rounded-2xl border border-[#F4005E]/20"
        >
          <div className="w-12 h-12 bg-[#F4005E] rounded-lg flex items-center justify-center mb-6">
            <TrendingUp size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Visión</h3>
          <p className="text-gray-700 leading-relaxed">
            Consolidarnos en el mercado nacional como una empresa líder en servicios de logística integral y transporte especializado, respaldada por una estructura organizacional sólida y un compromiso con el crecimiento, la confianza, y el bienestar de su cadena de valor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
