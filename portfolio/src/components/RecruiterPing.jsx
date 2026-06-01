import { useState } from 'react';
import { Send, CheckCircle, TerminalSquare, Loader2, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function RecruiterPing() {
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('sending');

    try {
      // THE WEB3FORMS API CALL
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // ⚠️ REPLACE THIS WITH THE KEY YOU GOT IN YOUR EMAIL
          access_key: "b7c19887-4b57-46bc-a429-4c7f37a85b06", 
          subject: "New Contact Ping from AI Portfolio",
          from_name: "Portfolio Terminal",
          email: email,
          message: note || "No additional note provided."
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setEmail('');
          setNote('');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-20 relative z-20">
      
      {/* Outer Glowing Border */}
      <div className="relative group rounded-3xl p-[1px] overflow-hidden bg-gradient-to-r from-violet-200 to-fuchsia-200 dark:from-gray-800 dark:to-gray-800 hover:from-violet-500 hover:to-fuchsia-500 transition-colors duration-500 shadow-xl hover:shadow-violet-500/20">
        
        {/* Inner Glass Box */}
        <div className="relative bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
          
          {/* Left Text Side - NEUTRALIZED COPY */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 text-[10px] uppercase font-black tracking-widest font-mono mb-4">
              <TerminalSquare size={14} />
              Secure_Connection
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-violet-950 dark:text-white tracking-tight mb-2">
              Let's connect.
            </h3>
            <p className="text-violet-600 dark:text-gray-400 text-sm md:text-base font-medium">
              Leave your email and a brief message. I'll reach out to you within 24 hours to discuss potential opportunities or collaborations.
            </p>
          </div>

          {/* Right Form Side */}
          <form 
            onSubmit={handleSubmit} 
            className="w-full lg:w-auto flex flex-col gap-3 relative"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Email address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status !== 'idle'}
                required
                className="w-full sm:w-64 bg-gray-50/50 dark:bg-gray-900/50 border border-violet-100 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all disabled:opacity-50"
              />
              <input 
                type="text" 
                placeholder="Short note (optional)" 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                disabled={status !== 'idle'}
                className="w-full sm:w-64 bg-gray-50/50 dark:bg-gray-900/50 border border-violet-100 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all disabled:opacity-50"
              />
            </div>

            {/* REDESIGNED BUTTON: Sleek, horizontal, high-tech */}
            <div className="flex justify-end mt-2">
              <Magnetic strength={0.3}>
                <button 
                  type="submit"
                  disabled={status !== 'idle' || !email}
                  className={`group relative flex items-center justify-center gap-3 px-8 py-3 rounded-full font-bold text-white overflow-hidden transition-all duration-300 w-full sm:w-auto ${
                    status === 'success' 
                      ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                      : status === 'error'
                      ? 'bg-red-500'
                      : 'bg-violet-950 dark:bg-white text-white dark:text-gray-950 shadow-lg hover:scale-105'
                  } disabled:cursor-not-allowed`}
                >
                  {/* Subtle Hover Glow Layer for normal state */}
                  {status === 'idle' && (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}

                  <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-wider">
                    {status === 'idle' && (
                      <>
                        Initialize Ping <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        Transmitting <Loader2 size={16} className="animate-spin" />
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        Data Sent <CheckCircle size={16} />
                      </>
                    )}
                    {status === 'error' && 'Failed to Send'}
                  </span>
                </button>
              </Magnetic>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}