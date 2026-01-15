import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Handshake, BookOpen, Star, Lightbulb, Award, TrendingUp, Users, Shield } from 'lucide-react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import PresenceMap from '../components/PresenceMap';
import puertoImg from '../assets/images/puerto.jpg';

export default function QuienesSomos(): JSX.Element {
    useEffect(() => {
        document.title = 'Quiénes Somos - VÍREMO';
        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute('content', 'Conoce a VÍREMO: líder en logística portuaria y transporte especializado. Misión, visión, valores y presencia nacional.');
        } else {
            const m = document.createElement('meta');
            m.name = 'description';
            m.content = 'Conoce a VÍREMO: líder en logística portuaria y transporte especializado. Misión, visión, valores y presencia nacional.';
            document.head.appendChild(m);
        }
        window.scrollTo(0, 0);
    }, []);

    const valores = [
        {
            title: 'INTEGRIDAD',
            description: 'Guía todas nuestras decisiones y acciones. Trabajamos con ética y respeto, cumpliendo nuestras promesas y manteniendo la coherencia entre lo que decimos y lo que hacemos.',
            icon: Shield,
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'CONFIANZA',
            description: 'Es la base de cada relación con nuestros clientes y aliados comerciales. Nos esforzamos por brindar certeza y tranquilidad en cada operación, respaldando su inversión y protegiendo su carga en todo momento.',
            icon: Award,
            color: 'from-pink-500 to-purple-500'
        },
        {
            title: 'EXCELENCIA',
            description: 'Guía cada acción y decisión. Nos comprometemos a entregar servicios de la más alta calidad, cuidando cada detalle y aplicando las mejores prácticas para garantizar resultados excepcionales.',
            icon: TrendingUp,
            color: 'from-purple-600 to-pink-400'
        },
        {
            title: 'ORGULLO',
            description: 'Pasión por lo que hacemos; sentimos orgullo de cada proyecto porque refleja nuestro esfuerzo, conocimiento y profesionalismo.',
            icon: Star,
            color: 'from-pink-600 to-purple-400'
        },
        {
            title: 'ACTITUD',
            description: 'Nuestra mejor herramienta. Adoptamos una actitud positiva, proactiva y orientada a resultados en cada desafío logístico.',
            icon: Users,
            color: 'from-purple-500 to-pink-600'
        }
    ];

    // Geographical coordinates [lon, lat] (approx.) for each port
    const puertos = [
        { name: 'Manzanillo', coordinates: [-104.3333, 19.0553] as [number, number] },
        { name: 'Ensenada', coordinates: [-116.6000, 31.8667] as [number, number] },
        { name: 'Lázaro Cárdenas', coordinates: [-102.2445, 18.0000] as [number, number] },
        { name: 'Veracruz', coordinates: [-96.1429, 19.1738] as [number, number] },
        { name: 'Altamira', coordinates: [-97.8850, 22.3833] as [number, number] }
    ];

    return (
        <div className="min-h-screen bg-white antialiased">
            <Topbar />
            <Navbar />

            <main className="pt-[96px] sm:pt-[120px] md:pt-[136px]">

                {/* Hero Section */}
                <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #1D1D1B 50%, #242424 75%, #1a1a1a 100%)' }}>
                    {/* Modern Geometric Background */}
                    <div className="absolute inset-0">
                        {/* Geometric shapes */}
                        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #6D31E8 0%, transparent 70%)' }}></div>
                        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #F4005E 0%, transparent 70%)' }}></div>
                        
                        {/* Diagonal lines */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 left-0 w-full h-full" style={{
                                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(109, 49, 232, 0.3) 35px, rgba(109, 49, 232, 0.3) 36px, transparent 36px, transparent 70px, rgba(244, 0, 94, 0.3) 70px, rgba(244, 0, 94, 0.3) 71px)'
                            }}></div>
                        </div>
                        
                        {/* Top accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, transparent, #6D31E8 50%, #F4005E, transparent)' }}></div>
                    </div>
                  
                    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center justify-center mb-6">
                                <img src="/inicial.png" alt="VÍREMO" className="w-32 h-32" />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white uppercase"
                        >
                            Conoce a <span className="bg-[#6D31E8] bg-clip-text text-transparent">VÍREMO</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-justify"
                        >
                            Somos una empresa con visión estratégica, compromiso firme y un alto nivel de profesionalismo
                        </motion.p>
                    </div>
                </section>

                {/* Descripción Section */}
                <section className="w-full">
                    {/* Título - Full Width */}
                    <div className="w-full py-16 text-center" style={{ backgroundColor: '#6D31E8' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-white uppercase"
                        >
                            ¿Quiénes Somos?
                        </motion.h2>
                    </div>

                    {/* 3 Bloques simétricos */}
                    <div className="w-full grid md:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="p-12 flex flex-col items-center justify-center text-center"
                            style={{ backgroundColor: '#F4005E' }}
                        >
                            <Lightbulb className="text-white mb-6" size={48} />
                            <p className="text-white leading-relaxed text-lg text-justify">
                                Somos una empresa con <span className="font-bold">visión estratégica</span>, compromiso firme y un alto nivel de profesionalismo, brindamos soluciones integrales de logística portuaria y transporte terrestre especializado, con un enfoque centrado a la excelencia operativa y servicio personalizado.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="p-12 flex flex-col items-center justify-center text-center bg-white"
                        >
                            <TrendingUp className="mb-6" size={48} style={{ color: '#6D31E8' }} />
                            <p className="text-gray-800 leading-relaxed text-lg text-justify">
                                Nuestra experiencia, sumada al compromiso de la <span className="font-bold" style={{ color: '#6D31E8' }}>mejora continua</span>, nos posiciona como un aliado confiable para operaciones críticas y de alta responsabilidad operativa.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="p-12 flex flex-col items-center justify-center text-center"
                            style={{ backgroundColor: '#1D1D1B' }}
                        >
                            <Users className="text-white mb-6" size={48} />
                            <p className="text-white leading-relaxed text-lg text-justify">
                                Cada operación es respaldada por una <span className="font-bold">red sólida de aliados estratégicos</span> que extienden nuestra capacidad, fortaleciendo la cadena de suministros.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Misión y Visión Section */}
                <section className="w-full">
                    {/* Título - Full Width */}
                    <div className="w-full py-16 text-center" style={{ backgroundColor: '#F4005E' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-white uppercase"
                        >
                            Misión y Visión
                        </motion.h2>
                    </div>

                    {/* 2 Bloques simétricos */}
                    <div className="w-full grid md:grid-cols-2">
                        {/* Misión */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="p-16 flex flex-col items-center justify-center text-center"
                            style={{ backgroundColor: '#6D31E8' }}
                        >
                            <Target className="text-white mb-8" size={56} />
                            <h3 className="text-3xl font-bold mb-6 text-white uppercase">
                                Nuestra Misión
                            </h3>
                            <p className="text-white text-lg leading-relaxed italic text-justify">
                                "Brindar Soluciones de Logística Portuaria y Transporte Terrestre Especializado, garantizando <span className="font-bold">excelencia operativa</span> y cumplimiento normativo que genere valor para nuestros clientes, a través de un servicio seguro y eficiente".
                            </p>
                        </motion.div>

                        {/* Visión */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="p-16 flex flex-col items-center justify-center text-center bg-white"
                        >
                            <Eye className="mb-8" size={56} style={{ color: '#F4005E' }} />
                            <h3 className="text-3xl font-bold mb-6 uppercase" style={{ color: '#F4005E' }}>
                                Nuestra Visión
                            </h3>
                            <p className="text-gray-800 text-lg leading-relaxed italic text-justify">
                                "Consolidarnos en el mercado nacional como una empresa <span className="font-bold" style={{ color: '#F4005E' }}>líder en Servicios de Logística Integral</span> y Transporte Especializado, respaldada por una estructura organizacional sólida, y un firme compromiso con el crecimiento, la confianza y el bienestar de quienes forman parte de nuestra cadena de valor".
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Política de Calidad y Seguridad Section */}
                <section className="w-full">
                    {/* Título - Full Width */}
                    <div className="w-full py-16 text-center" style={{ backgroundColor: '#1D1D1B' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-white uppercase"
                        >
                            Política de Calidad y Seguridad
                        </motion.h2>
                    </div>

                    {/* Contenido Principal - Full Width */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full py-20 px-6"
                        style={{ backgroundColor: '#6D31E8' }}
                    >
                        <div className="max-w-5xl mx-auto text-center">
                            <Shield className="text-white mx-auto mb-8" size={64} />
                            <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 text-justify">
                                En VIREMO, asumimos con seriedad y responsabilidad el compromiso de ofrecer <span className="font-bold">soluciones de logísticas integrales, confiables y altamente competitivas</span> Diseñadas para responder con eficacia a las exigencias del entorno portuario. Cumpliendo de forma rigurosa con las normativas y necesidades específicas de cada servicio.
                            </p>
                        </div>
                    </motion.div>

                    {/* Grid de 3 bloques */}
                    <div className="w-full grid md:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="p-12 flex flex-col items-center justify-center text-center bg-white"
                        >
                            <TrendingUp className="mb-6" size={56} style={{ color: '#6D31E8' }} />
                            <h3 className="text-2xl font-bold mb-4 uppercase" style={{ color: '#6D31E8' }}>
                                Calidad y Mejora Continua
                            </h3>
                            <p className="text-gray-800 text-lg leading-relaxed text-justify">
                                Trabajamos con un enfoque en la calidad y la mejora continua, porque entendemos que la confianza se construye con transparencia en los procesos y resultados consistentes.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="p-12 flex flex-col items-center justify-center text-center"
                            style={{ backgroundColor: '#F4005E' }}
                        >
                            <Users className="text-white mb-6" size={56} />
                            <h3 className="text-2xl font-bold mb-4 text-white uppercase">
                                Aliados Estratégicos
                            </h3>
                            <p className="text-white text-lg leading-relaxed text-justify">
                                Cada operación es respaldada por una red sólida de aliados estratégicos que extienden nuestra capacidad, fortaleciendo la cadena de suministros.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="p-12 flex flex-col items-center justify-center text-center"
                            style={{ backgroundColor: '#1D1D1B' }}
                        >
                            <Award className="text-white mb-6" size={56} />
                            <h3 className="text-2xl font-bold mb-4 text-white uppercase">
                                Excelencia Operativa
                            </h3>
                            <p className="text-white text-lg leading-relaxed text-justify">
                                Nuestra misión es clara, superar constantemente las expectativas de nuestros clientes, nuestros colaboradores se desafían así mismo, todos los días, para alcanzar el nivel de excelencia.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bloque Final - Full Width */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="w-full py-16 px-6 text-center"
                        style={{ backgroundColor: '#6D31E8' }}
                    >
                        <div className="max-w-4xl mx-auto">
                            <Handshake className="text-white mx-auto mb-6" size={48} />
                            <p className="text-white text-2xl md:text-3xl font-bold italic text-justify">
                                Este compromiso es inquebrantable, es la fuerza que impulsa todo lo que hacemos.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Filosofía Section */}
                <section className="py-20 bg-gradient-to-br from-[#1D1D1B] to-[#2D2D2B] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px]"></div>
                        <div className="absolute bottom-10 left-20 w-96 h-96 bg-pink-500 rounded-full filter blur-[100px]"></div>
                    </div>

                    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex justify-center mb-8">
                                <div className="w-20 h-20 bg-[#F4005E] rounded-3xl flex items-center justify-center shadow-2xl">
                                    <BookOpen className="text-white" size={40} />
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                                NUESTRA <span className="bg-[#F4005E] bg-clip-text text-transparent">FILOSOFÍA</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic text-justify">
                                "En VÍREMO no movemos carga, creamos soluciones seguras para desafíos reales. Nuestro compromiso es ser el lazo que une tus necesidades con soluciones logísticas y de transporte especializadas, garantizando la tranquilidad en cada envío."
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Valores Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-[#6D31E8] bg-clip-text text-transparent">
                                NUESTROS VALORES
                            </h2>
                            <p className="text-xl text-gray-600 mx-autO">
                                Los principios que guían cada decisión y acción en VÍREMO
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {valores.map((valor, index) => (
                                <motion.div
                                    key={valor.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${valor.color} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`}></div>
                                    <div className="relative bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                        <valor.icon className="text-[#6D31E8] mb-4" size={40} />
                                        <h3 className="text-2xl font-bold mb-4 bg-[#6D31E8] bg-clip-text text-transparent">
                                            {valor.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed text-justify">
                                            {valor.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mapa de Presencia Section */}
                <section
                    className="py-20 relative overflow-hidden"
                    style={{ backgroundImage: `url(${puertoImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                NUESTRA <span className="bg-[#F4005E] bg-clip-text text-transparent">PRESENCIA</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
                                Contamos con operaciones en los principales puertos comerciales de México
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative mx-auto w-full"
                        >
                            {/* Full-bleed wrapper so the map spans the viewport width */}
                            <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 ">
                                <PresenceMap puertos={puertos} height={300} scale={700} />
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>

            <WhatsAppWidget />
            <Footer />
        </div>
    );
}
