import { Link } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout';

export default function AdminCreateEvent() {
  return (
    <AdminLayout current="/admin/events">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <Link to="/admin/events" className="text-white/30 hover:text-white transition-colors text-sm">← Back</Link>
        <h1 className="text-3xl font-black uppercase tracking-tight text-white animate-fade-in-up">Create Event</h1>
      </div>

      {/* Form */}
      <div className="max-w-3xl">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6 animate-fade-in-up animation-delay-200">
          {/* Title */}
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Event Title</label>
            <input
              type="text"
              placeholder="e.g. Cyber Punk Symphony"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors"

            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Description</label>
            <textarea
              rows={4}
              placeholder="Describe your event..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors resize-none"

            />
          </div>

          {/* Two-column fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Artist Name</label>
              <input type="text" placeholder="e.g. ZARA VOLT" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Genre</label>
              <select className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white/50 outline-none focus:border-[#f72585]/50 transition-colors [&>option]:bg-[#141414] [&>option]:text-white">
                <option>Select Genre</option>
                <option>EDM</option>
                <option>TECHNO</option>
                <option>POP</option>
                <option>ROCK</option>
                <option>JAZZ</option>
                <option>BASS</option>
                <option>HIP HOP</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Event Date</label>
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/50 outline-none focus:border-[#f72585]/50 transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Duration</label>
              <input type="text" placeholder="e.g. 3h 30min" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Location</label>
              <input type="text" placeholder="e.g. Mumbai Arena, India" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Total Seats</label>
              <input type="number" placeholder="e.g. 5000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Ticket Price (₹)</label>
              <input type="number" placeholder="e.g. 1499" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Event Poster</label>
              <label className="flex flex-col items-center justify-center w-full h-28 bg-white/5 border-2 border-dashed border-white/10 rounded-xl cursor-pointer hover:border-[#f72585]/50 transition-colors">
                <span className="text-2xl mb-1">📷</span>
                <span className="text-xs text-white/40">Click to upload poster image</span>
                <span className="text-[10px] text-white/20 mt-1">PNG, JPG up to 5MB</span>
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-4 bg-[#f72585] text-white font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(247,37,133,0.5)] transition-all duration-300 text-sm">
              Create Event
            </button>
            <Link to="/admin/events" className="px-8 py-4 bg-white/5 border border-white/10 text-white/60 font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all text-sm">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
