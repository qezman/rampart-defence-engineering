'use client'

import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/section-label'
import PillButton from '@/components/ui/pill-button'
import VehicleSchematic from '@/components/sections/vehicle-schematic'
import { CAROUSEL_VEHICLES } from '@/components/sections/hero-carousel-data'
import { useCarousel } from '@/hooks/use-carousel'

const FADE_UP = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function HeroTile() {
  const { activeIndex, progress, setIsHovered, goToNext, goToPrev, goToIndex } =
    useCarousel(CAROUSEL_VEHICLES.length)
  const activeVehicle = CAROUSEL_VEHICLES[activeIndex]

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 lg:py-28 bg-surface-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient — simulates dramatic photography */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-black to-black" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent glow matching active vehicle theme color */}
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] opacity-[0.09] blur-[100px] transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${activeVehicle.color} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 section-inner-wide px-6 lg:px-[var(--gutter)] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Headline, active slide desc, controls */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-[440px]">
            <div>
              <motion.div initial="hidden" animate="visible" custom={0} variants={FADE_UP}>
                <SectionLabel>Tactical Armoury & Engineering</SectionLabel>
              </motion.div>

              <motion.h1
                className="type-hero text-[var(--text-white)] mt-4 mb-6 leading-[1.12]"
                initial="hidden"
                animate="visible"
                custom={1}
                variants={FADE_UP}
              >
                Built to<br />protect.
              </motion.h1>

              <motion.p
                className="type-body text-[var(--text-secondary)] max-w-[420px] mb-8"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={FADE_UP}
              >
                Rampart Defence Engineering design, manufacture, and repair certified light-tactical,
                civilian, and military armored platforms built to stand hostile environments.
              </motion.p>
            </div>

            {/* Dynamic content showing active vehicle information */}
            <div className="border-t border-[var(--border)] pt-6 mt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="type-label mb-2 font-bold transition-all duration-300"
                    style={{ color: activeVehicle.color }}
                  >
                    {activeVehicle.tagline}
                  </p>
                  <h3 className="type-title-2 text-[var(--text-white)] mb-4">
                    {activeVehicle.name}
                  </h3>
                  <div className="flex gap-4">
                    <PillButton href={`/vehicles/${activeVehicle.slug}`} variant="primary" id={`hero-link-${activeVehicle.slug}`}>
                      View Details
                    </PillButton>
                    <PillButton href="/contact" variant="ghost" id="hero-contact-cta">
                      Enquire
                    </PillButton>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Navigators */}
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrev}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] hover:bg-[var(--border)] transition-colors text-[var(--text-white)]"
                    aria-label="Previous Vehicle"
                  >
                    ←
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] hover:bg-[var(--border)] transition-colors text-[var(--text-white)]"
                    aria-label="Next Vehicle"
                  >
                    →
                  </button>
                </div>

                <div className="flex-1 max-w-[120px] h-[2px] bg-white/10 rounded-full relative overflow-hidden">
                  <div
                    className="h-full transition-all duration-[60ms] ease-linear"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: activeVehicle.color,
                    }}
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  {CAROUSEL_VEHICLES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToIndex(idx)}
                      className="w-2.5 h-2.5 rounded-full transition-all"
                      style={{
                        backgroundColor: idx === activeIndex ? activeVehicle.color : 'rgba(255,255,255,0.15)',
                        transform: idx === activeIndex ? 'scale(1.2)' : 'scale(1)',
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech HUD schematic card of active vehicle */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              className="relative w-full max-w-[620px] aspect-[16/10] rounded-card p-6 overflow-hidden flex flex-col justify-between border transition-all duration-700 bg-[rgba(20,20,22,0.65)] border-[var(--border)] backdrop-blur-2xl shadow-card"
            >
              {/* High-tech scanner laser line */}
              <motion.div
                className="absolute top-0 bottom-0 w-[2px] opacity-20 pointer-events-none"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  background: `linear-gradient(to bottom, transparent, ${activeVehicle.color}, transparent)`,
                }}
              />

              {/* Grid calibration corner lines */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l opacity-25" style={{ borderColor: activeVehicle.color }} />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r opacity-25" style={{ borderColor: activeVehicle.color }} />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l opacity-25" style={{ borderColor: activeVehicle.color }} />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r opacity-25" style={{ borderColor: activeVehicle.color }} />

              {/* HUD Header */}
              <div className="flex justify-between items-center relative z-10">
                <div>
                  <p className="type-label text-[10px] text-white/30 tracking-widest font-mono">
                    SYS: CAD_SCHEMATIC_v3.9
                  </p>
                  <p className="text-[12px] font-mono text-[var(--text-white)] font-bold">
                    PLATFORM: {activeVehicle.svgType.toUpperCase()}_REV2
                  </p>
                </div>
                <div
                  className="type-label text-[10px] px-2.5 py-1 rounded font-mono border font-bold"
                  style={{
                    color: activeVehicle.color,
                    borderColor: `${activeVehicle.color}40`,
                    background: `${activeVehicle.color}10`,
                  }}
                >
                  {activeVehicle.protection}
                </div>
              </div>

              {/* SVG Vector Blueprint Area */}
              <div className="flex-1 flex items-center justify-center my-4 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.92, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <VehicleSchematic type={activeVehicle.svgType} color={activeVehicle.color} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* HUD Details Panel */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5 relative z-10">
                <div>
                  <p className="type-label text-[9px] text-white/40 tracking-wider mb-0.5">Blast Standard</p>
                  <p className="text-[12px] text-[var(--text-white)] font-mono font-semibold">{activeVehicle.blast}</p>
                </div>
                <div>
                  <p className="type-label text-[9px] text-white/40 tracking-wider mb-0.5">Propulsion</p>
                  <p className="text-[12px] text-[var(--text-white)] font-mono font-semibold truncate" title={activeVehicle.engine}>
                    {activeVehicle.engine.split(' / ')[0]}
                  </p>
                </div>
                <div>
                  <p className="type-label text-[9px] text-white/40 tracking-wider mb-0.5">Combat Weight</p>
                  <p className="text-[12px] text-[var(--text-white)] font-mono font-semibold">{activeVehicle.weight}</p>
                </div>
                <div>
                  <p className="type-label text-[9px] text-white/40 tracking-wider mb-0.5">Payload Capacity</p>
                  <p className="text-[12px] text-[var(--text-white)] font-mono font-semibold">{activeVehicle.seats}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
