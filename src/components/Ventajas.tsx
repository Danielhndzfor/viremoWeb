import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Ventajas() {
  const advantages = [
    'Experiencia en movimiento de carga con exceso de dimensiones',
    'Confiables: Garantizamos cumplimiento normativo y gestión oportuna',
    'Optimización de Tiempos: Analizamos rutas, permisos y requisitos',
    'Optimización de Costos: Procesos eficientes y aliados estratégicos',
    'Atención Personalizada: Un solo punto de contacto, seguimiento constante'
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
        >
          Ventajas Competitivas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Lo que nos diferencia en el mercado logístico
        </motion.p>
        <div className="space-y-4">
          {advantages.map((advantage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-[#6D31E8] hover:shadow-md transition-all"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#6D31E8] to-[#F4005E] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={20} className="text-white" />
              </div>
              <p className="text-gray-700 font-medium">{advantage}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
