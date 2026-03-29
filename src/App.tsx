import { useState, useEffect } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);


  const projects = [
    {
      title: "Project One",
      desc: "A modern web app built with React and Tailwind CSS.",
      tags: ["HtmlCss", "React", "Tailwind", "JavaScript"],
      link: "https://mytesting-tau.vercel.app/",
    },
    {
      title: "Project Two",
      desc: "Landing page with beautiful UI design and animations.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://shoes-shop-woad-two.vercel.app/",
    },
  ];

  const navLinks = ["home", "about", "projects", "contact"];

  return (
    <div
      style={{ fontFamily: "'Libre Baskerville', sans-serif" }}
      className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap'); * { scroll-behavior: smooth; } .gradient-text { background: linear-gradient(135deg, #f97316, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; } .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; } .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(249,115,22,0.15); } .skill-bar { transition: width 1.5s ease; } .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; } .fade-in.visible { opacity: 1; transform: translateY(0); } .nav-link { position: relative; } .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: linear-gradient(135deg, #f97316, #ec4899); transition: width 0.3s ease; } .nav-link:hover::after { width: 100%; } .glow { box-shadow: 0 0 30px rgba(249,115,22,0.3); }`}</style>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-extrabold gradient-text">
            VUN VICHEKA
          </span>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="nav-link capitalize text-sm text-white/70 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize text-white/70 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div
          className={`text-center fade-in ${visible ? "visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <p
            style={{ fontFamily: "'Cabin', sans-serif" }}
            className="text-orange-400 text-sm tracking-widest uppercase mb-4"
          >
            Hello, I am
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            VUN <span className="gradient-text">VICHEKA</span>
          </h1>
          <h2
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-xl md:text-2xl text-white/50 mb-8"
          >
          FRONTEND DEVELOPER
          </h2>
          <p
            style={{ fontFamily: "'Rubik', sans-serif" }}
            className="text-white/40 max-w-lg mx-auto mb-10 leading-relaxed"
          >
            I build beautiful, responsive websites and create stunning visual
            designs. Combining code and creativity to deliver exceptional
            digital experiences.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:opacity-90 transition glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded mb-10"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-white/60 leading-relaxed space-y-4"
            >
              <p>
                I am a fresh graduate with a passion for web development and
                graphic design. I have been working as a freelance designer and
                developer since 2024, helping clients bring their ideas to life.
              </p>
              <p>
                My unique combination of design and development skills allows me
                to build websites that are not only functional but also visually
                stunning. I love turning creative ideas into real digital
                products.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Done", value: "10+" },
                { label: "Happy Clients", value: "8+" },
                { label: "Years Experience", value: "1+" },
                { label: "Skills", value: "6+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center card-hover"
                >
                  <div className="text-3xl font-extrabold gradient-text">
                    {stat.value}
                  </div>
                  <div
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-white/40 text-sm mt-1"
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded mb-10"></div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 mb-4 flex items-center justify-center text-lg">
                  🖥️
                </div>
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-white/50 text-sm mb-4 leading-relaxed"
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pink-400 hover:text-pink-300 transition"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-2">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded mb-6 mx-auto"></div>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white/50 mb-10"
          >
            Have a project in mind? Let's work together and build something
            amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="vvich242@gmail.com"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:opacity-90 transition glow"
            >
               Email Me
            </a>
            <a
              href="https://t.me/Vichekazz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition"
            >
              Telegram
            </a>
            <a
              href="https://github.com/Vicheka12345"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition"
            >
               GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-6 text-center text-white/30 text-sm border-t border-white/5"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        © 2026 Vicheka. Built with React & Tailwind CSS 💙
      </footer>
    </div>
  );
};

export default App;
