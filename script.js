const T = {
  es: {
    hero_hi: "Hola, soy",
    hero_eyebrow: "Operaciones financieras · Fintech · IA aplicada",
    hero_lead: "Más de 5 años en servicios financieros y fintech, y herramientas propias construidas con IA. Aquí encuentras algunos de mis proyectos.",
    about_p1: "Tengo más de 5 años de experiencia en servicios financieros, fintech y atención de cuentas: conciliaciones, análisis de cuentas, prevención de fraude y soporte a clientes en español, inglés y portugués, trabajando con equipos de producto, cumplimiento e ingeniería.",
    about_p2: "Esa experiencia me llevó a construir mis propias herramientas: una plataforma contable con agenda de vencimientos, un portal de gestión para un gimnasio, un asesor virtual de vivienda con IA y un guardián de facturas que decide con reglas y deja la IA solo para leer. Programo con asistentes de IA, y reviso, pruebo y entiendo lo que generan antes de publicarlo.",
    about_p3: "Uso la IA donde aporta y dejo las decisiones sensibles a una persona. Diseño los datos con roles y permisos en la base de datos, cierre de sesión por inactividad y secretos fuera del repositorio.",
    sk_fin: "Finanzas y operaciones", sk_fin1: "Conciliaciones contables", sk_fin2: "Cuentas por pagar y por cobrar (AP/AR)", sk_fin3: "Análisis de cuentas y prevención de fraude", sk_fin4: "Soporte a clientes fintech", sk_fin5: "Control de calidad (QA)",
    sk_tools: "Herramientas", sk_tools1: "Excel avanzado",
    sk_ai: "IA aplicada", sk_ai1: "Agentes conversacionales con LLM", sk_ai2: "Integración multi-proveedor (OpenAI, Gemini, Vertex AI)", sk_ai3: "Desarrollo asistido por IA (Claude Code)", sk_ai4: "Revisión y validación del código generado", sk_ai5: "Defensa contra inyección de instrucciones", sk_ai6: "Reglas deterministas con IA solo para leer",
    sk_dev: "Desarrollo y datos", sk_data1: "Autenticación y roles", sk_test: "Pruebas automatizadas (pytest, Playwright)", sk_data2: "Manejo seguro de secretos",
    sk_lang: "Idiomas", lang_es: "Español · Nativo", lang_en: "Inglés · C1", lang_pt: "Portugués · B2+",
    sk_edu: "Formación", edu1: "Técnico en Sistemas · CUN (2018)", edu2: "Google UX Design (2025)", edu3: "IA y Productividad · Santander Open Academy (2024)", edu4: "Python (Google) y Bookkeeping (Intuit) · en curso",
    nav_projects: "Proyectos", nav_about: "Sobre mí", nav_skills: "Habilidades", nav_contact: "Contacto",
    hero_cta1: "Ver proyectos", hero_cta2: "Contáctame",
    projects_title: "Proyectos",
    p6_title: "Guardián de facturas con IA",
    p6_desc: "Filtro de seguridad antes del pago: la IA lee facturas (PDF, foto o XML) y un motor de reglas sin IA decide pagar, frenar o escalar, con un acta encadenada que delata cualquier alteración. Proyecto del Reto Blinka (Hackathon 30X), con datos ficticios.",
    p1_desc: "Agente conversacional que perfila usuarios, recomienda proyectos de vivienda y subsidios aplicables, y envía el resumen al asesor comercial por correo.",
    p3_title: "Plataforma de gestión contable",
    p3_desc: "Aplicación web para un equipo contable: directorio de empresas, agenda tributaria con vencimientos sugeridos según el NIT, control de documentos, roles de equipo y correos diarios de alertas.",
    p4_title: "Plataforma de gestión para gimnasio",
    p4_desc: "Portal web para miembros y entrenador con suscripciones, pagos con comprobante, perfiles y horarios, más un bot de WhatsApp para notificaciones.",
    p5_title: "Amigo secreto",
    p5_desc: "Web para organizar el amigo secreto: grupos, sorteo, retos semanales con evidencia en foto, cuenta regresiva y notificaciones por WhatsApp, correo y push.",
    about_title: "Sobre mí",
    skills_title: "Habilidades", cv_btn: "Descargar CV",
    contact_title: "Contacto", contact_text: "¿Tienes un proyecto o quieres hablar? Escríbeme."
  },
  en: {
    hero_hi: "Hi, I'm",
    hero_eyebrow: "Financial operations · Fintech · Applied AI",
    hero_lead: "5+ years in financial services and fintech, plus my own tools built with AI. Here are some of my projects.",
    about_p1: "I have over 5 years of experience in financial services, fintech and account management: reconciliations, account analysis, fraud prevention and customer support in Spanish, English and Portuguese, working with product, compliance and engineering teams.",
    about_p2: "That experience led me to build my own tools: an accounting platform with a tax calendar, a gym management portal, an AI-powered housing advisor and an invoice guardian that decides with rules and uses AI only to read. I program with AI assistants, and I review, test and understand what they generate before shipping it.",
    about_p3: "I use AI where it adds value and leave sensitive decisions to a person. I design data with database-level roles and permissions, inactivity logout and secrets kept out of the repository.",
    sk_fin: "Finance & operations", sk_fin1: "Account reconciliation", sk_fin2: "Accounts payable and receivable (AP/AR)", sk_fin3: "Account analysis and fraud prevention", sk_fin4: "Fintech customer support", sk_fin5: "Quality assurance (QA)",
    sk_tools: "Tools", sk_tools1: "Advanced Excel",
    sk_ai: "Applied AI", sk_ai1: "LLM conversational agents", sk_ai2: "Multi-provider integration (OpenAI, Gemini, Vertex AI)", sk_ai3: "AI-assisted development (Claude Code)", sk_ai4: "Reviewing and validating generated code", sk_ai5: "Prompt-injection defense", sk_ai6: "Deterministic rules with AI only for reading",
    sk_dev: "Development & data", sk_data1: "Authentication and roles", sk_test: "Automated testing (pytest, Playwright)", sk_data2: "Secure secrets handling",
    sk_lang: "Languages", lang_es: "Spanish · Native", lang_en: "English · C1", lang_pt: "Portuguese · B2+",
    sk_edu: "Education", edu1: "Systems Technician · CUN University (2018)", edu2: "Google UX Design (2025)", edu3: "AI and Productivity · Santander Open Academy (2024)", edu4: "Python (Google) and Bookkeeping (Intuit) · in progress",
    nav_projects: "Projects", nav_about: "About", nav_skills: "Skills", nav_contact: "Contact",
    hero_cta1: "View projects", hero_cta2: "Get in touch",
    projects_title: "Projects",
    p6_title: "AI invoice guardian",
    p6_desc: "A safety filter before payment: AI reads invoices (PDF, photo or XML) and a rule engine without AI decides to pay, stop or escalate, with a chained audit log that exposes any tampering. Built for the Blinka Challenge (Hackathon 30X), using fictional data.",
    p1_desc: "Conversational agent that profiles users, recommends housing projects and applicable subsidies, and emails the summary to the sales advisor.",
    p3_title: "Accounting management platform",
    p3_desc: "Web app for an accounting team: client directory, tax calendar with due dates suggested from the tax ID, document tracking, team roles and daily email alerts.",
    p4_title: "Gym management platform",
    p4_desc: "Web portal for members and trainer with subscriptions, receipt-based payments, profiles and schedules, plus a WhatsApp bot for notifications.",
    p5_title: "Secret Santa",
    p5_desc: "Web app to organize a secret Santa: groups, draw, weekly challenges with photo evidence, countdown, and WhatsApp, email and push notifications.",
    about_title: "About me",
    skills_title: "Skills", cv_btn: "Download CV",
    contact_title: "Contact", contact_text: "Have a project or want to chat? Write to me."
  }
};

const btn = document.getElementById("lang");
function setLang(l) {
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = T[l][el.dataset.i18n]; });
  btn.textContent = l === "es" ? "EN" : "ES";
  try { localStorage.setItem("lang", l); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
setLang(saved || (navigator.language.startsWith("en") ? "en" : "es"));
btn.addEventListener("click", () => setLang(document.documentElement.lang === "es" ? "en" : "es"));
document.querySelectorAll(".slider").forEach(s => {
  const track = s.querySelector(".slides"), n = track.children.length, dots = s.querySelector(".dots");
  const go = i => track.scrollTo({ left: Math.max(0, Math.min(n - 1, i)) * track.clientWidth, behavior: "smooth" });
  const cur = () => Math.round(track.scrollLeft / track.clientWidth);
  for (let i = 0; i < n; i++) { const d = document.createElement("span"); d.onclick = () => go(i); dots.appendChild(d); }
  const paint = () => [...dots.children].forEach((d, i) => d.classList.toggle("on", i === cur()));
  track.addEventListener("scroll", paint); paint();
  s.querySelector(".prev").onclick = () => go(cur() - 1);
  s.querySelector(".next").onclick = () => go(cur() + 1);
});
document.getElementById("year").textContent = new Date().getFullYear();
