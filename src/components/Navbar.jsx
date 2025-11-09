import { GraduationCap, Search, User } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-800">
            LearnFlow
          </span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#courses" className="hover:text-slate-900 transition-colors">Courses</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses"
              className="w-64 rounded-md border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm outline-none ring-0 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <User className="h-4 w-4" /> Sign in
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
