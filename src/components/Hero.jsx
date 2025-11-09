import { Rocket, Star } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
            <Star className="h-3 w-3" /> New: AI study planner included
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Learn anything. Build everything.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            A modern learning platform with interactive lessons, projects, and certificates — guided by smart AI tools that keep you on track.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#courses" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">
              <Rocket className="h-4 w-4" /> Start Learning
            </a>
            <a href="#features" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50">
              Explore Features
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Hands-on projects</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Certificates</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Career paths</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Mentor community</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 p-1 shadow-2xl">
            <div className="h-full w-full rounded-lg bg-white p-6 grid gap-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-700">Daily Goal</div>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700">On Track</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["HTML", "CSS", "JS"].map((t) => (
                  <div key={t} className="rounded-md border border-slate-200 p-3 text-center text-sm font-medium text-slate-700">
                    {t}
                  </div>
                ))}
              </div>
              <div className="rounded-md bg-slate-50 p-4">
                <div className="mb-2 text-sm font-semibold text-slate-700">Next up</div>
                <div className="text-slate-600 text-sm">Build a responsive landing page with Tailwind</div>
              </div>
              <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                Continue Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
