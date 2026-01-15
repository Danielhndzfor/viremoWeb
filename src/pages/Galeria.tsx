import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

interface GalleryImage {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
}

export default function Galeria(): JSX.Element {
    useEffect(() => {
        document.title = 'Galería - VÍREMO';
        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute('content', 'Explora nuestra galería de proyectos logísticos: fletes terrestres, maniobras portuarias, movimiento de maquinaria y almacenaje. Conoce nuestro trabajo en acción.');
        } else {
            const m = document.createElement('meta');
            m.name = 'description';
            m.content = 'Explora nuestra galería de proyectos logísticos: fletes terrestres, maniobras portuarias, movimiento de maquinaria y almacenaje. Conoce nuestro trabajo en acción.';
            document.head.appendChild(m);
        }
        window.scrollTo(0, 0);
    }, []);

    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

    const categories = ['Todos', 'Fletes Terrestres', 'Maniobras', 'Maquinaria', 'Almacenaje'];

    // Galería de imágenes - Imágenes reales de VÍREMO
    const galleryImages: GalleryImage[] = [
        {
            id: 1,
            src: '/src/assets/images/1.jpg',
            title: 'Instalaciones Logísticas Integrales',
            description: 'Operaciones profesionales de carga y descarga en nuestras instalaciones especializadas',
            category: 'Maniobras'
        },
        {
            id: 2,
            src: '/src/assets/images/4.JPG',
            title: 'Transporte Terrestre de Carga Pesada',
            description: 'Traslado seguro de mercancías en unidades de última generación',
            category: 'Fletes Terrestres'
        },
        {
            id: 3,
            src: '/src/assets/images/5.JPG',
            title: 'Maniobras Portuarias Especializadas',
            description: 'Operaciones profesionales de carga y descarga en zonas portuarias',
            category: 'Maniobras'
        },
        {
            id: 4,
            src: '/src/assets/images/6.jpg',
            title: 'Logística de Transporte Nacional',
            description: 'Servicios de flete terrestre con cobertura en todo México',
            category: 'Fletes Terrestres'
        },
        {
            id: 5,
            src: '/src/assets/images/7.jpg',
            title: 'Equipo Pesado de Última Tecnología',
            description: 'Maquinaria especializada para movimientos de carga de gran tonelaje',
            category: 'Maquinaria'
        },
        {
            id: 6,
            src: '/src/assets/images/8.jpg',
            title: 'Bodegas de Almacenamiento Seguro',
            description: 'Instalaciones modernas con sistemas de seguridad y control de inventario',
            category: 'Almacenaje'
        },
        {
            id: 7,
            src: '/src/assets/images/9.jpg',
            title: 'Transporte de Contenedores Marítimos',
            description: 'Traslado eficiente de contenedores desde puertos a destino final',
            category: 'Fletes Terrestres'
        },
        {
            id: 8,
            src: '/src/assets/images/10.jpg',
            title: 'Consolidación y Desconsolidación de Carga',
            description: 'Servicios especializados de preparación de mercancías para embarque',
            category: 'Maniobras'
        },
        {
            id: 9,
            src: '/src/assets/images/11.jpg',
            title: 'Montacargas y Equipo de Carga',
            description: 'Flota moderna de equipos para manejo eficiente de materiales',
            category: 'Maquinaria'
        },
        {
            id: 10,
            src: '/src/assets/images/12.jpg',
            title: 'Almacén de Contenedores y Mercancía',
            description: 'Espacios amplios para resguardo temporal y permanente de carga',
            category: 'Almacenaje'
        },
        {
            id: 11,
            src: '/src/assets/images/13.jpg',
            title: 'Unidades de Carga de Alto Rendimiento',
            description: 'Flotilla de tractocamiones equipados para todo tipo de terreno',
            category: 'Fletes Terrestres'
        },
        {
            id: 12,
            src: '/src/assets/images/14.jpg',
            title: 'Operaciones de Carga y Descarga',
            description: 'Personal capacitado en maniobras seguras y eficientes de mercancías',
            category: 'Maniobras'
        },
        {
            id: 13,
            src: '/src/assets/images/15.jpg',
            title: 'Grúas Industriales de Gran Capacidad',
            description: 'Equipamiento pesado para movimiento de cargas extraordinarias y voluminosas',
            category: 'Maquinaria'
        },
        {
            id: 14,
            src: '/src/assets/images/16.jpg',
            title: 'Centro de Distribución y Almacenaje',
            description: 'Infraestructura logística con control de temperatura y seguridad avanzada',
            category: 'Almacenaje'
        },
        {
            id: 15,
            src: '/src/assets/images/17.jpg',
            title: 'Servicios de Transporte Foráneo',
            description: 'Rutas nacionales con seguimiento GPS y monitoreo en tiempo real',
            category: 'Fletes Terrestres'
        },
        {
            id: 16,
            src: '/src/assets/images/18.jpg',
            title: 'Operaciones en Terminal Portuaria',
            description: 'Coordinación experta de movimientos de carga en puertos nacionales',
            category: 'Maniobras'
        },
        {
            id: 17,
            src: '/src/assets/images/19.jpg',
            title: 'Equipos de Elevación y Transporte',
            description: 'Maquinaria certificada para operaciones de carga pesada y especial',
            category: 'Maquinaria'
        },
        {
            id: 18,
            src: '/src/assets/images/20.jpg',
            title: 'Patios de Almacenamiento de Contenedores',
            description: 'Áreas amplias y seguras para resguardo de contenedores vacíos y cargados',
            category: 'Almacenaje'
        },
        {
            id: 19,
            src: '/src/assets/images/21.jpg',
            title: 'Transporte de Mercancía General',
            description: 'Soluciones de flete adaptadas a las necesidades de cada cliente',
            category: 'Fletes Terrestres'
        },
        {
            id: 20,
            src: '/src/assets/images/22.jpg',
            title: 'Trincado y Aseguramiento de Carga',
            description: 'Técnicas profesionales para garantizar la integridad de la mercancía',
            category: 'Maniobras'
        },
        {
            id: 21,
            src: '/src/assets/images/23.jpg',
            title: 'Operadores Certificados de Maquinaria',
            description: 'Equipo humano especializado en manejo de maquinaria pesada logística',
            category: 'Maquinaria'
        },
        {
            id: 22,
            src: '/src/assets/images/27.JPG',
            title: 'Flotilla de Transporte de Carga',
            description: 'Unidades modernas con mantenimiento preventivo y rastreo satelital constante',
            category: 'Fletes Terrestres'
        },
        {
            id: 23,
            src: '/src/assets/images/29.JPG',
            title: 'Servicios de Cross Docking',
            description: 'Transferencia rápida de mercancías sin almacenamiento intermedio prolongado',
            category: 'Maniobras'
        },
        {
            id: 24,
            src: '/src/assets/images/32.JPG',
            title: 'Instalaciones de Almacenamiento Temporal',
            description: 'Espacios flexibles para resguardo de mercancía en tránsito internacional',
            category: 'Almacenaje'
        },
        {
            id: 25,
            src: '/src/assets/images/33.JPG',
            title: 'Parque de Maquinaria Logística',
            description: 'Equipos modernos para movimiento eficiente en operaciones diarias',
            category: 'Maquinaria'
        },
        {
            id: 26,
            src: '/src/assets/images/puerto.jpg',
            title: 'Operaciones en Puerto de Manzanillo',
            description: 'Servicios integrales de maniobras en el principal puerto del Pacífico',
            category: 'Maniobras'
        }
    ];

    const filteredImages = selectedCategory === 'Todos'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const openLightbox = (image: GalleryImage) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = () => {
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
        setSelectedImage(filteredImages[previousIndex]);
    };

    const goToNext = () => {
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
        setSelectedImage(filteredImages[nextIndex]);
    };

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
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400 rounded-full filter blur-[150px] animate-pulse delay-1000"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <img src="/inicial.png" alt="VÍREMO" className="w-32 h-32  mb-6 justify-center mx-auto" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white"
                        >
                            Nuestra <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Galería</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10"
                        >
                            Descubre nuestros proyectos logísticos en acción. Cada imagen cuenta una historia de excelencia y compromiso.
                        </motion.p>
                    </div>
                </section>

                {/* Gallery Content */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">

                        {/* Category Filter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="flex flex-wrap justify-center gap-3">
                                {categories.map((category, idx) => (
                                    <motion.button
                                        key={category}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category
                                            ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg scale-105'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {category}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Gallery Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredImages.map((image, idx) => (
                                    <motion.div
                                        key={image.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                                        className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-100"
                                        onClick={() => openLightbox(image)}
                                    >
                                        {/* Image */}
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={image.src}
                                                alt={image.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                    <ZoomIn size={32} className="text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image Info */}
                                        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                                            <div className="mb-2">
                                                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                                                    {image.category}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{image.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* No results message */}
                        {filteredImages.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <p className="text-gray-500 text-xl">No se encontraron imágenes en esta categoría</p>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-50"
                        >
                            <X size={24} className="text-white" />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-50"
                        >
                            <ChevronLeft size={24} className="text-white" />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-50"
                        >
                            <ChevronRight size={24} className="text-white" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="max-w-6xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                                {/* Image */}
                                <div className="relative aspect-video bg-gray-900">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Image Details */}
                                <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                                    <div className="mb-3">
                                        <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                                            {selectedImage.category}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedImage.title}</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">{selectedImage.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <WhatsAppWidget />
            <Footer />
        </div>
    );
}
