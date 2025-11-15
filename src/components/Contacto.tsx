import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
        >
          Contáctanos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Estamos listos para hacer realidad tu proyecto logístico
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#6D31E8] transition"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#6D31E8] transition"
                required
              />
              <textarea
                placeholder="Mensaje"
                rows={6}
                className="w-full bg-white border border-gray-300 rounded-lg px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#6D31E8] transition resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6D31E8] to-[#5a28c4] hover:from-[#5a28c4] hover:to-[#4a1fa0] text-white font-semibold py-4 rounded-lg transition shadow-lg hover:shadow-xl"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#6D31E8] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-gray-900">Teléfono</h3>
                <p className="text-gray-600">+52 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#F4005E] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-gray-900">Email</h3>
                <p className="text-gray-600">contacto@viremo.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-gray-900">Ubicación</h3>
                <p className="text-gray-600">Puerto Principal, Manzanillo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
