import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const destEmail = import.meta.env.VITE_CONTACT_TO_EMAIL || 'contacto@viremo.com';
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(destEmail)}`;

      const payload = new FormData();
      payload.append('name', formData.nombre);
      payload.append('email', formData.email);
      payload.append('message', formData.mensaje);
      payload.append('_subject', `Contacto desde la web - ${formData.nombre}`);
      payload.append('_template', 'table');

      const res = await fetch(endpoint, { method: 'POST', body: payload });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.message || 'Error en el envío');

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', mensaje: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (err) {
      console.error('Error enviando mensaje (FormSubmit):', err);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-[#6D31E8] bg-clip-text text-transparent">Contáctanos</span>
          </h2>
          <p className="text-gray-600 text-lg">Estamos listos para hacer realidad tu proyecto logístico</p>
        </motion.div>

        {/* Grid: form (left) + contact cards (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Escríbenos</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-4 mt-6 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200 h-36"
              required
            />

            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#7147ee] hover:bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold flex items-center gap-3 shadow-md disabled:opacity-60"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                ) : (
                  'Enviar mensaje'
                )}
              </button>

              <span className={`text-sm ${submitStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {submitStatus === 'success' && 'Mensaje enviado correctamente.'}
                {submitStatus === 'error' && 'Ocurrió un error. Intenta más tarde.'}
              </span>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=""
          >
            {/* Grid: apilado a una columna (siempre) */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all min-h-[88px] flex items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">Teléfono</h3>
                    <a href="tel:+529123456789" className="text-gray-600 hover:text-purple-400 transition-colors">+52 912 345 678</a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all min-h-[88px] flex items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">Email</h3>
                    <a href="mailto:contacto@viremo.com" className="text-gray-600 hover:text-purple-400 transition-colors">contacto@viremo.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all min-h-[88px] flex items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">Ubicación</h3>
                    <p className="text-gray-600">Puerto Principal, Manzanillo</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all min-h-[88px] flex items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Facebook size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">Síguenos</h3>
                    <div className="flex items-center gap-2">
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-purple-400 transition-colors">Facebook</a>
                      <span className="text-gray-300">•</span>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-purple-400 transition-colors">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mapa full-width debajo de la grid */}
        <div className="mt-8 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
          <h3 className="px-5 py-4 font-bold text-gray-900 border-b border-gray-100">Ubicación en el mapa</h3>
          <div className="w-full h-64">
            <iframe
              title="Mapa de ubicación"
              src="https://www.google.com/maps?q=19.0583,-104.3167&z=14&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
