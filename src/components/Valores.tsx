import { motion } from 'framer-motion';
import { Shield, Heart, Star, TrendingUp, Target } from 'lucide-react';

export default function Valores() {
  const values = [
    { icon: Shield, name: 'Integridad', desc: 'Honestidad, ética y respeto en cada decisión' },
    { icon: Heart, name: 'Confianza', desc: 'Base de cada relación con responsabilidad y transparencia' },
    { icon: Star, name: 'Excelencia', desc: 'Servicios de la más alta calidad constantemente' },
    { icon: TrendingUp, name: 'Orgullo', desc: 'Pasión por el impacto positivo que generamos' },
    { icon: Target, name: 'Actitud', desc: 'Proactivos, orientados a resultados, transformando retos' }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
        >
          Nuestros Valores
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Los principios fundamentales que guían cada una de nuestras acciones
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#6D31E8] to-[#F4005E] rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon size={28} className="text-white" />
              </div>
              <h4 className="font-bold mb-2 text-gray-900">{value.name}</h4>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
