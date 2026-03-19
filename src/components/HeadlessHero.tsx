import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HeadlessHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg text-sm font-semibold text-slate-700">
            🔄 Evolución Técnica para WordPress
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent leading-tight"
        >
          Transforma tu WordPress Lento en una Plataforma de Alto Rendimiento.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Mantén la facilidad de publicar en WordPress, pero elimina sus problemas de velocidad y seguridad. 
          Migramos tu sitio actual a una arquitectura "Headless" moderna para que ofrezca una experiencia de navegación instantánea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/contacto"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Evaluar mi sitio web
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://wa.me/1234567890"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/60 backdrop-blur-xl border border-white/80 text-slate-700 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            Consultar por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
