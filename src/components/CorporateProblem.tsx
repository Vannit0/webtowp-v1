import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function CorporateProblem() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
          
          <div className="pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-50">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Una web genérica y lenta devalúa el prestigio de tu marca.
              </h2>
            </div>
            
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-8 shadow-lg">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Si tu sitio tarda en cargar, se ve desactualizado o es igual al de tus competidores, los clientes dudarán de tu profesionalismo antes de siquiera contactarte. Las plantillas pesadas y tradicionales de WordPress no solo dañan tu imagen; te penalizan en Google y te exponen a vulnerabilidades de seguridad constantes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
