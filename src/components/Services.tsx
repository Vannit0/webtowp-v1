import { motion } from 'framer-motion';
import { Rocket, Globe, Gauge, ArrowRightLeft } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Globe,
    title: 'Sitios Corporativos',
    description: 'Diseño profesional y estructurado que transmite confianza y comunica claramente el valor de tu empresa.',
    features: ['Diseño profesional', 'Estructura clara', 'Fácil navegación'],
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-50',
    accentColor: 'border-purple-500'
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    description: 'Páginas enfocadas en un solo objetivo, diseñadas de forma limpia para captar leads y apoyar tus campañas.',
    features: ['Objetivo claro', 'Diseño limpio', 'Captación de leads'],
    iconColor: 'text-cyan-500',
    iconBg: 'bg-cyan-50',
    accentColor: 'border-cyan-500'
  },
  {
    icon: ArrowRightLeft,
    title: 'Migración Headless WP',
    description: 'Modernizamos tu sitio actual de WordPress hacia una arquitectura más rápida y segura, sin perder tu contenido.',
    features: ['Migración segura', 'Sin pérdida de datos', 'Mejora de velocidad'],
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
    accentColor: 'border-violet-600'
  },
  {
    icon: Gauge,
    title: 'Optimización Técnica',
    description: 'Auditoría y mejora del rendimiento (Core Web Vitals) de tu web actual para que funcione de manera óptima.',
    features: ['Auditoría técnica', 'Core Web Vitals', 'Optimización continua'],
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
    accentColor: 'border-cyan-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Soluciones digitales a medida.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Desarrollos adaptados a los objetivos y necesidades reales de tu proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                iconColor={service.iconColor}
                iconBg={service.iconBg}
                accentColor={service.accentColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
