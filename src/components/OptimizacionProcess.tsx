import { motion } from 'framer-motion';
import { Search, FileText, TestTube, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Auditoría Profunda',
    description: 'Analizamos a fondo tu código, base de datos, plugins y servidor para identificar exactamente qué está frenando tu carga.',
    gradient: 'from-purple-600 to-violet-500',
    bgGradient: 'from-purple-600/10 to-violet-500/10',
    borderColor: 'border-purple-600'
  },
  {
    number: 2,
    icon: FileText,
    title: 'Plan de Acción',
    description: 'Te entregamos un diagnóstico claro con las mejoras necesarias y el impacto esperado, sin llenarte de jerga técnica incomprensible.',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-500'
  },
  {
    number: 3,
    icon: TestTube,
    title: 'Ejecución Segura',
    description: 'Implementamos las optimizaciones en un entorno de pruebas cerrado (Staging) para garantizar que nada se rompa en tu sitio en vivo.',
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-500/10 to-purple-600/10',
    borderColor: 'border-violet-500'
  },
  {
    number: 4,
    icon: CheckCircle,
    title: 'Validación de Resultados',
    description: 'Publicamos las mejoras y medimos el "antes y el después" con herramientas oficiales como Google Lighthouse para demostrarte el progreso.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500'
  }
];

export default function OptimizacionProcess() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Cómo transformamos el rendimiento de tu web.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${step.bgGradient} rounded-2xl p-8 border-l-4 ${step.borderColor}`}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-slate-700" />
                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
