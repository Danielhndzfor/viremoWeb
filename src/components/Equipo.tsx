import { motion } from 'framer-motion';

export default function Equipo() {
  const team = [
    { name: 'Angélica Cortés', role: 'CEO y Comercial' },
    { name: 'Fernando Cortés', role: 'Operaciones' },
    { name: 'Andrea Vázquez', role: 'Capital Humano y Administración' },
    { name: 'René Cuevas', role: 'Facturación y Cobranza' },
    { name: 'Luis Vázquez', role: 'Contabilidad' }
  ];

  return (
    <section id="equipo" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
        >
          Conoce al Equipo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Profesionales comprometidos con tu éxito
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-[#6D31E8] hover:shadow-lg transition-all"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#6D31E8] to-[#F4005E] rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-bold mb-1 text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
