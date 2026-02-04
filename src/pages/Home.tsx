import { useEffect } from 'react';
import Hero from '../components/Hero';
import QuienesSomosResumen from '../components/QuienesSomosResumen';
import EmpresaResumen from '../components/EmpresaResumen';
import ServiciosResumen from '../components/ServiciosResumen';
import GaleriaResumen from '../components/GaleriaResumen';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import WhatsAppWidget from '../components/WhatsAppWidget';

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
      <Topbar />
      <Navbar />

      <main className="pt-[96px] sm:pt-[120px] md:pt-[136px]">
        <Hero />
        <EmpresaResumen />
        {/* <QuienesSomosResumen /> */}
        <ServiciosResumen />
        {/* <GaleriaResumen /> */}
        <Contacto />
      </main>

      <WhatsAppWidget />

      <Footer />
    </div>
  );
}
