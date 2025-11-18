import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/no-S8HKPA9ln9-NN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/70 via-[#0b1020]/40 to-[#0b1020]" />
      <div className="pointer-events-none absolute inset-0 "
           style={{
             background:
               'radial-gradient(60% 60% at 50% 20%, rgba(120, 119, 198, 0.35) 0%, rgba(15, 23, 42, 0) 60%), radial-gradient(40% 40% at 80% 20%, rgba(147, 51, 234, 0.25) 0%, rgba(15, 23, 42, 0) 50%)'
           }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-violet-200/80 bg-violet-400/10 border border-violet-400/20 px-3 py-1 rounded-full backdrop-blur">
            Soul Ties Sketch • Ancient Babylonian Method
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
            See the face of your cosmically destined partner
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-violet-100/90 max-w-xl">
            A category-of-one service that translates 5,000+ years of Babylonian astral mathematics into a precise hand‑drawn portrait of the soul you were tied to at birth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#process" className="inline-flex items-center justify-center rounded-xl bg-violet-500 hover:bg-violet-400 text-white px-6 py-3 font-semibold transition-colors">
              How it works
            </a>
            <a href="#order" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold border border-white/15 backdrop-blur transition-colors">
              Get your sketch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
