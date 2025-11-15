import { useEffect } from 'react';
import Hero from '../components/Hero';
import SobreNosotros from '../components/SobreNosotros';
import MisionVision from '../components/MisionVision';
import Valores from '../components/Valores';
import Servicios from '../components/Servicios';
import Ventajas from '../components/Ventajas';
import Equipo from '../components/Equipo';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home(): JSX.Element {
  useEffect(() => {
    document.title = 'VÍREMO - Logística Portuaria y Transporte Especializado';
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute('content', 'Soluciones integrales de logística portuaria y transporte terrestre especializado. Excelencia operativa y servicio personalizado.');
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Soluciones integrales de logística portuaria y transporte terrestre especializado. Excelencia operativa y servicio personalizado.';
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6D31E8] to-[#F4005E] flex items-center justify-center font-bold text-lg text-white">V</div>
            <span className="text-xl font-bold tracking-tight text-gray-900">VÍREMO</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-[#6D31E8] transition">Nosotros</a>
            <a href="#servicios" className="text-gray-700 hover:text-[#6D31E8] transition">Servicios</a>
            <a href="#equipo" className="text-gray-700 hover:text-[#6D31E8] transition">Equipo</a>
            <a href="#contacto" className="text-gray-700 hover:text-[#F4005E] transition">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <SobreNosotros />
        <MisionVision />
        <Valores />
        <Servicios />
        <Ventajas />
        <Equipo />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}
