const projects = [
  {
    title: "MouFace NEXUS AI – Face Recognition System",
    stack:
      "Java, Spring Boot, OpenCV, MySQL, Haar Cascade, LBPH, HTML, CSS, JavaScript",
    description:
      "Built a real-time face recognition system with web-based registration and live detection.",
    points: [
      "Used Haar Cascade for detection and LBPH for recognition",
      "Integrated MySQL for user data management and retrieval",
      "Developed full pipeline: capture → training → recognition → display",
    ],
    github: "https://github.com/RanganBorah/MouFace-NEXUS-AI",
    live: "https://irately-curliest-dennis.ngrok-free.dev",
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold">Projects</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-cyan-400">
                {project.stack}
              </p>
              <p className="mt-4 text-slate-300">{project.description}</p>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                {project.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-white underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-emerald-400"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects