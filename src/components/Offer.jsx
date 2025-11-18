function Offer() {
  const deliverables = [
    {
      title: "Master Soul Ties Sketch",
      desc:
        "Hand‑drawn portrait showing the most distinctive features of your soul‑bound partner based on their exact astrological signature.",
    },
    {
      title: "Cosmic Connection Profile",
      desc:
        "Personality, energy, and spiritual gifts revealed through planetary placements and key aspects.",
    },
    {
      title: "Destined Meeting Coordinates",
      desc:
        "Most likely places, situations, and timeframes you’ll cross paths — calculated from combined timing cycles.",
    },
    {
      title: "Soul Recognition Initials",
      desc:
        "First and last name initials derived from numerological analysis of chart rulers and dominant aspects.",
    },
    {
      title: "Sacred Bond Activation Guide",
      desc:
        "A practical ritual framework to raise your resonance and align with your meeting windows.",
    },
    
  ];

  return (
    <section id="order" className="relative py-20 md:py-28 bg-gradient-to-b from-[#0b1020] to-[#0b1020]/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What you receive</h2>
          <p className="mt-3 text-violet-100/80">A complete blueprint for recognition, timing, and alignment.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {deliverables.map((d, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <h3 className="text-white font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-violet-100/80">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-white/90">
            <p className="font-semibold">Limited Early Access</p>
            <p className="text-sm text-violet-100/80">Reserve your spot — delivery within 72 hours.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-violet-500 hover:bg-violet-400 text-white px-6 py-3 font-semibold transition-colors"
          >
            Begin your sketch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Offer;
