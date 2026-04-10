function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-blue-500/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-base font-semibold tracking-wide text-white transition hover:text-cyan-400"
        >
          Rangan Pratik Borah
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>
          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar