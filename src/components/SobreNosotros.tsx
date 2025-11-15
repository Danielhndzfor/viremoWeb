import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';

export default function SobreNosotros() {
  const features = [
    {
      icon: Award,
      title: 'Visión Estratégica',
      desc: 'Anticipamos necesidades y diseñamos soluciones a medida'
    },
    {
      icon: Shield,
      title: 'Compromiso Firme',
      desc: 'Cumplimiento garantizado en cada operación'
    },
    {
      icon: Users,
      title: 'Alto Profesionalismo',
      desc: 'Equipo experto y certificado en logística especializada'
    },
    {
      icon: TrendingUp,
      title: 'Mejora Continua',
      desc: 'Innovación constante en nuestros procesos'
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#6D31E8]/10 text-[#6D31E8] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Sobre Nosotros
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Aliados confiables en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D31E8] to-[#F4005E]">
                logística especializada
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              VÍREMO es una empresa con <strong>visión estratégica</strong>, compromiso firme y alto profesionalismo, 
              que brinda soluciones integrales de logística portuaria y transporte terrestre especializado.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Nuestro enfoque está centrado en la <strong>excelencia operativa</strong> y el servicio personalizado. 
              Nos posicionamos como un aliado confiable para operaciones críticas debido a nuestra experiencia 
              y compromiso con la mejora continua.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-[#6D31E8] text-white px-6 py-3 rounded-lg font-semibold">
                +15 años de experiencia
              </div>
              <div className="bg-[#F4005E] text-white px-6 py-3 rounded-lg font-semibold">
                1000+ operaciones exitosas
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#6D31E8] to-[#F4005E] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
