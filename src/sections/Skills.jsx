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
      "face-recognition",
      "Haar Cascade",
      "LBPH",
      "128-D feature vectors",
      "Euclidean similarity",
      "Cosine similarity",
    ],
  },
  {
    title: "Embedded Systems",
    items: [
      "Arduino",
      "ESP32",
      "Raspberry Pi",
      "Sensor integration",
      "IoT automation",
    ],
  },
  {
    title: "Web Development",
    items: ["HTML (basics)"],
  },
  {
    title: "Databases",
    items: ["SQLite", "MySQL", "SQL pipelines"],
  },
  {
    title: "Tools & Platforms",
    items: ["GitHub", "VS Code", "Arduino IDE", "Eclipse IDE", "Spyder"],
  },
]

function Skills() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills