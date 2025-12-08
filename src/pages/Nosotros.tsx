import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Award, TrendingUp, Users, Shield } from 'lucide-react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import PresenceMap from '../components/PresenceMap';

export default function Nosotros(): JSX.Element {
    useEffect(() => {
        document.title = 'Nosotros - VÍREMO';
        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute('content', 'Conoce a VÍREMO: líder en logística portuaria y transporte especializado. Misión, visión, valores y presencia nacional.');
        } else {
            const m = document.createElement('meta');
            m.name = 'description';
            m.content = 'Conoce a VÍREMO: líder en logística portuaria y transporte especializado. Misión, visión, valores y presencia nacional.';
            document.head.appendChild(m);
        }
    }, []);

    const valores = [
        {
            title: 'INTEGRIDAD',
            description: 'La integridad guía todas nuestras decisiones y acciones. Trabajamos con honestidad, ética y respeto, cumpliendo nuestras promesas y manteniendo la coherencia entre lo que decimos y lo que hacemos.',
            icon: Shield,
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'CONFIANZA',
            description: 'Nuestra mayor garantía; la confianza puesta qué es la base de cada relación con nuestros clientes y aliados. Actuamos con integridad, responsabilidad y transparencia para generar la seguridad de que cada proyecto será gestionado con el máximo compromiso y profesionalismo.',
            icon: Award,
            color: 'from-pink-500 to-purple-500'
        },
        {
            title: 'EXCELENCIA',
            description: 'Superamos expectativas. En nuestra empresa, la excelencia guía cada acción y decisión. Nos comprometemos a entregar servicios de la más alta calidad, cuidando cada detalle y aplicando las mejores prácticas para garantizar resultados excepcionales.',
            icon: TrendingUp,
            color: 'from-purple-600 to-pink-400'
        },
        {
            title: 'ORGULLO',
            description: 'Pasión por lo que hacemos, sentimos orgullo de cada proyecto que realizamos, porque refleja nuestro esfuerzo, conocimiento y profesionalismo. Valoramos nuestro trabajo y el impacto positivo que generamos para nuestros clientes, impulsando siempre la excelencia y la mejora continua.',
            icon: Heart,
            color: 'from-pink-600 to-purple-400'
        },
        {
            title: 'ACTITUD',
            description: 'Nuestra mejor herramienta. Adoptamos una actitud positiva, proactiva y orientada a resultados en cada desafío logístico. Creemos que la forma en que enfrentamos las dificultades define nuestro éxito, impulsando la colaboración, la mejora continua y la confianza de nuestros clientes.',
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
                <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1D1D1B] via-[#2D2D2B] to-[#1D1D1B]">
                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-[120px] animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-[120px] animate-pulse delay-700"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400 rounded-full filter blur-[150px] animate-pulse delay-1000"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl shadow-purple-500/50 mb-6">
                                <span className="text-6xl font-black text-white">V</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white"
                        >
                            Conoce a <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">VÍREMO</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                        >
                            Somos una empresa con visión estratégica, compromiso firme y un alto nivel de profesionalismo
                        </motion.p>
                    </div>
                </section>

                {/* Descripción Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                ¿Quiénes Somos?
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                    <Lightbulb className="text-white" size={32} />
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Somos una empresa con <span className="font-bold text-purple-600">visión estratégica</span>, compromiso firme y un alto nivel de profesionalismo, brindamos soluciones integrales de logística portuaria y transporte terrestre especializado, con un enfoque centrado a la excelencia operativa y servicio personalizado.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl border border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                    <TrendingUp className="text-white" size={32} />
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Nuestra experiencia, sumada al compromiso de la <span className="font-bold text-pink-600">mejora continua</span>, nos posiciona como un aliado confiable para operaciones críticas y de alta responsabilidad operativa.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                    <Users className="text-white" size={32} />
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Cada operación es respaldada por una <span className="font-bold text-purple-600">red sólida de aliados estratégicos</span> que extienden nuestra capacidad, fortaleciendo la cadena de suministros.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Misión y Visión Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12">

                            {/* Misión */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-20 blur-xl"></div>
                                <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-purple-100">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                                            <Target className="text-white" size={32} />
                                        </div>
                                        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                            Nuestra Misión
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed italic">
                                        "Brindar Soluciones de Logística Portuaria y Transporte Terrestre Especializado, garantizando <span className="font-bold text-purple-600">excelencia operativa</span> y cumplimiento normativo que genere valor para nuestros clientes, a través de un servicio seguro y eficiente".
                                    </p>
                                </div>
                            </motion.div>

                            {/* Visión */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl opacity-20 blur-xl"></div>
                                <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-pink-100">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                                            <Eye className="text-white" size={32} />
                                        </div>
                                        <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                            Nuestra Visión
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed italic">
                                        "Consolidarnos en el mercado nacional como una empresa <span className="font-bold text-pink-600">líder en Servicios de Logística Integral</span> y Transporte Especializado, respaldada por una estructura organizacional sólida, y un firme compromiso con el crecimiento, la confianza y el bienestar de quienes forman parte de nuestra cadena de valor".
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* Filosofía Section */}
                <section className="py-20 bg-gradient-to-br from-[#1D1D1B] to-[#2D2D2B] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] animate-pulse"></div>
                        <div className="absolute bottom-10 left-20 w-96 h-96 bg-pink-500 rounded-full filter blur-[100px] animate-pulse delay-500"></div>
                    </div>

                    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex justify-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
                                    <Heart className="text-white" size={40} />
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                                Nuestra <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Filosofía</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
                                "En Víremo <span className="text-purple-400 font-bold">no movemos carga</span>, creamos soluciones seguras para desafíos reales. Nuestro compromiso es ser el lazo que une tus necesidades con soluciones logísticas y de transporte especializadas, garantizando la <span className="text-pink-400 font-bold">tranquilidad en cada envío</span>."
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
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Nuestros Valores
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                                        <valor.icon className="text-purple-600 mb-4" size={40} />
                                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                            {valor.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {valor.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mapa de Presencia Section */}
                <section className="py-20 bg-gradient-to-br from-[#1D1D1B] via-[#2D2D2B] to-[#1D1D1B] relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Nuestra <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Presencia</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Contamos con operaciones en los principales puertos comerciales de México
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative max-w-5xl mx-auto"
                        >
                            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
                                <PresenceMap puertos={puertos} />

                                {/* Lista de puertos debajo del mapa (badges)
                                <div className="mt-6 flex flex-wrap justify-center gap-4">
                                    {puertos.map((puerto, index) => (
                                        <motion.div
                                            key={puerto.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
                                            className={`px-4 py-2 rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-500 to-pink-500' : 'from-pink-500 to-purple-500'} text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                <span>{puerto.name}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div> */}
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
