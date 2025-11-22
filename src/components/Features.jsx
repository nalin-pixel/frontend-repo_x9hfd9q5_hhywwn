import { Sparkles, Megaphone, AudioWaveform, Wand2 } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "AI voice agents",
    desc: "Realistic voices that adapt to tone, pacing, and brand vocabulary.",
  },
  {
    icon: Megaphone,
    title: "UGC scripts in seconds",
    desc: "Give a brief and get multiple hooks, angles, and variations instantly.",
  },
  {
    icon: AudioWaveform,
    title: "Auto captions & remix",
    desc: "Smart subtitles, aspect ratios, and platform-ready exports in one click.
    ",
  },
  {
    icon: Wand2,
    title: "Brand brain",
    desc: "Upload assets and guardrails so every output stays on‑brand.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-32 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 blur-3xl" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white">
                <Icon size={20} />
              </div>
              <div className="text-white font-semibold mb-1">{title}</div>
              <div className="text-slate-300 text-sm leading-relaxed">{desc}</div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 [mask-image:radial-gradient(50%_50%_at_50%_0%,black,transparent)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
