import { motion } from 'framer-motion';
import { Zap, Target, Award } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Velocidad Extrema',
    description: 'Obsesionados con el rendimiento. Cada milisegundo cuenta. Nuestros sitios cargan en menos de 0.5 segundos.',
    color: 'from-cyan-500 to-cyan-600',
    shadowColor: 'shadow-cyan-500/30'
  },
  {
    icon: Target,
    title: 'Precisión Técnica',
    description: 'Código limpio, arquitectura escalable y mejores prácticas. No hay atajos en la calidad.',
    color: 'from-purple-500 to-purple-600',
    shadowColor: 'shadow-purple-500/30'
  },
  {
    icon: Award,
    title: 'Excelencia Premium',
    description: 'Cada proyecto es una obra maestra. Diseño impecable, UX excepcional y resultados medibles.',
    color: 'from-violet-500 to-violet-600',
    shadowColor: 'shadow-violet-500/30'
  }
];

export default function AboutValues() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
