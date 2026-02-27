import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export default function EdgeSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 px-6 bg-deep-space relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">The <span className="text-gradient-gold">Edge</span> Difference</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Witness the transformation from raw concept to polished masterpiece. 
            Drag the slider to reveal the power of algorithmic precision.
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize border border-white/10 shadow-2xl select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image (Right Side - AI Masterpiece) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
  src="/after.webp" // <--- Updated
  alt="AI Masterpiece" 
  className="w-full h-full object-cover"
  draggable={false}
/>
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-neon-magenta/30">
              <span className="text-neon-magenta font-mono text-sm font-bold tracking-wider">AI MASTERPIECE</span>
            </div>
          </div>

          {/* Before Image (Left Side - Rough Concept) */}
          <div 
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
           <img 
  src="/before.webp" // <--- Updated
  alt="Rough Concept" 
  className="absolute inset-0 w-full h-full object-cover max-w-none"
  // Keep the width styling as is
  style={{ width: containerRef.current?.offsetWidth || '100%' }}
  draggable={false}
/>
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
              <span className="text-white font-mono text-sm font-bold tracking-wider">ROUGH PROMPT</span>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Laser Line */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_15px_#FFD700,0_0_30px_#FFD700] z-10" />

            {/* Glowing Handle */}
            <div className="relative z-20 w-12 h-12 bg-neon-gold rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.8),inset_0_0_10px_rgba(255,255,255,0.8)] border-2 border-white">
              <MoveHorizontal className="text-black w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
