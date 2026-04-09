function Resume() {
  return (
    <section className="bg-slate-900 py-20 px-6 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-950 p-8">
        <h2 className="text-3xl font-bold">Resume</h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          View my latest resume for details about my education, projects,
          technical skills, and achievements.
        </p>

        <div className="mt-8">
          <a
            href="/Rangan_Pratik_Borah_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
          >
            View Resume PDF
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume