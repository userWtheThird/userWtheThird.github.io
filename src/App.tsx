import React, { useState, useEffect } from 'react';
import {
  Github,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';

/* ──────────────────────────────── data ──────────────────────────────── */

const PROJECTS = [
  {
    title: 'HSEO Portal Prototype',
    subtitle: 'Full-stack safety management platform',
    description:
      'A multi-role portal for managing radiation safety, lab inspections, hazardous waste, water quality, indoor environmental quality, hot-work permits, and laser compliance across a university campus.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Multi-role RBAC'],
    status: 'In Progress',
    link: 'https://userWtheThird.github.io/HSEO-Portal-Prototype/',
    repo: 'https://github.com/userWtheThird/HSEO-Portal-Prototype',
  },
  {
    title: 'My CPD',
    subtitle: 'Continuing Professional Development tracker',
    description:
      'A personal CPD tracker for logging professional development activities, tracking hours, and curating reference links to useful resources and sites.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'localStorage'],
    status: 'In Progress',
    link: 'https://userWtheThird.github.io/my-CPD/',
    repo: 'https://github.com/userWtheThird/my-CPD',
  },
];

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

/* ──────────────────────────────── components ───────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-grey-950/90 backdrop-blur-sm border-b border-grey-850'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-lg tracking-tight">
          userW
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-grey-400 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/userWtheThird"
            target="_blank"
            rel="noreferrer"
            className="text-grey-400 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-grey-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-grey-950 border-b border-grey-850 px-6 pb-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-grey-300 hover:text-white text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-grey-700" />

      <p className="text-grey-500 text-sm font-mono tracking-widest uppercase mb-4">
        Bridge Linker &middot; IT &times; EHS &times; OH
      </p>

      <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-center leading-tight">
        Hi, I&apos;m{' '}
        <span className="relative">
          userW
          <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-grey-600" />
        </span>
      </h1>

      <p className="mt-6 text-grey-400 text-lg md:text-xl max-w-xl text-center leading-relaxed">
        I craft platforms that turn complexity into clarity — smarter tracking, cleaner filing, effortless discovery.
      </p>

      <div className="mt-10 flex items-center gap-4">
        <a
          href="#work"
          className="px-6 py-2.5 bg-white text-grey-950 text-sm font-semibold rounded-sm hover:bg-grey-200 transition-colors"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 border border-grey-700 text-grey-300 text-sm font-semibold rounded-sm hover:border-grey-500 hover:text-white transition-colors"
        >
          Get in Touch
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={20} className="text-grey-600" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl font-bold tracking-tight mb-2">About</h2>
        <div className="w-12 h-px bg-grey-700 mb-8" />

        <div className="space-y-5 text-grey-400 leading-relaxed text-[15px]">
          <p>
            I stand at the crossroads of IT, EHS and OH — bridging the gap between
            technology and occupational hygiene to craft platforms that bring order
            to what was once chaos.
          </p>
          <p>
            When I&apos;m not coding, I play with my dog. I find peace in nature —
            though I equally appreciate the hum of an air-con. I&apos;m drawn to raw
            stones, and forever fascinated by how things are made and how this
            world works.
          </p>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-grey-900/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl font-bold tracking-tight mb-2">Work</h2>
        <div className="w-12 h-px bg-grey-700 mb-10" />

        <div className="space-y-8">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group border border-grey-800 rounded-sm p-6 hover:border-grey-600 transition-colors bg-grey-900/60"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white text-xl font-semibold">{p.title}</h3>
                  <p className="text-grey-500 text-sm mt-0.5">{p.subtitle}</p>
                </div>
                <span className="shrink-0 ml-4 px-2.5 py-0.5 text-[11px] font-mono font-medium border border-grey-700 text-grey-400 rounded-sm">
                  {p.status}
                </span>
              </div>

              <p className="text-grey-400 text-sm leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] font-mono bg-grey-800 text-grey-400 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1.5 text-sm text-white font-medium hover:text-grey-300 transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-grey-400 hover:text-white transition-colors"
                >
                  <Github size={14} /> Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl font-bold tracking-tight mb-2">Contact</h2>
        <div className="w-12 h-px bg-grey-700 mb-8" />

        <p className="text-grey-400 leading-relaxed text-[15px] mb-8">
          I&apos;m always open to interesting conversations and opportunities.
          Feel free to reach out.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-grey-950 text-sm font-semibold rounded-sm hover:bg-grey-200 transition-colors"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="https://github.com/userWtheThird"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-grey-700 text-grey-300 text-sm font-semibold rounded-sm hover:border-grey-500 hover:text-white transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-grey-850 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-grey-600 text-xs">
          &copy; {new Date().getFullYear()} userW. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/userWtheThird"
            target="_blank"
            rel="noreferrer"
            className="text-grey-600 hover:text-grey-300 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-grey-600 hover:text-grey-300 transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────────── app ──────────────────────────────── */

export default function App() {
  return (
    <div className="min-h-screen bg-grey-950 text-grey-200">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
