import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // In a real deployment, this URL would come from your Google Apps Script deployment
    // For now, we simulate a submission delay
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwMIL-GthoIy3s5kbMGMK1dicTYKKu9V6zNJ2h6eFGO9i30xMKGZ_Zfmov99cL3Rh9ZaA/exec";

    try {
      if (SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
        // Simulate success for demo purposes if no URL is set
        await new Promise(resolve => setTimeout(resolve, 2000));
      } else {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Required for Google Apps Script
        });
      }
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black pt-24 pb-12 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Stop Scrolling. <span className="text-gradient-teal">Start Scaling.</span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Let's discuss how we can transform your brand's visual identity with the power of AI.
          </p>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto bg-white/5 border border-neon-teal/50 rounded-2xl p-12 text-center"
            >
              <div className="w-20 h-20 bg-neon-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-neon-teal w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-4">Transmission Received</h3>
              <p className="text-gray-400 text-lg">
                Your vision has been logged in our system. Our team is analyzing the data and will initiate contact shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-neon-teal font-mono text-sm hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-neon-teal mb-2">NAME</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all text-white placeholder-gray-600"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-neon-teal mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all text-white placeholder-gray-600"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="edge" className="block text-sm font-mono text-neon-teal mb-2">WHICH "EDGE" FITS YOUR NEEDS?</label>
                  <select 
                    id="edge"
                    name="edge"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all text-white placeholder-gray-600 appearance-none"
                  >
                    <option value="" className="bg-deep-space text-gray-400">Select an option</option>
                    <option value="social" className="bg-deep-space">The Social Edge ($499+)</option>
                    <option value="identity" className="bg-deep-space">The Identity Edge ($1499+)</option>
                    <option value="custom" className="bg-deep-space">The Custom Edge (Bespoke)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="impact" className="block text-sm font-mono text-neon-teal mb-2">INTENDED IMPACT</label>
                  <select 
                    id="impact"
                    name="impact"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all text-white placeholder-gray-600 appearance-none"
                  >
                    <option value="" className="bg-deep-space text-gray-400">Select an option</option>
                    <option value="engagement" className="bg-deep-space">Stop the Scroll (Engagement)</option>
                    <option value="identity" className="bg-deep-space">Brand Overhaul (Identity)</option>
                    <option value="conversion" className="bg-deep-space">Product Launch (Conversion)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-mono text-neon-teal mb-2">THE "GO-LIVE" DATE</label>
                  <input 
                    type="date" 
                    id="date"
                    name="date"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all text-white placeholder-gray-600 [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label htmlFor="investment" className="block text-sm font-mono text-neon-teal mb-2">INVESTMENT RANGE</label>
                  <select 
                    id="investment"
                    name="investment"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all text-white placeholder-gray-600 appearance-none"
                  >
                    <option value="" className="bg-deep-space text-gray-400">Select a range</option>
                    <option value="low" className="bg-deep-space">$500–$1k</option>
                    <option value="medium" className="bg-deep-space">$1k–$5k</option>
                    <option value="high" className="bg-deep-space">$5k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="vision" className="block text-sm font-mono text-neon-teal mb-2">PROJECT VISION</label>
                <textarea 
                  id="vision"
                  name="vision"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all text-white placeholder-gray-600"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <div>
                <label htmlFor="source" className="block text-sm font-mono text-neon-teal mb-2">HOW DID YOU FIND THE LAB?</label>
                <input 
                  type="text" 
                  id="source"
                  name="source"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all text-white placeholder-gray-600"
                  placeholder="e.g. Facebook, Portfolio, Referral"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-teal to-blue-600 text-black font-bold py-4 rounded-lg mt-6 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span>Engineer My Vision</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-mono">
          <p>&copy; 2026 The Algorithmic Edge. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61586408150930" className="hover:text-neon-teal transition-colors">Instagram</a>
            <a href="#" className="hover:text-neon-teal transition-colors">Facebook</a>
            <a href="#" className="hover:text-neon-teal transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
