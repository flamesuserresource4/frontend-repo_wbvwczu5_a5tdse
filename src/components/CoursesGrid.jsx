const courses = [
  {
    id: 1,
    title: "Web Fundamentals",
    level: "Beginner",
    lessons: 24,
    color: "from-indigo-500 to-blue-500",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "React Essentials",
    level: "Intermediate",
    lessons: 18,
    color: "from-violet-500 to-fuchsia-500",
    tags: ["React", "Hooks", "State"],
  },
  {
    id: 3,
    title: "Python for Data",
    level: "Beginner",
    lessons: 22,
    color: "from-emerald-500 to-teal-500",
    tags: ["Python", "Pandas", "NumPy"],
  },
  {
    id: 4,
    title: "Backend with FastAPI",
    level: "Advanced",
    lessons: 16,
    color: "from-rose-500 to-orange-500",
    tags: ["APIs", "Auth", "MongoDB"],
  },
];

function CoursesGrid() {
  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Popular courses
            </h2>
            <p className="mt-2 text-slate-600">Curated paths to get you job-ready.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            Browse all
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <article key={course.id} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className={`h-28 w-full rounded-lg bg-gradient-to-br ${course.color} p-0.5`}></div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {course.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {course.level} • {course.lessons} lessons
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                View details
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesGrid;
