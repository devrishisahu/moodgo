import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Use basic static state for the chat to simulate VoltBot without a real backend/API
const initialMessages = [
  { id: 1, text: "Hey! I'm VoltBot ⚡ Your AI concert companion. Ask me anything about upcoming events, artists, or ticketing!", sender: 'bot' }
];

export default function VoltBot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "That sounds electrifying! 🎸 I recommend checking out the 'Neon Nights' event if you're into that vibe.",
        "I can help you book tickets for that! Check the Events page.",
        "ZARA VOLT is touring next month. Grab your tickets before they sell out!",
        "Hmm, I'm still learning about that. But feel the voltage and explore our main stage! ⚡",
        "Your wallet currently holds 500 Volts. Want to use them for a discount?"
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { id: Date.now() + 1, text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <div className="flex-1 px-4 md:px-16 pt-10 pb-24 md:pb-10 flex flex-col">
        <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in-up w-full">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f72585] to-[#00f5ff] mb-4 shadow-[0_0_40px_rgba(0,245,255,0.3)]">
              <span className="text-4xl">🤖</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter bg-gradient-to-r from-[#f72585] to-[#00f5ff] bg-clip-text text-transparent">VoltBot</h1>
            <p className="text-white/40 mt-2">Your personal AI stage assistant</p>
          </div>

          {/* Chat Window */}
          <div className="w-full flex-1 min-h-[400px] max-h-[600px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col animate-fade-in-up animation-delay-200">
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-sm md:text-base shadow-lg ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-[#f72585] to-[#ff007f] text-white rounded-br-none' 
                      : 'bg-[#1a1a1a] border border-white/10 text-white/90 rounded-bl-none'
                  }`}>
                    {msg.sender === 'bot' && <span className="mr-2 text-lg inline-block align-middle">⚡</span>}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10 backdrop-blur-md">
              <form onSubmit={handleSend} className="flex gap-3 relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask VoltBot anything about events..." 
                  className="flex-1 bg-[#0a0a0a] border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#00f5ff]/50 transition-colors shadow-inner"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim()}
                  className="px-6 py-4 bg-gradient-to-r from-[#f72585] to-[#00f5ff] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send 🚀
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
