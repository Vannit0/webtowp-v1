import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavbarIsland() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.7, 0.85]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#blog', label: 'Blog' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ scale: navbarScale }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
      >
        <motion.div
          style={{ backgroundColor: `rgba(255, 255, 255, ${navbarOpacity})` }}
          className="rounded-full backdrop-blur-md border border-white/40 shadow-lg shadow-black/5 px-6 py-3"
        >
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <img src="/logo-webtowp2.png" alt="WebToWP" className="h-10 w-auto" />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="hidden lg:block">
              <motion.button
                className="px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 shadow-md transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cotizar proyecto
              </motion.button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="text-lg font-medium text-slate-700 hover:text-slate-900 py-3 px-4 rounded-2xl hover:bg-white/60 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 px-6 py-3 text-base font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Cotizar proyecto
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
