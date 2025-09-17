const RESUME = {
  name: "Naveed Hussain Syed",
  role: "Project Coordinator",
  location: "Bangalore, India",
  summary: "I am a Software & IT Professional with a strong foundation in Computer Science Engineering,\ncomplemented by hands-on experience in Machine Learning, Cloud Computing, and CRM systems.\nSkilled in problem-solving, collaboration, and project execution, I aim to deliver impactful solutions that bridge technology and business needs.",
  meta: ["Open to Project Management Roles", "Strong in Coordination & Communication", "Based in Bangalore"],
  resumePdf: "https://naveedhussainsyed.vercel.app/Resume1.pdf",
  about: `I am Naveed Hussain Syed, a detail-oriented and motivated Project Coordinator with strong experience in project management, cross-functional collaboration, and client relationship handling. With a background in Computer Science Engineering, I bring both technical knowledge and organizational expertise to drive projects toward successful completion.

I have worked in diverse roles ranging from social media management at SISF (NGO) to client coordination at Zolostays, gaining experience in CRM strategy, communication, and stakeholder engagement. My internship experiences in Machine Learning and Cloud Computing have further strengthened my technical foundation, giving me a unique ability to bridge the gap between technical and managerial aspects of projects.

Passionate about team collaboration, process optimization, and delivering measurable outcomes, I am constantly exploring new digital tools, analytical trends, and project management methodologies to stay ahead in a fast-paced environment. My goal is to contribute to organizations by ensuring smooth project execution, building strong client relationships, and supporting business growth.`,
  contact: {
    email: "sd.naveedhussain@gmail.com",
    phone: "+91 9502686709",
    linkedin: "https://www.linkedin.com/in/naveed-hussain-syed",
    github: "",
    address: "Bangalore, India"
  },
  skills: [
    { name: "Project Coordination", level: 85 },
    { name: "Communication", level: 90 },
    { name: "MS Excel", level: 80 },
    { name: "Data Analysis", level: 75 },
    { name: "Team Collaboration", level: 88 },
    { name: "Problem Solving", level: 82 }
  ],
  techStack: [
      "Report Writing & Presentation Development",
      "Data Analysis & Interpretation",
      "Microsoft Excel",
    "Strong Communication & Interpersonal Skills",
      "Timeline & Deadline Management",
    "Cross-functional Team Collaboration",
    "Problem-Solving & Critical Thinking",
    "Documentation & Reporting",
    "Microsoft PowerPoint",
    "Fast learner & trend aware",
    "Content publishing"
  ],
  experience: [
    {
      company: "Zolostays Property Solutions",
      role: "Associate",
      period: "July 2025 – Present",
      location: "Bangalore",
      bullets: [
        "Handled client communication and CRM strategy.",
        "Converted leads into revenue opportunities.",
        "Boosted overall client satisfaction ratings."
      ],
      tags: ["CRM", "Client Relations", "Business Development"]
    },
    {
      company: "SISF (NGO)",
      role: "Head of Social Media Management",
      period: "Aug 2019 – May 2022",
      location: "Nellore",
      bullets: [
        "Led social media campaigns for NGO awareness.",
        "Created content strategies and community management.",
        "Boosted engagement through analytics and storytelling."
      ],
      tags: ["Social Media", "Content Strategy"]
    }
  ],
  projects: [
    {
      title: "Machine Learning Projects",
      blurb: "Built ML models like Boston house prediction, Loan status prediction, Tesla stock analysis, Wine quality prediction.",
      stack: ["Python", "Machine Learning", "XGBoost", "Random Forest"],
      links: { github: "", demo: "" }
    }
  ],
  education: [
    { degree: "B.Tech, Computer Science Engineering", institute: "Nimra College of Engg. & Tech (JNTUK)", period: "2021–2025", score: "CGPA: 7.38" },
    { degree: "Intermediate", institute: "Sri Chaitanya Junior College", period: "2019–2021", score: "Marks: 864" },
    { degree: "SSC (10th)", institute: "Little Angels E.M High School", period: "2018–2019", score: "CGPA: 9.7" }
  ],
  achievements: [
    "Internship: Skill Dzire Technologies – Machine Learning (2023)",
    "Internship: ExcelR Solutions – Cloud Computing (2024)",
    "Internship: Zolostays Property Solutions – Inside Associate (2024)"
  ],
  internships: [
    {
      company: "Skill Dzire Technologies Pvt.Ltd",
      role: "Machine Learning Intern",
      period: "April 2023 – June 2023",
      location: "Hyderabad, Telangana",
      bullets: [
        "Developed ML-based projects in Python programming.",
        "Collaborated with cross-functional teams to troubleshoot and debug.",
        "Assisted in the design and implementation of database structures.",
        "Conducted testing to identify and fix software bugs.",
        "Worked on ML projects: Boston house prediction (XGBoost), Loan status prediction, Tesla stock calculations, Wine quality check, Random Forest."
      ],
      tags: ["Python", "XGBoost", "Random Forest", "Pandas", "Scikit-Learn"]
    },
    {
      company: "ExcelR Solutions",
      role: "Cloud Computing Intern",
      period: "June 2024 – August 2024",
      location: "Hyderabad, Telangana",
      bullets: [
        "Participated in deployment and configuration of cloud infrastructure.",
        "Assisted in building scalable and reliable cloud-based solutions.",
        "Gained hands-on experience with AWS/Azure services and best practices."
      ],
      tags: ["AWS", "Azure", "Cloud Architecture"]
    },
    {
      company: "Zolostays Property Solutions Pvt.Ltd.",
      role: "Inside Associate Intern",
      period: "July 2024 – September 2024",
      location: "Bangalore Urban, Karnataka",
      bullets: [
        "Worked on LeadSquared CRM, ERP Dashboard, and Omega Operations.",
        "Routed qualified opportunities for further development and closure.",
        "Maintained client relationships through effective communication and updates.",
        "Executed CRM strategy resulting in higher client satisfaction ratings.",
        "Converted potential leads into revenue opportunities."
      ],
      tags: ["CRM", "LeadSquared", "Operations", "Business Development"]
    }
  ],
  certifications: [
    { title: "Machine Learning Internship", org: "Skill Dzire Technologies", year: "2023" },
    { title: "Cloud Computing Internship", org: "ExcelR Solutions", year: "2024" }
  ],
  testimonials: [
    { name: "Hiring Manager", role: "Zolostays", quote: "Naveed quickly adapts and communicates clearly across teams." },
    { name: "Team Lead", role: "SISF", quote: "Strong ownership and reliable execution under deadlines." }
  ]
};

// Helpers
const qs = (s) => document.querySelector(s);
const qsa = (s) => Array.from(document.querySelectorAll(s));

function render() {
  // Render summary with line breaks and highlighted keywords
  const summaryEl = qs("#summary");
  const keywords = [
    "Software & IT Professional",
    "Computer Science Engineering",
    "Machine Learning",
    "Cloud Computing",
    "CRM systems",
    "problem-solving",
    "collaboration",
    "project execution",
    "impactful solutions",
    "technology",
    "business"
  ];
  let formatted = (RESUME.summary || "");
  keywords.forEach(k => {
    const re = new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    formatted = formatted.replace(re, match => `<span class=\"hl\">${match}</span>`);
  });
  summaryEl.innerHTML = formatted.split(/\n+/).map(s=>s.trim()).filter(Boolean).join('<br>');

  // Render about with paragraphs
  const aboutEl = qs("#aboutText");
  const aboutSrc = RESUME.about || "I am a detail‑oriented project coordinator focused on planning, cross‑functional collaboration, and delivery. I work closely with stakeholders to translate objectives into clear action plans, track metrics, and maintain momentum across teams.";
  const parts = aboutSrc.split(/\n\n+/).map(p=>p.trim()).filter(Boolean);
  aboutEl.innerHTML = parts.map(p => `<p class="about__p">${p}</p>`).join("");
  qs("#year").textContent = new Date().getFullYear();
  qs("#brandName").textContent = RESUME.name;
  qs("#name").textContent = RESUME.name;
  qs("#role").textContent = RESUME.role;
  // Set resume links with fallback handling
  const resumePath = RESUME.resumePdf;
  qs("#resumeLink").setAttribute("href", resumePath);
  qs("#resumeCTA")?.setAttribute("href", resumePath);
  
  // Add click handlers for better error handling and fallback
  const resumeLinks = document.querySelectorAll('a[href*="Resume1.pdf"], a[id*="resume"]');
  resumeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      console.log('Resume download clicked:', link.href);
      
      // Fallback: If download fails, open in new tab
      setTimeout(() => {
        // Check if download was successful (this is a simple check)
        const testLink = document.createElement('a');
        testLink.href = link.href;
        testLink.download = 'Naveed_Hussain_Syed_Resume.pdf';
        testLink.target = '_blank';
        
        // If the original link doesn't have download attribute working, use fallback
        if (!link.hasAttribute('download') || link.getAttribute('download') === '') {
          e.preventDefault();
          window.open(link.href, '_blank');
        }
      }, 100);
    });
  });

  const meta = qs("#metaPills");
  RESUME.meta.forEach(m => {
    const span = document.createElement("span");
    span.className = "meta-pill";
    span.textContent = m;
    meta.appendChild(span);
  });

  const exp = qs("#experienceGrid");
  RESUME.experience.forEach(e => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${e.role} – ${e.company}</h3><p class="muted">${e.period} • ${e.location}</p><ul>${e.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>`;
    exp.appendChild(div);
  });

  const proj = qs("#projectsGrid");
  RESUME.projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    const links = [
      p?.links?.github ? `<a href="${p.links.github}" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>` : "",
      p?.links?.demo ? `<a href="${p.links.demo}" target="_blank" aria-label="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""
    ].join("");
    div.innerHTML = `<h3>${p.title}</h3><p>${p.blurb}</p><p class="muted">${p.stack.join(", ")}</p><div class="row">${links}</div>`;
    proj.appendChild(div);
  });

  const skills = qs("#skillsGrid");
  RESUME.skills.forEach(s=>{
    const div = document.createElement("div");
    div.className = "skill";
    div.innerHTML = `<div class="row row--between"><strong>${s.name}</strong><span class="muted">${s.level}%</span></div>
      <div class="skill__bar"><div class="skill__fill" style="width:${0}%"></div></div>`;
    skills.appendChild(div);
  });

  const edu = qs("#educationGrid");
  RESUME.education.forEach(ed=>{
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${ed.degree}</h3><p>${ed.institute}</p><p>${ed.period} • ${ed.score}</p>`;
    edu.appendChild(div);
  });

  const ach = qs("#achievementsList");
  RESUME.achievements.forEach(a=>{
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = a;
    ach.appendChild(div);
  });

  const certs = qs("#certsList");
  if (certs) {
    RESUME.certifications.forEach(c=>{
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<strong>${c.title}</strong><p class="muted">${c.org} • ${c.year}</p>`;
      certs.appendChild(div);
    });
  }

  // tech stack chips
  const techGrid = qs('#techGrid');
  if (techGrid && Array.isArray(RESUME.techStack)) {
    techGrid.innerHTML = RESUME.techStack.map(t => `<span class="chip"><i class="fa-solid fa-circle-check"></i>${t}</span>`).join('');
  }

  const testi = qs("#testimonialsGrid");
  if (testi) {
    RESUME.testimonials.forEach(t=>{
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<p>“${t.quote}”</p><p class="muted">— ${t.name}, ${t.role}</p>`;
      testi.appendChild(div);
    });
  }

  // internships timeline
  const internGrid = qs('#internshipsGrid');
  if (internGrid && Array.isArray(RESUME.internships)) {
    RESUME.internships.forEach(e => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h3>${e.role} – ${e.company}</h3><p class="muted">${e.period} • ${e.location}</p><ul>${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
      internGrid.appendChild(div);
    });
  }

  const contact = qs("#contactList");
  contact.innerHTML = `<p><i class="fa-solid fa-paper-plane"></i> <a href="mailto:${RESUME.contact.email}">${RESUME.contact.email}</a></p>
    <p><i class="fa-solid fa-phone"></i> <a href="tel:${RESUME.contact.phone}">${RESUME.contact.phone}</a></p>
    <p><i class="fa-solid fa-location-dot"></i> ${RESUME.contact.address}</p>`;

  // socials (footer)
  const socials = qs('#socials');
  socials.innerHTML = `
    <a class="btn" href="${RESUME.contact.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
    ${RESUME.contact.github ? `<a class="btn" href="${RESUME.contact.github}" target="_blank" aria-label="GitHub"><i class=\"fa-brands fa-github\"></i></a>` : ''}
  `;

  // hero socials
  const heroSoc = qs('#heroSocials');
  if (heroSoc) {
    heroSoc.innerHTML = `
      <a class="icon" href="https://instagram.com/" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a class="icon" href="mailto:${RESUME.contact.email}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
      <a class="icon" href="${RESUME.contact.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      ${RESUME.contact.github ? `<a class=\"icon\" href=\"${RESUME.contact.github}\" target=\"_blank\" aria-label=\"GitHub\"><i class=\\\"fa-brands fa-github\\\"></i></a>` : ''}
    `;
  }

  // contact socials in the contact card
  const cSocials = qs('#contactSocials');
  if (cSocials) {
    cSocials.innerHTML = `
      <a class="icon" href="https://instagram.com/" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a class="icon" href="mailto:${RESUME.contact.email}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
      <a class="icon" href="${RESUME.contact.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      ${RESUME.contact.github ? `<a class="icon" href="${RESUME.contact.github}" target="_blank" aria-label="GitHub"><i class=\"fa-brands fa-github\"></i></a>` : ''}
    `;
  }
}

function setupUX() {
  // Smooth scroll
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = qs(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile menu on navigate
        qs('#primaryNav')?.classList.remove('open');
        qs('#menuBtn')?.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Mobile menu
  const menuBtn = qs('#menuBtn');
  const nav = qs('#primaryNav');
  menuBtn?.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  // Theme toggle with persistence
  const themeToggle = qs('#themeToggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') document.body.classList.add('light');
  themeToggle?.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  // Scrollspy + reveal animations
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = qs(`.nav__links a[href="#${id}"]`);
      if (entry.isIntersecting) {
        link?.classList.add('active');
        entry.target.classList.add('visible');
      } else {
        link?.classList.remove('active');
      }
    });
  }, { rootMargin: '0px', threshold: 0.05 });

  qsa('section[data-section]').forEach(sec => {
    sec.classList.add('fade-in');
    observer.observe(sec);
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      sec.classList.add('visible');
    }
  });

  // Animate skills bars when skills section visible
  const skillsObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill__fill');
        fills.forEach((el, i) => {
          const target = RESUME.skills[i]?.level || 0;
          el.style.width = target + '%';
        });
      }
    });
  }, { threshold: 0.3 });
  const skillsSection = qs('#skills');
  if (skillsSection) skillsObserver.observe(skillsSection);

  // Web3Forms inline feedback (non-blocking)
  const form = qs('#contactForm');
  const formMsg = qs('#formMsg');
  form?.addEventListener('submit', async (e)=>{
    formMsg.textContent = 'Sending…';
    // Let Web3Forms handle submission, but provide UX fallback if JS intercept is required
    // Optional: AJAX submit for better UX
    try {
      e.preventDefault();
      const formData = new FormData(form);
      const key = formData.get('access_key');
      if (!key || String(key).includes('YOUR_WEB3FORMS_ACCESS_KEY')) {
        formMsg.textContent = 'Missing Web3Forms access key. Add your key in index.html.';
        return;
      }
      const res = await fetch(form.action, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        formMsg.textContent = 'Thank you! I will get back to you soon.';
        form.reset();
      } else {
        formMsg.textContent = (data.message || 'Submission failed.') + ' Please try again or email me directly.';
        console.error('Web3Forms error:', data);
      }
    } catch (err) {
      console.error('Web3Forms network error:', err);
      formMsg.textContent = 'Network error. Please email me at ' + RESUME.contact.email;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  setupUX();
});
