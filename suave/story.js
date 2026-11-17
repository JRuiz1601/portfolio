// Capa narrativa de la variante "suave". Los datos (experiencia, proyectos, stack, contacto)
// vienen de ../content.js; aquí solo vive el tono, los títulos de capítulo y los textos nuevos.
const STORY = {
  marca: "juan.",

  nav: {
    inicio: { es: "inicio", en: "home" },
    experiencia: { es: "historia", en: "story" },
    proyectos: { es: "proyectos", en: "projects" },
    stack: { es: "stack", en: "stack" },
    contacto: { es: "hablemos", en: "let's talk" }
  },

  hero: {
    eyebrow: { es: "cali, colombia · ingeniería de sistemas, icesi", en: "cali, colombia · systems engineering, icesi" },
    saludo: { es: "hola, soy juan esteban.", en: "hi, i'm juan esteban." },
    lead: {
      es: "Construyo software que sale de la demo y llega a la gente: facturas reales ante la DIAN, un agente que les responde a estudiantes y una plataforma que un equipo comercial usa cada día.",
      en: "I build software that leaves the demo and reaches people: real invoices filed with Colombia's tax authority, an agent that answers students, and a platform a sales team uses every day."
    },
    estado: { es: "buscando práctica 2027-1", en: "open to a 2027-1 internship" },
    estadoDetalle: {
      es: "9.º semestre · 6 meses, tiempo completo",
      en: "9th semester · 6 months, full-time"
    },
    ctaHistoria: { es: "empieza la historia", en: "start the story" },
    ctaContacto: { es: "escríbeme", en: "write to me" },
    hv: { es: "hv", en: "cv" },
    verPitch: { es: "mi pitch", en: "my pitch" },
    scroll: { es: "desliza", en: "scroll" }
  },

  manifiesto: {
    texto: {
      es: "No me basta con que algo funcione en mi computador. Me importa que funcione un martes cualquiera, con clientes haciendo fila en el mostrador y alguien que necesita su factura ya.",
      en: "It's not enough for something to work on my laptop. I care that it works on any given Tuesday, with customers lined up at the counter and someone who needs their invoice right now."
    },
    // palabras que se resaltan en crema cuando se encienden
    enfasis: ["funcione", "martes", "fila", "works", "tuesday", "lined"],
    numerosTitulo: { es: "hasta ahora, en números", en: "so far, in numbers" }
  },

  capitulos: {
    experiencia: {
      kicker: { es: "capítulo 01", en: "chapter 01" },
      titulo: { es: "dónde aprendí a entregar", en: "where i learned to ship" },
      intro: {
        es: "Dos lugares, un mismo patrón: alguien con un problema real y código que tenía que funcionar desde el primer día.",
        en: "Two places, one pattern: someone with a real problem and code that had to work from day one."
      }
    },
    proyectos: {
      kicker: { es: "capítulo 02", en: "chapter 02" },
      titulo: { es: "cada proyecto empezó con un problema", en: "every project started with a problem" },
      intro: {
        es: "No con una tecnología. Estas son las historias: cómo estaba la cosa antes, qué construí y cómo quedó.",
        en: "Not with a technology. These are the stories: how things were before, what I built, and where it landed."
      }
    },
    stack: {
      kicker: { es: "capítulo 03", en: "chapter 03" },
      titulo: { es: "las herramientas, sin drama", en: "the tools, no drama" },
      intro: {
        es: "Lo que uso para llevar una idea hasta producción.",
        en: "What I use to take an idea all the way to production."
      }
    },
    contacto: {
      kicker: { es: "capítulo 04", en: "chapter 04" },
      titulo: { es: "¿y si lo siguiente lo construimos juntos?", en: "what if we build the next one together?" },
      intro: {
        es: "Busco práctica para 2027-1. Si tu equipo pone código en manos de usuarios reales, me encantaría conversar.",
        en: "I'm looking for a 2027-1 internship. If your team puts code in the hands of real users, I'd love to talk."
      }
    }
  },

  // Una frase de entrada por cada trabajo, en el mismo orden que CONTENT.experiencia.trabajos
  trabajosLead: [
    {
      es: "Todo empezó en la ferretería de mi familia. Cada factura se digitaba dos veces, una en el sistema y otra a mano en el portal de la DIAN. Construí el módulo que lo hace solo.",
      en: "It all started at my family's hardware store. Every invoice was typed twice, once in the system and once by hand on the tax portal. I built the module that does it on its own."
    },
    {
      es: "Un departamento con 34 electivas y estudiantes leyendo PDFs sueltos para escoger materia. Les construí un agente que responde por ellos, a cualquier hora.",
      en: "A department with 34 electives and students digging through scattered PDFs to pick a course. I built them an agent that answers for them, at any hour."
    }
  ],
  comoLoHice: { es: "cómo lo hice", en: "how i did it" },
  tambien: { es: "por el camino", en: "along the way" },

  pasos: {
    problema: { es: "antes", en: "before" },
    solucion: { es: "lo que hice", en: "what i built" },
    analitica: { es: "los datos", en: "the data" },
    resultado: { es: "hoy", en: "today" }
  },
  conQue: { es: "con qué", en: "built with" },

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

  franja: { es: "con lo que construyo", en: "what i build with" },
  franjaLogos: ["nestjs", "postgresql", "nextdotjs", "docker", "python", "n8n", "supabase", "redis", "googlegemini", "claude", "prisma", "typescript", "githubactions", "scikitlearn", "traefikproxy", "react", "django", "springboot", "minio", "jira"],

  hvCard: {
    kicker: { es: "lo más pedido", en: "most requested" },
    titulo: { es: "mi hoja de vida, en una página", en: "my résumé, on one page" },
    texto: {
      es: "Experiencia, proyectos, stack y logros. Lista para imprimir o reenviar a tu equipo.",
      en: "Experience, projects, stack and achievements. Ready to print or forward to your team."
    },
    boton: { es: "descargar PDF", en: "download PDF" },
    idioma: { es: "en español", en: "in English" },
    otro: { es: "¿la necesitas en inglés?", en: "need it in Spanish?" },
    preview: { es: "img/hv-es.webp", en: "img/hv-en.webp" },
    alt: { es: "Vista previa de la hoja de vida", en: "Résumé preview" }
  },
  pitchLink: { es: "o mira mi pitch en video", en: "or watch my video pitch" },
  cierre: { es: "hecho en cali, con calma.", en: "made in cali, with calm." },
  versionClasica: { es: "ver versión clásica", en: "see classic version" }
};
