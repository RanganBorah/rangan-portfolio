import SectionWrapper from "../components/SectionWrapper"

function About() {
  return (
    <SectionWrapper id="about" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              About
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              I am currently pursuing B.Tech in Electronics and Communication
              Engineering at VIT Vellore. I am deeply interested in AI
              development, computer vision, embedded systems and web
              development.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
              I enjoy learning by building practical projects that combine
              software and hardware. My work so far includes a real-time face
              recognition system, Moodora AI for mood-based music
              recommendation, Aparupa AI-based smart irrigation, embedded
              security systems using Arduino and ESP32 and a React + Tailwind
              portfolio website.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
              I actively participate in hackathons and technical activities and
              I am focused on strengthening my technical foundation while
              building projects that are useful, well-structured and portfolio
              ready.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-blue-500/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-blue-500/5">
              <p className="text-sm text-slate-400">Education</p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                VIT Vellore
              </h3>
              <p className="mt-2 text-slate-300">
                B.Tech — Electronics &amp; Communication Engineering
              </p>
              <p className="mt-1 text-slate-400">2025 – 2029</p>
            </div>

            <div className="rounded-2xl border border-blue-500/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-blue-500/5">
              <p className="text-sm text-slate-400">Academic Performance</p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                GPA: 8.6 / 10
              </h3>
              <p className="mt-2 text-slate-400">1st Semester</p>
            </div>

            <div className="rounded-2xl border border-blue-500/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-blue-500/5">
              <p className="text-sm text-slate-400">Core Interests</p>
              <p className="mt-2 text-slate-300">
                AI development, web development, Java, Python, Logic Design,
                Embedded Systems and IoT
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About