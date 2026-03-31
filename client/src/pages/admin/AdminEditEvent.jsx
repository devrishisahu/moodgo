import { useParams, Link } from 'react-router-dom';
import { events } from '../../data/mockData';
import AdminLayout from '../../components/AdminLayout';

export default function AdminEditEvent() {
  const { id } = useParams();
  const event = events.find((e) => e._id === id) || events[0];

  return (
    <AdminLayout current="/admin/events">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <Link to="/admin/events" className="text-white/40 hover:text-white text-sm flex items-center gap-2 mb-2 transition-colors">
            ← Back
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white animate-fade-in-up">EDIT EVENT</h1>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Event Title</label>
            <input type="text" defaultValue={event.title} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#f72585]/50 transition-colors" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Description</label>
            <textarea rows={4} defaultValue={event.description} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#f72585]/50 transition-colors resize-none" />
          </div>

          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Artist Name</label>
            <input type="text" defaultValue={event.eventArtistName} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#f72585]/50 transition-colors" />
          </div>

          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Genre</label>
            <select defaultValue={event.genre} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white/50 outline-none focus:border-[#f72585]/50 transition-colors [&>option]:bg-[#141414] [&>option]:text-white">
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
            <input type="text" defaultValue={event.eventDate} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#f72585]/50 transition-colors" />
          </div>

          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Duration</label>
            <input type="text" defaultValue={event.duration} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#f72585]/50 transition-colors" />
          </div>

          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Location</label>
            <input type="text" defaultValue={event.eventLocation} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#f72585]/50 transition-colors" />
          </div>

          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Total Seats</label>
            <input type="number" defaultValue={event.totalSeats} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#f72585]/50 transition-colors" />
          </div>

          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Ticket Price (₹)</label>
            <input type="number" defaultValue={event.ticketPrice} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-[#f72585]/50 transition-colors" />
          </div>

          <div>
            <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Status</label>
            <select defaultValue={event.status} className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white/50 outline-none focus:border-[#f72585]/50 transition-colors [&>option]:bg-[#141414] [&>option]:text-white">
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="expired">Expired</option>
            </select>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex justify-end gap-4">
          <Link to="/admin/events" className="px-6 py-3 bg-white/5 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all text-sm">Cancel</Link>
          <button className="px-8 py-3 bg-[#f72585] text-white font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_20px_rgba(247,37,133,0.4)] transition-all text-sm">Save Changes</button>
        </div>
      </div>
    </AdminLayout>
  );
}
