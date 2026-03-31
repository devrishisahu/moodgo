import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Spotlight beams */}
      <div className="absolute top-0 left-1/3 w-40 h-full bg-gradient-to-b from-[#f72585]/6 to-transparent rotate-12 animate-spotlight" />
      <div className="absolute top-0 right-1/4 w-28 h-full bg-gradient-to-b from-[#00f5ff]/5 to-transparent -rotate-8 animate-spotlight" style={{ animationDelay: '3s' }} />

      {/* Mic illustration using CSS */}
      <div className="relative mb-10 animate-float">
        {/* Mic head */}
        <div className="w-24 h-32 rounded-t-full bg-gradient-to-b from-white/10 to-white/5 border border-white/15 mx-auto relative overflow-hidden">
          {/* Mic grille lines */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-full h-px bg-white/10" style={{ marginTop: i === 0 ? '12px' : '12px' }} />
          ))}
        </div>
        {/* Mic body */}
        <div className="w-6 h-16 bg-gradient-to-b from-white/10 to-white/5 mx-auto rounded-b-lg" />
        {/* Mic stand */}
        <div className="w-2 h-20 bg-white/10 mx-auto" />
        <div className="w-16 h-2 bg-white/10 rounded-full mx-auto" />

        {/* Disconnected cable */}
        <svg viewBox="0 0 80 30" className="w-20 mx-auto mt-2 opacity-30">
          <path d="M10,5 Q25,25 40,15 Q55,5 70,20" stroke="#f72585" strokeWidth="2" fill="none" strokeDasharray="4,4" />
        </svg>
      </div>

      {/* 404 Text */}
      <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-[#f72585] to-[#00f5ff] bg-clip-text text-transparent leading-none animate-fade-in-up">
        404
      </h1>

      <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-4 animate-fade-in-up animation-delay-200">
        Stage Not Found
      </h2>

      <p className="text-white/40 text-center mt-3 max-w-md animate-fade-in-up animation-delay-300">
        Looks like the mic dropped and this stage went dark. The page you're looking for doesn't exist or has been moved.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up animation-delay-400">
        <Link
          to="/"
          className="px-8 py-3 bg-[#f72585] text-white font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(247,37,133,0.5)] transition-all duration-300 text-sm"
        >
          Back to Main Stage
        </Link>
        <Link
          to="/events"
          className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all text-sm"
        >
          Browse Events
        </Link>
      </div>

      {/* Bottom crowd silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-t-full"
            style={{
              width: `${12 + Math.random() * 10}px`,
              height: `${30 + Math.sin(i * 0.5) * 20 + Math.random() * 15}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
