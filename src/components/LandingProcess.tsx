import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Estrategia y Estructura',
    description: 'Analizamos tu oferta y definimos los textos y llamados a la acción (CTAs) para guiar al usuario.',
    number: '01'
  },
  {
    icon: Palette,
    title: 'Diseño Visual (UI)',
    description: 'Creamos una interfaz premium, limpia y enfocada en eliminar cualquier distracción que aleje al usuario del objetivo.',
    number: '02'
  },
  {
    icon: Code2,
    title: 'Desarrollo Headless',
    description: 'Programamos la página con tecnología moderna para asegurar un rendimiento impecable en pruebas técnicas.',
    number: '03'
  },
  {
    icon: Rocket,
    title: 'Conexión y Lanzamiento',
    description: 'Probamos que los correos y bases de datos reciban la información correctamente antes de que enciendas tus anuncios.',
    number: '04'
  }
];

export default function LandingProcess() {
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
            Cómo construimos tu máquina de captación.
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
                  <div className="p-3 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-lg">
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
