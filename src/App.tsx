/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'motion/react';
import { 
  Monitor, 
  Cpu, 
  Database, 
  Globe, 
  User,
  GraduationCap,
  Code2,
  LayoutGrid,
  Presentation,
  Search,
  X,
  Play,
  Pause
} from 'lucide-react';
import { PROJECTS, Project } from './types';

const GRADES = [7, 8, 9, 10];
const SHOWCASE_DURATION = 15000; // 15 seconds as requested

export default function App() {
  const [viewMode, setViewMode] = useState<'museum' | 'grid'>('museum');
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesGrade = selectedGrade ? p.grade === selectedGrade : true;
      const matchesSearch = p.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGrade && matchesSearch;
    });
  }, [selectedGrade, searchQuery]);

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  // Progress bar and auto-rotation logic
  useEffect(() => {
    if (!isAutoPlay || viewMode === 'grid' || filteredProjects.length === 0) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / SHOWCASE_DURATION) * 100;
      
      if (newProgress >= 100) {
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
        setProgress(0);
        clearInterval(interval);
      } else {
        setProgress(newProgress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isAutoPlay, filteredProjects.length, viewMode, currentIndex]);

  const selectProject = (index: number) => {
    setCurrentIndex(index);
    setViewMode('museum');
    setIsAutoPlay(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans overflow-hidden selection:bg-emerald-500/20">
      {/* Background Tech Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        
        {/* Animated background glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 blur-[150px] rounded-full"
        />
        
        {/* Dynamic Spotlight */}
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]"
        />
      </div>

      {/* Header */}
      <header className="relative z-50 px-8 py-4 flex flex-col md:flex-row justify-between items-center border-b border-black/5 bg-white/80 backdrop-blur-xl gap-4">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white shrink-0"
          >
            <Cpu size={24} />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold tracking-tight uppercase leading-none text-black">Amjilt Cyber School</h1>
            <p className="text-[10px] font-medium text-black/40 uppercase tracking-[0.2em] mt-1">Цифрлық Галерея • 2026</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" size={16} />
            <input 
              type="text"
              placeholder="Оқушы есімі..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-black/5 border border-black/10 rounded-full text-sm focus:ring-2 focus:ring-emerald-500/50 w-48 transition-all focus:w-64 text-black placeholder:text-black/20"
            />
          </div>

          <nav className="flex bg-black/5 p-1 rounded-full border border-black/10">
            <button 
              onClick={() => { setSelectedGrade(null); setCurrentIndex(0); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${selectedGrade === null ? 'bg-black text-white' : 'text-black/50 hover:text-black'}`}
            >
              Барлығы
            </button>
            {GRADES.map(grade => (
              <button 
                key={grade}
                onClick={() => { setSelectedGrade(grade); setCurrentIndex(0); }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${selectedGrade === grade ? 'bg-black text-white' : 'text-black/50 hover:text-black'}`}
              >
                {grade}
              </button>
            ))}
          </nav>

          <div className="flex bg-black/5 p-1 rounded-full border border-black/10">
            <button 
              onClick={() => setViewMode('museum')}
              className={`p-2 rounded-full transition-all ${viewMode === 'museum' ? 'bg-white text-black shadow-sm' : 'text-black/40 hover:text-black'}`}
            >
              <Presentation size={18} />
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-white text-black shadow-sm' : 'text-black/40 hover:text-black'}`}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 h-[calc(100vh-73px)] overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {viewMode === 'museum' ? (
            <motion.div 
              key="museum"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col relative"
            >
              {filteredProjects.length > 0 ? (
                <>
                  {/* Hero Showcase Area */}
                  <div className="flex-1 flex flex-col lg:flex-row items-center justify-center p-8 lg:p-12 gap-12">
                    {/* Project Info - Floating on the left */}
                    <div className="w-full lg:w-1/3 z-20">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentProject.id}
                          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="space-y-6"
                        >
                          <div className="space-y-3">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: 'auto' }}
                              className="overflow-hidden"
                            >
                              <span className="inline-block px-3 py-1 bg-emerald-500 text-black rounded-md text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                                {currentProject.grade}-сынып • {currentProject.type}
                              </span>
                            </motion.div>
                            <h2 className="text-5xl lg:text-7xl font-black leading-none tracking-tighter text-black drop-shadow-[0_0_20px_rgba(16,185,129,0.1)] relative">
                              <motion.span
                                animate={{ 
                                  textShadow: [
                                    "0 0 0px rgba(16,185,129,0)",
                                    "2px 2px 0px rgba(255,0,0,0.2)",
                                    "-2px -2px 0px rgba(0,0,255,0.2)",
                                    "0 0 0px rgba(16,185,129,0)"
                                  ]
                                }}
                                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}
                              >
                                {currentProject.title}
                              </motion.span>
                            </h2>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center border border-black/5">
                              <User size={24} className="text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-[10px] uppercase font-bold tracking-widest text-black/40">Орындаған</p>
                              <p className="text-xl font-bold text-black">{currentProject.studentName}</p>
                            </div>
                          </div>

                          <p className="text-lg text-black/60 leading-relaxed max-w-md">
                            {currentProject.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {currentProject.techStack.map(tech => (
                              <span key={tech} className="flex items-center gap-1.5 px-3 py-1.5 bg-black/5 border border-black/5 text-black rounded-lg text-[10px] font-mono">
                                <Code2 size={12} className="text-emerald-600" />
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Progress Bar */}
                          <div className="pt-4 w-full max-w-xs">
                            <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-emerald-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                              />
                            </div>
                            <div className="flex justify-between mt-2">
                              <button 
                                onClick={() => setIsAutoPlay(!isAutoPlay)}
                                className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black flex items-center gap-2"
                              >
                                {isAutoPlay ? <Pause size={12} /> : <Play size={12} />}
                                {isAutoPlay ? 'Авто-ойнату қосулы' : 'Авто-ойнату тоқтатылды'}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Main Visual - Zoomed in card */}
                    <div className="w-full lg:w-2/3 relative h-full flex items-center justify-center perspective-1000">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentProject.id}
                          initial={{ opacity: 0, scale: 0.5, rotateX: 45, y: 200, filter: 'brightness(0)' }}
                          animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0, filter: 'brightness(1)' }}
                          exit={{ opacity: 0, scale: 1.5, rotateX: -45, y: -200, filter: 'brightness(2)' }}
                          transition={{ 
                            duration: 1.5, 
                            ease: [0.16, 1, 0.3, 1],
                            opacity: { duration: 0.8 }
                          }}
                          className="relative w-full aspect-video rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.2)] border border-white/20 bg-black group"
                        >
                          {currentProject.mediaType === 'video' ? (
                            <video 
                              src={currentProject.mediaUrl} 
                              className="w-full h-full object-cover"
                              autoPlay 
                              muted 
                              loop 
                              playsInline
                            />
                          ) : (
                            <img 
                              src={currentProject.mediaUrl} 
                              alt={currentProject.title}
                              className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                          
                          {/* Floating Tech Badge */}
                          <div className="absolute top-8 right-8">
                            <motion.div 
                              animate={{ y: [0, -10, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="p-4 bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/20 text-emerald-500 shadow-2xl"
                            >
                              <GraduationCap size={32} />
                            </motion.div>
                          </div>

                          {/* Scanline Effect */}
                          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] opacity-30" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Bottom Marquee Strip - 3D Perspective */}
                  <div className="h-40 bg-white/60 backdrop-blur-2xl border-t border-black/5 relative overflow-hidden perspective-1000">
                    <div className="absolute inset-0 flex items-center">
                      <motion.div 
                        animate={{ x: [0, -2000] }}
                        transition={{ 
                          duration: 80, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                        className="flex gap-6 px-8 whitespace-nowrap py-4"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Triple the projects for even smoother loop */}
                        {[...filteredProjects, ...filteredProjects, ...filteredProjects].map((project, idx) => (
                          <motion.div
                            key={`${project.id}-${idx}`}
                            whileHover={{ 
                              scale: 1.1, 
                              y: -10,
                              rotateY: 10,
                              z: 50
                            }}
                            onClick={() => selectProject(idx % filteredProjects.length)}
                            className={`w-56 h-32 rounded-2xl overflow-hidden border cursor-pointer transition-all shrink-0 relative group/card ${
                              (idx % filteredProjects.length) === currentIndex 
                                ? 'border-emerald-500 ring-4 ring-emerald-500/20 scale-110 z-30' 
                                : 'border-black/5 opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
                            }`}
                            style={{ transformStyle: 'preserve-3d' }}
                          >
                            <img 
                              src={project.mediaUrl} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3">
                              <p className="text-[10px] font-black uppercase tracking-tighter text-emerald-400 truncate">{project.studentName}</p>
                              <p className="text-[8px] font-bold text-white/80 truncate">{project.title}</p>
                            </div>
                            
                            {/* Active Indicator Overlay */}
                            {(idx % filteredProjects.length) === currentIndex && (
                              <motion.div 
                                layoutId="active-glow"
                                className="absolute inset-0 bg-emerald-500/10 animate-pulse pointer-events-none"
                              />
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* Gradient Fades for Marquee */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10" />
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-black/10">
                  <Search size={64} className="mb-4 opacity-10" />
                  <p className="text-2xl font-bold uppercase tracking-widest">Жобалар табылмады</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="h-full overflow-y-auto p-8 lg:p-12 custom-scrollbar"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.02 }}
                    onClick={() => selectProject(idx)}
                    className="group cursor-pointer bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-emerald-500/10 transition-all border border-black/5 hover:border-emerald-500/50"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      {project.mediaType === 'video' ? (
                        <video src={project.mediaUrl} className="w-full h-full object-cover" muted playsInline />
                      ) : (
                        <img 
                          src={project.mediaUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <span className="px-6 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">Көру</span>
                      </div>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-widest border border-black/5 text-black">
                        {project.grade}-сынып
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1 text-black group-hover:text-emerald-600 transition-colors">{project.title}</h3>
                      <div className="flex items-center gap-3 text-black/40">
                        <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center">
                          <User size={12} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest">{project.studentName}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 left-0 w-full px-8 py-2 bg-white/80 backdrop-blur-xl border-t border-black/5 flex justify-between items-center text-[9px] uppercase font-bold tracking-[0.3em] text-black/30 z-50">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
            Жүйе белсенді
          </span>
          <span className="hidden sm:inline opacity-50">Деректер қоры: {PROJECTS.length} нысан</span>
        </div>
        <div className="hidden md:block opacity-50">
          Amjilt Cyber School • Цифрлық Болашаққа Қадам
        </div>
        <div className="flex items-center gap-6">
          <span className="text-emerald-600/50">{filteredProjects.length} нәтиже табылды</span>
          <span>{new Date().toLocaleTimeString('kk-KZ', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.4);
        }
      `}</style>
    </div>
  );
}
