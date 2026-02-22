"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-bg/88 backdrop-blur-md border-b border-border">
      <a href="#" className="text-sm font-bold tracking-tight text-white no-underline">
        Jay <span className="text-accent">Hoots</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 list-none">
        <li><a href="#services" className="text-muted text-sm font-medium hover:text-white transition-colors no-underline">Services</a></li>
        <li><a href="#stack" className="text-muted text-sm font-medium hover:text-white transition-colors no-underline">Stack</a></li>
        <li><a href="#experience" className="text-muted text-sm font-medium hover:text-white transition-colors no-underline">Experience</a></li>
        <li><a href="#about" className="text-muted text-sm font-medium hover:text-white transition-colors no-underline">About</a></li>
        <li>
          <a href="#contact" className="bg-accent text-bg text-sm font-bold px-5 py-2 rounded-md hover:opacity-85 transition-opacity no-underline">
            Let&apos;s Talk
          </a>
        </li>
      </ul>
    </nav>
  );
}
