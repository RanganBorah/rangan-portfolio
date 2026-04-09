function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl text-slate-300 leading-8">
          Eager to contribute to real-world projects in electronics, embedded
          systems, web development or AI/software development while continuously
          learning and improving technical skills to gain practical industry
          exposure.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="mt-3 text-slate-300">
              B.Tech — Electronics &amp; Communication Engineering
            </p>
            <p className="text-slate-400">VIT, Vellore</p>
            <p className="text-slate-400">2025 – 2029</p>
            <p className="mt-2 text-slate-300">GPA: 8.6 / 10 (1st Semester)</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="text-lg font-semibold">Focus Areas</h3>
            <p className="mt-3 text-slate-300">
              AI/ML, Python, Java, Logic Design, Management
            </p>
            <p className="mt-3 text-slate-400">
              Active participant in hackathons and technical competitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About