import SectionWrapper from "../components/SectionWrapper"

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "Java"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "OpenCV",
      "NumPy",
      "Haar Cascade",
      "LBPH",
      "128-D feature vectors",
      "Cosine similarity",
    ],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Embedded Systems",
    items: ["Arduino", "ESP32", "Raspberry Pi", "Sensor integration", "IoT automation"],
  },
  {
    title: "Databases & Tools",
    items: [
      "MySQL",
      "SQLite",
      "GitHub",
      "VS Code",
      "Eclipse IDE",
      "Arduino IDE",
      "Intel Quartus Prime",
    ],
  },
]

function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Technical Skills</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-blue-500/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Skills