import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Garantizan una puntuación de 100/100 en Google Lighthouse?',
    answer: 'Nuestro objetivo es llevar tu sitio a la "zona verde" (90+) para que cumpla con los estándares más altos. Sin embargo, un 100/100 absoluto a veces no es realista si tu negocio requiere cargar scripts externos pesados (como el Pixel de Meta, Google Analytics o chats de soporte). Optimizamos al máximo posible sin sacrificar las herramientas que tu marketing necesita.'
  },
  {
    question: '¿La optimización técnica es un pago único o un servicio mensual?',
    answer: 'La auditoría y ejecución principal es un pago único basado en el estado de tu web. Una vez optimizado, el código se mantiene estable. Solo recomendamos revisiones de mantenimiento si tu equipo sube contenido muy pesado constantemente sin optimizar o si cambian la estructura del sitio.'
  }
];

export default function OptimizacionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Dudas comunes sobre la optimización técnica.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/40 transition-colors duration-200"
                >
                  <h4 className="text-lg md:text-xl font-semibold text-slate-800 pr-8">
                    {faq.question}
                  </h4>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-purple-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-slate-700 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
