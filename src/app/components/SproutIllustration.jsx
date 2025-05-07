export default function SproutIllustration() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background bubble */}
      <ellipse cx="300" cy="200" rx="280" ry="180" fill="#E7F8F1" />
      
      {/* Chat bubble */}
      <path
        d="M100 120C100 101.91 114.91 87 133 87H467C485.09 87 500 101.91 500 120V280C500 298.09 485.09 313 467 313H133C114.91 313 100 298.09 100 280V120Z"
        fill="white"
        stroke="#24C27A"
        strokeWidth="3"
      />
      <path
        d="M185 313L140 360L160 313"
        fill="white"
        stroke="#24C27A"
        strokeWidth="3"
      />
      
      {/* Budget pots */}
      {/* Rent pot */}
      <rect x="160" y="140" width="80" height="100" rx="10" fill="#24C27A" opacity="0.2" />
      <rect x="160" y="220" width="80" height="20" rx="5" fill="#24C27A" opacity="0.5" />
      <text x="200" y="270" textAnchor="middle" fill="#083B3C" fontWeight="bold" fontSize="16">Rent</text>
      
      {/* Food pot */}
      <rect x="260" y="140" width="80" height="100" rx="10" fill="#24C27A" opacity="0.2" />
      <rect x="260" y="220" width="80" height="20" rx="5" fill="#24C27A" opacity="0.5" />
      <text x="300" y="270" textAnchor="middle" fill="#083B3C" fontWeight="bold" fontSize="16">Food</text>
      
      {/* Fun pot */}
      <rect x="360" y="140" width="80" height="100" rx="10" fill="#24C27A" opacity="0.2" />
      <rect x="360" y="220" width="80" height="20" rx="5" fill="#24C27A" opacity="0.5" />
      <text x="400" y="270" textAnchor="middle" fill="#083B3C" fontWeight="bold" fontSize="16">Fun</text>
      
      {/* Plants in pots */}
      {/* Rent plant */}
      <path d="M190 130C190 130 180 110 200 100C220 90 210 120 210 130" fill="#24C27A" />
      <path d="M200 140C200 140 180 110 200 90C220 70 220 110 220 140" fill="#24C27A" />
      <path d="M180 140C180 140 170 120 180 100C190 80 200 100 200 140" fill="#24C27A" />
      
      {/* Food plant */}
      <path d="M290 130C290 130 280 110 300 100C320 90 310 120 310 130" fill="#24C27A" />
      <path d="M300 140C300 140 280 110 300 90C320 70 320 110 320 140" fill="#24C27A" />
      <path d="M280 140C280 140 270 120 280 100C290 80 300 100 300 140" fill="#24C27A" />
      
      {/* Fun plant */}
      <path d="M390 130C390 130 380 110 400 100C420 90 410 120 410 130" fill="#24C27A" />
      <path d="M400 140C400 140 380 110 400 90C420 70 420 110 420 140" fill="#24C27A" />
      <path d="M380 140C380 140 370 120 380 100C390 80 400 100 400 140" fill="#24C27A" />
      
      {/* Paycheck icon */}
      <rect x="260" y="40" width="80" height="40" rx="5" fill="#FFCB47" />
      <text x="300" y="65" textAnchor="middle" fill="#083B3C" fontWeight="bold" fontSize="14">Paycheck</text>
      
      {/* Dashed arrows */}
      <path d="M270 80L200 120" stroke="#083B3C" strokeWidth="2" strokeDasharray="5 5"/>
      <path d="M300 80L300 120" stroke="#083B3C" strokeWidth="2" strokeDasharray="5 5"/>
      <path d="M330 80L400 120" stroke="#083B3C" strokeWidth="2" strokeDasharray="5 5"/>
      
      {/* Sprout mascot */}
      <circle cx="460" cy="80" r="35" fill="#24C27A" />
      <circle cx="445" cy="70" r="7" fill="white" />
      <circle cx="445" cy="70" r="3" fill="#083B3C" />
      <circle cx="475" cy="70" r="7" fill="white" />
      <circle cx="475" cy="70" r="3" fill="#083B3C" />
      <path d="M450 90C450 90 460 95 470 90" stroke="#083B3C" strokeWidth="2" strokeLinecap="round" />
      
      {/* Decorative dots */}
      <circle cx="150" y="200" r="5" fill="#FFCB47" />
      <circle cx="450" y="250" r="5" fill="#FFCB47" />
      <circle cx="250" y="100" r="5" fill="#FFCB47" />
      <circle cx="350" y="200" r="5" fill="#FFCB47" />
    </svg>
  );
} 