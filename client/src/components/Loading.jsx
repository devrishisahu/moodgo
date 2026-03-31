export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center">
      {/* Spotlight beams */}
      <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-b from-[#f72585]/8 to-transparent rotate-12 animate-spotlight" />
      <div className="absolute top-0 right-1/3 w-24 h-full bg-gradient-to-b from-[#00f5ff]/6 to-transparent -rotate-6 animate-spotlight" style={{ animationDelay: '2s' }} />
      <div className="absolute top-0 left-1/2 w-20 h-full bg-gradient-to-b from-[#f72585]/5 to-transparent rotate-3 animate-spotlight" style={{ animationDelay: '4s' }} />

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#f72585] to-[#00f5ff] bg-clip-text text-transparent animate-fade-in-up">
          VOLT
        </h1>

        {/* Sound wave bars */}
        <div className="flex items-end gap-1 mt-8 h-10">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-[#f72585] to-[#00f5ff]"
              style={{
                animation: `soundWave 1s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
                height: '100%',
              }}
            />
          ))}
        </div>

        <p className="text-white/30 text-xs uppercase tracking-[0.4em] mt-6 animate-pulse font-mono">Loading Experience</p>
      </div>

      {/* Inline keyframes for sound wave */}
      <style>{`
        @keyframes soundWave {
          0%, 100% { transform: scaleY(0.3); opacity: 0.5; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
