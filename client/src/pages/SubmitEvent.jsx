import { Link } from 'react-router-dom';
import { pendingEvents, currentUser } from '../data/mockData';
import Footer from '../components/Footer';

const statusStyles = {
  pending: { bg: 'bg-amber-500/10 border-amber-500/20', text: 'text-amber-400', label: '⏳ Pending Review' },
  approved: { bg: 'bg-green-500/10 border-green-500/20', text: 'text-green-400', label: '✓ Approved' },
  rejected: { bg: 'bg-red-500/10 border-red-500/20', text: 'text-red-400', label: '✗ Rejected' },
};

const mySubmissions = pendingEvents.filter(e => e.submittedBy === 'Arjun Mehta');

export default function SubmitEvent() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="px-6 md:px-16 pt-10 md:pt-16 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight bg-gradient-to-r from-[#f72585] to-[#00f5ff] bg-clip-text text-transparent animate-fade-in-up">Submit Your Event</h1>
              <p className="text-white/40 mt-2 animate-fade-in-up animation-delay-200">Create an event and submit it for admin approval</p>
            </div>
          </div>

          {/* Create Event Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-12 animate-fade-in-up animation-delay-300">
            <h2 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f72585]" />
              New Event Submission
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Event Title *</label>
                <input type="text" placeholder="e.g. Neon Nights Festival" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
              </div>

              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Description *</label>
                <textarea rows={3} placeholder="Tell us about your event..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors resize-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Artist / Performer *</label>
                  <input type="text" placeholder="e.g. DJ SPARK" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Genre *</label>
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
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Event Date *</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/50 outline-none focus:border-[#f72585]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Duration</label>
                  <input type="text" placeholder="e.g. 3h 30min" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Venue / Location *</label>
                  <input type="text" placeholder="e.g. Mumbai Arena, India" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Total Seats</label>
                  <input type="number" placeholder="e.g. 3000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Ticket Price (₹)</label>
                  <input type="number" placeholder="e.g. 1199" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-[#f72585]/50 transition-colors" />
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

              {/* Info notice */}
              <div className="bg-[#00f5ff]/5 border border-[#00f5ff]/15 rounded-xl p-4 flex gap-3">
                <span className="text-[#00f5ff] text-lg shrink-0">ℹ️</span>
                <p className="text-xs text-white/50 leading-relaxed">Your event will be reviewed by the VOLT admin team. Once approved, it will go live on the platform and users can book tickets. This usually takes 1-2 business days.</p>
              </div>

              <button className="px-8 py-4 bg-[#f72585] text-white font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(247,37,133,0.5)] transition-all duration-300 text-sm">
                ⚡ Submit for Review
              </button>
            </div>
          </div>

          {/* My Submissions */}
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-white mb-6 animate-fade-in-up">My Submissions</h2>

            {mySubmissions.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
                <p className="text-white/30 text-sm">You haven't submitted any events yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {mySubmissions.map((event, i) => {
                  const st = statusStyles[event.approvalStatus];
                  return (
                    <div key={event._id} className={`${st.bg} border rounded-2xl p-5 animate-fade-in-up`} style={{ animationDelay: `${i * 100 + 400}ms` }}>
                      <div className="flex flex-col md:flex-row gap-5">
                        <img src={event.eventImage} alt={event.title} className="w-full md:w-32 h-32 md:h-24 rounded-xl object-cover brightness-75 shrink-0" />
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between items-start gap-2">
                            <div>
                              <h3 className="font-bold text-white uppercase tracking-tight">{event.title}</h3>
                              <p className="text-sm text-[#00f5ff] mt-0.5">{event.eventArtistName}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${st.text} bg-white/5`}>
                              {st.label}
                            </span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-4 text-xs text-white/40">
                            <span>📅 {event.eventDate}</span>
                            <span>📍 {event.eventLocation}</span>
                            <span>🎫 ₹{event.ticketPrice.toLocaleString()}</span>
                            <span>Submitted: {event.submittedAt}</span>
                          </div>
                          {event.approvalStatus === 'rejected' && event.rejectionNote && (
                            <div className="mt-3 bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-xs text-red-400">
                              <span className="font-bold">Reason:</span> {event.rejectionNote}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
