import { motion } from 'motion/react';

const details = [
  {
    point: "Materiality",
    before: "Generic \"shiny plastic\" surfaces and flat gray desk.",
    after: "Textures of brushed carbon fiber, dark wood grain, and dark obsidian floor tiles.",
    value: "High-fidelity realism that escapes the \"uncanny valley\"."
  },
  {
    point: "Visual Branding",
    before: "Unbranded, generic desk surface.",
    after: "A subtle, legible THE ALGORITHMIC EDGE LAB engraving integrated into the desk.",
    value: "Proof that your generated assets can support specific branding and typography requirements."
  },
  {
    point: "Holographic Fidelity",
    before: "Simple, cheap blue wireframe globe outline.",
    after: "An intricate, complex data-network visualization with thousands of data nodes.",
    value: "Moving from \"stock-level\" visualization to high-budget cinematic detail."
  },
  {
    point: "Atmospheric Lighting",
    before: "Flat, aggressive, and oversaturated neon washes.",
    after: "Refined, rich volumetric lighting contrasted with a new, warm golden designer lamp.",
    value: "Professional-grade color grading and depth that guides the viewer's eye."
  }
];

export default function EdgeDetail() {
  return (
    <section className="py-24 px-6 bg-deep-space border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            The Edge in Detail: <span className="text-gradient-teal">From Generic to Branded</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            The prompt provides the concept; the engineer provides the precision. In this lab environment comparison, notice the meticulous refinements that elevate the visual from an 'AI rough draft' to a commercial-ready asset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Header Row (Hidden on mobile) */}
          <div className="hidden md:grid grid-cols-12 gap-6 pb-4 border-b border-white/10 text-sm font-mono text-neon-teal uppercase tracking-wider">
            <div className="col-span-2">Refinement Point</div>
            <div className="col-span-3">The "Before" (AI Draft)</div>
            <div className="col-span-3">The "After" (AE Masterpiece)</div>
            <div className="col-span-4">The Value for You</div>
          </div>

          {/* Data Rows */}
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-b border-white/5 hover:bg-white/5 transition-colors rounded-lg px-4 md:px-0"
            >
              <div className="col-span-1 md:col-span-2 font-display font-bold text-xl md:text-lg text-white">
                {item.point}
              </div>
              
              <div className="col-span-1 md:col-span-3">
                <span className="md:hidden text-xs font-mono text-gray-500 uppercase block mb-1">Before</span>
                <p className="text-gray-400 text-sm leading-relaxed">{item.before}</p>
              </div>
              
              <div className="col-span-1 md:col-span-3">
                <span className="md:hidden text-xs font-mono text-neon-magenta uppercase block mb-1">After</span>
                <p className="text-white text-sm leading-relaxed font-medium">{item.after}</p>
              </div>
              
              <div className="col-span-1 md:col-span-4">
                <span className="md:hidden text-xs font-mono text-neon-gold uppercase block mb-1">Value</span>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-full min-h-[1.5rem] bg-neon-gold/50 rounded-full" />
                  <p className="text-gray-300 text-sm leading-relaxed italic">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
