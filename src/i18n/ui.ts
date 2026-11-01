import type { Lang, PagePath } from "@/i18n/config";

export interface UiStrings {
  nav: Record<PagePath, string>;
  languages: string;
  footer: { rights: string };
  theme: { light: string; dark: string };
  menu: { open: string };
  about: {
    title: string;
    subtitle: string;
    photoAlt: string;
    /** Paragraphs as trusted HTML (links and emphasis). */
    paragraphs: ReadonlyArray<string>;
    connect: string;
  };
  experience: {
    title: string;
    subtitle: string;
    visitInstitute: string;
    visitCompany: string;
    responsibilities: string;
    tech: string;
  };
  projects: {
    title: string;
    subtitle: string;
    ventures: string;
    client: string;
    personal: string;
    university: string;
    visitSite: string;
    viewRepo: string;
  };
  pdf: {
    reports: (count: number) => string;
    view: string;
    download: string;
    open: string;
    close: string;
    viewer: string;
  };
  publications: {
    title: string;
    subtitle: string;
    author: string;
    paper: string;
    conferences: string;
    website: string;
  };
  contact: {
    title: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageTooShort: string;
      messageTooLong: string;
    };
    status: {
      received: string;
      notConfigured: string;
      success: string;
      failure: string;
    };
    send: string;
    sending: string;
    sent: string;
    wait: string;
    thanksTitle: string;
    thanksBody: string;
    pleaseWait: string;
    captchaTitle: string;
    captchaPrompt: string;
    captchaAnswer: string;
    captchaError: string;
    cancel: string;
    confirm: string;
    otherWays: string;
  };
  social: { visitProfile: (name: string) => string };
  notFound: { title: string; body: string; back: string };
}

const LINK = 'class="text-blue-600 dark:text-blue-400 hover:underline"';
const ext = (href: string, label: string): string =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer" ${LINK}>${label}</a>`;

const ENS = "https://www.ens-paris-saclay.fr/";
const TRYOLABS = "https://tryolabs.com/";
const BINBASH = "https://binbash.co/";
const LLAMAINDEX = "https://www.llamaindex.ai/";
const FING = "https://www.fing.edu.uy/";

export const UI: Record<Lang, UiStrings> = {
  en: {
    nav: {
      "/": "About Me",
      "/experience": "Experience",
      "/projects": "Projects",
      "/publications": "Publications",
      "/contact": "Contact Me",
    },
    languages: "Languages",
    footer: { rights: "All rights reserved." },
    theme: { light: "Light mode", dark: "Dark mode" },
    menu: { open: "Open menu" },
    about: {
      title: "About Me",
      subtitle: "Machine Learning Engineer • MVA @ ENS Paris-Saclay • Sophie Germain Scholar",
      photoAlt: "That's me!",
      paragraphs: [
        `I'm currently doing the <strong>MVA</strong> at ${ext(ENS, "ENS Paris-Saclay")} as a <strong>Sophie Germain Scholar</strong>, and I work part-time as an <strong>ML Engineer</strong> at ${ext(BINBASH, "binbash")}, building generative AI systems on AWS. Before that I worked as a <strong>Lead Machine Learning Engineer</strong> at ${ext(TRYOLABS, "Tryolabs")}, embedded as a <strong>Forward Deployed Engineer</strong> with the ${ext(LLAMAINDEX, "LlamaIndex")} team, where I delivered AI document-processing solutions for major enterprise clients, led AI system architecture, and mentored engineers. I hold a degree in <strong>Telecommunications Systems Engineering</strong> from the ${ext(FING, "Faculty of Engineering")} of the University of the Republic (UdelaR), with an award-winning thesis on anomaly detection with Graph Neural Networks.`,
        "I also have <strong>academic experience</strong> as a Teaching Assistant at the UdelaR, where I <strong>taught programming courses</strong> and contributed to <strong>research</strong> in the Information Theory Group, focusing on DNA storage systems.",
        "My main interests are <strong>machine learning</strong>, <strong>applied mathematics</strong> with a focus on signal processing, and <strong>programming</strong>. I enjoy building practical, reliable end-to-end ML systems, drawing on my background in signal processing, data modeling, and backend development. I speak Spanish, English, German and French.",
      ],
      connect: "Connect with me",
    },
    experience: {
      title: "Experience",
      subtitle: "Engineering, teaching, and research across ML, Applied Mathematics, and Software",
      visitInstitute: "Visit Institute",
      visitCompany: "Visit Company",
      responsibilities: "Key responsibilities",
      tech: "Tech",
    },
    projects: {
      title: "Projects",
      subtitle: "Ventures, personal projects, and selected university coursework",
      ventures: "Ventures",
      client: "Client Projects",
      personal: "Personal Projects",
      university: "University Projects",
      visitSite: "Visit site",
      viewRepo: "View repo",
    },
    pdf: {
      reports: (count) => `Reports (${count})`,
      view: "View",
      download: "Download",
      open: "Open",
      close: "Close",
      viewer: "PDF Viewer",
    },
    publications: {
      title: "Publications",
      subtitle: "Peer-reviewed work and talks",
      author: "Author",
      paper: "Paper",
      conferences: "Conferences",
      website: "Website",
    },
    contact: {
      title: "Contact Me",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "What can I help you with?",
      errors: {
        nameRequired: "Please enter your name.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Enter a valid email address.",
        messageRequired: "Please enter a message.",
        messageTooShort: "Message must be at least 10 characters.",
        messageTooLong: "Message cannot exceed 5000 characters.",
      },
      status: {
        received: "Thanks! Your message has been received.",
        notConfigured: "Form service is not configured. Please try again later.",
        success: "Thanks! I received your message and will reply in 1–2 business days.",
        failure: "Something went wrong. Please check your connection and try again.",
      },
      send: "Send",
      sending: "Sending…",
      sent: "Sent",
      wait: "Please wait…",
      thanksTitle: "Thank you for contacting me",
      thanksBody: "I received your message and will reply within 1–2 business days.",
      pleaseWait: "Please wait",
      captchaTitle: "Quick check",
      captchaPrompt: "Please solve:",
      captchaAnswer: "Your answer",
      captchaError: "Incorrect answer. Please try again.",
      cancel: "Cancel",
      confirm: "Confirm",
      otherWays: "Other ways to connect",
    },
    social: { visitProfile: (name) => `Visit ${name} profile` },
    notFound: {
      title: "Page not found",
      body: "We couldn't find what you were looking for.",
      back: "Back to Home",
    },
  },

  es: {
    nav: {
      "/": "Sobre mí",
      "/experience": "Experiencia",
      "/projects": "Proyectos",
      "/publications": "Publicaciones",
      "/contact": "Contacto",
    },
    languages: "Idiomas",
    footer: { rights: "Todos los derechos reservados." },
    theme: { light: "Modo claro", dark: "Modo oscuro" },
    menu: { open: "Abrir menú" },
    about: {
      title: "Sobre mí",
      subtitle:
        "Ingeniero de Machine Learning • MVA en ENS Paris-Saclay • Becario Sophie Germain",
      photoAlt: "¡Ese soy yo!",
      paragraphs: [
        `Soy Federico Bello (Fede Bello), ingeniero de Machine Learning uruguayo. Actualmente curso el máster <strong>MVA</strong> (Mathématiques, Vision, Apprentissage) en la ${ext(ENS, "ENS Paris-Saclay")}, en París, como <strong>becario Sophie Germain</strong>, y trabajo part-time como <strong>ML Engineer</strong> en ${ext(BINBASH, "binbash")}, construyendo sistemas de IA generativa en AWS. Antes trabajé como <strong>Lead Machine Learning Engineer</strong> en ${ext(TRYOLABS, "Tryolabs")}, integrado como <strong>Forward Deployed Engineer</strong> con el equipo de ${ext(LLAMAINDEX, "LlamaIndex")}, donde entregué soluciones de procesamiento de documentos con IA para grandes clientes, lideré la arquitectura de sistemas de IA y mentoreé ingenieros. Soy <strong>Ingeniero en Sistemas de Telecomunicaciones</strong> por la ${ext(FING, "Facultad de Ingeniería")} de la Universidad de la República (UdelaR), con una tesis premiada sobre detección de anomalías con Graph Neural Networks.`,
        "También tengo <strong>experiencia académica</strong> como docente en la UdelaR, donde <strong>dicté cursos de programación</strong> y participé en <strong>investigación</strong> en el Grupo de Teoría de la Información, trabajando en almacenamiento de datos en ADN.",
        "Mis principales intereses son el <strong>machine learning</strong>, las <strong>matemáticas aplicadas</strong> con foco en procesamiento de señales, y la <strong>programación</strong>. Disfruto construir sistemas de ML de punta a punta, confiables y prácticos, apoyándome en mi experiencia en procesamiento de señales, modelado de datos y desarrollo backend. Hablo español, inglés, alemán y francés.",
      ],
      connect: "Contactame",
    },
    experience: {
      title: "Experiencia",
      subtitle:
        "Ingeniería, docencia e investigación en ML, matemáticas aplicadas y software",
      visitInstitute: "Visitar instituto",
      visitCompany: "Visitar empresa",
      responsibilities: "Responsabilidades principales",
      tech: "Tecnologías",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Emprendimientos, proyectos personales y cursos universitarios seleccionados",
      ventures: "Emprendimientos",
      client: "Proyectos para clientes",
      personal: "Proyectos personales",
      university: "Proyectos universitarios",
      visitSite: "Visitar sitio",
      viewRepo: "Ver repositorio",
    },
    pdf: {
      reports: (count) => `Informes (${count})`,
      view: "Ver",
      download: "Descargar",
      open: "Abrir",
      close: "Cerrar",
      viewer: "Visor de PDF",
    },
    publications: {
      title: "Publicaciones",
      subtitle: "Trabajos revisados por pares y charlas",
      author: "Autor",
      paper: "Artículo",
      conferences: "Conferencias",
      website: "Sitio web",
    },
    contact: {
      title: "Contacto",
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      email: "Email",
      emailPlaceholder: "tu@ejemplo.com",
      message: "Mensaje",
      messagePlaceholder: "¿En qué te puedo ayudar?",
      errors: {
        nameRequired: "Por favor, ingresá tu nombre.",
        emailRequired: "Por favor, ingresá tu dirección de email.",
        emailInvalid: "Ingresá una dirección de email válida.",
        messageRequired: "Por favor, escribí un mensaje.",
        messageTooShort: "El mensaje debe tener al menos 10 caracteres.",
        messageTooLong: "El mensaje no puede superar los 5000 caracteres.",
      },
      status: {
        received: "¡Gracias! Tu mensaje fue recibido.",
        notConfigured:
          "El servicio de formularios no está configurado. Intentá de nuevo más tarde.",
        success: "¡Gracias! Recibí tu mensaje y te responderé en 1–2 días hábiles.",
        failure: "Algo salió mal. Revisá tu conexión e intentá de nuevo.",
      },
      send: "Enviar",
      sending: "Enviando…",
      sent: "Enviado",
      wait: "Esperá un momento…",
      thanksTitle: "Gracias por contactarme",
      thanksBody: "Recibí tu mensaje y te responderé en 1–2 días hábiles.",
      pleaseWait: "Esperá un momento",
      captchaTitle: "Verificación rápida",
      captchaPrompt: "Resolvé:",
      captchaAnswer: "Tu respuesta",
      captchaError: "Respuesta incorrecta. Intentá de nuevo.",
      cancel: "Cancelar",
      confirm: "Confirmar",
      otherWays: "Otras formas de contacto",
    },
    social: { visitProfile: (name) => `Visitar perfil de ${name}` },
    notFound: {
      title: "Página no encontrada",
      body: "No pudimos encontrar lo que buscabas.",
      back: "Volver al inicio",
    },
  },

  fr: {
    nav: {
      "/": "À propos",
      "/experience": "Expérience",
      "/projects": "Projets",
      "/publications": "Publications",
      "/contact": "Contact",
    },
    languages: "Langues",
    footer: { rights: "Tous droits réservés." },
    theme: { light: "Mode clair", dark: "Mode sombre" },
    menu: { open: "Ouvrir le menu" },
    about: {
      title: "À propos de moi",
      subtitle:
        "Ingénieur Machine Learning • MVA à l'ENS Paris-Saclay • Boursier Sophie Germain",
      photoAlt: "C'est moi !",
      paragraphs: [
        `Je suis Federico Bello (Fede Bello), ingénieur en Machine Learning uruguayen. Je suis actuellement étudiant du master <strong>MVA</strong> (Mathématiques, Vision, Apprentissage) à l'${ext(ENS, "ENS Paris-Saclay")}, en tant que <strong>boursier Sophie Germain</strong>, et je travaille à temps partiel comme <strong>ML Engineer</strong> chez ${ext(BINBASH, "binbash")}, à construire des systèmes d'IA générative sur AWS. Auparavant, j'étais <strong>Lead Machine Learning Engineer</strong> chez ${ext(TRYOLABS, "Tryolabs")}, intégré en tant que <strong>Forward Deployed Engineer</strong> à l'équipe de ${ext(LLAMAINDEX, "LlamaIndex")}, où j'ai livré des solutions de traitement de documents par IA pour de grands clients, dirigé l'architecture de systèmes d'IA et encadré des ingénieurs. Je suis <strong>ingénieur en systèmes de télécommunications</strong> de la ${ext(FING, "Faculté d'ingénierie")} de l'Université de la République (UdelaR), avec un mémoire primé sur la détection d'anomalies par réseaux de neurones sur graphes (GNN).`,
        "J'ai aussi une <strong>expérience académique</strong> en tant qu'assistant d'enseignement à l'UdelaR, où j'ai <strong>enseigné la programmation</strong> et contribué à la <strong>recherche</strong> au sein du groupe de théorie de l'information, sur le stockage de données dans l'ADN.",
        "Mes principaux centres d'intérêt sont le <strong>machine learning</strong>, les <strong>mathématiques appliquées</strong>, en particulier le traitement du signal, et la <strong>programmation</strong>. J'aime construire des systèmes de ML de bout en bout, fiables et pragmatiques, en m'appuyant sur mon expérience en traitement du signal, modélisation de données et développement backend. Je parle espagnol, anglais, allemand et français.",
      ],
      connect: "Me contacter",
    },
    experience: {
      title: "Expérience",
      subtitle:
        "Ingénierie, enseignement et recherche en ML, mathématiques appliquées et logiciel",
      visitInstitute: "Voir l'institut",
      visitCompany: "Voir l'entreprise",
      responsibilities: "Responsabilités principales",
      tech: "Technologies",
    },
    projects: {
      title: "Projets",
      subtitle: "Entreprises, projets personnels et sélection de projets universitaires",
      ventures: "Entreprises",
      client: "Projets clients",
      personal: "Projets personnels",
      university: "Projets universitaires",
      visitSite: "Voir le site",
      viewRepo: "Voir le dépôt",
    },
    pdf: {
      reports: (count) => `Rapports (${count})`,
      view: "Voir",
      download: "Télécharger",
      open: "Ouvrir",
      close: "Fermer",
      viewer: "Visionneuse PDF",
    },
    publications: {
      title: "Publications",
      subtitle: "Travaux évalués par les pairs et présentations",
      author: "Auteur",
      paper: "Article",
      conferences: "Conférences",
      website: "Site web",
    },
    contact: {
      title: "Contact",
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "E-mail",
      emailPlaceholder: "vous@exemple.com",
      message: "Message",
      messagePlaceholder: "Comment puis-je vous aider ?",
      errors: {
        nameRequired: "Veuillez saisir votre nom.",
        emailRequired: "Veuillez saisir votre adresse e-mail.",
        emailInvalid: "Saisissez une adresse e-mail valide.",
        messageRequired: "Veuillez saisir un message.",
        messageTooShort: "Le message doit contenir au moins 10 caractères.",
        messageTooLong: "Le message ne peut pas dépasser 5000 caractères.",
      },
      status: {
        received: "Merci ! Votre message a bien été reçu.",
        notConfigured:
          "Le service de formulaire n'est pas configuré. Veuillez réessayer plus tard.",
        success: "Merci ! J'ai bien reçu votre message et je répondrai sous 1 à 2 jours ouvrés.",
        failure: "Une erreur s'est produite. Vérifiez votre connexion et réessayez.",
      },
      send: "Envoyer",
      sending: "Envoi…",
      sent: "Envoyé",
      wait: "Veuillez patienter…",
      thanksTitle: "Merci de m'avoir contacté",
      thanksBody: "J'ai bien reçu votre message et je répondrai sous 1 à 2 jours ouvrés.",
      pleaseWait: "Veuillez patienter",
      captchaTitle: "Vérification rapide",
      captchaPrompt: "Veuillez résoudre :",
      captchaAnswer: "Votre réponse",
      captchaError: "Réponse incorrecte. Veuillez réessayer.",
      cancel: "Annuler",
      confirm: "Confirmer",
      otherWays: "Autres moyens de me contacter",
    },
    social: { visitProfile: (name) => `Voir le profil ${name}` },
    notFound: {
      title: "Page introuvable",
      body: "Nous n'avons pas trouvé ce que vous cherchiez.",
      back: "Retour à l'accueil",
    },
  },
};
