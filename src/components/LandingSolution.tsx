import { motion } from 'framer-motion';
import { Zap, Link2, Wallet } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: '⚡ Velocidad que Retiene',
    description: 'Desarrolladas con código puro (Astro) para que carguen al instante. Si tu página es rápida, el costo por adquisición (CPA) de tus campañas baja.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Link2,
    title: '🔗 Integración Perfecta',
    description: 'Conectamos tus formularios directamente con las herramientas que ya usas: Mailchimp, ActiveCampaign, HubSpot o Google Sheets. Sin pasos intermedios que fallen.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Wallet,
    title: '💎 Cero Cuotas Mensuales',
    description: 'Olvídate de pagar suscripciones de por vida a constructores de Landing Pages externos. El código y el diseño son 100% de tu propiedad.',
    color: 'from-violet-500 to-cyan-500'
  }
];

export default function LandingSolution() {
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
            El entorno perfecto para tu oferta.
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
