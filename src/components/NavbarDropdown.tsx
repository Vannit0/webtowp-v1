import { useState, useRef, useEffect } from 'react';

export default function NavbarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        onClick={handleClick}
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
      
      <div 
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-300 z-50 ${
          isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-3 min-w-[280px]">
          <div className="flex flex-col gap-1">
            <a 
              href="/servicios/landing-pages" 
              className="dropdown-item flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-cyan-500/5"
            >
              <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              <span className="text-slate-700 font-medium">Landing Pages</span>
            </a>
            
            <a 
              href="/servicios/sitios-informativos" 
              className="dropdown-item flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-500/5"
            >
              <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <span className="text-slate-700 font-medium">Sitios Informativos</span>
            </a>
            
            <a 
              href="/servicios/optimizacion-wp" 
              className="dropdown-item flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-cyan-500/5"
            >
              <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span className="text-slate-700 font-medium">Optimización WP</span>
            </a>
            
            <a 
              href="/servicios/migracion-headless" 
              className="dropdown-item flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-500/5"
            >
              <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="text-slate-700 font-medium">Migración Headless</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
