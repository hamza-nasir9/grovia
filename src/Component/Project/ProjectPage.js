'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '@/Component/Project/ProjectCsrd';
import ProjectFilters from '@/Component/Project/ProjectFilter';
import { projects } from '@/Component/Data/Project';
import ProjectHero from './projectHero';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const industries = ['all', ...new Set(projects.map(p => p.industry))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter || project.industry === filter;
    const matchesSearch = search === '' || 
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.tagline.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-black text-white">
      {/* Hero Section */}
      <ProjectHero />

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-black to-gray-900/30">
        <ProjectFilters 
          categories={categories}
          industries={industries}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-green-400">{filteredProjects.length}</span> Case Studies Found
              </h2>
              <p className="text-gray-400">Real results from real clients</p>
            </div>
            <div className="text-green-400 text-sm">
              {filter === 'all' ? 'Showing all projects' : `Filtered by: ${filter}`}
            </div>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your filters or search terms</p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid  -cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-r from-green-900/20 to-black border border-green-500/20 rounded-3xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">{projects.length}+</div>
                <p className="text-gray-400">Successful Projects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">4.9/5</div>
                <p className="text-gray-400">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
                <p className="text-gray-400">Industries Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/10 to-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See <span className="text-green-400">Your Project</span> Here?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our success stories. Let's work together to create remarkable results for your business.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-green-500/30 transition-all"
          >
            Start Your Project
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}