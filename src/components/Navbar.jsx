import { Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-indigo-500/20">
              <Sparkles size={20} />
            </div>
            <span className="text-white font-semibold tracking-tight">AuraStudio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center rounded-xl border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/5 transition">
              Sign in
            </button>
            <button className="inline-flex items-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 transition">
              Get started
            </button>
            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
