function Process() {
  const stages = [
    {
      title: "Stage 1: Cosmic Blueprint Analysis",
      desc:
        "Certified astro‑artists analyze your birth chart with authentic Babylonian methods to map Venus–Mars signatures, North Node contacts, and your 7th‑house ruler.",
    },
    {
      title: "Stage 2: Soul Tie Identification",
      desc:
        "We cross‑reference Enuma Anu Enlil principles to define your soulmate’s exact signature — sun, rising, and dominant planetary influences.",
    },
    {
      title: "Stage 3: Physical Translation",
      desc:
        "Metaphysical portraiture translates cosmic data into facial structure, gaze, and features for an accurate hand‑drawn portrait.",
    },
    {
      title: "Stage 4: Destiny Mapping",
      desc:
        "We calculate place patterns and timing windows most likely to facilitate your destined meeting based on combined progressions.",
    },
  ];

  return (
    <section id="process" className="relative py-20 md:py-28 bg-[#0b1020]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">The process</h2>
          <p className="mt-3 text-violet-100/80">From pristine astrology to a portrait you can recognize at first glance.</p>
        </div>

        <ol className="mt-10 grid md:grid-cols-2 gap-6 list-decimal list-inside">
          {stages.map((s, i) => (
            <li key={i} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-violet-100/80">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
