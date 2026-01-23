// SVG Clip Path Definitions Component

const ClipPathDefs = () => {
  return (
    <svg 
      className="clip-paths" 
      width="0" 
      height="0" 
      // style={{ position: 'absolute', pointerEvents: 'none' }}
      // aria-hidden="true"
    >
      <defs>
        {/* Heart shape clip-path - normalized coordinates */}
        <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
          <path d="M 0.5,0.95 
                   C 0.35,0.85 0.15,0.65 0.08,0.45 
                   C 0.02,0.3 0.02,0.15 0.1,0.1 
                   C 0.15,0.05 0.25,0.02 0.35,0.05 
                   C 0.42,0.07 0.47,0.12 0.5,0.2 
                   C 0.53,0.12 0.58,0.07 0.65,0.05 
                   C 0.75,0.02 0.85,0.05 0.9,0.1 
                   C 0.98,0.15 0.98,0.3 0.92,0.45 
                   C 0.85,0.65 0.65,0.85 0.5,0.95 Z" />
        </clipPath>
        
        {/* Spade shape clip-path - normalized coordinates */}
        <clipPath id="spade-clip" clipPathUnits="objectBoundingBox">
          <path d="M 0.5,0.05 
                   C 0.35,0.25 0.1,0.5 0.1,0.65 
                   C 0.1,0.78 0.2,0.87 0.35,0.87 
                   C 0.42,0.87 0.47,0.84 0.5,0.78 
                   C 0.48,0.88 0.45,0.95 0.42,0.98 
                   L 0.58,0.98 
                   C 0.55,0.95 0.52,0.88 0.5,0.78 
                   C 0.53,0.84 0.58,0.87 0.65,0.87 
                   C 0.8,0.87 0.9,0.78 0.9,0.65 
                   C 0.9,0.5 0.65,0.25 0.5,0.05 Z" />
        </clipPath>
        
        {/* Club shape clip-path - normalized coordinates */}
        <clipPath id="club-clip" clipPathUnits="objectBoundingBox">
          <path d="M 0.5,0.18 
                   C 0.58,0.18 0.65,0.25 0.65,0.33 
                   C 0.65,0.37 0.64,0.4 0.62,0.43 
                   C 0.72,0.45 0.8,0.53 0.8,0.63 
                   C 0.8,0.73 0.72,0.81 0.62,0.83 
                   L 0.58,0.92 
                   L 0.55,0.98 
                   L 0.45,0.98 
                   L 0.42,0.92 
                   L 0.38,0.83 
                   C 0.28,0.81 0.2,0.73 0.2,0.63 
                   C 0.2,0.53 0.28,0.45 0.38,0.43 
                   C 0.36,0.4 0.35,0.37 0.35,0.33 
                   C 0.35,0.25 0.42,0.18 0.5,0.18 Z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ClipPathDefs;