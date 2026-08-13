/**
 * Blueprint-style SVG schematics for the hero carousel's HUD card.
 * One hand-drawn vector per vehicle silhouette (lc300 / mrap / apc).
 */
interface VehicleSchematicProps {
  type: 'lc300' | 'mrap' | 'apc'
  color: string
}

export default function VehicleSchematic({ type, color }: VehicleSchematicProps) {
  if (type === 'lc300') {
    return (
      <svg viewBox="0 0 500 220" className="w-full max-h-[170px]" fill="none">
        {/* Schematic Grid Lines */}
        <line x1="50" y1="20" x2="50" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="250" y1="20" x2="250" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="450" y1="20" x2="450" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="20" y1="110" x2="480" y2="110" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

        {/* Chassis / Car Body silhouette */}
        <path
          d="M 50,150 L 50,132 L 80,128 L 132,126 L 168,76 L 332,76 L 398,78 L 442,106 L 452,128 L 452,160 L 418,160 M 356,160 L 210,160 M 148,160 L 50,160"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dynamic Highlight Window Armor Plates */}
        <polygon
          points="174,84 316,84 316,118 142,118"
          fill={`${color}08`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="326,84 384,85 410,118 326,118"
          fill={`${color}08`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Door Protection Plate Highlights */}
        <path
          d="M 140,123 L 314,123 L 314,158 L 140,158 Z"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />

        {/* Wheels */}
        <circle cx="178" cy="160" r="32" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="178" cy="160" r="22" stroke={`${color}50`} strokeWidth="1.5" />
        <circle cx="178" cy="160" r="6" fill={color} />

        <circle cx="388" cy="160" r="32" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="388" cy="160" r="22" stroke={`${color}50`} strokeWidth="1.5" />
        <circle cx="388" cy="160" r="6" fill={color} />

        {/* Run-flat labels */}
        <path d="M 178,128 L 220,100" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" />
        <text x="226" y="98" fill={color} fontSize="8" className="font-mono">RUNFLAT_SYS</text>

        {/* Calibrator Text */}
        <text x="50" y="190" fill="rgba(255,255,255,0.2)" fontSize="8" className="font-mono">L: 4980MM</text>
        <text x="400" y="190" fill="rgba(255,255,255,0.2)" fontSize="8" className="font-mono">H: 1950MM</text>
      </svg>
    )
  }

  if (type === 'mrap') {
    return (
      <svg viewBox="0 0 500 220" className="w-full max-h-[170px]" fill="none">
        {/* Schematic Grid Lines */}
        <line x1="50" y1="20" x2="50" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="250" y1="20" x2="250" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="450" y1="20" x2="450" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

        {/* Turret Mount */}
        <rect x="230" y="32" width="40" height="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <path d="M 235,32 L 210,12" stroke={color} strokeWidth="1.5" />

        {/* Heavy cabin outline */}
        <path
          d="M 60,140 L 70,110 L 115,108 L 160,65 L 345,65 L 430,95 L 438,140 L 418,140 M 344,140 L 220,140 M 156,140 L 60,140"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* V-hull Blast Deflector Highlight */}
        <polygon
          points="130,140 250,158 370,140 250,132"
          fill={`${color}08`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Large tactical tires */}
        <circle cx="188" cy="140" r="38" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="188" cy="140" r="26" stroke={`${color}50`} strokeWidth="1.5" />
        <circle cx="188" cy="140" r="8" fill={color} />

        <circle cx="380" cy="140" r="38" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="380" cy="140" r="26" stroke={`${color}50`} strokeWidth="1.5" />
        <circle cx="380" cy="140" r="8" fill={color} />

        {/* Underbody blast line indicator */}
        <path d="M 210,172 L 250,162 L 290,172" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
        <text x="250" y="185" fill={color} fontSize="8" className="font-mono" textAnchor="middle">V_HULL_DEFLECTION</text>

        {/* Cab glass panel */}
        <polygon
          points="170,72 250,72 250,96 142,96"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 500 220" className="w-full max-h-[170px]" fill="none">
      {/* Schematic Grid Lines */}
      <line x1="50" y1="20" x2="50" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
      <line x1="250" y1="20" x2="250" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
      <line x1="450" y1="20" x2="450" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

      {/* Armored APC angular profile */}
      <path
        d="M 40,144 L 80,95 L 140,84 L 436,84 L 452,105 L 452,144 L 418,144 M 356,144 L 144,144 M 94,144 L 40,144"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Front Sloped Glacis Plate Highlight */}
      <polygon
        points="40,144 80,95 130,95 106,144"
        fill={`${color}08`}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Gun Port and hatch outlines */}
      <circle cx="210" cy="112" r="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle cx="270" cy="112" r="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle cx="330" cy="112" r="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

      {/* Axle layout / Multi wheels */}
      <circle cx="120" cy="144" r="24" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
      <circle cx="120" cy="144" r="16" stroke={`${color}50`} strokeWidth="1" />
      <circle cx="120" cy="144" r="5" fill={color} />

      <circle cx="180" cy="144" r="24" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
      <circle cx="180" cy="144" r="16" stroke={`${color}50`} strokeWidth="1" />
      <circle cx="180" cy="144" r="5" fill={color} />

      <circle cx="320" cy="144" r="24" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
      <circle cx="320" cy="144" r="16" stroke={`${color}50`} strokeWidth="1" />
      <circle cx="320" cy="144" r="5" fill={color} />

      <circle cx="380" cy="144" r="24" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
      <circle cx="380" cy="144" r="16" stroke={`${color}50`} strokeWidth="1" />
      <circle cx="380" cy="144" r="5" fill={color} />

      {/* Dimension markings */}
      <path d="M 40,70 L 452,70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2" />
      <text x="246" y="64" fill="rgba(255,255,255,0.2)" fontSize="8" className="font-mono" textAnchor="middle">8x8_TACTICAL_WHEELBASE</text>
    </svg>
  )
}
