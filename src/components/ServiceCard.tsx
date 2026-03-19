import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  iconColor: string;
  iconBg: string;
  accentColor: string;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  iconColor, 
  iconBg, 
}: ServiceCardProps) {
  const borderColorMap: { [key: string]: string } = {
    'border-cyan-500': '#06b6d4',
    'border-purple-500': '#a855f7',
    'border-cyan-600': '#0891b2',
    'border-violet-600': '#7c3aed',
  };

  return (
    <motion.div
      className="h-full rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl shadow-slate-200/50 p-6 relative overflow-hidden"
      whileHover={{ 
        scale: 1.02,
        borderColor: borderColorMap['border-cyan-500'],
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <motion.div 
          className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className={`w-7 h-7 ${iconColor}`} />
        </motion.div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        
        <p className="text-slate-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-center text-sm text-slate-600"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mr-3"></span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
