'use client'

import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '@/lib/constants'

interface CertCardProps {
  cert: (typeof CERTIFICATIONS)[number]
  index?: number
}

export default function CertCard({ cert, index = 0 }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-card p-8 bg-surface-1 shadow-card"
    >
      <p className="mb-3 text-[28px] font-bold leading-none text-ink-white">
        {cert.standard}
      </p>
      <p className="type-label text-accent-dark mb-3">{cert.body}</p>
      <p className="type-caption text-[var(--text-secondary)]">{cert.covers}</p>
    </motion.div>
  )
}
