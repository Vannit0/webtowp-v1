import { motion } from 'framer-motion';
import { Target, Palette, Code2, GraduationCap } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Estrategia y Estructura',
    description: 'Entendemos a tu cliente ideal y definimos la arquitectura de la información para que la navegación sea lógica e intuitiva.',
    number: '01'
  },
  {
    icon: Palette,
    title: 'Diseño Visual (UI)',
    description: 'Proponemos un estilo premium y corporativo que respete tu identidad de marca y transmita máxima confianza.',
    number: '02'
  },
  {
    icon: Code2,
    title: 'Desarrollo Headless',
    description: 'Programamos tu sitio con tecnología de vanguardia para garantizar una velocidad de carga que enamore a los motores de búsqueda.',
    number: '03'
  },
  {
    icon: GraduationCap,
    title: 'Capacitación y Entrega',
    description: 'Te enseñamos a usar tu panel de WordPress y lanzamos tu nueva web sin que tu negocio sufra tiempos de inactividad.',
    number: '04'
  }
];

export default function CorporateProcess() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Construimos tu nueva sede digital paso a paso.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                
                <div className="flex items-start gap-4 mt-2">
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-700 leading-relaxed">
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
