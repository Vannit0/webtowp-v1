import { motion } from 'framer-motion';
import { ArrowRight, Building2, MessageCircle } from 'lucide-react';

export default function CorporateHero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-lg shadow-slate-200/50 text-slate-700 text-sm font-medium mb-6"
          >
            <Building2 className="w-4 h-4 text-purple-500" />
            <span>🏢 Sitios Web Corporativos Premium</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900"
          >
            Tu Empresa Merece una Web
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              que Transmita Verdadera
            </span>
            <br />
            Autoridad.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            Diseñamos y desarrollamos sitios informativos a medida. Seguros, ultra rápidos y muy fáciles de administrar, para que tu presencia digital por fin esté a la altura de la calidad de tus servicios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/contacto"
              className="relative px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-violet-600 opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              ></motion.div>
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Agendar Consultoría
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>
            
            <motion.a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-semibold text-slate-900 rounded-xl bg-white/40 backdrop-blur-xl border-2 border-purple-400/50 shadow-lg hover:bg-white/60 hover:border-purple-500/70 transition-all inline-flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Hablemos por WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
