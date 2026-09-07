// Stylized Chicago skyline silhouette used as a decorative hero background.
// Shapes are simplified but recognizable: Willis Tower's twin antennas,
// the John Hancock Center's tapered profile with X-bracing, and the
// Lake Michigan waterline underneath.
export default function ChicagoSkyline() {
  return (
    <svg
      viewBox="0 0 1600 420"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <g fill="var(--skyline)" opacity="var(--skyline-opacity)">
        {/* far background buildings */}
        <rect x="0" y="220" width="60" height="200" />
        <rect x="70" y="180" width="50" height="240" />
        <rect x="130" y="240" width="70" height="180" />
        <rect x="1420" y="200" width="55" height="220" />
        <rect x="1485" y="250" width="65" height="170" />
        <rect x="1550" y="210" width="50" height="210" />

        {/* John Hancock Center — tapered trapezoid with X-bracing */}
        <polygon points="230,420 250,140 310,140 330,420" />
        <line
          x1="235"
          y1="380"
          x2="325"
          y2="200"
          stroke="var(--bg)"
          strokeWidth="4"
          opacity="0.5"
        />
        <line
          x1="325"
          y1="380"
          x2="235"
          y2="200"
          stroke="var(--bg)"
          strokeWidth="4"
          opacity="0.5"
        />

        {/* mid buildings */}
        <rect x="350" y="260" width="60" height="160" />
        <rect x="420" y="200" width="80" height="220" />
        <rect x="510" y="290" width="55" height="130" />

        {/* Aon Center-ish slab */}
        <rect x="580" y="150" width="90" height="270" />

        {/* Willis Tower — nine-tube setbacks + twin antennas */}
        <rect x="700" y="120" width="140" height="300" />
        <rect x="712" y="70" width="60" height="50" />
        <rect x="768" y="90" width="52" height="30" />
        <line x1="732" y1="70" x2="732" y2="10" stroke="var(--skyline)" strokeWidth="5" />
        <line x1="800" y1="90" x2="800" y2="35" stroke="var(--skyline)" strokeWidth="5" />

        <rect x="860" y="230" width="70" height="190" />
        <rect x="940" y="180" width="60" height="240" />
        <rect x="1010" y="260" width="90" height="160" />

        {/* Trump Tower-ish stepped slab */}
        <rect x="1120" y="160" width="70" height="260" />
        <rect x="1130" y="130" width="50" height="30" />

        <rect x="1210" y="240" width="65" height="180" />
        <rect x="1285" y="200" width="55" height="220" />
        <rect x="1350" y="270" width="60" height="150" />
      </g>

      {/* waterline */}
      <rect x="0" y="410" width="1600" height="10" fill="var(--chi-blue)" opacity="var(--skyline-opacity)" />
    </svg>
  )
}
