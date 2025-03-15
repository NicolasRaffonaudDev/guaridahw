import "./CyberLogo.css"
// components/CyberLogo.jsx
const CyberLogo = () => (
    <svg className="cyber-logo" viewBox="0 0 100 100">
      <defs>
        <filter id="hologramEffect">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.1" result="warp"/>
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="3" />
        </filter>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#61dafb" />
        </linearGradient>
      </defs>
      
      <path
        d="M50 10 L90 50 L50 90 L10 50 Z"
        fill="url(#logoGradient)"
        filter="url(#hologramEffect)"
      />
    </svg>
  );

  export default CyberLogo
  
