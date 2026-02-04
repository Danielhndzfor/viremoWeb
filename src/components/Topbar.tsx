import { useState } from 'react';
import { Phone } from 'lucide-react';

export default function Topbar(): JSX.Element {
    const [lang, setLang] = useState<'ES' | 'EN'>('ES');

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B173D] text-white">
            <div className="relative max-w-7xl mx-auto px-6 md:px-16 h-9 md:h-10 flex items-center justify-between text-xs">
                {/* Left: Submenú */}
                <div className="relative">
                    
                </div>

                {/* Móvil: número centrado */}
                <div className="absolute left-1/2 top-0 bottom-0 flex items-center -translate-x-1/2 sm:hidden">
                    <a href="tel:+523314344864" aria-label="Llamar +52 33 1434 4864" className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-white/90" />
                        <span className="text-white/90">+52 33 1434 4864</span>
                    </a>
                </div>

                {/* Right: Contacto + Idioma */}
                <div className="flex items-center gap-3 md:gap-4 uppercase tracking-wider">
                    <a href="tel:+523314344864" aria-label="Llamar +52 33 1434 4864" className="hidden sm:flex items-center gap-2 text-sm hover:underline">
                        <Phone className="w-4 h-4 text-white/90" />
                        <span className="hidden sm:inline text-white/90">+52 33 1434 4864</span>
                    </a>

                    {/* Idioma (oculto en móviles) */}
                    {/* <div className="hidden sm:flex items-center gap-2">
                        <button onClick={() => setLang('ES')} className={`px-2 py-0.5 rounded text-white/90 ${lang === 'ES' ? 'bg-white/10' : 'hover:bg-white/5'}`}>ES</button>
                        <button onClick={() => setLang('EN')} className={`px-2 py-0.5 rounded text-white/90 ${lang === 'EN' ? 'bg-white/10' : 'hover:bg-white/5'}`}>EN</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
