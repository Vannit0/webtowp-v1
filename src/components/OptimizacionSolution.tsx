import { motion } from 'framer-motion';
import { Gauge, UserCheck, Cpu } from 'lucide-react';

const benefits = [
  {
    icon: Gauge,
    title: 'Mejora SEO Comprobada',
    description: 'Ajustamos tu sitio para que supere las métricas clave de Google (Core Web Vitals como LCP, FID y CLS), dándole un fuerte impulso a tu visibilidad orgánica.',
    gradient: 'from-purple-600 to-violet-500',
    emoji: '📈'
  },
  {
    icon: UserCheck,
    title: 'Retención de Usuarios',
    description: 'Una navegación fluida, donde las páginas responden al instante, reduce drásticamente la tasa de rebote y aumenta las posibilidades de que el usuario te contacte.',
    gradient: 'from-cyan-500 to-blue-500',
    emoji: '⚡'
  },
  {
    icon: Cpu,
    title: 'Eficiencia sin Cambiar tu Diseño',
    description: 'Eliminamos los cuellos de botella técnicos, optimizamos la carga de recursos y configuramos cachés avanzados sin alterar la apariencia de tu sitio actual.',
    gradient: 'from-violet-500 to-cyan-500',
    emoji: '🛠️'
  }
];

export default function OptimizacionSolution() {
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
            Rendimiento técnico que impacta directamente en tus ventas.
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
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{benefit.emoji}</span>
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
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
