'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'jp'>('en');

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative h-screen w-full bg-white">
      {/* Top Bar - Logo and Language */}
      <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between md:left-8 md:right-8 md:top-8">
        {/* Logo - Left */}
        <Image
          src="/kamaishi-logo.png"
          alt="Kamaishi Global Resilience Hub"
          width={40}
          height={40}
          className="h-6 w-auto md:h-8 lg:h-10"
        />

        {/* Language Toggle - Right */}
        <div className="flex items-center gap-1 rounded-full border border-blue-200 bg-white px-2 py-1 md:px-3 md:py-1.5">
          <button
            onClick={() => setLanguage('en')}
            className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${language === 'en'
              ? 'bg-blue-500 text-white'
              : 'text-zinc-500 hover:text-blue-500'
              }`}
          >
            EN
          </button>
          <span className="text-xs text-zinc-300">|</span>
          <button
            onClick={() => setLanguage('jp')}
            className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${language === 'jp'
              ? 'bg-blue-500 text-white'
              : 'text-zinc-500 hover:text-blue-500'
              }`}
          >
            JP
          </button>
        </div>
      </div>

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="h-full w-full overflow-hidden"
        >
          <CurrentSlideComponent language={language} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 md:bottom-8 md:gap-3">
        <motion.button
          onClick={goToPrevious}
          disabled={currentSlide === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-blue-200 disabled:hover:bg-white md:h-8 md:w-8"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25
          }}
        >
          <ChevronLeft className="h-5 w-5 md:h-4 md:w-4" />
        </motion.button>

        {/* Slide Counter */}
        <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 md:px-3 md:py-1">
          <span className="text-xs font-medium text-blue-600 md:text-xs">
            {currentSlide + 1}
          </span>
          <span className="text-xs text-blue-300 md:text-xs">/</span>
          <span className="text-xs text-zinc-500 md:text-xs">{slides.length}</span>
        </div>

        <motion.button
          onClick={goToNext}
          disabled={currentSlide === slides.length - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 transition-colors hover:border-blue-300 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-blue-200 disabled:hover:bg-white md:h-8 md:w-8"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25
          }}
        >
          <ChevronRight className="h-5 w-5 md:h-4 md:w-4" />
        </motion.button>
      </div>
    </div>
  );
}

