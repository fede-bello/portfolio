import type { Project, ProjectAttachment } from "@/types/projects";
import type { Lang, Localized } from "@/i18n/config";
import { formatDate } from "@/i18n/dates";

type ProjectEntry = Omit<Project, "title" | "subtitle" | "summary" | "description"> & {
  title: string | Localized;
  subtitle?: Localized;
  summary: Localized;
  description: Localized;
};

const toAtt = (href: string, title?: string): ProjectAttachment => ({
  href,
  title: title ?? href.split("/").pop() ?? "PDF",
});

const REPORT_WORDS: Record<Lang, Record<string, string>> = {
  en: {},
  es: {
    Report: "Informe",
    Lab: "Laboratorio",
    "Final Report": "Informe final",
    "Final Project": "Proyecto final",
    "First Project": "Primer proyecto",
  },
  fr: {
    Report: "Rapport",
    Lab: "TP",
    "Final Report": "Rapport final",
    "Final Project": "Projet final",
    "First Project": "Premier projet",
  },
};

/** "Report 2" → "Informe 2" (es); "Final Project" → "Projet final" (fr). */
function translateAttachmentTitle(title: string, lang: Lang): string {
  const words = REPORT_WORDS[lang];
  if (words[title]) return words[title];
  const match = /^(Report|Lab) (\d+)$/.exec(title);
  return match && words[match[1]] ? `${words[match[1]]} ${match[2]}` : title;
}

const ventureEntries: ReadonlyArray<ProjectEntry> = [
  {
    slug: "rupta",
    title: "Rupta",
    subtitle: {
      en: "Co-founder & Technical Lead",
      es: "Cofundador y líder técnico",
      fr: "Cofondateur et responsable technique",
    },
    type: "venture",
    timestamp: "2025 - Present",
    summary: {
      en: "A social app that turns real life into a game: complete real-world missions, earn AURA, and compete with friends.",
      es: "Una app social que convierte la vida real en un juego: completá misiones del mundo real, ganá AURA y competí con tus amigos.",
      fr: "Une application sociale qui transforme la vie réelle en jeu : accomplissez des missions dans le monde réel, gagnez de l'AURA et affrontez vos amis.",
    },
    description: {
      en: "A cross-platform social app (React Native + web) built around a catalog of real-life missions, from grabbing a coffee to bigger challenges, plus private groups, streaks, and leaderboards. I led the full-stack architecture and shared styling system across web and mobile. We launched on iOS and Android and passed 5,000 users in the first 24 hours.",
      es: "Una app social multiplataforma (React Native + web) construida en torno a un catálogo de misiones de la vida real, desde tomar un café hasta desafíos más grandes, con grupos privados, rachas y rankings. Lideré la arquitectura full-stack y el sistema de estilos compartido entre web y mobile. Lanzamos en iOS y Android y superamos los 5.000 usuarios en las primeras 24 horas.",
      fr: "Une application sociale multiplateforme (React Native + web) construite autour d'un catalogue de missions de la vie réelle, du simple café à des défis plus ambitieux, avec groupes privés, séries et classements. J'ai dirigé l'architecture full-stack et le système de styles partagé entre web et mobile. Nous avons lancé l'application sur iOS et Android et dépassé les 5 000 utilisateurs en 24 heures.",
    },
    tags: ["React Native", "Cross-platform", "Gamification", "Social"],
    siteUrl: "https://rupta.app/",
  },
  {
    slug: "thehawkeye",
    title: "The Hawk Eye Football",
    subtitle: {
      en: "Co-founder & AI Specialist",
      es: "Cofundador y especialista en IA",
      fr: "Cofondateur et spécialiste IA",
    },
    type: "venture",
    timestamp: "2024 - Present",
    summary: {
      en: "Sports-intelligence platform that scouts, analyzes, and compares football players across LATAM leagues.",
      es: "Plataforma de inteligencia deportiva para detectar, analizar y comparar futbolistas de ligas de LATAM.",
      fr: "Plateforme d'intelligence sportive pour repérer, analyser et comparer des footballeurs des ligues d'Amérique latine.",
    },
    description: {
      en: "An early-stage sports-intelligence platform that lets professional clubs scout and compare players across 10+ LATAM leagues, ranked by our proprietary TCA Score, which rates how well a player performs in their role and adjusts for the level of their league. On top of that: side-by-side comparisons, player profiles with radars, and match breakdowns (xG, shot maps, build-up). As co-founder, I work across the stack, from ML and data analysis to backend architecture and frontend.",
      es: "Una plataforma de inteligencia deportiva en etapa temprana que permite a clubes profesionales detectar y comparar jugadores de más de 10 ligas de LATAM, ordenados por nuestro TCA Score, una métrica propia que evalúa qué tan bien rinde un jugador en su rol y ajusta por el nivel de su liga. Además: comparaciones lado a lado, perfiles de jugadores con radares y análisis de partidos (xG, mapas de tiros, construcción de juego). Como cofundador, trabajo en todo el stack, desde ML y análisis de datos hasta la arquitectura backend y el frontend.",
      fr: "Une jeune plateforme d'intelligence sportive qui permet aux clubs professionnels de repérer et comparer des joueurs de plus de 10 ligues d'Amérique latine, classés selon notre TCA Score, une métrique propriétaire qui évalue la performance d'un joueur dans son rôle en tenant compte du niveau de sa ligue. En plus : comparaisons côte à côte, profils de joueurs avec radars et analyses de matchs (xG, cartes de tirs, construction du jeu). En tant que cofondateur, je travaille sur toute la stack, du ML et de l'analyse de données à l'architecture backend et au frontend.",
    },
    tags: ["Machine Learning", "Sports Analytics", "Data Engineering", "Python"],
    siteUrl: "https://thehawkeyefootball.com/",
  },
];

const personalEntries: ReadonlyArray<ProjectEntry> = [
  {
    slug: "the-abstract",
    title: "The Abstract",
    type: "personal",
    timestamp: "2025",
    summary: {
      en: "Weekly, AI-curated digests of the machine-learning papers worth your attention.",
      es: "Resúmenes semanales, curados con IA, de los papers de machine learning que vale la pena leer.",
      fr: "Des synthèses hebdomadaires, sélectionnées par IA, des articles de machine learning qui méritent votre attention.",
    },
    description: {
      en: "An open-source pipeline that ingests new ML papers from arXiv each week, filters out the noise with an LLM, parses and summarizes the useful ones, stores them with embeddings, and emails subscribers a personalized digest. A lightweight web app lets anyone browse everything it has processed, by week and by topic. It's built as a monorepo around LlamaIndex Workflows with no API server, and uses two-stage cost control: a cheap metadata classifier gates the expensive parse and summarize work, so only papers worth reading get the full treatment. The weekly pipeline runs in production via a GitHub Actions cron.",
      es: "Un pipeline de código abierto que cada semana ingiere los nuevos papers de ML de arXiv, filtra el ruido con un LLM, parsea y resume los útiles, los guarda con embeddings y envía a los suscriptores un resumen personalizado por email. Una web liviana permite explorar todo lo procesado, por semana y por tema. Está construido como un monorepo en torno a LlamaIndex Workflows, sin servidor de API, y controla costos en dos etapas: un clasificador barato de metadatos decide qué papers pasan al costoso parseo y resumen, así que solo los que vale la pena leer reciben el tratamiento completo. El pipeline semanal corre en producción mediante un cron de GitHub Actions.",
      fr: "Un pipeline open source qui récupère chaque semaine les nouveaux articles de ML sur arXiv, filtre le bruit avec un LLM, analyse et résume les articles utiles, les stocke avec des embeddings et envoie aux abonnés une synthèse personnalisée par e-mail. Une application web légère permet de parcourir tout ce qui a été traité, par semaine et par thème. Le projet est un monorepo construit autour de LlamaIndex Workflows, sans serveur d'API, avec un contrôle des coûts en deux étapes : un classifieur de métadonnées peu coûteux décide quels articles passent à l'analyse et au résumé, plus coûteux, si bien que seuls les articles pertinents sont traités en entier. Le pipeline hebdomadaire tourne en production via un cron GitHub Actions.",
    },
    tags: ["LlamaIndex", "LLMs", "Embeddings", "Supabase", "Python"],
    siteUrl: "https://the-abstract.vercel.app/",
    repoUrl: "https://github.com/fede-bello/the-abstract",
  },
  {
    slug: "truco",
    title: "Truco",
    type: "personal",
    timestamp: "2025",
    summary: {
      en: "Work-in-progress engine for the Uruguayan card game Truco with reinforcement learning support.",
      es: "Motor en desarrollo para el juego de cartas uruguayo Truco, con soporte para aprendizaje por refuerzo.",
      fr: "Moteur en cours de développement pour le jeu de cartes uruguayen Truco, avec prise en charge de l'apprentissage par renforcement.",
    },
    description: {
      en: "A minimal engine for simulating the Uruguayan Truco card game. It provides clean abstractions for hands, bidding, and scoring, plus tooling to train, evaluate, and play against RL agents (Monte Carlo, Q-learning). Play in the terminal or benchmark agents across different skill levels in a reproducible environment.",
      es: "Un motor minimalista para simular el Truco uruguayo. Ofrece abstracciones claras para manos, cantos y puntaje, además de herramientas para entrenar, evaluar y jugar contra agentes de RL (Monte Carlo, Q-learning). Se puede jugar en la terminal o comparar agentes de distintos niveles en un entorno reproducible.",
      fr: "Un moteur minimaliste pour simuler le Truco uruguayen. Il propose des abstractions claires pour les mains, les annonces et le score, ainsi que des outils pour entraîner, évaluer et affronter des agents de RL (Monte Carlo, Q-learning). On peut jouer dans le terminal ou comparer des agents de différents niveaux dans un environnement reproductible.",
    },
    tags: ["Reinforcement Learning", "Q-Learning", "Monte Carlo"],
    repoUrl: "https://github.com/fede-bello/truco",
  },
  {
    slug: "gragod",
    title: "GraGOD",
    type: "personal",
    timestamp: "2024",
    summary: {
      en: "Modern PyTorch-based framework for time-series anomaly detection using GNN techniques.",
      es: "Framework moderno basado en PyTorch para detección de anomalías en series temporales con GNNs.",
      fr: "Framework moderne basé sur PyTorch pour la détection d'anomalies dans les séries temporelles avec des GNN.",
    },
    description: {
      en: "GraGOD is a modern approach to time-series anomaly detection using GNN techniques. It is a PyTorch-based framework that provides a flexible and modular architecture for building and training GNN models for anomaly detection. The objective of this project is to facilitate the development and testing of new models and datasets for anomaly detection, providing a standard way to organize the code and the data.",
      es: "GraGOD es un enfoque moderno para la detección de anomalías en series temporales con GNNs. Es un framework basado en PyTorch con una arquitectura flexible y modular para construir y entrenar modelos GNN de detección de anomalías. El objetivo del proyecto es facilitar el desarrollo y la evaluación de nuevos modelos y datasets, ofreciendo una forma estándar de organizar el código y los datos.",
      fr: "GraGOD est une approche moderne de la détection d'anomalies dans les séries temporelles à l'aide de GNN. C'est un framework basé sur PyTorch, doté d'une architecture flexible et modulaire pour construire et entraîner des modèles GNN de détection d'anomalies. L'objectif est de faciliter le développement et l'évaluation de nouveaux modèles et jeux de données, en proposant une manière standard d'organiser le code et les données.",
    },
    tags: ["GNNs", "Time Series", "Anomaly Detection", "PyTorch"],
    siteUrl: "https://www.gragod.com/",
  },
  {
    slug: "datathon",
    title: "Datathon",
    type: "personal",
    timestamp: "2023",
    summary: {
      en: "Data analysis project on how social variables influence salaries in Uruguay.",
      es: "Proyecto de análisis de datos sobre cómo las variables sociales influyen en los salarios en Uruguay.",
      fr: "Projet d'analyse de données sur l'influence des variables sociales sur les salaires en Uruguay.",
    },
    description: {
      en: "Developed for a UN datathon, this project applies interpretable machine learning to salary data from Uruguay's National Statistics Institute. It highlights key social factors behind wage inequality and provides transparent insights to support policy decisions. The focus is on clarity, fairness, and actionable recommendations rather than just prediction accuracy.",
      es: "Desarrollado para una datatón de la ONU, este proyecto aplica machine learning interpretable a datos salariales del Instituto Nacional de Estadística de Uruguay. Destaca los principales factores sociales detrás de la desigualdad salarial y aporta conclusiones transparentes para apoyar decisiones de política pública. El foco está en la claridad, la equidad y las recomendaciones accionables, más que solo en la precisión predictiva.",
      fr: "Réalisé pour un datathon de l'ONU, ce projet applique un machine learning interprétable aux données salariales de l'Institut national de statistique de l'Uruguay. Il met en évidence les principaux facteurs sociaux des inégalités salariales et fournit des éclairages transparents pour orienter les politiques publiques. L'accent est mis sur la clarté, l'équité et des recommandations concrètes plutôt que sur la seule précision des prédictions.",
    },
    tags: ["DataViz", "Pandas", "Interpretable ML"],
    repoUrl: "https://github.com/fede-bello/datathon",
  },
];

const freelanceEntries: ReadonlyArray<ProjectEntry> = [
  {
    slug: "vamosarq",
    title: "VamosArq",
    type: "freelance",
    timestamp: "2025",
    summary: {
      en: "Portfolio and admin platform for an architecture studio.",
      es: "Portfolio y plataforma de administración para un estudio de arquitectura.",
      fr: "Portfolio et plateforme d'administration pour un cabinet d'architecture.",
    },
    description: {
      en: "A complete web solution for an architecture studio featuring a high-performance frontend with Cloudinary integration for fast image processing and loading. The system includes a secure admin panel built on Firebase, providing authentication and full CRUD capabilities to manage projects dynamically.",
      es: "Una solución web completa para un estudio de arquitectura, con un frontend de alto rendimiento integrado con Cloudinary para procesar y cargar imágenes rápidamente. El sistema incluye un panel de administración seguro sobre Firebase, con autenticación y CRUD completo para gestionar los proyectos de forma dinámica.",
      fr: "Une solution web complète pour un cabinet d'architecture, avec un frontend performant intégré à Cloudinary pour traiter et charger rapidement les images. Le système comprend un panneau d'administration sécurisé basé sur Firebase, avec authentification et CRUD complet pour gérer les projets de manière dynamique.",
    },
    tags: ["Frontend", "Firebase", "Cloudinary", "Admin Panel"],
    siteUrl: "https://www.vamosarq.com/",
  },
];

const universityEntries: ReadonlyArray<ProjectEntry> = [
  {
    slug: "audio",
    title: {
      en: "Audio Signal Processing",
      es: "Procesamiento de señales de audio",
      fr: "Traitement du signal audio",
    },
    type: "university",
    timestamp: "2024",
    summary: {
      en: "Advanced DSP course focused on audio signals, from STFT to LPC and cepstrum.",
      es: "Curso avanzado de DSP centrado en señales de audio, desde la STFT hasta LPC y cepstrum.",
      fr: "Cours avancé de traitement numérique du signal appliqué à l'audio, de la STFT à la LPC et au cepstre.",
    },
    description: {
      en: "The course dives into time–frequency analysis, source–filter models, and deconvolution, with practical algorithms for pitch detection and spectral envelope estimation. We implemented classic techniques such as Linear Predictive Coding (LPC) and cepstral analysis, gaining experience transferable to telecoms, music, and bioacoustics.",
      es: "El curso profundiza en el análisis tiempo–frecuencia, los modelos fuente–filtro y la deconvolución, con algoritmos prácticos para detección de pitch y estimación de envolvente espectral. Implementamos técnicas clásicas como la codificación por predicción lineal (LPC) y el análisis cepstral, adquiriendo experiencia aplicable a telecomunicaciones, música y bioacústica.",
      fr: "Le cours approfondit l'analyse temps–fréquence, les modèles source–filtre et la déconvolution, avec des algorithmes pratiques de détection de hauteur et d'estimation de l'enveloppe spectrale. Nous avons implémenté des techniques classiques comme le codage par prédiction linéaire (LPC) et l'analyse cepstrale, une expérience transposable aux télécommunications, à la musique et à la bioacoustique.",
    },
    tags: ["DSP", "Audio"],
    attachments: [
      toAtt("/projects/fing/audio/reports/Report 1.pdf", "Report 1"),
      toAtt("/projects/fing/audio/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/audio/reports/Report 3.pdf", "Report 3"),
      toAtt("/projects/fing/audio/reports/Report 4.pdf", "Report 4"),
      toAtt("/projects/fing/audio/reports/Final Report.pdf", "Final Report"),
    ],
  },
  {
    slug: "electronica",
    title: {
      en: "Fundamental Electronics",
      es: "Electrónica fundamental",
      fr: "Électronique fondamentale",
    },
    type: "university",
    timestamp: "2024",
    summary: {
      en: "Core concepts of real electronic components, circuits, and lab design.",
      es: "Conceptos fundamentales de componentes electrónicos reales, circuitos y diseño en laboratorio.",
      fr: "Notions fondamentales sur les composants électroniques réels, les circuits et la conception en laboratoire.",
    },
    description: {
      en: "The course builds intuition for analyzing and designing circuits with op-amps, diodes, transistors, and MOSFETs. We used SPICE simulations and lab work to bridge theoretical models with real-world device behavior, learning to diagnose mismatches, refine designs, and work effectively with datasheets.",
      es: "El curso desarrolla la intuición para analizar y diseñar circuitos con amplificadores operacionales, diodos, transistores y MOSFETs. Usamos simulaciones SPICE y trabajo de laboratorio para conectar los modelos teóricos con el comportamiento real de los dispositivos, aprendiendo a diagnosticar diferencias, refinar diseños y trabajar con hojas de datos.",
      fr: "Le cours développe l'intuition nécessaire pour analyser et concevoir des circuits à base d'amplificateurs opérationnels, de diodes, de transistors et de MOSFET. Simulations SPICE et travaux pratiques nous ont permis de relier les modèles théoriques au comportement réel des composants, d'apprendre à diagnostiquer les écarts, à affiner les conceptions et à exploiter les fiches techniques.",
    },
    tags: ["Electronics"],
    attachments: [
      toAtt("/projects/fing/electronica/reports/Report 1.pdf", "Lab 1"),
      toAtt("/projects/fing/electronica/reports/Report 2.pdf", "Lab 2"),
      toAtt("/projects/fing/electronica/reports/Report 3.pdf", "Lab 3"),
    ],
  },
  {
    slug: "aagrafos",
    title: {
      en: "Machine Learning on Graphs",
      es: "Aprendizaje automático en grafos",
      fr: "Apprentissage automatique sur graphes",
    },
    type: "university",
    timestamp: "2023",
    summary: {
      en: "Course on ML methods for graphs, from anomaly detection to role classification.",
      es: "Curso sobre métodos de ML para grafos, desde la detección de anomalías hasta la clasificación de roles.",
      fr: "Cours sur les méthodes de ML pour les graphes, de la détection d'anomalies à la classification de rôles.",
    },
    description: {
      en: "Graphs capture interactions in telecoms, biology, recommendations, and urban systems. This course introduces graph-based ML models that outperform traditional methods by leveraging structure. We implemented state-of-the-art techniques for inference, prediction, and pattern discovery, and evaluated them across diverse applications.",
      es: "Los grafos capturan interacciones en telecomunicaciones, biología, sistemas de recomendación y sistemas urbanos. Este curso introduce modelos de ML basados en grafos que superan a los métodos tradicionales al aprovechar la estructura. Implementamos técnicas del estado del arte para inferencia, predicción y descubrimiento de patrones, y las evaluamos en diversas aplicaciones.",
      fr: "Les graphes modélisent des interactions en télécommunications, en biologie, dans les systèmes de recommandation et les systèmes urbains. Ce cours présente des modèles de ML sur graphes qui surpassent les méthodes traditionnelles en exploitant la structure. Nous avons implémenté des techniques de pointe pour l'inférence, la prédiction et la découverte de motifs, et les avons évaluées sur des applications variées.",
    },
    tags: ["Graphs", "ML", "GNNs", "Applied Algebra"],
    attachments: [
      toAtt("/projects/fing/aagrafos/reports/Report 1.pdf", "Report 1"),
      toAtt("/projects/fing/aagrafos/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/aagrafos/reports/Report 3.pdf", "Report 3"),
      toAtt("/projects/fing/aagrafos/reports/Report 4.pdf", "Report 4"),
      toAtt("/projects/fing/aagrafos/reports/Report 5.pdf", "Report 5"),
      toAtt("/projects/fing/aagrafos/reports/Final Project.pdf", "Final Project"),
    ],
  },
  {
    slug: "cce",
    title: {
      en: "Error-Correcting Codes",
      es: "Códigos correctores de errores",
      fr: "Codes correcteurs d'erreurs",
    },
    type: "university",
    timestamp: "2023",
    summary: {
      en: "Algebraic codes for reliable communication and data storage.",
      es: "Códigos algebraicos para comunicaciones y almacenamiento de datos confiables.",
      fr: "Codes algébriques pour des communications et un stockage de données fiables.",
    },
    description: {
      en: "This course covers the math and implementation of error-correcting codes, core to nearly all modern communication and storage systems. We studied encoding/decoding strategies, performance analysis under noise, and applications ranging from mobile networks to QR codes, CDs, and cloud storage.",
      es: "Este curso cubre la matemática y la implementación de los códigos correctores de errores, esenciales en casi todos los sistemas modernos de comunicación y almacenamiento. Estudiamos estrategias de codificación y decodificación, análisis de desempeño frente al ruido y aplicaciones que van desde redes móviles hasta códigos QR, CDs y almacenamiento en la nube.",
      fr: "Ce cours couvre les mathématiques et l'implémentation des codes correcteurs d'erreurs, au cœur de presque tous les systèmes modernes de communication et de stockage. Nous avons étudié les stratégies de codage et de décodage, l'analyse des performances en présence de bruit et des applications allant des réseaux mobiles aux QR codes, aux CD et au stockage cloud.",
    },
    tags: ["Coding Theory", "Information Theory", "Compression"],
    attachments: [toAtt("/projects/fing/cce/reports/Final Project.pdf", "Final Project")],
    repoUrl: "https://github.com/fede-bello/fing-cce",
  },
  {
    slug: "taa",
    title: {
      en: "Applied Machine Learning Course",
      es: "Curso de aprendizaje automático aplicado",
      fr: "Cours d'apprentissage automatique appliqué",
    },
    type: "university",
    timestamp: "2023",
    summary: {
      en: "End-to-end applied ML course with real-world data and projects.",
      es: "Curso de ML aplicado de punta a punta, con datos y proyectos reales.",
      fr: "Cours de ML appliqué de bout en bout, avec des données et des projets réels.",
    },
    description: {
      en: "This applied course focuses on building complete ML solutions—from data preparation to evaluation and communication of results. We reviewed traditional methods and explored deep learning, working on practical projects with emphasis on robust methodology and real-world applications.",
      es: "Este curso aplicado se centra en construir soluciones de ML completas, desde la preparación de los datos hasta la evaluación y la comunicación de resultados. Repasamos métodos tradicionales y exploramos deep learning, trabajando en proyectos prácticos con énfasis en una metodología robusta y en aplicaciones reales.",
      fr: "Ce cours appliqué porte sur la construction de solutions de ML complètes, de la préparation des données à l'évaluation et à la communication des résultats. Nous avons revu les méthodes traditionnelles et exploré le deep learning, à travers des projets pratiques mettant l'accent sur une méthodologie rigoureuse et des applications concrètes.",
    },
    tags: ["Algorithms", "ML", "Deep Learning", "CNNs", "RNNs", "Trees"],
    attachments: [
      toAtt("/projects/fing/taa/reports/Report 1.pdf", "Report 1"),
      toAtt("/projects/fing/taa/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/taa/reports/First Project.pdf", "First Project"),
      toAtt("/projects/fing/taa/reports/Final Project.pdf", "Final Project"),
    ],
  },
  {
    slug: "comdig",
    title: {
      en: "Digital Communications",
      es: "Comunicaciones digitales",
      fr: "Communications numériques",
    },
    type: "university",
    timestamp: "2023",
    summary: {
      en: "Reliable digital transmission over analog channels, from modulation to coding.",
      es: "Transmisión digital confiable sobre canales analógicos, desde la modulación hasta la codificación.",
      fr: "Transmission numérique fiable sur des canaux analogiques, de la modulation au codage.",
    },
    description: {
      en: "Divided into two parts, the course first focuses on transmitting bits over noisy analog channels and then on generating and protecting those bits from errors. Through labs and projects, we explored modulation, coding, and error mitigation while analyzing the trade-offs inherent to real-world systems.",
      es: "Dividido en dos partes, el curso se centra primero en transmitir bits sobre canales analógicos ruidosos y luego en generar esos bits y protegerlos de errores. A través de laboratorios y proyectos exploramos modulación, codificación y mitigación de errores, analizando los compromisos propios de los sistemas reales.",
      fr: "Divisé en deux parties, le cours porte d'abord sur la transmission de bits sur des canaux analogiques bruités, puis sur la génération de ces bits et leur protection contre les erreurs. À travers des TP et des projets, nous avons exploré la modulation, le codage et la correction d'erreurs, en analysant les compromis propres aux systèmes réels.",
    },
    tags: ["Communications", "DSP", "Modulation", "Coding", "Error Correction"],
    attachments: [
      toAtt("/projects/fing/comdig/reports/Report 1.pdf", "Report 1"),
      toAtt("/projects/fing/comdig/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/comdig/reports/Report 3.pdf", "Report 3"),
      toAtt("/projects/fing/comdig/reports/Final Project.pdf", "Final Project"),
    ],
  },
  {
    slug: "fuo",
    title: {
      en: "Optimization Fundamentals",
      es: "Fundamentos de optimización",
      fr: "Fondamentaux de l'optimisation",
    },
    type: "university",
    timestamp: "2022",
    summary: {
      en: "Optimization-focused coursework culminating in a comprehensive final project.",
      es: "Curso centrado en optimización que culmina en un proyecto final integral.",
      fr: "Cours consacré à l'optimisation, conclu par un projet final complet.",
    },
    description: {
      en: "The course consolidated modeling, analysis, and optimization methods, with emphasis on understanding trade-offs in algorithmic choices. We applied tools to diverse scenarios and documented results for different algorithms and use cases.",
      es: "El curso consolidó métodos de modelado, análisis y optimización, con énfasis en entender los compromisos de cada elección algorítmica. Aplicamos las herramientas a escenarios diversos y documentamos los resultados de distintos algoritmos y casos de uso.",
      fr: "Le cours a consolidé les méthodes de modélisation, d'analyse et d'optimisation, en insistant sur la compréhension des compromis liés aux choix algorithmiques. Nous avons appliqué ces outils à des scénarios variés et documenté les résultats de différents algorithmes et cas d'usage.",
    },
    tags: ["Optimization", "Algorithms", "Gradient Descent"],
    attachments: [
      toAtt("/projects/fing/fuo/reports/Report 2.pdf", "Report 2"),
      toAtt("/projects/fing/fuo/reports/Final Project.pdf", "Final Project"),
    ],
  },
  {
    slug: "p4",
    title: {
      en: "Programming 4",
      es: "Programación 4",
      fr: "Programmation 4",
    },
    type: "university",
    timestamp: "2022",
    summary: {
      en: "Object-oriented design and programming, from concepts to practical projects.",
      es: "Diseño y programación orientada a objetos, de los conceptos a los proyectos prácticos.",
      fr: "Conception et programmation orientées objet, des concepts aux projets pratiques.",
    },
    description: {
      en: "An introduction to Object-Oriented programming principles for modeling problems as interacting objects. The course emphasized analysis and design methodologies, providing hands-on experience building Object-Oriented systems and reasoning about design choices, reusability, and maintainability.",
      es: "Una introducción a los principios de la programación orientada a objetos para modelar problemas como objetos que interactúan. El curso puso énfasis en las metodologías de análisis y diseño, con experiencia práctica construyendo sistemas orientados a objetos y razonando sobre decisiones de diseño, reutilización y mantenibilidad.",
      fr: "Une introduction aux principes de la programmation orientée objet pour modéliser des problèmes sous forme d'objets en interaction. Le cours mettait l'accent sur les méthodes d'analyse et de conception, avec une expérience pratique de la construction de systèmes orientés objet et une réflexion sur les choix de conception, la réutilisabilité et la maintenabilité.",
    },
    tags: ["Programming", "OOP", "Object-Oriented", "Design Patterns"],
    attachments: [
      toAtt("/projects/fing/p4/reports/Report 1.pdf", "Lab 1"),
      toAtt("/projects/fing/p4/reports/Report 2.pdf", "Lab 2"),
      toAtt("/projects/fing/p4/reports/Report 3.pdf", "Lab 3"),
    ],
    repoUrl: "https://github.com/fede-bello/fing-p4",
  },
];

function localizeProjects(
  entries: ReadonlyArray<ProjectEntry>,
  lang: Lang
): ReadonlyArray<Project> {
  return entries.map((entry) => ({
    ...entry,
    title: typeof entry.title === "string" ? entry.title : entry.title[lang],
    subtitle: entry.subtitle?.[lang],
    summary: entry.summary[lang],
    description: entry.description[lang],
    timestamp: formatDate(entry.timestamp, lang),
    attachments: entry.attachments?.map((att) => ({
      ...att,
      title: translateAttachmentTitle(att.title, lang),
    })),
  }));
}

interface ProjectGroups {
  ventures: ReadonlyArray<Project>;
  freelance: ReadonlyArray<Project>;
  personal: ReadonlyArray<Project>;
  university: ReadonlyArray<Project>;
}

export function getProjects(lang: Lang): ProjectGroups {
  return {
    ventures: localizeProjects(ventureEntries, lang),
    freelance: localizeProjects(freelanceEntries, lang),
    personal: localizeProjects(personalEntries, lang),
    university: localizeProjects(universityEntries, lang),
  };
}
