import { motion } from 'framer-motion';

export default function HeadlessProblem() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Te encanta WordPress, pero tu tecnología actual te frena.
          </h2>

          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/80 shadow-xl">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              WordPress es el mejor gestor de contenido del mundo, pero cuando le sumas un tema pesado y decenas de plugins, 
              tu sitio se vuelve lento y vulnerable. Esta lentitud espanta a tus visitantes móviles y hace que Google te baje 
              posiciones. Necesitas la comodidad de tu panel de siempre, pero con la velocidad de la web del futuro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
