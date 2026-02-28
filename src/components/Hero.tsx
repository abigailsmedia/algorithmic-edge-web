import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-deep-space">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="h-full w-full object-cover opacity-50"
          // This tells the browser to load the video immediately
          fetchpriority="high"
        >
          {/* Ensure the name below matches your file in the public folder exactly */}
          <source src="/hero-video-loop-low.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay to make your text pop against the video */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
          The <span className="text-neon-teal">Algorithmic</span> <br />
          <span className="text-neon-magenta">Edge</span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          High-performance AI integration and cinematic digital storytelling.
        </p>

        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button 
  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
  className="bg-neon-teal px-8 py-4 text-black font-bold hover:bg-white transition-all"
>
  Explore Services
</button>
          <button 
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  className="border border-white px-8 py-4 text-white font-medium hover:bg-white/10 transition-all"
>
  Contact Us
</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
