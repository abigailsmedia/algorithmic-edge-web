import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Zap } from 'lucide-react';

const advantages = [
  {
    icon: ShieldCheck,
    title: "Commercial Safety",
    description: "We exclusively use licensed training data models, ensuring your assets are copyright-safe and ready for global commercial campaigns without legal risk.",
    color: "text-neon-teal"
  },
  {
    icon: UserCheck,
    title: "Uncanny Valley Guarantee",
    description: "Our proprietary post-processing pipeline eliminates AI artifacts. We deliver authentic human textures, perfect hands, and soulful eyes that connect.",
    color: "text-neon-magenta"
  },
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Traditional photoshoots take weeks. We deliver campaign-ready, high-resolution assets in hours, giving you the agility to react to trends instantly.",
    color: "text-neon-gold"
  }
];

export default function AdvantageBlock() {
  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-teal/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className={`mb-6 p-4 rounded-full bg-white/5 w-fit ${adv.color} group-hover:scale-110 transition-transform duration-300`}>
                <adv.icon size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{adv.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
