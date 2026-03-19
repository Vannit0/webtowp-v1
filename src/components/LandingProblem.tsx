import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function LandingProblem() {
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
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
          
          <div className="pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-50">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Estás pagando por clics que se escapan antes de leer tu oferta.
              </h2>
            </div>
            
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-8 shadow-lg">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Cuando inviertes en publicidad, cada segundo de carga cuenta. Las páginas creadas con constructores pesados (como Elementor) o plataformas de terceros suelen ser lentas en dispositivos móviles. Si tu usuario hace clic en el anuncio y la pantalla se queda en blanco por 3 segundos, lo has perdido.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
