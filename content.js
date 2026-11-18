// Contenido del portafolio — bilingüe (es/en). Todo lo que aparece en pantalla vive acá.
const CONTENT = {
  meta: {
    title: { es: "Juan Esteban Ruiz Ome — Ingeniero de Software", en: "Juan Esteban Ruiz Ome — Software Engineer" }
  },

  hvUrl: { es: "assets/hv-juan-esteban-ruiz-ome.pdf", en: "assets/resume-juan-esteban-ruiz-ome-en.pdf" },
  hvFab: { es: "Descargar HV", en: "Download CV" },
  pitchVideoId: "o3nKC3DrlII",

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
    rol: { es: "Agentes de IA, RAG y Desarrollo Backend", en: "AI Agents, RAG & Backend Development" },
    bio: {
      es: "Construyo sistemas que llegan a producción, no que se quedan en demo. Puse en producción la facturación electrónica de FerreMundial, construí un agente de IA con RAG híbrido para la Universidad Icesi y, en mi proyecto de grado, una plataforma comercial con segmentación de clientes por K-means.",
      en: "I build systems that reach production, not ones that stay in demo. I shipped FerreMundial's electronic invoicing, built an AI agent with hybrid RAG for Universidad Icesi and, for my capstone, a commercial platform with K-means customer segmentation."
    },
    estadoPill: { es: "Buscando práctica 2027-1", en: "Looking for a 2027-1 internship" },
    estado: {
      es: "Estudiante de 9.º semestre en la Universidad Icesi. Buscando práctica profesional para 2027-1 (6 meses, tiempo completo) — donde el código que escriba tenga usuarios reales.",
      en: "9th-semester Systems Engineering student at Universidad Icesi. Looking for a 2027-1 internship (6 months, full-time) — somewhere the code I write has real users."
    },
    ctaProyectos: { es: "Ver proyectos", en: "View projects" },
    ctaHv: { es: "Descargar HV", en: "Download CV" },
    ctaContacto: { es: "Contacto", en: "Contact" },
    fotoTag: "Cali, CO",
    verPitch: { es: "Ver mi pitch", en: "Watch my pitch" },
    senales: [
      { num: "385", label: { es: "documentos fiscales en producción", en: "tax documents in production" } },
      { num: "2.733", label: { es: "propuestas segmentadas con K-means", en: "proposals segmented with K-means" } },
      { num: "34", label: { es: "electivas indexadas en el agente", en: "electives indexed by the agent" } },
      { num: "3.er", label: { es: "puesto — Global Hack 2025", en: "place — Global Hack 2025" } }
    ]
  },

  scrollHint: { es: "Desliza", en: "Scroll" },

  experiencia: {
    kicker: "01",
    titulo: { es: "Experiencia", en: "Experience" },
    trabajos: [
      {
        empresa: "FerreMundial",
        cargo: { es: "Desarrollador de Software", en: "Software Developer" },
        periodo: { es: "ene. 2023 — presente", en: "Jan 2023 — present" },
        ubicacion: "Cali, Colombia",
        logros: [
          {
            es: "Diseñé e implementé el módulo de facturación electrónica integrando la API de Factus con la DIAN (NestJS + PostgreSQL + TypeORM), con cuatro modos de emisión, autocompletado de cliente por NIT y cola de impresión de tiquetes en el punto de venta (POS) del local.",
            en: "Designed and implemented the electronic invoicing module integrating the Factus API with Colombia's tax authority, DIAN (NestJS + PostgreSQL + TypeORM), with four issuance modes, customer autocomplete by tax ID and a ticket print queue at the store's point of sale (POS)."
          },
          {
            es: "Puse el módulo en producción en agosto de 2026; a corte del 3 de octubre, 385 documentos fiscales emitidos (378 facturas y 7 notas crédito) con trazabilidad de CUFE, sin digitación manual en el portal de la entidad y dando continuidad exacta al consecutivo legal que se llevaba a mano.",
            en: "Shipped the module to production in August 2026; as of October 3, 385 tax documents issued (378 invoices, 7 credit notes) with CUFE traceability, zero manual entry on the government portal and exact continuity of the legal invoice sequence previously kept by hand."
          },
          {
            es: "Desarrollé y desplegué el catálogo digital del negocio (Next.js + NestJS + PostgreSQL sobre Docker en un VPS), con conversión a pedido por WhatsApp.",
            en: "Built and deployed the company's digital catalog (Next.js + NestJS + PostgreSQL on Docker over a VPS), converting to orders via WhatsApp."
          },
          {
            es: "Implementé el panel administrativo y la API REST del backend con un pipeline CI/CD de 6 jobs en GitHub Actions (150+ pruebas automatizadas, migraciones desde cero, escaneos de seguridad y despliegue al VPS con rollback automático), sosteniendo la operación diaria de un negocio con 50+ clientes diarios.",
            en: "Implemented the admin panel and backend REST API with a 6-job CI/CD pipeline on GitHub Actions (150+ automated tests, from-scratch migrations, security scans and VPS deployment with automatic rollback), sustaining daily operations for a business serving 50+ customers a day."
          },
          {
            es: "Lideré el desarrollo asistido con Claude Code en un flujo orquestador-implementador (183 de 263 commits): planeé el trabajo, escribí prompts acotados, dejé el stack, la arquitectura y la documentación de despliegue en el repo para el agente, y revisé y fusioné los PRs.",
            en: "Led Claude Code-assisted development in an orchestrator-implementer workflow (183 of 263 commits): planned the work, wrote scoped prompts, kept the stack, architecture and deployment docs in the repo for the agent, and reviewed and merged the PRs."
          }
        ],
        stack: ["NestJS", "PostgreSQL", "TypeORM", "Next.js", "Docker", "GitHub Actions", "Factus API", "Claude Code"]
      },
      {
        empresa: { es: "Universidad Icesi (contrato independiente)", en: "Universidad Icesi (independent contract)" },
        cargo: { es: "Desarrollador de IA y Automatización", en: "AI & Automation Developer" },
        periodo: { es: "jun. 2025 — ene. 2026", en: "Jun 2025 — Jan 2026" },
        ubicacion: { es: "Cali, Colombia (remoto)", en: "Cali, Colombia (remote)" },
        logros: [
          {
            es: "Contratado por el Departamento de Ciencia, Tecnología y Sociedad para automatizar consultas académicas, del requerimiento a la entrega.",
            en: "Contracted by the Science, Technology and Society Department to automate academic inquiries, from requirements to delivery."
          },
          {
            es: "Construí un agente conversacional con herramientas en n8n que enruta cada pregunta entre consulta SQL estructurada y búsqueda semántica híbrida (Supabase + pgvector, Gemini) sobre el portafolio completo de 34 materias electivas del departamento —sílabos, horarios y profesores—, con memoria de sesión en Redis y reglas explícitas de control de alucinación.",
            en: "Built a tool-using conversational agent in n8n that routes each question between structured SQL lookup and hybrid semantic search (Supabase + pgvector, Gemini) over the department's full portfolio of 34 elective courses — syllabi, schedules and faculty — with Redis session memory and explicit hallucination-control rules."
          }
        ],
        stack: ["n8n", "Supabase", "pgvector", "Redis", "Gemini"]
      }
    ],
    educacionTitulo: { es: "Educación", en: "Education" },
    educacion: {
      programa: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
      institucion: "Universidad Icesi, Cali",
      periodo: { es: "Grado: ago. 2027", en: "Graduation: Aug 2027" }
    },
    logrosTitulo: { es: "Logros", en: "Achievements" },
    logros: [
      {
        titulo: { es: "3.er puesto nacional — Global Hack 2025", en: "3rd place nationally — Global Hack 2025" },
        detalle: {
          es: "Reto \"El Futuro del Seguro\" (Global Seguros & Design Factory Javeriana): solución insurtech elegida entre cinco finalistas nacionales por viabilidad técnica e innovación.",
          en: "\"El Futuro del Seguro\" challenge (Global Seguros & Design Factory Javeriana): insurtech solution chosen among five national finalists for technical feasibility and innovation."
        },
        año: "2025"
      },
      {
        titulo: { es: "Scrum Foundation Professional Certification (SFPC)", en: "Scrum Foundation Professional Certification (SFPC)" },
        detalle: {
          es: "Certificación en fundamentos de Scrum y metodologías ágiles, otorgada por CertiProf (marzo 2024).",
          en: "Certification in Scrum fundamentals and agile methodologies, issued by CertiProf (March 2024)."
        },
        año: "2024"
      }
    ]
  },

  proyectos: {
    kicker: "02",
    titulo: { es: "Proyectos", en: "Projects" },
    lista: [
      {
        nombre: { es: "Plataforma de Gestión Comercial y Segmentación de Clientes", en: "Commercial Management Platform & Customer Segmentation" },
        contexto: { es: "Proyecto de grado · Universidad Icesi · equipo de 4", en: "Capstone project · Universidad Icesi · team of 4" },
        periodo: { es: "mar. 2026 — presente", en: "Mar 2026 — present" },
        pitch: {
          es: "Aplicación web en producción que reemplaza la gestión de propuestas comerciales en Excel y correo del área de Organizaciones de Icesi, con un modelo de segmentación de clientes para priorizar la prospección.",
          en: "Production web app replacing the Excel-and-email commercial proposal process of Icesi's Organizations area, with a customer segmentation model to prioritize prospecting."
        },
        problema: {
          es: "Las propuestas comerciales para empresas viajaban entre KAM y Líderes de Producto por correo y hojas de Excel: sin trazabilidad de etapas, sin un registro único de empresas, con el costeo hecho a mano y sin saber a qué clientes priorizar.",
          en: "Commercial proposals for companies moved between KAMs and Product Leads via email and Excel sheets: no stage traceability, no single company registry, costing done by hand and no way to know which customers to prioritize."
        },
        solucion: {
          es: "Desarrollamos un flujo trazable entre KAM y Líder de Producto con tablero kanban y SLA por etapa, asignación de docentes de planta o externos, costeo con validación de márgenes, repositorio de archivos, registro único de empresas por NIT, permisos por rol y dashboard de administración (Next.js 16, NestJS, PostgreSQL, Docker).",
          en: "We built a traceable KAM ↔ Product Lead workflow with a kanban board and per-stage SLA, faculty or external consultant assignment, costing with margin validation, a file repository, a single company registry by tax ID, role-based permissions and an admin dashboard (Next.js 16, NestJS, PostgreSQL, Docker)."
        },
        analitica: {
          es: "Segmenté a los clientes con K-means sobre 2.733 propuestas de 185 empresas y 5 variables, tras unificar 805 nombres de empresa en 684 con 94 decisiones de deduplicación; elegí k = 4 por silueta y estabilidad. Los cuatro segmentos —Cuidar, Crecer, Convertir y Reactivar— viven en la plataforma como un mapa interactivo.",
          en: "I segmented customers with K-means over 2,733 proposals from 185 companies and 5 variables, after unifying 805 company names into 684 with 94 deduplication decisions; k = 4 was chosen by silhouette and stability. The four segments — Nurture, Grow, Convert and Reactivate — live in the platform as an interactive map."
        },
        resultado: {
          es: "En producción en un VPS y probada en UAT con usuarias reales del área; la segmentación quedó integrada para priorizar la prospección comercial.",
          en: "Running in production on a VPS and tested in UAT with real users from the area; the segmentation is integrated to prioritize commercial prospecting."
        },
        stack: ["Next.js 16", "NestJS", "PostgreSQL", "Prisma", "Docker", "MinIO", "Traefik", "Python", "pandas", "scikit-learn", "K-means", "PCA"],
        media: [
          { src: "assets/projects/pdg-kanban.webp", alt: { es: "Tablero kanban del Líder de Producto con SLA por etapa", en: "Product Lead kanban board with per-stage SLA" } },
          { src: "assets/projects/pdg-segmentos.webp", alt: { es: "Mapa de segmentos de clientes (K-means) dentro de la plataforma", en: "Customer segment map (K-means) inside the platform" } },
          { src: "assets/projects/pdg-costeo.webp", alt: { es: "Costeo de la propuesta con cálculo de márgenes", en: "Proposal costing with margin calculation" } },
          { src: "assets/projects/pdg-wizard.webp", alt: { es: "Asistente de creación de solicitudes del KAM", en: "KAM request creation wizard" } }
        ],
        repo: "",
        demo: "",
        estado: { es: "En producción · en curso", en: "In production · ongoing" }
      },
      {
        nombre: { es: "Facturación Electrónica DIAN — FerreMundial", en: "DIAN Electronic Invoicing — FerreMundial" },
        contexto: { es: "Proyecto en solitario", en: "Solo project" },
        periodo: { es: "2023 — presente", en: "2023 — present" },
        pitch: {
          es: "Módulo de facturación electrónica y catálogo digital que integran la operación de una ferretería real con la DIAN.",
          en: "Electronic invoicing module and digital catalog integrating a real hardware store's operation with Colombia's tax authority."
        },
        problema: {
          es: "Cada factura electrónica había que digitarla dos veces: una en el sistema del negocio y otra a mano en el portal de la DIAN — heredado de un ERP genérico (Siesa) que no encajaba con la operación real.",
          en: "Every electronic invoice had to be typed twice: once in the business system and once by hand on the DIAN portal — inherited from a generic ERP (Siesa) that didn't fit the real operation."
        },
        solucion: {
          es: "Diseñé e implementé el módulo integrando la API de Factus con la DIAN (NestJS + PostgreSQL + TypeORM), con cuatro modos de emisión, autocompletado de cliente por NIT, revisión antes de emitir y cola de impresión en el POS; más un catálogo público con pedido por WhatsApp.",
          en: "Designed and implemented the module integrating the Factus API with DIAN (NestJS + PostgreSQL + TypeORM), with four issuance modes, customer autocomplete by tax ID, review-before-issue and a POS print queue; plus a public catalog with WhatsApp ordering."
        },
        resultado: {
          es: "385 documentos fiscales emitidos entre agosto y el 3 de octubre de 2026 (378 facturas y 7 notas crédito), con trazabilidad de CUFE y continuidad exacta del consecutivo legal.",
          en: "385 tax documents issued between August and October 3, 2026 (378 invoices, 7 credit notes), with CUFE traceability and exact continuity of the legal invoice sequence."
        },
        stack: ["NestJS", "PostgreSQL", "TypeORM", "Next.js", "Docker", "GitHub Actions", "Factus API"],
        media: [
          { src: "assets/projects/ferremundial-facturador.webp", alt: { es: "Facturador DIAN con autocompletado de cliente por NIT", en: "DIAN invoicer with customer autocomplete by tax ID" } },
          { src: "assets/projects/ferremundial-confirmar.webp", alt: { es: "Revisión de la factura antes de emitir ante la DIAN", en: "Invoice review before issuing to DIAN" } },
          { src: "assets/projects/ferremundial-historial.webp", alt: { es: "Historial de facturas electrónicas emitidas", en: "History of issued electronic invoices" } },
          { src: "assets/projects/ferremundial-catalogo.webp", alt: { es: "Catálogo público de productos de ferremundial.co", en: "ferremundial.co public product catalog" } }
        ],
        repo: "",
        demo: "ferremundial.co",
        estado: { es: "En producción", en: "In production" }
      },
      {
        nombre: { es: "Chatbot RAG Institucional — Universidad Icesi", en: "Institutional RAG Chatbot — Universidad Icesi" },
        contexto: { es: "Contrato independiente", en: "Independent contract" },
        periodo: { es: "jun. 2025 — ene. 2026", en: "Jun 2025 — Jan 2026" },
        pitch: {
          es: "Agente conversacional que decide entre consulta SQL y búsqueda semántica para resolver preguntas sobre las electivas de un departamento académico.",
          en: "Conversational agent that routes between SQL lookup and semantic search to answer questions about a department's elective courses."
        },
        problema: {
          es: "Los estudiantes tenían que leer manualmente decenas de PDFs sueltos —sílabos, horarios, profesores— para decidir qué electiva tomar.",
          en: "Students had to manually read through dozens of scattered PDFs — syllabi, schedules, faculty — just to choose their elective courses."
        },
        solucion: {
          es: "Construí un agente en n8n que enruta cada pregunta entre consulta SQL estructurada (horarios, créditos, profesores) y búsqueda semántica híbrida (Supabase + pgvector, Gemini) sobre las 34 electivas, con un pipeline de ingesta y vectorización, memoria de sesión en Redis y reglas explícitas de control de alucinación.",
          en: "Built an n8n agent that routes each question between structured SQL lookup (schedules, credits, faculty) and hybrid semantic search (Supabase + pgvector, Gemini) over the 34 electives, with an ingestion and vectorization pipeline, Redis session memory and explicit hallucination-control rules."
        },
        resultado: {
          es: "Resolvió consultas académicas 24/7 sin intervención humana durante el semestre que estuvo en producción.",
          en: "Resolved academic queries 24/7 without human intervention during the semester it was in production."
        },
        stack: ["n8n", "Supabase", "pgvector", "Redis", "Gemini"],
        media: [
          { src: "assets/projects/chatbot-recomendacion.webp", alt: { es: "El agente recomienda una electiva según el interés del estudiante", en: "The agent recommends an elective based on the student's interest" }, fit: "contain", bg: "#212121" },
          { src: "assets/projects/chatbot-tabla.webp", alt: { es: "Consulta SQL: electivas que se dictan los viernes, con profesor y hora", en: "SQL lookup: electives taught on Fridays, with professor and time" }, fit: "contain", bg: "#212121" },
          { src: "assets/projects/chatbot-electivas-ia.webp", alt: { es: "Búsqueda semántica: electivas relacionadas con inteligencia artificial", en: "Semantic search: electives related to artificial intelligence" }, fit: "contain", bg: "#212121" },
          { src: "assets/projects/chatbot-inicio.webp", alt: { es: "Pantalla de inicio del asistente con sugerencias de consulta", en: "Assistant home screen with suggested queries" }, fit: "contain", bg: "#212121" },
          { src: "assets/projects/chatbot-saludo.webp", alt: { es: "El agente explica sus dos herramientas: datos exactos y contenido temático", en: "The agent explains its two tools: exact data and topical content" }, fit: "contain", bg: "#212121" },
          { src: "assets/projects/chatbot-agente.webp", alt: { es: "Arquitectura del agente: captura, validación y respuesta", en: "Agent architecture: intake, validation and response" }, fit: "contain", bg: "#141414" },
          { src: "assets/projects/chatbot-ingesta.webp", alt: { es: "Pipeline de ingesta y vectorización de documentos", en: "Document ingestion and vectorization pipeline" }, fit: "contain", bg: "#141414" }
        ],
        repo: "github.com/JRuiz1601/rags-chatbot-icesi",
        demo: "",
        estado: { es: "Entregado", en: "Delivered" }
      },
      {
        nombre: { es: "Sistema de Anotación de Video con IA", en: "AI Video Annotation System" },
        contexto: { es: "Proyecto de curso", en: "Coursework" },
        periodo: { es: "oct. — nov. 2025", en: "Oct — Nov 2025" },
        pitch: {
          es: "Clasificador de actividades humanas a partir de video, con demo en vivo por webcam.",
          en: "Human activity classifier from video, with a live webcam demo."
        },
        problema: {
          es: "Reconocer automáticamente actividades humanas en video a partir de landmarks corporales, sin sensores adicionales.",
          en: "Automatically recognizing human activities in video from body landmarks, without extra sensors."
        },
        solucion: {
          es: "Entrené un clasificador Random Forest en Python sobre 83 features geométricas derivadas de landmarks de MediaPipe, reducidas vía PCA.",
          en: "Trained a Random Forest classifier in Python over 83 geometric features from MediaPipe landmarks, reduced via PCA."
        },
        resultado: {
          es: "Desplegado en una demo con webcam en Gradio; documenté la brecha entre el desempeño offline y en vivo, con un plan de mejora basado en contexto temporal y diversidad de datos.",
          en: "Deployed in a webcam demo on Gradio; documented the gap between offline and live performance, with an improvement plan based on temporal context and data diversity."
        },
        stack: ["Python", "scikit-learn", "MediaPipe", "Gradio"],
        media: [],
        repo: "github.com/JRuiz1601/video-ai-annotation-system",
        demo: "",
        estado: { es: "Entregado", en: "Delivered" }
      },
      {
        nombre: { es: "Sistema de Votación Electoral Distribuido", en: "Distributed Electoral Voting System" },
        contexto: { es: "Proyecto de curso", en: "Coursework" },
        periodo: "2025",
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
          es: "Validado en local con 100.000 votos desde 4 estaciones concurrentes, sin pérdidas ni duplicados y con recuperación automática tras una caída de red inducida de 30 s.",
          en: "Validated locally with 100,000 votes from 4 concurrent stations, with no losses or duplicates and automatic recovery after an induced 30s network outage."
        },
        stack: ["Java 11", "ZeroC ICE"],
        media: [],
        repo: "github.com/JRuiz1601/Software_IV_Final_Project",
        demo: "",
        estado: { es: "Validado en local", en: "Locally validated" }
      }
    ],
    verRepo: { es: "Repo", en: "Repo" },
    verDemo: { es: "Sitio", en: "Live site" },
    ampliar: { es: "Ampliar imagen", en: "Enlarge image" },
    labels: {
      problema: { es: "Problema", en: "Problem" },
      solucion: { es: "Solución", en: "Solution" },
      analitica: { es: "Analítica · segmentación K-means", en: "Analytics · K-means segmentation" },
      resultado: { es: "Resultado", en: "Result" }
    }
  },

  stack: {
    kicker: "03",
    titulo: { es: "Stack", en: "Stack" },
    categorias: [
      { nombre: { es: "Automatización e IA aplicada", en: "Automation & Applied AI" }, items: ["n8n", { es: "agentes de IA con herramientas", en: "tool-using AI agents" }, { es: "RAG y búsqueda híbrida (pgvector)", en: "RAG & hybrid search (pgvector)" }, { es: "APIs de LLMs (Claude, Gemini, OpenAI)", en: "LLM APIs (Claude, Gemini, OpenAI)" }, "Redis", { es: "machine learning (scikit-learn, pandas)", en: "machine learning (scikit-learn, pandas)" }, "Random Forest", "K-means", "PCA", "MediaPipe", { es: "Claude Code (skills, MCPs)", en: "Claude Code (skills, MCPs)" }] },
      { nombre: { es: "Lenguajes", en: "Languages" }, items: ["Python", "SQL", "TypeScript", "JavaScript", "Java"] },
      { nombre: { es: "Backend / Frontend", en: "Backend / Frontend" }, items: ["NestJS", { es: "APIs REST", en: "REST APIs" }, "Django", "Spring Boot", "Next.js", "React"] },
      { nombre: { es: "Datos y arquitectura", en: "Data & Architecture" }, items: ["PostgreSQL", "TypeORM", "Prisma", "Supabase", "MinIO", { es: "modelado de datos", en: "data modeling" }, { es: "sistemas distribuidos", en: "distributed systems" }, { es: "integración de APIs de terceros", en: "third-party API integration" }, { es: "patrones de diseño", en: "design patterns" }] },
      { nombre: "DevOps", items: ["Docker", "Docker Compose", "Git/GitHub", "GitHub Actions", "GHCR", "Traefik", "Jira", { es: "despliegue en VPS", en: "VPS deployment" }] }
    ]
  },

  contacto: {
    kicker: "04",
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
  },

  lightbox: {
    cerrar: { es: "Cerrar", en: "Close" },
    anterior: { es: "Anterior", en: "Previous" },
    siguiente: { es: "Siguiente", en: "Next" }
  }
};
