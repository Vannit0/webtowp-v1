import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Project {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  alt: string;
  categories: Category[];
  technologies: string[];
  url: string;
  date: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    projects.forEach(project => {
      project.categories.forEach(cat => {
        categoriesSet.add(cat.slug);
      });
    });
    return Array.from(categoriesSet);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects;
    }
    return projects.filter(project =>
      project.categories.some(cat => cat.slug === selectedCategory)
    );
  }, [projects, selectedCategory]);

  const getCategoryName = (slug: string) => {
    for (const project of projects) {
      const category = project.categories.find(cat => cat.slug === slug);
      if (category) return category.name;
    }
    return slug;
  };

  return (
    <div className="w-full">
      <div className="mb-12 flex flex-wrap gap-3 justify-center">
        <motion.button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
              : 'bg-white/40 backdrop-blur-xl border border-white/60 text-slate-700 hover:bg-white/60'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Todos
        </motion.button>
        {allCategories.map((categorySlug) => (
          <motion.button
            key={categorySlug}
            onClick={() => setSelectedCategory(categorySlug)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedCategory === categorySlug
                ? 'bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/40 backdrop-blur-xl border border-white/60 text-slate-700 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {getCategoryName(categorySlug)}
          </motion.button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={project.imageUrl}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-5 h-5 text-purple-600" />
                </motion.a>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <div 
                  className="text-slate-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: project.excerpt }}
                />

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 rounded-full border border-purple-200/50"
                      >
                        <Tag className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.categories && project.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <span
                        key={category.id}
                        className="px-3 py-1 text-xs font-medium bg-white/60 backdrop-blur-sm text-slate-700 rounded-full border border-white/80"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 pointer-events-none transition-all duration-300" />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <p className="text-xl text-slate-600">
            No se encontraron proyectos en esta categoría.
          </p>
        </motion.div>
      )}
    </div>
  );
}
