import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Global gradient aura background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.18),rgba(168,85,247,0.12),rgba(251,146,60,0.06)_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_40%,rgba(2,6,23,1)_100%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} AuraStudio. All rights reserved.</div>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a className="hover:text-white transition" href="#">Privacy</a>
            <a className="hover:text-white transition" href="#">Terms</a>
            <a className="hover:text-white transition" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
