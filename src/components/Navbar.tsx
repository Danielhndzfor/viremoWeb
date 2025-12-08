import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const location = useLocation();


  const PageLink = ({ to, label }: { to: string; label: string }): JSX.Element => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className={`relative px-4 py-2 inline-block text-base md:text-lg font-semibold uppercase tracking-wider transition-colors duration-200 ${isActive ? 'text-[#6D31E8]' : 'text-gray-700 hover:text-[#6D31E8]'}`}
      >
        {label}
        <span
          className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#6D31E8] transition-all duration-300 transform origin-left ${isActive ? 'w-full scale-x-100' : 'w-0 scale-x-0'}`}
        />
      </Link>
    );
  };

  return (
    <header className="fixed top-[46px] left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-9 sm:py-9 md:py-9 flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="flex-1 hidden md:flex items-center">
          <ul className="flex gap-6">
            <li><PageLink to="/" label="Inicio" /></li>
            <li><PageLink to="/quienes-somos" label="Quiénes Somos" /></li>
          </ul>
        </nav>

        {/* Center Logo */}
        <div className="flex items-center justify-center">
          <Link to="/" aria-label="Inicio" className="inline-flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 sm:h-12 md:h-12 lg:h-12 w-auto object-contain drop-shadow-md transition-transform duration-200 hover:scale-105" />
          </Link>
        </div>

        {/* Right Navigation */}
        <nav className="flex-1 hidden md:flex items-center justify-end">
          <ul className="flex gap-6">
            <li><PageLink to="/servicios" label="Servicios" /></li>
            <li><PageLink to="/galeria" label="Galería" /></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(v => !v)} aria-label="Abrir menú" className="p-2 rounded-md bg-white border border-gray-200 shadow-sm">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-3">
            <Link to="/" onClick={() => setOpen(false)} className={`block text-gray-700 ${location.pathname === '/' ? 'text-[#6D31E8] font-semibold' : ''}`}>Inicio</Link>
            <Link to="/quienes-somos" onClick={() => setOpen(false)} className={`block text-gray-700 ${location.pathname === '/quienes-somos' ? 'text-[#6D31E8] font-semibold' : ''}`}>Quiénes Somos</Link>
            <Link to="/servicios" onClick={() => setOpen(false)} className={`block text-gray-700 ${location.pathname === '/servicios' ? 'text-[#6D31E8] font-semibold' : ''}`}>Servicios</Link>
            <Link to="/galeria" onClick={() => setOpen(false)} className={`block text-gray-700 ${location.pathname === '/galeria' ? 'text-[#6D31E8] font-semibold' : ''}`}>Galería</Link>
          </div>
        </div>
      )}
    </header>
  );
}
