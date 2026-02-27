import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const specialties = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://picsum.photos/seed/identity/600/800",
    prompt: "Beyond logos. We build entire visual universes that define your brand’s DNA.",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 2,
    title: "Surreal Storytelling",
    category: "Editorial",
    image: "https://picsum.photos/seed/surreal2/800/600",
    prompt: "Dreamlike visuals for high-concept campaigns. If you can think it, we can manifest it.",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 3,
    title: "Collaborative Workflow",
    category: "Process",
    image: "https://picsum.photos/seed/collab/600/600",
    prompt: "Human-led, machine-powered. Our proprietary process ensures your vision stays in the driver's seat.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    title: "Social Discovery Reels",
    category: "Social",
    image: "https://picsum.photos/seed/social/600/800",
    prompt: "Vertical-first content engineered to trigger the algorithm and stop the scroll.",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 5,
    title: "High-Fidelity Concept Art",
    category: "Concept",
    image: "https://picsum.photos/seed/concept/800/800",
    prompt: "From rough idea to cinematic blueprint. Visualize your project with movie-quality detail instantly.",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 6,
    title: "Authentic Portraiture",
    category: "Portrait",
    image: "https://picsum.photos/seed/portrait/600/600",
    prompt: "AI-generated humans that actually look... human. Natural lighting, genuine emotion, zero uncanny valley.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 7,
    title: "Interactive 3D Illustrations",
    category: "3D Design",
    image: "https://picsum.photos/seed/3d/600/600",
    prompt: "Add depth to your digital presence with complex, high-res 3D assets designed for modern web layouts.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 8,
    title: "AI-Powered Ad Creative",
    category: "Advertising",
    image: "https://picsum.photos/seed/ad/800/600",
    prompt: "Data-informed visuals optimized for high click-through rates and brand resonance.",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 9,
    title: "Cinematic Landscapes",
    category: "Environment",
    image: "https://picsum.photos/seed/landscape2/600/600",
    prompt: "Expansive, hero-level environments that provide a breathtaking backdrop for your brand's message.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 10,
    title: "Commercial-Safe Generation",
    category: "Enterprise",
    image: "https://picsum.photos/seed/commercial/600/600",
    prompt: "Copyright-cleared assets generated on licensed models. Safe for global campaigns and broadcast use.",
    span: "md:col-span-1 md:row-span-1"
  }
];

export default function GalleryGrid() {
  const [selectedItem, setSelectedItem] = useState<typeof specialties[0] | null>(null);

  return (
    <section id="work" className="py-24 px-6 bg-deep-space">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Curated <span className="text-gradient-teal">Specialties</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Explore our diverse range of AI-generated visual assets, tailored for every industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {specialties.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={`gallery-item-${item.id}`}
              onClick={() => setSelectedItem(item)}
              initial="initial"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: index * 0.1 }
                },
                hover: { 
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" }
                }
              }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
            >
              <picture className="block w-full h-full">
                <source srcSet={`${item.image}.webp`} type="image/webp" />
                <motion.img 
                  layoutId={`gallery-image-${item.id}`}
                  src={item.image} 
                  alt={item.title} 
                  variants={{
                    hover: { 
                      scale: 1.05, 
                      y: 4, // Slight parallax shift
                      transition: { duration: 0.4, ease: "easeOut" }
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </picture>
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6"
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1, transition: { duration: 0.3 } }
                }}
              >
                <motion.span 
                  className="text-neon-teal font-mono text-xs mb-2 uppercase tracking-widest"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.05 } }
                  }}
                >
                  {item.category}
                </motion.span>
                <motion.h3 
                  className="font-display text-2xl font-bold mb-3"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }
                  }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.15 } }
                  }}
                >
                  <p className="font-mono text-xs text-gray-300 line-clamp-2">
                    <span className="text-neon-gold mr-2">$</span>
                    {item.prompt}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-neon-teal/30 rounded-full text-neon-teal font-mono text-sm tracking-wider hover:bg-neon-teal/10 hover:border-neon-teal transition-all"
          >
            See the Future
          </motion.button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              layoutId={`gallery-item-${selectedItem.id}`}
              className="relative max-w-6xl w-full max-h-[90vh] rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* High Res Image (Lazy Loaded on Click) */}
              <picture className="block w-full h-full">
                <source srcSet={`${selectedItem.image.replace(/\/\d+\/\d+$/, '/1920/1080')}.webp`} type="image/webp" />
                <motion.img
                  layoutId={`gallery-image-${selectedItem.id}`}
                  src={selectedItem.image.replace(/\/\d+\/\d+$/, '/1920/1080')} 
                  alt={selectedItem.title}
                  className="w-full h-full object-contain max-h-[85vh]"
                />
              </picture>
              
              {/* Watermark */}
              <div className="absolute bottom-8 right-8 text-white/10 font-display font-bold text-8xl pointer-events-none select-none z-20">
                AE
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors z-30"
              >
                <X size={24} />
              </button>
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <span className="text-neon-teal font-mono text-xs uppercase tracking-widest mb-2 block">{selectedItem.category}</span>
                      <h3 className="text-3xl font-display font-bold text-white mb-2">{selectedItem.title}</h3>
                      <p className="font-mono text-gray-400 text-sm max-w-2xl border-l-2 border-neon-gold pl-4">
                        <span className="text-neon-gold mr-2">$</span>
                        {selectedItem.prompt}
                      </p>
                    </div>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
