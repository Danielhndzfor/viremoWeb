import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1D1D1B] via-[#2D2D2B] to-[#1D1D1B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center font-bold text-2xl shadow-lg">
                V
              </div>
              <h3 className="text-2xl font-bold">VÍREMO</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Soluciones integrales de logística portuaria y transporte especializado. 
              Excelencia operativa y compromiso con nuestros clientes.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-400 group-hover:w-2 transition-all"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-400 group-hover:w-2 transition-all"></span>
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-400 group-hover:w-2 transition-all"></span>
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-400 group-hover:w-2 transition-all"></span>
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                Fletes Terrestres
              </li>
              <li className="text-gray-400 inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                Maniobras Portuarias
              </li>
              <li className="text-gray-400 inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                Movimiento de Maquinaria
              </li>
              <li className="text-gray-400 inline-flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                Almacenaje
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:contacto@viremo.com" className="hover:text-white transition-colors">
                    contacto@viremo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                  <a href="tel:+525512345678" className="hover:text-white transition-colors">
                    +52 55 1234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Ubicación</p>
                  <p>Ciudad de México, México</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} VÍREMO. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
