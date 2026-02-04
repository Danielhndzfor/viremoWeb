import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Settings, HardHat, Warehouse } from 'lucide-react';

export default function ServiciosResumen() {
  const servicios = [
    {
      icon: Truck,
      title: 'Flete Terrestre',
      description: 'Carga con exceso de peso y dimensiones',
      color: 'from-blue-300 to-blue-400'
    },
    {
      icon: Settings,
      title: 'Maniobras',
      description: 'Fuera de puerto (servicio exclusivo en Manzanillo)',
      color: 'from-purple-300 to-purple-400'
    },
    {
      icon: HardHat,
      title: 'Seguro de Mercancía',
      description: 'Protección completa para tu carga',
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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-[#6D31E8] bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-gray-900 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Soluciones logísticas integrales para optimizar tu cadena de suministro
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {servicios.map((servicio, idx) => {
            const Icon = servicio.icon;
            return (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className={`w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br ${servicio.color} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="sm:size-[28px] text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{servicio.title}</h3>
                <p className="text-gray-900 text-xs sm:text-sm leading-relaxed">{servicio.description}</p>
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
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-[#6D31E8] to-[#F4005E] px-6 sm:px-8 py-2.5 sm:py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all group/btn font-semibold text-sm sm:text-base md:text-lg"
          >
            <span>Ver todos los servicios</span>
            <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
