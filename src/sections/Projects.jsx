import SectionWrapper from "../components/SectionWrapper"

const projects = [
  {
    title: "MouFace NEXUS AI – Face Recognition System",
    stack:
      "Java • Spring Boot • OpenCV • MySQL • Haar Cascade • LBPH • HTML • CSS • JavaScript",
    description:
      "A real-time face recognition system with registration, image capture, training and live recognition workflow.",
    points: [
      "Built a complete pipeline from user registration to face detection, model training and recognition",
      "Used Haar Cascade for face detection and LBPH for recognition in a real-time setup",
      "Integrated MySQL for user information storage and fast retrieval during recognition",
      "Created a web-based interface and live demo access for easier project presentation",
    ],
    github: "https://github.com/RanganBorah/MouFace-NEXUS-AI",
    live: "https://irately-curliest-dennis.ngrok-free.dev",
  },
  {
    title: "React + Tailwind Portfolio Website",
    stack: "React • Tailwind CSS • Vite • GitHub",
    description:
      "A personal portfolio website built to present my resume, skills, projects and contact details in a professional format.",
    points: [
      "Built a responsive multi-section portfolio layout using React and Tailwind CSS",
      "Added project showcase, resume section and contact section with interactive buttons",
      "Structured the website for GitHub version control and public deployment",
      "Focused on clean UI, professional presentation and portfolio readiness",
    ],
  },
  {
    title: "AI-Based Smart Irrigation System",
    stack: "Arduino • ESP32 • Sensors • IoT",
    description:
      "An intelligent irrigation system using environmental and soil data to automate watering decisions.",
    points: [
      "Collected real-time sensor data for soil and environmental monitoring",
      "Used AI-based decision logic to reduce unnecessary water usage",
      "Implemented automation workflow on ESP32 for efficient irrigation control",
      "Focused on practical IoT-based problem solving for agriculture use cases",
    ],
  },
  {
    title: "Passcode-Based Electronic Security System",
    stack: "Arduino • ESP32 • Embedded Logic",
    description:
      "A passcode-protected security project with real-time validation and feedback system.",
    points: [
      "Built secure passcode validation flow for access control",
      "Integrated buzzer and LED feedback for user interaction",
      "Demonstrated hardware-software integration in an embedded project",
      "Focused on clean practical logic implementation using microcontroller components",
    ],
  },
  {
    title: "Half Adder Circuit",
    stack: "Intel Quartus Prime • Digital Logic Design",
    description:
      "A digital logic design project focused on building and simulating a half adder circuit.",
    points: [
      "Designed the half adder using digital logic concepts",
      "Simulated the circuit in Intel Quartus Prime",
      "Demonstrated understanding of sum and carry outputs",
      "Strengthened core fundamentals in logic design and circuit implementation",
    ],
  },
]

function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Featured Projects
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-blue-500/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-cyan-400">
                {project.stack}
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-400">
                {project.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>

              {(project.github || project.live) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400 hover:bg-slate-800"
                    >
                      View Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-cyan-500 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/10"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Projects