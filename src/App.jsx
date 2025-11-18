import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Offer from './components/Offer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b1020] text-white">
      <Hero />
      <Features />
      <Process />
      <Offer />
      <footer className="py-12 border-t border-white/10 bg-[#0b1020]">
        <div className="max-w-6xl mx-auto px-6 text-center text-violet-100/70 text-sm">
          Soul Ties Sketch — Ancient precision, modern clarity.
        </div>
      </footer>
    </div>
  );
}

export default App;
