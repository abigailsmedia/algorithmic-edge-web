import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-deep-space relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent z-10" />
              {/* Placeholder for African American woman in teal v-neck and jeans */}
              <img 
                src="/kims-office.webp" 
                alt="Founder of The Algorithmic Edge" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-neon-teal rounded-br-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-neon-magenta rounded-tl-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h4 className="text-neon-teal font-mono tracking-widest uppercase mb-2">The Founder</h4>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Bridging the Gap Between <br />
              <span className="text-gradient-magenta">Soul & Silicon</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                "I founded The Algorithmic Edge with a simple belief: AI shouldn't replace human creativity; it should amplify it."
              </p>
              <p>
                With over a decade of experience in traditional art direction and a deep passion for emerging technology, I've dedicated my career to mastering the delicate balance of prompt engineering and artistic intent.
              </p>
              <p>
                We don't just generate images. We craft visual languages that speak to your audience with the authenticity of a human touch and the precision of machine intelligence.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="font-display text-xl font-bold">Kimberly Johnson</p>
              <p className="text-neon-gold font-mono text-sm">Founder & Lead Creative Technologist</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
