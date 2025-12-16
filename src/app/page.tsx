'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* OVERLAYS */}
      <div className="grain" />
      <div className="scanlines" />
      
      {/* STATUS TICKER */}
      <div className="fixed top-4 right-4 z-50 font-mono text-[10px] text-accent bg-black/90 border border-accent/30 px-4 py-2 flex gap-4">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"/>
          OPERATIONAL
        </span>
        <span className="text-white/30">|</span>
        <span>KYIV</span>
        <span className="text-white/30">|</span>
        <span>SIGNAL LOCKED</span>
      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/videos/smoke.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 topo-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        <div className="relative z-10 text-center">
          <div className="mb-6 text-[10px] font-mono tracking-[0.3em] text-accent/80 border border-accent/30 inline-block px-4 py-2">
            MINIATURE RADAR SYSTEMS FOR DRONES
          </div>
          <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-4 tracking-tight">
            SEE THE UNSEEN.
          </h1>
          <p className="font-orbitron text-lg tracking-[0.5em] text-white/50">VALKYRIE DYNAMICS</p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="min-h-screen flex items-center px-8 md:px-16 relative">
        <div className="absolute inset-0 topo-bg" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-[10px] font-mono text-accent/60 tracking-widest mb-4">// PROBLEM</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            MODERN WARFARE<br/>
            <span className="text-white/40">IS BLIND.</span>
          </h2>
          <p className="font-mono text-white/60 mb-4 leading-relaxed">
            Standard optics fail in fog, smoke, and night operations. When the camera dies, the pilot is blind. The target survives.
          </p>
          <p className="font-mono text-accent border-l-2 border-accent/50 pl-4">
            We solve the blindness.
          </p>
        </div>
      </section>

      {/* AEGIS-1 */}
      <section className="min-h-screen flex items-center justify-center px-8 py-24">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Product image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/5 blur-3xl" />
            <div className="relative border border-white/10 bg-gradient-to-br from-charcoal to-black p-8">
              <Image 
                src="/images/aegis-1.png" 
                alt="Aegis-2"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-accent/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-accent/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-accent/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-accent/50" />
          </div>
          
          {/* Specs */}
          <div>
            <p className="text-[10px] font-mono text-accent/60 tracking-widest mb-4">// SYSTEM</p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8">
              AEGIS-2
            </h2>
            
            <div className="space-y-4 mb-8">
              {[
                ['TYPE', 'MINIATURE RADAR'],
                ['WEIGHT', '< 300g'],
                ['RANGE', '100m'],
                ['INTEGRATION', 'AUTONOMOUS / FPV'],
                ['STATUS', 'FIELD DEPLOYMENT Q1 2026'],
              ].map(([k,v])=>(
                <div key={k} className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-xs text-white/40">{k}</span>
                  <span className="font-mono text-sm text-white/90">{v}</span>
                </div>
              ))}
            </div>
            
            {/* <p className="text-xs text-accent tracking-widest text-center">
              ALL-WEATHER • HARD-KILL 
            </p> */}
          </div>
        </div>
      </section>

{/* FIELD TESTED WITH */}
      <section className="py-24 px-8 bg-charcoal relative">
        <div className="absolute inset-0 topo-bg" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[10px] font-mono text-accent/60 tracking-widest mb-12 text-center">// FIELD TESTED WITH</p>
          
          {/* CHANGED: Used flex + justify-center to center items regardless of count */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              // { src: '/images/partners/3ab.png', name: '3rd Assault' },
              // { src: '/images/partners/AZOV_logo.svg', name: 'Azov' },
              // { src: '/images/partners/nato.png', name: 'NATO' },
              { src: '/images/partners/edth_logo.png', name: 'EDTH' },
            ].map((partner) => (
              <div 
                key={partner.name} 
                // CHANGED: Replaced w-full with w-64 to keep boxes uniform
                className="w-64 py-8 px-6 border border-white/10 hover:border-accent/30 transition-all bg-black/30 flex items-center justify-center group"
              >
                <img 
                  src={partner.src} 
                  alt={partner.name}
                  className="h-12 w-auto object-contain brightness-15 invert opacity-40 group-hover:opacity-70 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
        <div className="relative z-10">
          <p className="text-[10px] font-mono text-accent/60 tracking-widest mb-4">// INITIATE</p>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12">JOIN THE MISSION</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="ghost-btn">[ INVESTORS: REQUEST BRIEFING ]</button>
            <button className="ghost-btn">[ ENGINEERS: JOIN THE UNIT ]</button>
          </div>
          <p className="mt-16 text-[10px] font-mono text-white/30"> KYIV, UA • VILNIUS, LT • USA, SF</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-orbitron text-xs tracking-wider text-white/30">VALKYRIE DYNAMICS</span>
          <span className="text-[10px] font-mono text-white/20">© 2025</span>
        </div>
      </footer>
    </main>
  )
}