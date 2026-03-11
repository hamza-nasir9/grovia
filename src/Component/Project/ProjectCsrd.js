'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaChartLine, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  // ✅ Pehle check karo project exists
  if (!project || !project.id) {
    return (
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <div className="text-gray-500">Loading project...</div>
      </div>
    );
  }

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl overflow-hidden cursor-pointer h-full"
      >
        {/* Image/Color Placeholder */}
        <div className={`h-96 bg-cover bg-top ${project.color || 'from-green-500 to-emerald-700'} bg-gradient-to-br relative overflow-hidden`} style={{
          backgroundImage: project.image
            ? `url(${typeof project.image === 'string' ? project.image : project.image.src})`
            : undefined
        }}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {project.category || 'Project'}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 text-4xl font-bold text-white/20">
            {project.title?.charAt(0) || 'P'}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
              {project.industry || 'Industry'}
            </span>
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
              {project.duration || 'Duration'}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
            {project.title || 'Project Title'}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.tagline || 'Project tagline description here'}
          </p>

          {/* Description */}
          <p className="text-gray-300 mb-6 line-clamp-3">
            {project.description || 'Project description will appear here...'}
          </p>

          {/* Results Preview */}
          {project.results && project.results.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.results.slice(0, 2).map((result, idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${result.color || 'from-green-500 to-emerald-500'} bg-clip-text text-transparent`}>
                    {result.value || '0%'}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{result.label || 'Result'}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">350%</div>
                <div className="text-gray-400 text-xs mt-1">Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-500">4.8x</div>
                <div className="text-gray-400 text-xs mt-1">ROAS</div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-xs" />
                <span>{project.location || 'Location'}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-xs" />
                <span>{project.duration || 'Duration'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-400 group-hover:gap-3 transition-all">
              <span className="text-sm font-medium">View Case Study</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 border-2 border-green-500/0 group-hover:border-green-500/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;