import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);


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
    <header className="fixed top-[36px] left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-9">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <nav className="flex-1 flex items-center">
              <ul className="flex gap-6">
                <li><PageLink to="/" label="Inicio" /></li>
                <li><PageLink to="/quienes-somos" label="Quiénes Somos" /></li>
              </ul>
            </nav>

            {/* Center Logo */}
            <div className="flex items-center justify-center">
              <Link to="/" aria-label="Inicio" className="inline-flex items-center">
                <img src="/logo.png" alt="Logo" className="h-20 w-auto object-contain drop-shadow-md transition-transform duration-200 hover:scale-105" />
              </Link>
            </div>

            {/* Right Navigation */}
            <nav className="flex-1 flex items-center justify-end">
              <ul className="flex gap-6">
                <li><PageLink to="/servicios" label="Servicios" /></li>
                <li><PageLink to="/galeria" label="Galería" /></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Header: centered logo */}
      <div className="md:hidden flex flex-col items-center justify-center px-4 py-6">
        <Link to="/" aria-label="Inicio" className="inline-flex items-center">
          <img src="/logo.png" alt="Logo" className="h-16 sm:h-20 w-auto object-contain drop-shadow-md transition-transform duration-200 hover:scale-105" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-center pb-4">
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="p-3 rounded-full bg-gradient-to-br from-[#6D31E8] to-[#8B5CF6] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      
      {open && (
        <div 
          className="md:hidden fixed top-42 left-0 right-0 z-[999] bg-gradient-to-b from-[#6D31E8] via-[#8B5CF6] to-[#9157FF] flex flex-col items-center justify-start h-screen pt-28 p-8 overflow-auto transition-all duration-700"
          style={{
            transform: open ? 'translateY(0) scale(1) rotateX(0deg)' : 'translateY(-100%) scale(0.9) rotateX(-10deg)',
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transformOrigin: 'top center',
            perspective: '1000px',
          }}
        >
          {/* <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="absolute top-6 right-6 p-2 rounded-md bg-white/20 hover:bg-white/30 transition-colors backdrop-blur"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> */}

          <nav className="flex flex-col items-center justify-center space-y-16 w-full">
            <Link to="/" onClick={() => setOpen(false)} className={`text-3xl sm:text-4xl font-extrabold uppercase tracking-widest transition-all duration-300 ${location.pathname === '/' ? 'text-white drop-shadow-lg' : 'text-white/80 hover:text-white'} transform hover:scale-105`}>Inicio</Link>
            <Link to="/quienes-somos" onClick={() => setOpen(false)} className={`text-3xl sm:text-4xl font-extrabold uppercase tracking-widest transition-all duration-300 ${location.pathname === '/quienes-somos' ? 'text-white drop-shadow-lg' : 'text-white/80 hover:text-white'} transform hover:scale-105`}>Quiénes Somos</Link>
            <Link to="/servicios" onClick={() => setOpen(false)} className={`text-3xl sm:text-4xl font-extrabold uppercase tracking-widest transition-all duration-300 ${location.pathname === '/servicios' ? 'text-white drop-shadow-lg' : 'text-white/80 hover:text-white'} transform hover:scale-105`}>Servicios</Link>
            <Link to="/galeria" onClick={() => setOpen(false)} className={`text-3xl sm:text-4xl font-extrabold uppercase tracking-widest transition-all duration-300 ${location.pathname === '/galeria' ? 'text-white drop-shadow-lg' : 'text-white/80 hover:text-white'} transform hover:scale-105`}>Galería</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
