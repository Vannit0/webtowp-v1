import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué es "WordPress Headless" y por qué lo usan?',
    answer: 'Es una forma moderna de hacer páginas web. Usamos WordPress solo como un panel privado para que administres tu contenido, pero la parte pública (lo que ven tus clientes) la construimos con tecnología independiente y mucho más rápida (como Astro).'
  },
  {
    question: '¿Será difícil administrar mi nueva web?',
    answer: 'Para nada. Si ya sabes usar WordPress, no notarás la diferencia al publicar o editar textos e imágenes. Nosotros nos encargamos de que la tecnología compleja funcione de fondo sin molestarte.'
  },
  {
    question: '¿Por qué es tan importante la velocidad de carga?',
    answer: 'Los usuarios suelen abandonar las páginas que tardan en mostrar su contenido. Además, buscadores como Google priorizan en sus resultados a los sitios web que ofrecen una buena experiencia y una navegación fluida.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Preguntas Frecuentes.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre WordPress Headless
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/30 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-purple-600" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            ¿Tienes más preguntas?
          </p>
          <motion.a
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
