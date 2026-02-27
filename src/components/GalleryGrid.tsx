import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const specialties = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    // Update these paths to match your uploaded filenames
    image: "/brand-identity-design-resized.webp", 
    prompt: "Beyond logos. We build entire visual universes that define your brand’s DNA.",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 2,
    title: "Surreal Storytelling",
    category: "Editorial",
    image: "/surreal-brand-storytelling-resized.webp",
    prompt: "Dreamlike visuals for high-concept campaigns. If you can think it, we can manifest it.",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 3,
    title: "Collaborative Workflow",
    category: "Process",
    image: "/collaborative-workflow-specialist-resized.webp",
    prompt: "Human-led, machine-powered. Our proprietary process ensures your vision stays in the driver's seat.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    title: "Social Discovery Reels",
    category: "Social",
    image: "/social-discovery-reels.webp",
    prompt: "Vertical-first content engineered to trigger the algorithm and stop the scroll.",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 5,
    title: "High-Fidelity Concept Art",
    category: "Concept",
    image: "/high-fidelity-concept-art-resized.webp",
    prompt: "From rough idea to cinematic blueprint. Visualize your project with movie-quality detail instantly.",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 6,
    title: "Authentic Portraiture",
    category: "Portrait",
    image: "/authentic-portraiture-resized.webp",
    prompt: "AI-generated humans that actually look... human. Natural lighting, genuine emotion, zero uncanny valley.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 7,
    title: "Interactive 3D Illustrations",
    category: "3D Design",
    image: "/interactive-3d-illustrations-resized.webp",
    prompt: "Add depth to your digital presence with complex, high-res 3D assets designed for modern web layouts.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 8,
    title: "AI-Powered Ad Creative",
    category: "Advertising",
    image: "/ai-powered-ad-creative.webp",
    prompt: "Data-informed visuals optimized for high click-through rates and brand resonance.",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 9,
    title: "Cinematic Landscapes",
    category: "Environment",
    image: "/cineematic-landscapes-resized.webp",
    prompt: "Expansive, hero-level environments that provide a breathtaking backdrop for your brand's message.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 10,
    title: "Commercial-Safe Generation",
    category: "Enterprise",
    image: "/commercial-safe-generation.webp",
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
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white">
            Curated <span className="text-neon-teal">Specialties</span>
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
                {/* Reference images directly from public folder */}
                <motion.img 
                  layoutId={`gallery-image-${item.id}`}
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </picture>
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6"
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1, transition: { duration: 0.3 } }
                }}
              >
                <span className="text-neon-teal font-mono text-xs mb-2 uppercase tracking-widest">{item.category}</span>
                <h3 className="font-display text-2xl font-bold mb-3 text-white">{item.title}</h3>
                
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10">
                  <p className="font-mono text-xs text-gray-300 line-clamp-2">
                    <span className="text-yellow-400 mr-2">$</span>
                    {item.prompt}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

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
              <motion.img
                layoutId={`gallery-image-${selectedItem.id}`}
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-full object-contain max-h-[85vh]"
              />
              
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white z-30"
              >
                <X size={24} />
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                <span className="text-neon-teal font-mono text-xs uppercase tracking-widest mb-2 block">{selectedItem.category}</span>
                <h3 className="text-3xl font-display font-bold text-white mb-2">{selectedItem.title}</h3>
                <p className="font-mono text-gray-400 text-sm max-w-2xl border-l-2 border-yellow-400 pl-4">
                  {selectedItem.prompt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
