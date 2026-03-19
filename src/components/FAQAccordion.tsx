import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Rocket, ArrowRightLeft, Gauge } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: any;
  color: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    title: 'Sitios Informativos Corporativos',
    icon: Globe,
    color: 'purple',
    faqs: [
      {
        question: '¿Usan plantillas prefabricadas para los sitios web corporativos?',
        answer: 'No. Diseñamos y desarrollamos cada sitio a medida de tu marca. Las plantillas tradicionales de WordPress suelen cargar código basura que hace lenta la web. Al hacerlo a medida con nuestra arquitectura moderna, garantizamos un diseño único y un rendimiento técnico superior.'
      },
      {
        question: '¿Podré actualizar los textos y fotos yo mismo o dependeré de ustedes?',
        answer: 'Tendrás total autonomía. Te entregamos un panel de WordPress súper intuitivo y configurado específicamente para tu web. Podrás cambiar textos, imágenes o añadir noticias tan fácil como escribir un documento de Word, sin tocar una sola línea de código.'
      }
    ]
  },
  {
    title: 'Landing Pages (Páginas de Aterrizaje)',
    icon: Rocket,
    color: 'cyan',
    faqs: [
      {
        question: '¿Pueden conectar la Landing Page con mi CRM o herramienta de Email Marketing?',
        answer: 'Sí, totalmente. Integramos tus formularios con herramientas como Mailchimp, ActiveCampaign, HubSpot o directamente a tu correo y Google Sheets. Nos aseguramos de que cada prospecto (lead) llegue exactamente a donde lo necesitas.'
      },
      {
        question: '¿Por qué hacer una Landing a medida en lugar de usar herramientas como Unbounce o Leadpages?',
        answer: 'Las herramientas de terceros son buenas para empezar, pero te atan a pagos mensuales de por vida y limitan tu control sobre el código y la velocidad. Nuestras Landing Pages son 100% tuyas, sin cuotas mensuales por la plataforma, y al estar desarrolladas en código puro (Astro), cargan instantáneamente, lo que reduce el abandono de usuarios en campañas de pago.'
      }
    ]
  },
  {
    title: 'Migración Headless WP',
    icon: ArrowRightLeft,
    color: 'violet',
    faqs: [
      {
        question: 'Si migro mi WordPress actual a "Headless", ¿perderé mi posicionamiento SEO?',
        answer: 'Todo lo contrario. Realizamos un proceso de migración técnica muy cuidadoso, manteniendo tus URLs intactas o creando las redirecciones exactas que exige Google. Al finalizar, tu sitio será drásticamente más rápido, lo que suele darle un fuerte impulso a tu SEO orgánico (Core Web Vitals).'
      },
      {
        question: '¿Qué pasa con los plugins que ya tengo instalados en mi WordPress?',
        answer: 'Al pasar a una arquitectura Headless, limpiamos tu sitio. Muchos plugins de diseño (como Elementor o Divi) o de caché ya no serán necesarios porque esa parte la manejamos con tecnología moderna externa. Evaluamos los plugins que usas para funciones específicas (formularios, SEO) y los integramos de forma segura en la nueva plataforma.'
      }
    ]
  },
  {
    title: 'Optimización Técnica (Core Web Vitals)',
    icon: Gauge,
    color: 'cyan',
    faqs: [
      {
        question: '¿Garantizan una puntuación de 100/100 en Google Lighthouse?',
        answer: 'Nuestro objetivo es llevar tu sitio a la "zona verde" (90+) para que cumpla con los estándares técnicos más altos. Sin embargo, un 100/100 absoluto a veces no es realista si tu negocio requiere cargar scripts externos pesados (como el Pixel de Meta, Google Analytics o chats de soporte). Optimizamos al máximo posible sin sacrificar las herramientas de marketing que tu negocio necesita.'
      },
      {
        question: '¿La optimización técnica es un pago único o un servicio mensual?',
        answer: 'La auditoría y ejecución de la optimización es un pago único basado en el estado actual de tu web. Una vez optimizado, el código se mantiene estable. Solo recomendamos mantenimientos si subes contenido muy pesado constantemente sin optimizar o si haces cambios estructurales frecuentes.'
      }
    ]
  }
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { icon: string; border: string; bg: string } } = {
      purple: {
        icon: 'text-purple-600',
        border: 'border-purple-200',
        bg: 'bg-purple-50'
      },
      cyan: {
        icon: 'text-cyan-600',
        border: 'border-cyan-200',
        bg: 'bg-cyan-50'
      },
      violet: {
        icon: 'text-violet-600',
        border: 'border-violet-200',
        bg: 'bg-violet-50'
      }
    };
    return colors[color] || colors.purple;
  };

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${colorClasses.bg}`}>
                    <Icon className={`w-5 h-5 ${colorClasses.icon}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems[key];

                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: faqIndex * 0.05 }}
                        className="rounded-xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, faqIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/40 transition-colors duration-200"
                        >
                          <h4 className="text-base md:text-lg font-semibold text-slate-800 pr-8">
                            {faq.question}
                          </h4>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className={`w-5 h-5 ${colorClasses.icon}`} />
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
                                <p className="text-slate-700 leading-relaxed">
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
              </motion.div>
            );
          })}
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
