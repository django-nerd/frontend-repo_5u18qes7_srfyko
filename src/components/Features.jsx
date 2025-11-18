function Features() {
  const items = [
    {
      title: "Cosmic Resonance Principle",
      desc:
        "Mathematically derived vibrational signatures reveal the one soul that locks to yours — no guesswork, no mood-based variance.",
    },
    {
      title: "Soul Recognition Blueprint",
      desc:
        "Your North Node defines your path; their chart completes it. Experience instant recognition when paths cross.",
    },
    {
      title: "Destined Timing Activation",
      desc:
        "7th‑house configurations act as a cosmic timer, pinpointing windows when your meeting becomes inevitable.",
    },
    {
      title: "Ancient Mathematical Precision",
      desc:
        "Rooted in Babylonian astronomy and preserved in Enuma Anu Enlil — a system still accurate millennia later.",
    },
  ];

  return (
    <section id="why" className="relative py-20 md:py-28 bg-gradient-to-b from-[#0b1020] to-[#0b1020]/70">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why it works</h2>
          <p className="mt-3 text-violet-100/80">
            Traditional sketches depend on a reader’s emotional state. Our method removes human error by using immutable celestial data.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-violet-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
