import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      // Force muted to ensure autoplay works
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Video autoplay failed:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/30 via-deep-space/60 to-deep-space z-10" />
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          poster="https://picsum.photos/seed/cyberpunk/1920/1080"
          className="w-full h-full object-cover opacity-50"
          src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
        >
          {/* Fallback for browsers that don't support video */}
          <img 
            src="https://picsum.photos/seed/cyberpunk/1920/1080" 
            alt="Cinematic Background" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-4">
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-neon-teal/20 hover:border-neon-teal transition-all group"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={20} className="group-hover:text-neon-teal transition-colors" /> : <Play size={20} className="group-hover:text-neon-teal transition-colors" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-neon-teal/20 hover:border-neon-teal transition-all group"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={20} className="group-hover:text-neon-teal transition-colors" /> : <Volume2 size={20} className="group-hover:text-neon-teal transition-colors" />}
        </button>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-neon-teal font-mono text-sm md:text-base tracking-[0.2em] mb-4 uppercase">
            The Algorithmic Edge
          </h2>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Where Imagination <br />
            <span className="text-gradient-magenta">Becomes Reality</span>
          </h1>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-neon-teal/30 rounded-full overflow-hidden transition-all hover:border-neon-teal hover:bg-neon-teal/10"
          >
            <span className="relative z-10 font-sans font-semibold tracking-wide">Get Your Edge</span>
            <ArrowRight className="w-5 h-5 text-neon-teal group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-linear-to-r from-neon-teal/0 via-neon-teal/10 to-neon-teal/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-teal rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
