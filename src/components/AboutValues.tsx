import { motion } from 'framer-motion';
import { Zap, Handshake, Code, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: '⚡ Rendimiento como Base',
    description: 'La velocidad no es un servicio adicional, es el estándar mínimo. Cada línea de código que escribimos está pensada para ofrecer una experiencia fluida y sin interrupciones.',
    color: 'from-cyan-500 to-cyan-600',
    shadowColor: 'shadow-cyan-500/30'
  },
  {
    icon: Handshake,
    title: '🤝 Transparencia Técnica',
    description: 'Hablamos claro. No escondemos soluciones mediocres detrás de jerga técnica incomprensible ni te atamos a contratos de mantenimiento abusivos. Tu código es tuyo.',
    color: 'from-purple-500 to-purple-600',
    shadowColor: 'shadow-purple-500/30'
  },
  {
    icon: Code,
    title: '🛠️ Soluciones, No Plantillas',
    description: 'Tu negocio es único y tu web también debería serlo. Desarrollamos a medida para garantizar que tu sitio escale contigo, eliminando el "código basura" que frena tu crecimiento.',
    color: 'from-violet-500 to-violet-600',
    shadowColor: 'shadow-violet-500/30'
  },
  {
    icon: ShieldCheck,
    title: '🔒 Seguridad por Diseño',
    description: 'Al separar la interfaz visual de tu base de datos, no solo logramos velocidad, sino que blindamos tu proyecto contra los ataques más comunes de la web.',
    color: 'from-emerald-500 to-emerald-600',
    shadowColor: 'shadow-emerald-500/30'
  }
];

export default function AboutValues() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => {
        const Icon = value.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative"
          >
            <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-cyan-500/5 group-hover:to-purple-500/5 rounded-2xl pointer-events-none transition-all duration-500"
              />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg ${value.shadowColor}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                  {value.title}
                </h3>
                
                <p className="text-slate-800/90 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
