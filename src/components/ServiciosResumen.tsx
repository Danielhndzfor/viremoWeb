import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Settings, HardHat, Warehouse } from 'lucide-react';

export default function ServiciosResumen() {
  const servicios = [
    {
      icon: Truck,
      title: 'Fletes Terrestres',
      description: 'Importación y exportación, foráneos y locales',
      color: 'from-blue-300 to-blue-400'
    },
    {
      icon: Settings,
      title: 'Maniobras',
      description: 'Operaciones portuarias y consolidación de carga',
      color: 'from-purple-300 to-purple-400'
    },
    {
      icon: HardHat,
      title: 'Maquinaria',
      description: 'Movimiento de carga pesada y especializada',
      color: 'from-orange-300 to-orange-400'
    },
    {
      icon: Warehouse,
      title: 'Almacenaje',
      description: 'Soluciones de almacenamiento seguro',
      color: 'from-teal-300 to-teal-400'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-[#A78BFA] bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Soluciones logísticas integrales para optimizar tu cadena de suministro
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicios.map((servicio, idx) => {
            const Icon = servicio.icon;
            return (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${servicio.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{servicio.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{servicio.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/servicios"
            className="inline-flex items-center gap-3 bg-[#7147ee] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all group/btn font-semibold text-lg"
          >
            <span>Ver todos los servicios</span>
            <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
