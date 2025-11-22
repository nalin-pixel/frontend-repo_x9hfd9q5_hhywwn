export default function CTA() {
  return (
    <section className="relative py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-indigo-600/30 via-fuchsia-600/20 to-amber-500/20 p-10 backdrop-blur-xl">
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_80%_at_50%_0%,white,transparent)] ring-1 ring-white/10 rounded-3xl" />
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Launch your AI UGC studio today
              </h2>
              <p className="mt-3 text-slate-200/80">
                Start free, then scale with usage-based pricing. Unlimited projects, team collaboration, and brand profiles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <button className="rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-white/10 hover:brightness-95 transition">
                Start free
              </button>
              <button className="rounded-xl border border-white/10 px-5 py-3 text-white/90 hover:bg-white/5 transition">
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
