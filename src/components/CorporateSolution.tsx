import { motion } from 'framer-motion';
import { Layout, ShieldCheck, Edit3 } from 'lucide-react';

const benefits = [
  {
    icon: Layout,
    title: '⚡ Diseño a Medida',
    description: 'Creamos interfaces únicas, limpias y estructuradas para guiar al usuario. Sin código basura, solo lo que tu marca necesita para destacar y generar confianza instantánea.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: ShieldCheck,
    title: '🛡️ Seguridad Blindada',
    description: 'Al separar la base de datos (WordPress) del diseño visual (Astro), tu sitio corporativo se vuelve prácticamente invulnerable a los ataques informáticos más comunes.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Edit3,
    title: '✍️ Gestión Independiente',
    description: 'Te entregamos un panel de administración amigable. Podrás publicar noticias, cambiar fotos o actualizar servicios en minutos, sin depender de nosotros ni tocar código.',
    color: 'from-violet-500 to-purple-500'
  }
];

export default function CorporateSolution() {
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
            El estándar técnico que las grandes marcas exigen.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-700 leading-relaxed">
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
