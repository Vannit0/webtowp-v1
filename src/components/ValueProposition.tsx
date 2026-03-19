import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Velocidad Extrema',
    description: 'Astro genera HTML estático que carga instantáneamente. Tu sitio será hasta 10x más rápido que con WordPress tradicional.',
    stat: '100/100',
    statLabel: 'PageSpeed'
  },
  {
    icon: Shield,
    title: 'Seguridad Reforzada',
    description: 'Al separar el frontend del backend, eliminamos la mayoría de vectores de ataque. Tu sitio estará protegido por diseño.',
    stat: '99.9%',
    statLabel: 'Uptime'
  },
  {
    icon: TrendingUp,
    title: 'SEO Superior',
    description: 'Contenido pre-renderizado, tiempos de carga mínimos y Core Web Vitals perfectos. Google amará tu sitio.',
    stat: '#1',
    statLabel: 'Rankings'
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ¿Por qué WordPress Headless?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Combina la mejor experiencia de gestión de contenido con el rendimiento
            y la seguridad que tu negocio merece
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl shadow-slate-200/50 p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/30 w-full">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent mb-1">
                      {value.stat}
                    </div>
                    <div className="text-sm text-slate-500">
                      {value.statLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-violet-600/10"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-4">
              El futuro del desarrollo web ya está aquí
            </h3>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              No te quedes atrás con tecnología obsoleta. Migra a WordPress Headless
              y ofrece a tus usuarios la experiencia que esperan.
            </p>
            <motion.button 
              className="relative px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500"></div>
              <span className="relative z-10">Solicitar consultoría gratuita</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
