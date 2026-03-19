import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-lg shadow-slate-200/50 text-slate-700 text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4 text-blue-500" />
              <span>La velocidad de Astro + la potencia de WordPress</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Sitios web que cargan
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
                en milisegundos
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl"
            >
              Desarrollamos experiencias web premium con WordPress Headless y Astro.
              Rendimiento excepcional, SEO optimizado y gestión de contenido sin límites.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
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
                  Comenzar proyecto
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 text-lg font-semibold text-slate-900 rounded-xl bg-white/40 backdrop-blur-xl border-2 border-cyan-400/50 shadow-lg hover:bg-white/60 hover:border-cyan-500/70 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver casos de éxito
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-lg w-full">
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl"></div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <img
                  src="/hero-image.webp"
                  alt="WebToWP Hero"
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                  loading="eager"
                />
                
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-gradient-to-b from-white/40 to-transparent blur-xl rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
