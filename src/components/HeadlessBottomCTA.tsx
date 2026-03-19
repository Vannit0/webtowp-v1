import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

export default function HeadlessBottomCTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para modernizar la base tecnológica de tu negocio?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto">
            Cuéntanos sobre tu sitio web actual y te daremos un diagnóstico honesto sobre cómo una arquitectura Headless puede mejorar tu rendimiento y seguridad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/1234567890"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </motion.a>

            <motion.a
              href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-xl border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              Ir al Formulario
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
