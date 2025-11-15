import { motion } from 'framer-motion';
import { Truck, Ship, Package } from 'lucide-react';

export default function Servicios() {
  const services = [
    { title: 'Fletes Terrestres', desc: 'Importación y exportación (foráneos)' },
    { title: 'Locales', desc: 'Traslado local de contenedores llenos y vacíos' },
    { title: 'Maniobras', desc: 'Servicio exclusivo fuera de puerto en Manzanillo' },
    { title: 'Fumigación', desc: 'Fumigación de contenedores' },
    { title: 'Movimiento de Maquinaria', desc: 'Carga con exceso de dimensiones y/o sobrepeso' },
    { title: 'Almacenaje', desc: 'Carga suelta, contenedores y seguro de mercancía' }
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Soluciones logísticas integrales para cada necesidad
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#6D31E8] hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 bg-[#6D31E8] group-hover:bg-[#F4005E] rounded-lg flex items-center justify-center mb-4 transition-colors">
                {idx < 3 ? <Truck size={20} className="text-white" /> : idx < 5 ? <Ship size={20} className="text-white" /> : <Package size={20} className="text-white" />}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
