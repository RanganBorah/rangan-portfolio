import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24 text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-100px] top-40 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-[-80px] left-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Rangan Pratik Borah
          </h1>

          <p className="mt-5 text-lg text-slate-300">
            B.Tech — Electronics & Communication Engineering | VIT, Vellore
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Eager to contribute to real-world projects in electronics, embedded systems, web development or AI/software development while continuously learning and improving technical skills to gain practical industry exposure.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* View Projects */}
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
            >
              View Projects
            </a>

            {/* Resume (FIXED) */}
            <a
              href="/Rangan_Pratik_Borah_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan-500 px-5 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-1 hover:bg-cyan-500/10"
            >
              Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/RanganBorah"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-slate-800"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rangan-pratik-borah-69957b375/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-slate-800"
            >
              LinkedIn
            </a>

            {/* Live Demo */}
            <a
              href="https://irately-curliest-dennis.ngrok-free.dev"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan-500 px-5 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-1 hover:bg-cyan-500/10"
            >
              MouFace Demo
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-blue-500/10 bg-slate-900/90 p-8 shadow-2xl shadow-blue-950/30"
        >
          <p className="text-sm text-slate-400">Current Focus</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            AI, Computer Vision & Embedded Systems
          </h3>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 hover:border-blue-400/40 transition">
              <p className="text-sm text-slate-400">Project Focus</p>
              <p className="mt-1 text-slate-200">
                Real-time face recognition systems with Java and OpenCV
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 hover:border-blue-400/40 transition">
              <p className="text-sm text-slate-400">Hardware Interest</p>
              <p className="mt-1 text-slate-200">
                IoT automation using ESP32 and Arduino
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 hover:border-blue-400/40 transition">
              <p className="text-sm text-slate-400">Goal</p>
              <p className="mt-1 text-slate-200">
                Build strong portfolio projects and gain real industry exposure
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero