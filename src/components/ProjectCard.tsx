import { motion } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';

interface Project {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  alt: string;
  lighthouseScore: number;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <a href={`/proyectos/${project.slug}`} className="block">
        <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 pointer-events-none transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          />
          
          <div className="relative overflow-hidden aspect-video">
            <motion.img
              src={project.imageUrl}
              alt={project.alt}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            
            <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
              <Zap className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-bold text-slate-900">
                Speed {project.lighthouseScore}/100
              </span>
            </div>

            <motion.div
              className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5 text-purple-600" />
            </motion.div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            
            <div 
              className="text-slate-600 mb-4 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: project.excerpt }}
            />

            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 rounded-full border border-purple-200/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 text-xs font-medium bg-white/60 backdrop-blur-sm text-slate-700 rounded-full border border-white/80">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </a>
    </motion.article>
  );
}
