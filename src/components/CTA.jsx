function CTA() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-1 shadow-2xl">
          <div className="grid gap-8 rounded-2xl bg-white p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Ready to accelerate your learning?
              </h3>
              <p className="mt-3 text-slate-600">
                Join thousands of learners who are advancing their careers with project-based courses and a supportive community.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Personalized study plan</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Weekly progress reports</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Community Q&A and reviews</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="email" placeholder="Your email" className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
                <input type="text" placeholder="What do you want to learn?" className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
              </div>
              <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">Create my plan</button>
              <p className="text-xs text-slate-500">By continuing, you agree to our Terms and acknowledge our Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
