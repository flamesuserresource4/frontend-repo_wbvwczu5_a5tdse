import { BookOpen, CheckCircle2, Timer, Trophy } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Structured Paths",
    desc: "Step-by-step roadmaps from beginner to job-ready, with quizzes and checkpoints.",
  },
  {
    icon: Timer,
    title: "Flexible Pace",
    desc: "Bite-sized lessons that fit your schedule, with reminders and streaks.",
  },
  {
    icon: CheckCircle2,
    title: "Hands-on Projects",
    desc: "Apply what you learn by building real-world apps and get instant feedback.",
  },
  {
    icon: Trophy,
    title: "Certificates",
    desc: "Earn shareable certificates to showcase your new skills to employers.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to learn effectively
          </h2>
          <p className="mt-3 text-slate-600">
            Designed for learners at every level with a focus on clarity, practice, and momentum.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
