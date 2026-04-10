import SectionWrapper from "../components/SectionWrapper"

function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 max-w-2xl leading-8 text-slate-300">
          I am seeking a 1-month in-office summer internship to gain practical
          industry exposure, and I am open to collaborations and project
          discussions and keen to learn and improve through real-world
          experience.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          <div className="rounded-2xl border border-blue-500/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-blue-500/5">
            <p className="text-sm text-slate-400">Email</p>
            <a
              href="mailto:ranganpratikborah2006@gmail.com"
              className="mt-2 block break-all text-sm text-white underline"
            >
              ranganpratikborah2006@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-blue-500/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-blue-500/5">
            <p className="text-sm text-slate-400">Phone</p>
            <p className="mt-2 text-sm text-white">+91 8134055562</p>
          </div>

          <div className="rounded-2xl border border-blue-500/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-blue-500/5">
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

          <div className="rounded-2xl border border-blue-500/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-blue-500/5">
            <p className="text-sm text-slate-400">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/rangan-pratik-borah-69957b375/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block break-all text-sm text-white underline"
            >
              linkedin.com/in/rangan-pratik-borah-69957b375
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact