import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users } from 'lucide-react';

export default function QuienesSomosResumen() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-[#6D31E8] bg-clip-text text-transparent">
                            Quiénes Somos
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Líderes en logística portuaria y transporte especializado con presencia nacional
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Misión */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
                    >
                        <div className="w-16 h-16 bg-[#6D31E8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Target size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Nuestra Misión</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Brindar soluciones logísticas integrales con excelencia operativa,
                            garantizando seguridad, eficiencia y satisfacción total de nuestros clientes.
                        </p>
                    </motion.div>

                    {/* Visión */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
                    >
                        <div className="w-16 h-16 bg-[#F4005E] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Eye size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Nuestra Visión</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ser la empresa líder en logística portuaria y transporte especializado,
                            reconocida por nuestra innovación y compromiso con la excelencia.
                        </p>
                    </motion.div>

                    {/* Valores */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
                    >
                        <div className="w-16 h-16 bg-[#1D1D1B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Users size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Nuestros Valores</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Integridad, Confianza, Excelencia, Orgullo y Actitud.
                            Principios que guían cada una de nuestras acciones y decisiones.
                        </p>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        to="/quienes-somos"
                        className="inline-flex items-center gap-3 bg-[#7147ee] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all group/btn font-semibold text-lg"
                    >
                        <span>Conocer más sobre nosotros</span>
                        <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={24} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
