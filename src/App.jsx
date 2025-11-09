import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CoursesGrid from "./components/CoursesGrid";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CoursesGrid />
        <CTA />
      </main>
      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} LearnFlow. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
