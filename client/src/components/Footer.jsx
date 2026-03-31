import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black bg-gradient-to-r from-[#f72585] to-[#00f5ff] bg-clip-text text-transparent">VOLT</h3>
          <p className="text-sm text-white/40 leading-relaxed">The ultimate live event experience. Feel the energy. Own the night.</p>
          <div className="flex gap-3">
            {['𝕏', 'in', 'IG', 'YT'].map((s) => (
              <span key={s} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/40 hover:text-[#f72585] hover:border-[#f72585]/30 transition-all cursor-pointer">{s}</span>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Explore</h4>
          <ul className="space-y-3">
            {[['/', 'Home'], ['/events', 'Events'], ['/wallet', 'Wallet'], ['/profile', 'Profile']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-white/40 hover:text-[#f72585] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h4>
          <ul className="space-y-3">
            {['Help Center', 'Contact Us', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <span className="text-sm text-white/40 hover:text-[#f72585] transition-colors cursor-pointer">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stay Updated</h4>
          <p className="text-sm text-white/40 mb-4">Get the latest drops and exclusive presale access.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#f72585]/50"

            />
            <button className="px-4 py-2 bg-[#f72585] text-white text-sm font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(247,37,133,0.4)] transition-all">→</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">© 2025 VOLT. All rights reserved.</p>
          <span className="text-xl font-black bg-gradient-to-r from-[#f72585]/30 to-[#00f5ff]/30 bg-clip-text text-transparent">VOLT</span>
        </div>
      </div>
    </footer>
  );
}
