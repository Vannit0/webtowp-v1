import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log('Dropdown abierto:', !isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log('Menu móvil abierto:', !isMobileMenuOpen);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4">
      <nav className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md rounded-full border border-white/40 shadow-xl shadow-slate-200/50">
        <div className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="/logo-webtowp2.png" alt="WebToWP" className="h-12 w-auto" />
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              
              {/* Dropdown Container */}
              <div className="relative">
                <button 
                  type="button"
                  onClick={toggleDropdown}
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium flex items-center gap-1"
                >
                  Servicios
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Dropdown Menu - Solo se muestra si isOpen es true */}
                {isOpen && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-[999]"
                  >
                    <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-3 min-w-[280px]">
                      <div className="flex flex-col gap-1">
                        
                        <a 
                          href="/servicios/landing-pages" 
                          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-cyan-500/5"
                        >
                          <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                          </svg>
                          <span className="text-slate-700 font-medium">Landing Pages</span>
                        </a>
                        
                        <a 
                          href="/servicios/sitios-informativos" 
                          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-500/5"
                        >
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                          </svg>
                          <span className="text-slate-700 font-medium">Sitios Informativos</span>
                        </a>
                        
                        <a 
                          href="/servicios/optimizacion-wp" 
                          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-cyan-500/5"
                        >
                          <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                          <span className="text-slate-700 font-medium">Optimización WP</span>
                        </a>
                        
                        <a 
                          href="/servicios/migracion-headless" 
                          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-500/5"
                        >
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span className="text-slate-700 font-medium">Migración Headless</span>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="/proyectos" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                Proyectos
              </a>
              <a href="/sobre-nosotros" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                Sobre Nosotros
              </a>
              <a href="/blog" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                Blog
              </a>
              <a href="/contacto" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                Contacto
              </a>
              <a 
                href="/contacto"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Cotizar proyecto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              type="button"
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 z-[999]">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-4 mx-4">
            <div className="flex flex-col space-y-3">
              
              {/* Servicios Dropdown en Mobile */}
              <div>
                <button 
                  type="button"
                  onClick={toggleDropdown}
                  className="w-full text-left text-slate-700 font-medium py-2 flex items-center justify-between"
                >
                  Servicios
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Submenu de Servicios */}
                {isOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a 
                      href="/servicios/landing-pages" 
                      className="block text-slate-600 py-2 hover:text-slate-900"
                    >
                      Landing Pages
                    </a>
                    <a 
                      href="/servicios/sitios-informativos" 
                      className="block text-slate-600 py-2 hover:text-slate-900"
                    >
                      Sitios Informativos
                    </a>
                    <a 
                      href="/servicios/optimizacion-wp" 
                      className="block text-slate-600 py-2 hover:text-slate-900"
                    >
                      Optimización WP
                    </a>
                    <a 
                      href="/servicios/migracion-headless" 
                      className="block text-slate-600 py-2 hover:text-slate-900"
                    >
                      Migración Headless
                    </a>
                  </div>
                )}
              </div>
              
              <a href="/proyectos" className="text-slate-700 font-medium py-2">
                Proyectos
              </a>
              <a href="/sobre-nosotros" className="text-slate-700 font-medium py-2">
                Sobre Nosotros
              </a>
              <a href="/blog" className="text-slate-700 font-medium py-2">
                Blog
              </a>
              <a href="/contacto" className="text-slate-700 font-medium py-2">
                Contacto
              </a>
              <a 
                href="/contacto"
                className="w-full text-center bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold shadow-md"
              >
                Cotizar proyecto
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
