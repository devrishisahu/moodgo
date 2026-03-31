import { useParams, Link } from 'react-router-dom';
import { events, comments } from '../data/mockData';
import Footer from '../components/Footer';

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find(e => e._id === id) || events[0];

  const statusColors = {
    upcoming: 'bg-green-500/20 text-green-400',
    ongoing: 'bg-[#f72585]/20 text-[#f72585]',
    expired: 'bg-white/10 text-white/40',
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={event.eventImage} alt={event.title} className="w-full h-full object-cover brightness-[0.3] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-16 right-6 z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${statusColors[event.status]}`}>{event.status}</span>
            <span className="px-3 py-1 rounded-full bg-[#00f5ff]/10 text-[#00f5ff] text-[10px] font-bold uppercase">{event.genre}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white animate-fade-in-up">{event.title}</h1>
          <p className="text-lg text-[#00f5ff] font-semibold mt-2 animate-fade-in-up animation-delay-200">{event.eventArtistName}</p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="px-6 md:px-16 mt-10 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left - Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">About This Event</h2>
              <p className="text-white/60 leading-relaxed">{event.description}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Date', value: event.eventDate, icon: '📅' },
                { label: 'Location', value: event.eventLocation, icon: '📍' },
                { label: 'Duration', value: event.duration, icon: '⏱️' },
                { label: 'Seats', value: event.totalSeats.toLocaleString(), icon: '💺' },
                { label: 'Price', value: `₹${event.ticketPrice.toLocaleString()}`, icon: '💰' },
                { label: 'Status', value: event.status.toUpperCase(), icon: '🔵' },
              ].map((d) => (
                <div key={d.label} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                  <span className="text-lg">{d.icon}</span>
                  <p className="text-xs text-white/40 uppercase tracking-wider mt-2">{d.label}</p>
                  <p className="text-white font-semibold mt-1">{d.value}</p>
                </div>
              ))}
            </div>

            {/* Comments */}
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-6">Reviews</h2>
              <div className="space-y-4">
                {comments.map((c) => (
                  <div key={c._id} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f72585] to-[#00f5ff] flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {c.user.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-white font-semibold text-sm">{c.user.name}</p>
                          <div className="flex gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-xs ${i < c.rating ? 'text-amber-400' : 'text-white/15'}`}>★</span>
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-white/30">{c.createdAt}</span>
                      </div>
                      <p className="text-sm text-white/50 mt-2">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Comment */}
              <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-white mb-3">Leave a Review</h3>
                <textarea
                  rows={3}
                  placeholder="Share your experience..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#f72585]/50 resize-none"

                />
                <button className="mt-3 px-6 py-2 bg-[#f72585] text-white text-sm font-bold rounded-lg hover:shadow-[0_0_20px_rgba(247,37,133,0.4)] transition-all">Submit</button>
              </div>
            </div>
          </div>

          {/* Right - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
              <div className="text-center">
                <p className="text-xs text-white/40 uppercase tracking-widest">Price per ticket</p>
                <p className="text-4xl font-black text-[#f72585] mt-2">₹{event.ticketPrice.toLocaleString()}</p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-2">Number of Seats</label>
                <div className="flex items-center justify-center gap-4">
                  <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-lg">−</button>
                  <span className="text-2xl font-bold text-white">2</span>
                  <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-lg">+</button>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-2">Coupon Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#f72585]/50"

                  />
                  <button className="px-4 py-2 bg-white/10 text-white text-xs font-bold rounded-lg hover:bg-white/15 transition-all uppercase tracking-wider">Apply</button>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Subtotal</span>
                  <span className="text-white">₹{(event.ticketPrice * 2).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Discount</span>
                  <span className="text-green-400">-₹0</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
                  <span className="text-white">Total</span>
                  <span className="text-[#f72585]">₹{(event.ticketPrice * 2).toLocaleString()}</span>
                </div>
              </div>

              <Link
                to={`/booking/${event._id}`}
                className="block w-full text-center py-4 bg-[#f72585] text-white font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_rgba(247,37,133,0.5)] transition-all duration-300 animate-glow-pulse"
              >
                Book Now
              </Link>

              <p className="text-[10px] text-white/20 text-center">Instant confirmation • Secure payment</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
