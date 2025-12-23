// Replace ParticleBackground with this component or modify yours:

export const GreenNightSky = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Dark green gradient sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-emerald-950 to-black " />
      
      {/* Tiny glowing green stars */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, #10b981 1px, transparent 100%),
                            radial-gradient(2px 2px at 40% 70%, #10b981 1px, transparent 100%),
                            radial-gradient(1px 1px at 60% 20%, #34d399 1px, transparent 100%),
                            radial-gradient(2px 2px at 80% 50%, #10b981 1px, transparent 100%),
                            radial-gradient(1px 1px at 30% 80%, #34d399 1px, transparent 100%)`,
          backgroundSize: '300px 300px',
          animation: 'twinkle 4s infinite'
        }}
      />
      
      {/* Subtle fog/mist overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-emerald-900/5" />
      
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

