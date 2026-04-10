import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sushanth Kakarlapudi — Senior Lead Software Engineer",
  author: "Sushanth Kakarlapudi",
  description:
    "Strategic Engineering Leader with 14+ years of experience driving software and AI innovation. Expert in architecting large-scale distributed data systems and AI-driven solutions.",
  lang: "en",
  // TODO: Add a small avatar/headshot for the header (~45x45px)
  //       Place the image in public/ and set: siteLogo: "/your-avatar.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/shawnk1188" },
    { text: "LinkedIn", href: "https://linkedin.com/in/sushanthk1188" },
    { text: "Email", href: "mailto:sushanthk.1188@gmail.com" },
  ],
  // TODO: Add an Open Graph preview image for social sharing (~1200x630px)
  //       Place the image in public/ and set: socialImage: "/og-image.png",
  canonicalURL: "https://portfolio-website.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sushanth Kakarlapudi",
    specialty: "AI & Distributed Systems",
    summary:
      "Strategic Engineering Leader with 14+ years of experience driving software and AI innovation across Fortune 500 environments. Expert in architecting large-scale distributed data systems and AI-driven solutions that have delivered over $2B in measurable business value.",
    email: "sushanthk.1188@gmail.com",
  },
  experience: [
    {
      company: "Walmart Global Tech",
      position: "Senior Lead Software Engineer",
      startDate: "Aug 2023",
      endDate: "Present",
      summary: [
        "Architected RYE (Re-Order Your Essentials) recommendation engine generating $1.77B/year in revenue, leveraging PySpark pipelines and real-time GCP Dataflow processing terabytes of behavioral data.",
        "Built social proof badge recommendation system driving $12.5B GMV/year by surfacing purchase signals at scale across Walmart.com.",
        "Led Algonomy recommendation integration contributing $366M/year in incremental revenue through personalized product discovery.",
        "Engineered an AI agent using LangChain and OpenAI that summarized user-API interactions reducing bug resolution time by 30%; implemented K-means clustering and OpenAI embeddings to classify user behavior.",
        "Developed scalable solutions with BigQuery, Azure Cosmos DB, and Spring Boot Microservices optimizing cloud infrastructure for performance and cost.",
      ],
    },
    {
      company: "American Airlines",
      position: "Senior Lead Software Engineer",
      startDate: "Apr 2023",
      endDate: "Jul 2023",
      summary: [
        "Led transition to asynchronous data streaming reducing latency and boosting responsiveness for millions of users.",
        "Implemented caching strategies cutting database load by 30% and improving response times by 50%.",
        "Developed scalable asynchronous microservices and GraphQL APIs achieving 99.9% uptime and 35% faster data retrieval.",
      ],
    },
    {
      company: "USAA",
      position: "Senior Software Engineer",
      startDate: "Mar 2020",
      endDate: "Apr 2023",
      summary: [
        "Led monolithic application transition to event-driven Kafka Streams-based scheduler jobs reducing batch processing time significantly.",
        "Designed secure microservices architecture implementing OAuth2.0 and CyberArk for authentication improving compliance and access control.",
        "Developed Python automation scripts to monitor data consistency and detect discrepancies reducing manual validation efforts.",
      ],
    },
    {
      company: "AT&T",
      position: "Senior Software Engineer",
      startDate: "Sep 2017",
      endDate: "Mar 2020",
      summary: [
        "Redesigned user authentication and authorization enhancing security and user experience.",
        "Developed secure Spring microservices improving cloud deployments and automating processes.",
        "Mentored team on microservice design and unit testing raising development standards.",
      ],
    },
  ],
  projects: [
    {
      name: "DocPilot — Production RAG System",
      summary:
        "Three-phase RAG system achieving 2x retrieval improvement (0.465 → 0.992) using hybrid BM25 + vector search with Reciprocal Rank Fusion and cross-encoder reranking. Built with FastAPI, Qdrant, Groq, Podman, and Prometheus + Grafana observability.",
      linkPreview: "/",
      linkSource: "https://github.com/shawnk1188/docpilot",
      // TODO: Add a screenshot of the DocPilot project (~736x483px)
      //       Place the image in public/ and set: image: "/docpilot.png",
    },
    {
      name: "LLM Task Manager — Agentic AI",
      summary:
        "Conversational task manager using Google ADK agent framework with Gemini Flash, exposing 7 typed tools the LLM invokes via natural language. Fully containerised with Podman Compose — Redis persistence, FastAPI REST API, and Streamlit chat UI.",
      linkPreview: "/",
      linkSource: "https://github.com/shawnk1188/llm-task-manager",
      // TODO: Add a screenshot of the LLM Task Manager project (~736x483px)
      //       Place the image in public/ and set: image: "/llm-task-manager.png",
    },
    {
      name: "LuminaAI — LLM Inference Engine",
      summary:
        "Fully offline LLM inference engine with Pydantic v2 typed output contracts and async-first architecture. Includes statistical benchmarking across 4 prompt categories with production CLI via Typer + Rich, fully containerised with Docker.",
      linkPreview: "/",
      linkSource: "https://github.com/shawnk1188/lumina-ai",
      // TODO: Add a screenshot of the LuminaAI project (~736x483px)
      //       Place the image in public/ and set: image: "/lumina-ai.png",
    },
  ],
  skills: {
    categories: [
      {
        title: "AI & Agents",
        items: [
          "Google ADK",
          "LangChain",
          "OpenAI",
          "Gemini Flash",
          "RAG Systems",
          "LLMs",
          "NLP",
          "K-means",
          "Embeddings",
        ],
      },
      {
        title: "Languages",
        items: ["Python", "Java", "Go", "Scala", "TypeScript", "SQL"],
      },
      {
        title: "Backend",
        items: [
          "FastAPI",
          "Spring Boot",
          "GraphQL",
          "Kafka",
          "Redis",
          "Microservices",
          "Event-Driven",
        ],
      },
      {
        title: "Data Engineering",
        items: [
          "Apache Beam",
          "PySpark",
          "GCP Dataflow",
          "BigQuery",
          "Azure Cosmos DB",
          "Distributed Systems",
        ],
      },
      {
        title: "Cloud & DevOps",
        items: [
          "GCP",
          "AWS",
          "Azure",
          "Kubernetes",
          "Terraform",
          "Podman",
          "Docker",
        ],
      },
      {
        title: "Observability",
        items: [
          "Prometheus",
          "Grafana",
          "Structlog",
          "OpenTelemetry",
        ],
      },
    ],
    certifications: [
      "Generative AI Leader (Google)",
      "GCP Professional Cloud Architect",
      "Generative AI with LLMs",
      "Machine Learning Specialization",
      "AWS Developer Associate",
    ],
  },
  about: {
    description: `
      Hi, I'm Sushanth Kakarlapudi, a Strategic Engineering Leader with 14+ years of experience driving software and AI innovation across Fortune 500 environments. I specialize in architecting large-scale distributed data systems and AI-driven solutions that have delivered over $2B in measurable business value.

      I'm a hands-on builder of production RAG systems, agentic AI applications, and real-time data pipelines. I hold a Master's in Computer and Information Sciences from the University of South Alabama and certifications including GCP Professional Cloud Architect and AWS Developer Associate. I'm passionate about mentoring high-performing teams and delivering outcomes that move the needle at scale.
    `,
    // TODO: Add your profile photo for the About section (~260x260px or larger)
    //       Place the image in public/ and set: image: "/profile.jpg",
  },
};
