import { motion } from 'framer-motion';

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-cyan-400/18 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: '10%',
          left: '10%',
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/15 blur-[120px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: '40%',
          right: '10%',
        }}
      />
      
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px]"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          bottom: '15%',
          left: '30%',
        }}
      />
      
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/15 blur-[120px]"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: '60%',
          right: '25%',
        }}
      />
    </div>
  );
}
