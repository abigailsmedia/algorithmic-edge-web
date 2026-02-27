import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "The Social Edge",
    level: "Starter",
    price: "$499",
    priceLabel: "Starting at",
    features: [
      "5 high-fidelity social assets",
      "Scroll-stopping visuals",
      "1 round of human-led refinement"
    ],
    goal: "Perfect for small brands needing a visual refresh.",
    color: "text-neon-teal",
    borderColor: "border-neon-teal/30",
    buttonHover: "group-hover:bg-neon-teal group-hover:border-neon-teal"
  },
  {
    name: "The Identity Edge",
    level: "Professional",
    price: "$1,499",
    priceLabel: "Starting at",
    features: [
      "Full brand visual suite (15+ assets)",
      "Logo & Identity design",
      "Surreal storytelling imagery",
      "Cinematic backgrounds"
    ],
    goal: "Complete visual transformation for growing companies.",
    color: "text-neon-magenta",
    borderColor: "border-neon-magenta/30",
    popular: true,
    buttonHover: "group-hover:bg-neon-magenta group-hover:border-neon-magenta"
  },
  {
    name: "The Custom Edge",
    level: "Enterprise",
    price: "Custom Quote",
    priceLabel: "Contact for",
    features: [
      "Large-scale campaign assets",
      "Interactive 3D illustrations",
      "Cinematic video reels",
      "Dedicated creative partner"
    ],
    goal: "High-ticket clients who need a dedicated creative partner.",
    color: "text-neon-gold",
    borderColor: "border-neon-gold/30",
    buttonHover: "group-hover:bg-neon-gold group-hover:border-neon-gold"
  }
];

export default function InvestmentSection() {
  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-deep-space relative border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Investment <span className="text-gradient-teal">Tiers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent pricing for high-fidelity AI generation. Choose the edge that fits your scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm border ${tier.borderColor} rounded-2xl p-8 flex flex-col hover:bg-white/10 transition-colors group`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-magenta text-black font-mono text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,255,0.5)]">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`font-mono text-sm uppercase tracking-widest mb-2 ${tier.color}`}>{tier.level}</h3>
                <h4 className="font-display text-2xl font-bold mb-4">{tier.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-sm">{tier.priceLabel}</span>
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                </div>
              </div>

              <div className="flex-grow mb-8">
                <p className="text-gray-300 text-sm mb-6 italic border-l-2 border-white/20 pl-4">
                  "{tier.goal}"
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <Check className={`w-4 h-4 mt-0.5 ${tier.color} shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg border border-white/20 font-mono text-sm uppercase tracking-wider transition-all hover:text-black ${tier.buttonHover}`}
              >
                Select Tier
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
