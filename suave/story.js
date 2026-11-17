// Capa narrativa de la variante "suave". Los datos (experiencia, proyectos, stack, contacto)
// vienen de ../content.js; aquí solo vive el tono, los títulos de capítulo y los textos nuevos.
const STORY = {
  marca: "Juan.",

  nav: {
    inicio: { es: "Inicio", en: "Home" },
    experiencia: { es: "Historia", en: "Story" },
    proyectos: { es: "Proyectos", en: "Projects" },
    stack: { es: "Stack", en: "Stack" },
    contacto: { es: "Hablemos", en: "Let's talk" }
  },

  hero: {
    eyebrow: { es: "Cali, Colombia · Ingeniería de Sistemas, Icesi", en: "Cali, Colombia · Systems Engineering, Icesi" },
    saludo: { es: "Hola, soy Juan Esteban.", en: "Hi, I'm Juan Esteban." },
    lead: {
      es: "Construyo software que sale de la demo y llega a la gente: facturas reales ante la DIAN, un agente que les responde a estudiantes y una plataforma que un equipo comercial usa cada día.",
      en: "I build software that leaves the demo and reaches people: real invoices filed with Colombia's tax authority, an agent that answers students, and a platform a sales team uses every day."
    },
    ctaHistoria: { es: "Empieza la historia", en: "Start the story" },
    ctaContacto: { es: "Escríbeme", en: "Write to me" },
    hv: { es: "HV", en: "CV" },
    verPitch: { es: "Mi pitch", en: "My pitch" },
    scroll: { es: "Desliza", en: "Scroll" }
  },

  manifiesto: {
    texto: {
      es: "No me basta con que algo funcione en mi computador. Me importa que funcione un martes cualquiera, con clientes haciendo fila en el mostrador y alguien que necesita su factura ya.",
      en: "It's not enough for something to work on my laptop. I care that it works on any given Tuesday, with customers lined up at the counter and someone who needs their invoice right now."
    },
    // palabras que se resaltan en crema cuando se encienden
    enfasis: ["funcione", "martes", "fila", "works", "tuesday", "lined"],
    numerosTitulo: { es: "Hasta ahora, en números", en: "So far, in numbers" }
  },

  capitulos: {
    experiencia: {
      kicker: { es: "Capítulo 01", en: "Chapter 01" },
      titulo: { es: "Dónde aprendí a entregar", en: "Where I learned to ship" },
      intro: {
        es: "Dos lugares, un mismo patrón: alguien con un problema real y código que tenía que funcionar desde el primer día.",
        en: "Two places, one pattern: someone with a real problem and code that had to work from day one."
      }
    },
    proyectos: {
      kicker: { es: "Capítulo 02", en: "Chapter 02" },
      titulo: { es: "Cada proyecto empezó con un problema", en: "Every project started with a problem" },
      intro: {
        es: "No con una tecnología. Estas son las historias: cómo estaba la cosa antes, qué construí y cómo quedó.",
        en: "Not with a technology. These are the stories: how things were before, what I built, and where it landed."
      }
    },
    stack: {
      kicker: { es: "Capítulo 03", en: "Chapter 03" },
      titulo: { es: "Las herramientas, sin drama", en: "The tools, no drama" },
      intro: {
        es: "Lo que uso para llevar una idea hasta producción.",
        en: "What I use to take an idea all the way to production."
      }
    },
    contacto: {
      kicker: { es: "Capítulo 04", en: "Chapter 04" },
      titulo: { es: "¿Y si lo siguiente lo construimos juntos?", en: "What if we build the next one together?" },
      intro: {
        es: "Si tu equipo pone código en manos de usuarios reales, me encantaría conversar.",
        en: "If your team puts code in the hands of real users, I'd love to talk."
      }
    }
  },

  // Una frase de entrada por cada trabajo, en el mismo orden que CONTENT.experiencia.trabajos
  trabajosLead: [
    {
      es: "Todo empezó en una ferretería de Cali. Cada factura se digitaba dos veces, una en el sistema y otra a mano en el portal de la DIAN. Construí el módulo que lo hace solo.",
      en: "It all started at a hardware store in Cali. Every invoice was typed twice, once in the system and once by hand on the tax portal. I built the module that does it on its own."
    },
    {
      es: "Un departamento con 34 electivas y estudiantes leyendo PDFs sueltos para escoger materia. Les construí un agente que responde por ellos, a cualquier hora.",
      en: "A department with 34 electives and students digging through scattered PDFs to pick a course. I built them an agent that answers for them, at any hour."
    }
  ],
  // Ajustes al contenido compartido que solo aplican en esta variante
  // (la versión clásica sigue leyendo ../content.js tal cual).
  ajustarContenido(C) {
    C.experiencia.trabajos[0].empresa = "FerreMundial";
    C.proyectos.lista[1].contexto = { es: "Proyecto en solitario", en: "Solo project" };
  },
  comoLoHice: { es: "Cómo lo hice", en: "How I did it" },
  tambien: { es: "Por el camino", en: "Along the way" },

  pasos: {
    problema: { es: "Antes", en: "Before" },
    solucion: { es: "Lo que hice", en: "What I built" },
    analitica: { es: "Los datos", en: "The data" },
    resultado: { es: "Hoy", en: "Today" }
  },
  conQue: { es: "Con qué", en: "Built with" },

  // Logos de organizaciones (imágenes locales en img/)
  orgs: {
    ferremundial: { img: "img/ferremundial-icon.png", nombre: "FerreMundial" },
    icesi: { img: "img/icesi.png", nombre: "Universidad Icesi" }
  },
  trabajosOrg: ["ferremundial", "icesi"],
  proyectosOrg: ["icesi", "ferremundial", "icesi", null, null],
  // Para proyectos sin capturas: un escenario con los logos de lo que se usó
  proyectosVisual: [null, null, null,
    ["python", "mediapipe", "scikitlearn", "gradio"],
    ["openjdk", "github"]
  ],
  // Iconos para las cifras (en orden con CONTENT.hero.senales)
  numerosIcono: ["receipt", "chart", "book", "trophy"],

  franja: { es: "Con lo que construyo", en: "What I build with" },
  franjaLogos: ["nestjs", "postgresql", "nextdotjs", "docker", "python", "n8n", "supabase", "redis", "googlegemini", "claude", "prisma", "typescript", "githubactions", "scikitlearn", "traefikproxy", "react", "django", "springboot", "minio", "jira"],

  hvCard: {
    kicker: { es: "Lo más pedido", en: "Most requested" },
    titulo: { es: "Mi hoja de vida, en una página", en: "My résumé, on one page" },
    texto: {
      es: "Experiencia, proyectos, stack y logros. Lista para imprimir o reenviar a tu equipo.",
      en: "Experience, projects, stack and achievements. Ready to print or forward to your team."
    },
    boton: { es: "Descargar PDF", en: "Download PDF" },
    idioma: { es: "en español", en: "in English" },
    otro: { es: "¿la necesitas en inglés?", en: "need it in Spanish?" },
    preview: { es: "img/hv-es.webp", en: "img/hv-en.webp" },
    alt: { es: "Vista previa de la hoja de vida", en: "Résumé preview" }
  },
  pitchLink: { es: "O mira mi pitch en video", en: "Or watch my video pitch" },
  cierre: { es: "Hecho en Cali, con calma.", en: "Made in Cali, with calm." },
  versionClasica: { es: "Ver versión clásica", en: "See classic version" }
};
