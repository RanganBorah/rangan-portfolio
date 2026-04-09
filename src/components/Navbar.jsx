function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-base font-semibold tracking-wide text-white">
          Rangan Pratik Borah
        </a>

        <div className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#about" className="transition hover:text-cyan-400">
            About
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