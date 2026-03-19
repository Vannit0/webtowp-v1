import { motion } from 'framer-motion';

export default function OptimizacionProblem() {
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
            Google penaliza los sitios lentos. Tus clientes también.
          </h2>

          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/80 shadow-xl">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Si tu web actual tarda más de 3 segundos en mostrar su contenido, no solo estás frustrando a tus visitantes, 
              sino que Google te está empujando hacia abajo en los resultados de búsqueda. A menudo, el problema no es el 
              diseño visual, sino un código sobrecargado, imágenes sin comprimir y configuraciones deficientes que están 
              ahogando tu servidor.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
