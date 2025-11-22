import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 opacity-80">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(99,102,241,0.25),rgba(168,85,247,0.15),rgba(251,146,60,0.08)_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 animate-pulse"></span>
              Now in beta — try the AI UGC studio
            </div>

            <h1 className="mt-6 text-5xl/tight md:text-6xl/tight font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-white to-white/70">
              Create AI‑generated UGC that feels human
            </h1>
            <p className="mt-5 text-lg text-slate-300/90">
              Generate on‑brand short‑form videos, voiceovers, and scripts in minutes. Collaborate, iterate, and publish at scale with an AI studio built for modern marketers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-white/10 hover:brightness-95 transition">
                Start free trial
              </button>
              <button className="rounded-xl border border-white/10 px-5 py-3 text-white/90 hover:bg-white/5 transition">
                Watch demo
              </button>
              <div className="text-xs text-slate-400">No credit card required</div>
            </div>

            <div className="mt-8 flex items-center gap-6 text-slate-400 text-sm">
              <div>
                <div className="font-semibold text-white">10x</div>
                Faster production
              </div>
              <div>
                <div className="font-semibold text-white">95%</div>
                On‑brand accuracy
              </div>
              <div>
                <div className="font-semibold text-white">50k+</div>
                Assets generated
              </div>
            </div>
          </div>

          <div className="relative h-[520px] w-full">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-slate-900/30 backdrop-blur-xl" />
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>

            <div className="pointer-events-none absolute -inset-20 opacity-70 blur-2xl">
              <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.35),rgba(168,85,247,0.25),rgba(251,146,60,0.15)_60%,transparent_70%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
