import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Ship, 
  Package, 
  Container,
  MapPin,
  Settings,
  Scale,
  ShieldCheck,
  FileCheck,
  Wind,
  Warehouse,
  ArrowLeftRight,
  Layers,
  Box,
  HardHat,
  ChevronRight
} from 'lucide-react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function Servicios(): JSX.Element {
  useEffect(() => {
    document.title = 'Servicios - VÍREMO';
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute('content', 'Descubre nuestros servicios de logística: fletes terrestres, maniobras portuarias, movimiento de maquinaria y almacenaje. Soluciones integrales para tu cadena de suministro.');
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Descubre nuestros servicios de logística: fletes terrestres, maniobras portuarias, movimiento de maquinaria y almacenaje. Soluciones integrales para tu cadena de suministro.';
      document.head.appendChild(m);
    }
    window.scrollTo(0, 0);
  }, []);
  const mainServices = [
    {
      id: 'fletes',
      title: 'FLETES TERRESTRES',
      subtitle: 'DE IMPORTACIÓN Y EXPORTACIÓN',
      icon: Truck,
      color: 'from-blue-300 to-blue-400',
      items: [
        { icon: MapPin, text: 'Carga con exceso de Dimensiones y sobre peso' },
        { icon: MapPin, text: 'Carga Contenerizada Full y Sencillo' },
        { icon: Container, text: 'Carga peligrosa (IMO)' },
        { icon: Package, text: 'Carga Suelta' },
        { icon: MapPin, text: 'Traslados locales' }
      ]
    },
    {
      id: 'maniobras',
      title: 'MANIOBRAS',
      subtitle: 'Operaciones Portuarias',
      icon: Settings,
      color: 'from-purple-300 to-purple-400',
      items: [
        { icon: Ship, text: 'Fuera de puerto (servicio exclusivo en Manzanillo)' },
        { icon: ArrowLeftRight, text: 'Carga, descarga y Traspaleo de Mercancía' },
        { icon: Layers, text: 'Desconsolidación y Consolidación (carga general y sobredimensionada)' },
        { icon: Box, text: 'Trincado de Automóviles, carga general y sobredimensionada' }
      ]
    },
    {
      id: 'adicionales',
      title: 'SERVICIOS ADICIONALES',
      subtitle: 'Para la carga de Exportación',
      icon: Package,
      color: 'from-pink-300 to-pink-400',
      items: [
        { icon: Wind, text: 'Fumigación de Contenedores' },
        { icon: Box, text: 'Certificado de trinca (Carga sobredimensionada)' },
        { icon: Scale, text: 'Certificado de centro de Gravedad (Carga sobredimensionada)' },
        { icon: FileCheck, text: 'Limpieza de contenedores' },
        { icon: Scale, text: 'Básculas certificadas' }
      ]
    },
    {
      id: 'maquinaria',
      title: 'MOVIMIENTO DE MAQUINARIA',
      subtitle: 'Proyectos Especiales',
      icon: HardHat,
      color: 'from-orange-300 to-orange-400',
      description: 'Carga con exceso de dimensiones y/o sobre peso Individual o Proyecto a través de los principales puertos comerciales del país.'
    },
    {
      id: 'almacenaje',
      title: 'ALMACENAJE',
      subtitle: 'Soluciones de Almacenamiento',
      icon: Warehouse,
      color: 'from-teal-300 to-teal-400',
      items: [
        { icon: Package, text: 'Carga Suelta' },
        { icon: Container, text: 'Contenedores llenos y vacíos' },
        { icon: ShieldCheck, text: 'Seguro de Mercancía' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white antialiased">
      <Topbar />
      <Navbar />

      <main className="pt-[96px] sm:pt-[120px] md:pt-[136px]">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1D1D1B] via-[#2D2D2B] to-[#1D1D1B]">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-[120px] animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400 rounded-full filter blur-[150px] animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img src="/inicial.png" alt="VÍREMO" className="w-32 h-32  mb-6 justify-center mx-auto" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white"
            >
              NUESTROS <span className="bg-[#F4005E] bg-clip-text text-transparent">SERVICIOS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10"
            >
              Soluciones logísticas integrales diseñadas para optimizar cada etapa de tu cadena de suministro
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                <Truck size={20} className="text-blue-300" />
                <span className="font-semibold text-white">Fletes Terrestres</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                <Ship size={20} className="text-purple-300" />
                <span className="font-semibold text-white">Maniobras</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                <Warehouse size={20} className="text-teal-300" />
                <span className="font-semibold text-white">Almacenaje</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Catálogo Completo
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre todas las soluciones que tenemos para tu negocio
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {mainServices.slice(0, 4).map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
                  
                  <div className="relative flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-base">{service.subtitle}</p>
                    </div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon size={32} />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                  {service.description ? (
                    <p className="text-gray-700 leading-relaxed text-lg">{service.description}</p>
                  ) : (
                    <ul className="space-y-4">
                      {service.items?.map((item, itemIdx) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.li
                            key={itemIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                            className="flex items-start gap-4 group/item"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-md`}>
                              <ItemIcon size={20} className="text-white" />
                            </div>
                            <span className="text-gray-700 pt-2 flex-1 text-base">{item.text}</span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Almacenaje - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          {/* Card Header */}
          <div className={`bg-gradient-to-r ${mainServices[4].color} p-10 text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full -mr-40 -mt-40"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white opacity-10 rounded-full -ml-30 -mb-30"></div>
            
            <div className="relative flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">{mainServices[4].title}</h3>
                <p className="text-white/90 text-xl">{mainServices[4].subtitle}</p>
              </div>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Warehouse size={48} />
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-10 bg-gradient-to-br from-gray-50 to-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mainServices[4].items?.map((item, itemIdx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + itemIdx * 0.1 }}
                    className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all group/card"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${mainServices[4].color} rounded-3xl flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform shadow-lg`}>
                      <ItemIcon size={32} className="text-white" />
                    </div>
                    <span className="text-gray-800 font-bold text-xl">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a href="/#contacto" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-10 py-5 rounded-full shadow-2xl hover:shadow-purple-300/50 hover:scale-105 transition-all group/cta text-lg font-semibold">
            <span>¿Necesitas una cotización personalizada?</span>
            <ChevronRight className="group-hover/cta:translate-x-1 transition-transform" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
      </main>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
