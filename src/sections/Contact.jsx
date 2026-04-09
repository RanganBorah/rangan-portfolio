function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="max-w-2xl text-slate-300">
          Open to internship opportunities, collaborations, and learning
          experiences.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-2 text-sm text-white break-all">
              ranganpratikborah2006@gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <p className="text-sm text-slate-400">Phone</p>
            <p className="mt-2 text-sm text-white">+91 8134055562</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <p className="text-sm text-slate-400">GitHub</p>
            <a
              href="https://github.com/RanganBorah"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm text-white underline"
            >
              github.com/RanganBorah
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <p className="text-sm text-slate-400">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/rangan-pratik-borah-69957b375/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm text-white underline"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact