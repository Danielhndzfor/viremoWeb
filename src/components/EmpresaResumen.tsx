import { useEffect, useState } from 'react';

export default function EmpresaResumen(): JSX.Element {
    return (
        <section id="empresa" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <img src="/logo.png" alt="VÍREMO" className="h-10 sm:h-12 md:h-14 mb-3 sm:mb-4" />
                            <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold" style={{ color: '#6D31E8' }}>
                                Soluciones integrales en logística y transporte
                            </p>
                            <div className="mt-4 w-24 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #6D31E8, #F4005E)' }}></div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3 sm:space-y-4">
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#1D1D1B' }}>
                                Somos una empresa dedicada a la <span className="font-semibold" style={{ color: 'black' }}>logística portuaria</span> y al <span className="font-semibold" style={{ color: 'black' }}>transporte especializado</span>, enfocada en eficiencia operativa, seguridad y atención personalizada.
                            </p>
                            <p className="text-[#1D1D1B] text-sm sm:text-base md:text-lg leading-relaxed">
                                Coordinamos flujos, gestionamos carga especializada y damos soporte integral a operaciones nacionales e internacionales con la más alta calidad y profesionalismo.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid sm:grid-cols-2 gap-3 mt-8">
                            <div className="group bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1" style={{ borderColor: 'rgba(109, 49, 232, 0.2)' }}>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #6D31E8, #F4005E)' }}>
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm">Gestión Portuaria</h3>
                                <p className="text-xs text-gray-900 leading-tight">Especialistas en operaciones portuarias</p>
                            </div>

                            <div className="group bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1" style={{ borderColor: 'rgba(244, 0, 94, 0.2)' }}>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #F4005E, #6D31E8)' }}>
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm">Transporte Terrestre</h3>
                                <p className="text-xs text-gray-900 leading-tight">Equipos especializados para carga</p>
                            </div>

                            <div className="group bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1" style={{ borderColor: 'rgba(109, 49, 232, 0.2)' }}>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#6D31E8' }}>
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm">Seguridad Total</h3>
                                <p className="text-xs text-gray-900 leading-tight">Cumplimiento normativo y certificaciones</p>
                            </div>

                            <div className="group bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1" style={{ borderColor: 'rgba(244, 0, 94, 0.2)' }}>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#F4005E' }}>
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm">Disponibilidad 24/7</h3>
                                <p className="text-xs text-gray-900 leading-tight">Atención personalizada</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Carousel */}
                    <div className="relative">
                        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                            {/** Usa las imágenes publicadas en /public/images: hero1..hero5 **/}
                            {(() => {
                                const images = [
                                    '/images/hero1.png',
                                    '/images/hero2.png',
                                    '/images/hero3.png',
                                    '/images/hero4.png',
                                    '/images/hero5.png'
                                ];
                                const [index, setIndex] = useState(0);

                                useEffect(() => {
                                    const id = setInterval(() => setIndex(i => (i + 1) % images.length), 4000);
                                    return () => clearInterval(id);
                                }, []);

                                return (
                                    <>
                                        {images.map((src, i) => (
                                            <img
                                                key={src}
                                                src={src}
                                                alt={`VÍREMO - imagen ${i + 1}`}
                                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                                            />
                                        ))}
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
