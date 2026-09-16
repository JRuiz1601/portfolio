// Contenido del portafolio — bilingüe (es/en). Todo lo que aparece en pantalla vive acá.
const CONTENT = {
  meta: {
    title: { es: "Juan Esteban Ruiz Ome — Ingeniero de Software", en: "Juan Esteban Ruiz Ome — Software Engineer" }
  },

  nav: {
    inicio: { es: "Inicio", en: "Home" },
    experiencia: { es: "Experiencia", en: "Experience" },
    proyectos: { es: "Proyectos", en: "Projects" },
    stack: { es: "Stack", en: "Stack" },
    contacto: { es: "Contacto", en: "Contact" }
  },

  hero: {
    eyebrow: { es: "Cali, Colombia — Ing. de Sistemas, Icesi", en: "Cali, Colombia — Systems Eng., Icesi" },
    nombre: "Juan Esteban Ruiz Ome",
    rol: { es: "Ingeniero de Software — IA y Automatización", en: "Software Engineer — AI & Automation" },
    bio: {
      es: "Construyo sistemas que llegan a producción, no que se quedan en demo. Lidero la digitalización de FerreMundial, la ferretería de mi familia en Cali, y construí un agente conversacional para la Universidad Icesi. Trabajo de punta a punta: del requerimiento al despliegue.",
      en: "I build systems that reach production, not ones that stay in demo. I lead the digitalization of FerreMundial, my family's hardware store in Cali, and built a conversational agent for Universidad Icesi. I work end to end: from requirements to deployment."
    },
    estadoPill: { es: "Buscando práctica 2027-1", en: "Looking for a 2027-1 internship" },
    estado: {
      es: "Estudiante de 9.º semestre en la Universidad Icesi. Buscando práctica profesional para 2027-1 (6 meses, tiempo completo) — donde el código que escriba tenga usuarios reales, no un sprint de portafolio.",
      en: "9th-semester Systems Engineering student at Universidad Icesi. Looking for a 2027-1 internship (6 months, full-time) — somewhere the code I write has real users, not just a portfolio sprint."
    },
    ctaProyectos: { es: "Ver proyectos", en: "View projects" },
    ctaHv: { es: "Descargar HV", en: "Download CV" },
    ctaContacto: { es: "Contacto", en: "Contact" },
    fotoTag: "Cali, CO",
    senales: [
      { num: "205", label: { es: "documentos fiscales en producción", en: "tax documents in production" } },
      { num: "34", label: { es: "electivas indexadas en el agente", en: "electives indexed by the agent" } },
      { num: "3.er", label: { es: "puesto — Global Hack 2025", en: "place — Global Hack 2025" } }
    ]
  },

  panelClose: { es: "Cerrar", en: "Close" },

  experiencia: {
    titulo: { es: "Experiencia", en: "Experience" },
    trabajos: [
      {
        empresa: "FerreMundial (negocio familiar)",
        cargo: { es: "Desarrollador de Software", en: "Software Developer" },
        periodo: "2023 — presente",
        ubicacion: "Cali, Colombia",
        logros: [
          {
            es: "Diseñé e implementé el módulo de facturación electrónica integrando la API de Factus con la DIAN (NestJS + PostgreSQL + TypeORM), con cuatro modos de emisión, autocompletado de cliente por NIT y cola de impresión conectada a la caja física del local.",
            en: "Designed and implemented the electronic invoicing module integrating the Factus API with Colombia's tax authority, DIAN (NestJS + PostgreSQL + TypeORM), with four issuance modes, customer autocomplete by tax ID and a print queue wired to the store's physical register."
          },
          {
            es: "Puse el módulo en producción en agosto de 2026: 205 documentos fiscales emitidos (199 facturas y 6 notas crédito) con trazabilidad de CUFE, sin digitación manual en el portal de la entidad y dando continuidad exacta al consecutivo legal que se llevaba a mano.",
            en: "Shipped the module to production in August 2026: 205 tax documents issued (199 invoices, 6 credit notes) with CUFE traceability, zero manual entry on the government portal and exact continuity of the legal invoice sequence previously kept by hand."
          },
          {
            es: "Desarrollé y desplegué el catálogo digital del negocio (372 productos, Next.js + NestJS + PostgreSQL sobre Docker en un VPS), con conversión a pedido por WhatsApp.",
            en: "Built and deployed the company's digital catalog (372 products, Next.js + NestJS + PostgreSQL on Docker over a VPS), converting to orders via WhatsApp."
          },
          {
            es: "Implementé el panel administrativo y la API backend con CI/CD en GitHub Actions y migraciones versionadas, sosteniendo la operación diaria de un negocio con 50+ clientes al día.",
            en: "Implemented the admin panel and backend API with CI/CD on GitHub Actions and versioned migrations, sustaining daily operations for a business serving 50+ customers per day."
          }
        ],
        stack: ["NestJS", "PostgreSQL", "TypeORM", "Next.js", "Docker", "GitHub Actions", "Factus API"]
      },
      {
        empresa: "Universidad Icesi (contrato independiente)",
        cargo: { es: "Desarrollador de IA y Automatización", en: "AI & Automation Developer" },
        periodo: "jun. 2025 — ene. 2026",
        ubicacion: { es: "Cali, Colombia (remoto)", en: "Cali, Colombia (remote)" },
        logros: [
          {
            es: "Contratado de forma independiente por el Departamento de Ciencia, Tecnología y Sociedad para automatizar la atención de consultas académicas, desde el levantamiento del requerimiento hasta la entrega del sistema funcionando.",
            en: "Independently contracted by the Science, Technology and Society Department to automate academic inquiry handling, from requirements gathering through delivery of the working system."
          },
          {
            es: "Construí un agente conversacional en n8n que enruta cada pregunta entre consulta SQL estructurada y búsqueda semántica híbrida (Supabase + pgvector, Gemini) sobre el portafolio completo de 34 materias electivas del departamento —sílabos, horarios y profesores—, con memoria de sesión en Redis y reglas explícitas de control de alucinación.",
            en: "Built a conversational agent in n8n that routes each question between structured SQL lookup and hybrid semantic search (Supabase + pgvector, Gemini) over the department's full portfolio of 34 elective courses — syllabi, schedules and faculty — with Redis session memory and explicit hallucination-control rules."
          }
        ],
        stack: ["n8n", "Supabase", "pgvector", "Redis", "Gemini"]
      }
    ],
    educacionTitulo: { es: "Educación", en: "Education" },
    educacion: {
      programa: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
      institucion: "Universidad Icesi, Cali",
      periodo: "2022 — 2027"
    },
    logrosTitulo: { es: "Logros", en: "Achievements" },
    logros: [
      {
        titulo: { es: "3.er puesto nacional — Global Hack 2025", en: "3rd place nationally — Global Hack 2025" },
        detalle: {
          es: "Reto \"El Futuro del Seguro\" (Global Seguros & Design Factory Javeriana): solución insurtech seleccionada entre las cinco finalistas nacionales por viabilidad técnica e innovación.",
          en: "\"El Futuro del Seguro\" challenge (Global Seguros & Design Factory Javeriana): insurtech solution selected among the five national finalists for technical feasibility and innovation."
        },
        año: "2025"
      },
      {
        titulo: { es: "Scrum Foundation Professional Certification (SFPC)", en: "Scrum Foundation Professional Certification (SFPC)" },
        detalle: {
          es: "Certificación en fundamentos de Scrum y metodologías ágiles, otorgada por CertiProf.",
          en: "Certification in Scrum fundamentals and agile methodologies, issued by CertiProf."
        },
        año: "2024"
      }
    ]
  },

  proyectos: {
    titulo: { es: "Proyectos", en: "Projects" },
    lista: [
      {
        nombre: "Chatbot RAG Institucional — Universidad Icesi",
        pitch: {
          es: "Agente conversacional que decide entre consulta SQL y búsqueda semántica para resolver preguntas sobre las electivas de un departamento académico.",
          en: "Conversational agent that routes between SQL lookup and semantic search to answer questions about a department's elective courses."
        },
        problema: {
          es: "Los estudiantes tenían que leer manualmente decenas de PDFs sueltos —sílabos, horarios, profesores— para decidir qué electiva tomar.",
          en: "Students had to manually read through dozens of scattered PDFs — syllabi, schedules, faculty — just to choose their elective courses."
        },
        solucion: {
          es: "Construí un agente en n8n que enruta cada pregunta entre consulta SQL estructurada (horarios, créditos, profesores) y búsqueda semántica híbrida (Supabase + pgvector, Gemini) sobre el portafolio completo de 34 electivas, con memoria de sesión en Redis y reglas explícitas de control de alucinación.",
          en: "Built an n8n agent that routes each question between structured SQL lookup (schedules, credits, faculty) and hybrid semantic search (Supabase + pgvector, Gemini) over the department's full portfolio of 34 elective courses, with Redis session memory and explicit hallucination-control rules."
        },
        resultado: {
          es: "Resolvió consultas académicas 24/7 sin intervención humana durante el semestre que estuvo en producción (jun. 2025 – ene. 2026).",
          en: "Resolved academic queries 24/7 without human intervention during the semester it was in production (Jun 2025 – Jan 2026)."
        },
        stack: ["n8n", "Supabase", "pgvector", "Redis", "Gemini"],
        repo: "github.com/JRuiz1601/rags-chatbot-icesi",
        demo: "",
        estado: { es: "Entregado — hoy fuera de producción", en: "Delivered — now decommissioned" }
      },
      {
        nombre: "Facturación Electrónica DIAN — FerreMundial",
        pitch: {
          es: "Módulo de facturación electrónica que integra la operación de una ferretería real con la DIAN.",
          en: "Electronic invoicing module integrating a real hardware store's operation with Colombia's tax authority."
        },
        problema: {
          es: "Cada factura electrónica había que digitarla dos veces: una en el sistema del negocio, otra a mano en el portal de la DIAN — heredado de un ERP genérico (Siesa) que no encajaba con la operación real.",
          en: "Every electronic invoice had to be typed twice: once in the business system, once by hand on the DIAN portal — inherited from a generic ERP (Siesa) that didn't fit the real operation."
        },
        solucion: {
          es: "Diseñé e implementé el módulo integrando la API de Factus con la DIAN (NestJS + PostgreSQL + TypeORM), con cuatro modos de emisión, autocompletado de cliente por NIT y cola de impresión conectada a la caja física del local.",
          en: "Designed and implemented the module integrating the Factus API with DIAN (NestJS + PostgreSQL + TypeORM), with four issuance modes, customer autocomplete by tax ID and a print queue wired to the store's physical register."
        },
        resultado: {
          es: "205 documentos fiscales emitidos desde agosto de 2026 (199 facturas y 6 notas crédito), con trazabilidad de CUFE y continuidad exacta del consecutivo legal que se llevaba a mano.",
          en: "205 tax documents issued since August 2026 (199 invoices, 6 credit notes), with CUFE traceability and exact continuity of the legal invoice sequence previously kept by hand."
        },
        stack: ["NestJS", "PostgreSQL", "TypeORM", "Factus API"],
        repo: "",
        demo: "ferremundial.co",
        estado: { es: "En producción", en: "In production" }
      },
      {
        nombre: { es: "Sistema de Votación Electoral Distribuido", en: "Distributed Electoral Voting System" },
        pitch: {
          es: "Sistema de votación con mensajería confiable para evitar pérdidas o duplicados.",
          en: "Distributed voting system with reliable messaging to prevent lost or duplicated votes."
        },
        problema: {
          es: "Un sistema de votación distribuido necesita garantizar que ningún voto se pierda o se duplique, incluso si la red falla a mitad de una transmisión.",
          en: "A distributed voting system must guarantee that no vote is lost or duplicated, even if the network fails mid-transmission."
        },
        solucion: {
          es: "Implementé el patrón Reliable Messaging (store-and-forward, reintentos automáticos y UUID por voto) sobre ZeroC ICE y Java 11.",
          en: "Implemented the Reliable Messaging pattern (store-and-forward, automatic retries and per-vote UUID) over ZeroC ICE and Java 11."
        },
        resultado: {
          es: "Validado en entorno local con pruebas de carga de 100.000 votos desde 4 estaciones concurrentes, sin pérdidas ni duplicados registrados y con recuperación automática tras una caída de red inducida de 30 s. No logró desplegarse en los equipos de laboratorio de la universidad.",
          en: "Validated locally with load tests of 100,000 votes from 4 concurrent stations, with no losses or duplicates recorded and automatic recovery after an induced 30s network outage. Did not deploy successfully on the university's lab machines."
        },
        stack: ["Java 11", "ZeroC ICE"],
        repo: "github.com/JRuiz1601/Software_IV_Final_Project",
        demo: "",
        estado: { es: "Validado en local, sin desplegar", en: "Locally validated, not deployed" }
      },
      {
        nombre: { es: "Sistema de Anotación de Video con IA", en: "AI Video Annotation System" },
        pitch: {
          es: "Clasificador de actividades humanas a partir de video, entrenado en Python.",
          en: "Human activity classifier from video, trained in Python."
        },
        problema: {
          es: "Reconocer automáticamente actividades humanas en video a partir de landmarks corporales, sin sensores adicionales.",
          en: "Automatically recognizing human activities in video from body landmarks, without extra sensors."
        },
        solucion: {
          es: "Entrené un clasificador Random Forest en Python sobre 83 features geométricas derivadas de landmarks de MediaPipe, reducidas a 16 componentes vía PCA.",
          en: "Trained a Random Forest classifier in Python over 83 geometric features from MediaPipe landmarks, reduced to 16 components via PCA."
        },
        resultado: {
          es: "Desplegado en una demo funcional con webcam en Gradio; documenté una brecha real entre el desempeño en test y el desempeño en vivo, con un plan de mejora basado en contexto temporal y diversidad de datos.",
          en: "Deployed in a working webcam demo on Gradio; documented a real gap between test performance and live performance, with an improvement plan based on temporal context and data diversity."
        },
        stack: ["Python", "scikit-learn", "MediaPipe", "Gradio"],
        repo: "github.com/JRuiz1601/video-ai-annotation-system",
        demo: "",
        estado: { es: "Entregado (proyecto de curso)", en: "Delivered (coursework)" }
      }
    ],
    verRepo: { es: "Repo", en: "Repo" },
    verDemo: { es: "Demo", en: "Demo" },
    placeholderImg: { es: "Captura pendiente", en: "Screenshot pending" },
    labels: {
      problema: { es: "Problema", en: "Problem" },
      solucion: { es: "Solución", en: "Solution" },
      resultado: { es: "Resultado", en: "Result" }
    }
  },

  stack: {
    titulo: { es: "Stack", en: "Stack" },
    categorias: [
      { nombre: { es: "Lenguajes", en: "Languages" }, items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
      { nombre: { es: "Backend / Frontend", en: "Backend / Frontend" }, items: ["NestJS", "Django", "Spring Boot", "Next.js", "React"] },
      { nombre: { es: "Datos y arquitectura", en: "Data & Architecture" }, items: ["PostgreSQL", "TypeORM", "Supabase", { es: "modelado de datos", en: "data modeling" }, { es: "sistemas distribuidos", en: "distributed systems" }, { es: "integración de APIs de terceros", en: "third-party API integration" }, { es: "patrones de diseño", en: "design patterns" }] },
      { nombre: { es: "Automatización e IA aplicada", en: "Automation & Applied AI" }, items: ["n8n", { es: "agentes de IA con herramientas", en: "tool-using AI agents" }, { es: "RAG y búsqueda híbrida", en: "RAG & hybrid search" }, { es: "APIs de LLMs (Claude, Gemini, OpenAI)", en: "LLM APIs (Claude, Gemini, OpenAI)" }, "Redis", { es: "desarrollo asistido con Claude Code", en: "Claude Code-assisted development" }, "scikit-learn", "MediaPipe"] },
      { nombre: "DevOps", items: ["Docker", "Docker Compose", "Git/GitHub", "GitHub Actions", { es: "despliegue en VPS", en: "VPS deployment" }] }
    ]
  },

  contacto: {
    titulo: { es: "Contacto", en: "Contact" },
    intro: {
      es: "Lo más rápido es escribirme directo. También puedes ver el pitch en video o descargar mi HV.",
      en: "Fastest way is to message me directly. You can also watch the video pitch or download my CV."
    },
    email: "jruizome@gmail.com",
    telefono: "+57 318 534 9518",
    linkedin: "linkedin.com/in/jruizome",
    github: "github.com/JRuiz1601",
    ciudad: "Cali, Colombia",
    pitchUrl: "https://youtu.be/o3nKC3DrlII",
    pitchLabel: { es: "Ver pitch (video)", en: "Watch pitch (video)" },
    idiomas: { es: "Español (nativo) · Inglés B2 (profesional)", en: "Spanish (native) · English B2 (professional)" },
    ctaHv: { es: "Descargar HV", en: "Download CV" },
    labels: {
      email: { es: "Email", en: "Email" },
      telefono: { es: "Teléfono", en: "Phone" },
      linkedin: { es: "LinkedIn", en: "LinkedIn" },
      github: { es: "GitHub", en: "GitHub" },
      ciudad: { es: "Ciudad", en: "City" },
      idiomas: { es: "Idiomas", en: "Languages" }
    }
  }
};
