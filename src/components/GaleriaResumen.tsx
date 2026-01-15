import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ZoomIn } from 'lucide-react';

export default function GaleriaResumen() {
  const imagenesMuestra = [
    {
      src: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=600',
      title: 'Fletes Terrestres'
    },
    {
      src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600',
      title: 'Maniobras Portuarias'
    },
    {
      src: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=600',
      title: 'Maquinaria Pesada'
    },
    {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
      title: 'Almacenamiento'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-[#6D31E8] bg-clip-text text-transparent">
              Galería
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nuestros proyectos logísticos en acción
          </p>
        </motion.div>

        {/* Gallery Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {imagenesMuestra.map((imagen, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all aspect-square"
            >
              <img
                src={imagen.src}
                alt={imagen.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn size={24} className="text-white" />
                  </div>
                  <p className="text-white font-semibold text-sm">{imagen.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
            to="/galeria"
            className="inline-flex items-center gap-3 bg-[#7147ee] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all group/btn font-semibold text-lg"
          >
            <span>Ver galería completa</span>
            <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
