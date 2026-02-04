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
      title: 'FLETE TERRESTRE',
      icon: Truck,
      color: 'from-[#0B173D] to-[#083353]',
      items: [
        { icon: MapPin, text: 'Carga con exceso de dimensiones y sobre peso' },
        { icon: MapPin, text: 'Carga contenerizada full y sencillo' },
        { icon: Container, text: 'Carga peligrosa (imo)' },
        { icon: Package, text: 'Carga suelta' },
        { icon: MapPin, text: 'Traslados locales' }
      ]
    },
    {
      id: 'maniobras',
      title: 'MANIOBRAS',
      icon: Settings,
      color: 'from-[#0B173D] to-[#083353]',
      items: [
        { icon: Ship, text: 'Fuera de puerto (servicio exclusivo en manzanillo)' },
        { icon: ArrowLeftRight, text: 'Carga, descarga y traspaleo de mercancía' },
        { icon: Layers, text: 'Desconsolidación y consolidación (carga general y sobredimensionada)' },
        { icon: Box, text: 'Trincado de automóviles, carga general y sobredimensionada' }
      ]
    },
    {
      id: 'adicionales',
      title: 'SERVICIOS ADICIONALES',
      icon: Package,
      color: 'from-[#0B173D] to-[#083353]',
      items: [
        { icon: Wind, text: 'Fumigación de contenedores' },
        { icon: Box, text: 'Certificado de trinca (carga sobredimensionada)' },
        { icon: Scale, text: 'Certificado de centro de gravedad (carga sobredimensionada)' },
        { icon: FileCheck, text: 'Limpieza de contenedores' },
        { icon: Scale, text: 'Básculas certificadas' },
        { icon: ShieldCheck, text: 'Seguro de mercancía' }
      ]
    },
    {
      id: 'almacenaje',
      title: 'ALMACENAJE',
      icon: HardHat,
      color: 'from-[#0B173D] to-[#083353]',
      items: [
        { icon: Package, text: 'Carga suelta' },
        { icon: Container, text: 'Contenedores llenos y vacíos' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white antialiased">
      <Topbar />
      <Navbar />

      <main className="pt-[100px] sm:pt-[120px] md:pt-[136px]">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1D1D1B] via-[#2D2D2B] to-[#1D1D1B]">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-[120px] animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400 rounded-full filter blur-[150px] animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              <img src="/inicial.png" alt="VÍREMO" className="w-24 sm:w-28 md:w-32 h-20 sm:h-24 mb-4 sm:mb-6 justify-center mx-auto" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 text-white"
            >
              NUESTROS <span className="bg-[#fff] bg-clip-text text-transparent">SERVICIOS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-10"
            >
              Soluciones logísticas integrales diseñadas para optimizar cada etapa de tu cadena de suministro
            </motion.p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20"
              >
                <Truck size={18} className="hidden sm:block text-blue-300" />
                <Truck size={16} className="sm:hidden text-blue-300" />
                <span className="font-semibold text-white text-xs sm:text-sm">Flete Terrestre</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20"
              >
                <Ship size={18} className="hidden sm:block text-purple-300" />
                <Ship size={16} className="sm:hidden text-purple-300" />
                <span className="font-semibold text-white text-xs sm:text-sm">Maniobras</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20"
              >
                <Warehouse size={18} className="hidden sm:block text-teal-300" />
                <Warehouse size={16} className="sm:hidden text-teal-300" />
                <span className="font-semibold text-white text-xs sm:text-sm">Almacenaje</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                <span className="bg-gradient-to-r text-[#0B173D] bg-clip-text text-transparent">
                  Catálogo Completo
                </span>
              </h2>
              <p className="text-black text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Descubre todas las soluciones que tenemos para tu negocio
              </p>
            </motion.div>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {mainServices.slice(0, 4).map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Card Header */}
                    <div className={`bg-gradient-to-r ${service.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>

                      <div className="relative flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                        </div>
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0 ml-2">
                          <Icon size={24} className="sm:size-[32px]" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-white">
                      <ul className="space-y-3 sm:space-y-4">
                        {service.items?.map((item, itemIdx) => {
                          const ItemIcon = item.icon;
                          return (
                            <motion.li
                              key={itemIdx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                              className="flex items-start gap-3 sm:gap-4 group/item"
                            >
                              <div className={`w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-md`}>
                                <ItemIcon size={16} className="sm:size-[20px] text-white" />
                              </div>
                              <span className="text-gray-700 pt-1 sm:pt-2 flex-1 text-sm sm:text-base">{item.text}</span>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Almacenaje - Full Width */}


            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 sm:mt-20 text-center"
            >
              <a href="/#contacto" className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full shadow-2xl hover:shadow-purple-300/50 hover:scale-105 transition-all group/cta text-sm sm:text-lg font-semibold">
                <span>¿Necesitas una cotización personalizada?</span>
                <ChevronRight className="group-hover/cta:translate-x-1 transition-transform" size={20} />
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
