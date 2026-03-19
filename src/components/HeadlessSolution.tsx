import { motion } from 'framer-motion';
import { Zap, Shield, LayoutDashboard } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Rendimiento Extremo',
    description: 'Al separar el diseño de la base de datos y reconstruirlo con código puro (Astro), los tiempos de carga pasan de segundos a milisegundos.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Seguridad Inquebrantable',
    description: 'Tu base de datos y tu panel de administración quedan ocultos y separados de la web pública, reduciendo drásticamente el riesgo de hackeos.',
    gradient: 'from-purple-600 to-violet-500'
  },
  {
    icon: LayoutDashboard,
    title: 'Cero Curva de Aprendizaje',
    description: 'Tu equipo de marketing no notará la diferencia. Seguirán entrando al mismo panel de WordPress de siempre para publicar artículos o editar textos.',
    gradient: 'from-violet-500 to-cyan-500'
  }
];

export default function HeadlessSolution() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Lo mejor de ambos mundos: Familiaridad y Velocidad.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
