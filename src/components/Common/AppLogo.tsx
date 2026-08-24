import React from 'react';

export interface AppLogoProps {
  size?: number | string;
  className?: string;
  variant?: 'gold' | 'azure' | 'emerald' | 'monochrome' | 'dark';
  showText?: boolean;
  textClassName?: string;
  subtitle?: string;
  badge?: string;
  animate?: boolean;
}

/**
 * The Azure Sanctuary Canonical Brand Emblem
 * An isometric hexagonal Möbius ribbon loop, rendered with precision geometry,
 * 180° rotational symmetry, and an elevated Champagne Gold & Mediterranean Azure palette.
 */
export const AppLogo: React.FC<AppLogoProps> = ({
  size = 40,
  className = '',
  variant = 'gold',
  showText = false,
  textClassName = '',
  subtitle = 'Boutique Sanctuary & Resort OS',
  badge,
  animate = false
}) => {
  const idPrefix = React.useId().replace(/:/g, '');

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 transition-transform duration-300 ${animate ? 'hover:scale-105 hover:rotate-1' : ''}`}
        aria-label="The Azure Sanctuary Logo"
      >
        <defs>
          {/* ======================================================== */}
          {/* GOLD PALETTE (Champagne, Burnished Gold & Bronze)        */}
          {/* ======================================================== */}
          {/* Light Champagne Highlight Stripe */}
          <linearGradient id={`${idPrefix}-gold-band1`} x1="16" y1="50" x2="96" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF2D1" />
            <stop offset="45%" stopColor="#F5DC8C" />
            <stop offset="100%" stopColor="#E2BD4E" />
          </linearGradient>

          {/* Main Continuous Ribbon Loop */}
          <linearGradient id={`${idPrefix}-gold-loop`} x1="16" y1="40" x2="96" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F3D98B" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="65%" stopColor="#BA9225" />
            <stop offset="100%" stopColor="#876510" />
          </linearGradient>

          {/* Deep Burnished Interior Shadow Facet */}
          <linearGradient id={`${idPrefix}-gold-inner`} x1="20" y1="80" x2="96" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7E590A" />
            <stop offset="50%" stopColor="#573D05" />
            <stop offset="100%" stopColor="#382602" />
          </linearGradient>

          {/* Inverted Coordinates (180° Rotational Symmetry) */}
          <linearGradient id={`${idPrefix}-gold-band1-inv`} x1="184" y1="150" x2="104" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF2D1" />
            <stop offset="45%" stopColor="#F5DC8C" />
            <stop offset="100%" stopColor="#E2BD4E" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-gold-loop-inv`} x1="184" y1="160" x2="104" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F3D98B" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="65%" stopColor="#BA9225" />
            <stop offset="100%" stopColor="#876510" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-gold-inner-inv`} x1="180" y1="120" x2="104" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7E590A" />
            <stop offset="50%" stopColor="#573D05" />
            <stop offset="100%" stopColor="#382602" />
          </linearGradient>


          {/* ======================================================== */}
          {/* AZURE SANCTUARY PALETTE (Aegean Sea & Luminous Teal)    */}
          {/* ======================================================== */}
          <linearGradient id={`${idPrefix}-azure-band1`} x1="16" y1="50" x2="96" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C2F2EC" />
            <stop offset="50%" stopColor="#79DFD4" />
            <stop offset="100%" stopColor="#43BFB3" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-azure-loop`} x1="16" y1="40" x2="96" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#67D3C6" />
            <stop offset="35%" stopColor="#2E9E94" />
            <stop offset="70%" stopColor="#1C776F" />
            <stop offset="100%" stopColor="#0E4A45" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-azure-inner`} x1="20" y1="80" x2="96" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1B5E57" />
            <stop offset="50%" stopColor="#11403C" />
            <stop offset="100%" stopColor="#082321" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-azure-band1-inv`} x1="184" y1="150" x2="104" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C2F2EC" />
            <stop offset="50%" stopColor="#79DFD4" />
            <stop offset="100%" stopColor="#43BFB3" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-azure-loop-inv`} x1="184" y1="160" x2="104" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#67D3C6" />
            <stop offset="35%" stopColor="#2E9E94" />
            <stop offset="70%" stopColor="#1C776F" />
            <stop offset="100%" stopColor="#0E4A45" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-azure-inner-inv`} x1="180" y1="120" x2="104" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1B5E57" />
            <stop offset="50%" stopColor="#11403C" />
            <stop offset="100%" stopColor="#082321" />
          </linearGradient>

          {/* Clean Ambient Shadow */}
          <filter id={`${idPrefix}-shadow`} x="-8%" y="-8%" width="116%" height="116%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0A0E0C" floodOpacity="0.22" />
          </filter>
        </defs>

        <g filter={`url(#${idPrefix}-shadow)`}>
          {/* ======================================================== */}
          {/* LEFT CHIRAL GROUP (Top-Left & Lower-Left)                */}
          {/* ======================================================== */}
          
          {/* 1. Left Deep Interior Facet (Bottom-Left Inward Wall) */}
          <path
            d="M 96 74
               L 96 136
               L 36 171
               C 24 164 16 153 16 139
               L 16 116
               L 96 74 Z"
            fill={variant === 'azure' ? `url(#${idPrefix}-azure-inner)` : `url(#${idPrefix}-gold-inner)`}
          />

          {/* 2. Left Primary Ribbon Loop (Upper diagonal, curving down outer edge to bottom center) */}
          <path
            d="M 96 44
               L 38 77
               C 24 85 16 97 16 112
               L 16 142
               C 16 155 23 166 33 172
               L 96 198
               L 96 174
               L 40 152
               C 34 149 30 144 30 138
               L 30 114
               C 30 106 34 99 42 95
               L 96 66
               L 96 44 Z"
            fill={variant === 'azure' ? `url(#${idPrefix}-azure-loop)` : `url(#${idPrefix}-gold-loop)`}
          />

          {/* 3. Left Top Diagonal Stripe (Upper Accent Band) */}
          <path
            d="M 96 8
               L 32 39
               C 22 44 16 55 16 67
               L 16 92
               L 28 85
               C 28 77 32 70 39 66
               L 96 34
               L 96 8 Z"
            fill={variant === 'azure' ? `url(#${idPrefix}-azure-band1)` : `url(#${idPrefix}-gold-band1)`}
          />


          {/* ======================================================== */}
          {/* RIGHT CHIRAL GROUP (180° Rotational Inversion)           */}
          {/* ======================================================== */}
          
          {/* 4. Right Deep Interior Facet (Top-Right Inward Wall) */}
          <path
            d="M 104 126
               L 104 64
               L 164 29
               C 176 36 184 47 184 61
               L 184 84
               L 104 126 Z"
            fill={variant === 'azure' ? `url(#${idPrefix}-azure-inner-inv)` : `url(#${idPrefix}-gold-inner-inv)`}
          />

          {/* 5. Right Primary Ribbon Loop (Lower diagonal, curving up outer edge to top center) */}
          <path
            d="M 104 156
               L 162 123
               C 176 115 184 103 184 88
               L 184 58
               C 184 45 177 34 167 28
               L 104 2
               L 104 26
               L 160 48
               C 166 51 170 56 170 62
               L 170 86
               C 170 94 166 101 158 105
               L 104 134
               L 104 156 Z"
            fill={variant === 'azure' ? `url(#${idPrefix}-azure-loop-inv)` : `url(#${idPrefix}-gold-loop-inv)`}
          />

          {/* 6. Right Bottom Diagonal Stripe (Lower Accent Band) */}
          <path
            d="M 104 192
               L 168 161
               C 178 156 184 145 184 133
               L 184 108
               L 172 115
               C 172 123 168 130 161 134
               L 104 166
               L 104 192 Z"
            fill={variant === 'azure' ? `url(#${idPrefix}-azure-band1-inv)` : `url(#${idPrefix}-gold-band1-inv)`}
          />
        </g>
      </svg>

      {/* Optional Integrated Typography / Branding Block */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className={`font-serif-heading font-bold tracking-wider uppercase text-[#F7F4EE] leading-tight ${textClassName || 'text-base sm:text-lg'}`}>
              The Azure Sanctuary
            </span>
            {badge && (
              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="text-[10px] text-[#8EA299] tracking-wider uppercase font-sans-body">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default AppLogo;
