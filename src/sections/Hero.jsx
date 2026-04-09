function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-slate-950 px-6 pt-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Rangan Pratik Borah
          </h1>

          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            B.Tech — Electronics &amp; Communication Engineering | VIT, Vellore
          </p>

          <p className="mt-6 max-w-2xl leading-8 text-slate-400">
            Eager to contribute to real-world projects in electronics, embedded
            systems, web development or AI/software development while
            continuously learning and improving technical skills.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/RanganBorah"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rangan-pratik-borah-69957b375/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://irately-curliest-dennis.ngrok-free.dev"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-400"
            >
              MouFace Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero