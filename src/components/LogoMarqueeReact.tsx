import { motion } from 'framer-motion';

interface Logo {
  id: number;
  title: string;
  imageUrl: string;
  alt: string;
}

interface LogoMarqueeReactProps {
  logos: Logo[];
}

export default function LogoMarqueeReact({ logos }: LogoMarqueeReactProps) {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex gap-16"
        animate={{
          x: [0, -50 + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
        style={{ width: 'fit-content' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-20 min-w-[120px] px-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={logo.imageUrl}
              alt={logo.alt}
              title={logo.title}
              className="max-h-full max-w-[160px] w-auto h-auto object-contain transition-all duration-300"
              style={{
                filter: 'grayscale(100%) opacity(0.6)',
              }}
              whileHover={{
                filter: 'grayscale(0%) opacity(1)',
              }}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
