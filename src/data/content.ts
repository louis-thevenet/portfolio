// All copy lives here, in both English and French. `getContent(lang)` returns
// a fully-localized bundle; components take a `lang` prop and call it.

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

// Non-translatable constants.
//
// `emailEnc` / `phoneEnc` are the contact details stored base64-encoded and
// then reversed, so the raw values never appear in the static HTML or in this
// file's git history. They are decoded in the browser (see `decodeContact` and
// the client scripts in the contact components), which keeps them out of reach
// of the naive scrapers that just regex pages for `@` / `mailto:` / phone
// patterns. This is obfuscation, not encryption — anyone determined can still
// decode it, but it removes the easy pickings.
//
// To regenerate after changing a value, run:
//   node -e 'console.log([...Buffer.from(process.argv[1]).toString("base64")].reverse().join(""))' "the value"
export const profile = {
  name: "Louis Thevenet",
  location: "Paris, France",
  emailEnc: "l1mLu9GdvJHcARXZuVmdlhGduMXa19Gb",
  phoneEnc: "=cDNgYjMgMjNgYDNgYDIzMzK",
  github: "louis-thevenet",
  linkedin: "https://www.linkedin.com/in/louis-thevenet-4113b5282",
};

// Repos rendered as project cards. Stats/description are fetched live from the
// GitHub API in the browser; `fallback` (localized below) shows if that fails.
//
// VIDEO / GIF PLACEHOLDER:
// To show a demo clip on a card, drop the file in `public/videos/` (e.g.
// `public/videos/vault-tasks.mp4` or `.gif`) and uncomment the matching
// `media` line below. `.mp4`/`.webm` render as an autoplaying muted loop,
// anything else (`.gif`, `.png`, ...) renders as an <img>. See ProjectCard.astro.
const projectsBase = [
  {
    repo: "louis-thevenet/vault-tasks",
    tags: ["Rust", "Ratatui", "CLI"],
    // media: "/videos/vault-tasks.mp4",
  },
  {
    repo: "louis-thevenet/map-generation",
    tags: ["Procedural generation"],
    // media: "/videos/map-generation.gif",
  },
  {
    repo: "louis-thevenet/Solarust",
    tags: ["Rust", "Simulation"],
    // media: "/videos/solarust.mp4",
  },
  {
    repo: "louis-thevenet/RayTracerCsharp",
    tags: ["C#", ".NET", "Ray tracing"],
    // media: "/videos/raytracer.gif",
  },
] as { repo: string; tags: string[]; media?: string }[];

const data = {
  en: {
    role: "Software Engineer",
    tagline:
      "Engineering student finishing at ENSEEIHT, looking for a full-time role from September 2026.",
    heroSecondary:
      "Currently a software engineering intern at Thales, building a drone-swarm simulator on Unreal Engine 5, and a maintainer in the Nixpkgs open-source project.",
    availability: "Available for full-time · Sept. 2026",

    experience: [
      {
        title: "Software Engineer Intern — Drone Swarm Simulator, Unreal Engine",
        org: "Thales",
        location: "Élancourt, France",
        period: "Feb 2026 — Aug 2026",
        stack: ["Unreal Engine 5", "C++", "CUDA"],
        points: [
          "Built the simulator on Unreal Engine 5 in C++",
          "Simulated onboard cameras with GPU-side encoding and stream output",
          "Integrated multiple physics engines (Gazebo, JSBSim) and flight stacks (PX4, SwarmMaster)",
          "Distributed simulation load across several machines",
        ],
      },
      {
        title: "Software Engineer Intern — Nix in the SlapOS Stack",
        org: "Nexedi",
        location: "Lille, France",
        period: "Jun 2025 — Aug 2025",
        stack: ["Nix", "NixOS", "Buildout", "SlapOS", "Python"],
        points: [
          "Integrated the Nix package manager into the SlapOS deployment system, replacing Ansible to strengthen reproducibility",
          "Adapted the SlapOS software stack for full NixOS compatibility",
        ],
      },
      {
        title: "IT Support — Oral Exams for Engineering School Entrance Exams",
        org: "Service concours écoles d'ingénieurs",
        location: "Toulouse, France",
        period: "Summer 2024",
        stack: [],
        points: [
          "Resolved technical and logistical issues, guided candidates to their exam rooms, and managed equipment",
        ],
      },
    ],

    education: [
      {
        title: "Exchange semester",
        org: "École de Technologie Supérieure (ÉTS)",
        location: "Montréal, Canada",
        period: "Sept 2025 — Jan 2026",
        detail:
          "Software architecture, software & systems security, parallel computing architectures, VR/AR",
      },
      {
        title: "Engineering degree, Computer Science & Telecommunications",
        org: "ENSEEIHT",
        location: "Toulouse, France",
        period: "2023 — present",
        detail:
          "Applied mathematics, operations research, concurrent systems, software & systems engineering, distributed systems, big data",
      },
      {
        title: "Classe préparatoire (MPI / MP2I)",
        org: "Lycée Paul Valéry",
        location: "Paris, France",
        period: "Sept 2021 — Jul 2023",
        detail:
          "Intensive math, physics & computer science track preparing for the Grandes Écoles entrance exams",
      },
    ],

    contributions: [
      {
        repo: "NixOS/nixpkgs",
        role: "Maintainer",
        period: "2024 — present",
        description:
          "Member of the Nixpkgs maintainers team: maintaining several packages and reviewing incoming code.",
      },
      {
        repo: "danth/stylix",
        role: "Contributor",
        period: "ongoing",
        description:
          "Contributing to Stylix, the system-wide theming framework for NixOS.",
      },
    ],

    skills: {
      languages: ["Rust", "C++", "Java", "Python", "C#"],
      tools: ["Unreal Engine", "MATLAB", "Git", "SQL", "Linux", "Nix / NixOS"],
      spoken: ["French — native", "English — C2"],
      interests: ["Open source", "Climbing & hiking", "Reading"],
    },

    projectFallbacks: {
      "louis-thevenet/vault-tasks":
        "A terminal task manager that reads and writes tasks straight from Markdown vaults — built for people who keep their second brain in plain text.",
      "louis-thevenet/map-generation": "Procedural map generation experiments.",
      "louis-thevenet/Solarust": "A solar system simulation written in Rust.",
      "louis-thevenet/RayTracerCsharp":
        "A ray-tracing render engine for displaying 3D objects, built to experiment with lighting effects.",
    } as Record<string, string>,

    ui: {
      nav: {
        experience: "Experience",
        projects: "Projects",
        oss: "Open source",
        education: "Education",
        contact: "Contact",
        themeToggle: "Toggle dark mode",
      },
      hero: {
        viewProjects: "View projects",
        contact: "Contact",
        basedIn: "Based in",
        currentRole: "Current role",
        studying: "Studying",
        languages: "Languages",
      },
      experience: {
        eyebrow: "Experience",
        title: "Professional experience",
        lead: "Roles across simulation, systems engineering and infrastructure.",
      },
      projects: {
        eyebrow: "Projects",
        title: "Selected personal projects",
        lead: "Open-source work, mostly in Rust and C#. Live data pulled from GitHub.",
        viewRepo: "view repository ↗",
        loading: "fetching repo status…",
        updated: "updated",
        unavailable: "live stats unavailable — see repo",
        dateLocale: "en",
      },
      oss: {
        eyebrow: "Open source",
        title: "Open-source contributions",
        lead: "Ongoing upstream work in the NixOS ecosystem.",
      },
      education: {
        eyebrow: "Education",
        title: "Education",
        lead: "Engineering studies in computer science and telecommunications.",
      },
      skills: {
        eyebrow: "Skills",
        title: "Technical skills",
        languages: "Languages",
        tools: "Tools & platforms",
        spoken: "Spoken languages",
        interests: "Interests",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's get in touch",
        intro:
          "Open to full-time software engineering roles from September 2026. Happy to discuss opportunities, projects, or open source.",
        email: "Email",
        phone: "Phone",
        location: "Location",
        emailMe: "Email me",
      },
      footer: { builtWith: "Built with Astro" },
    },
  },

  fr: {
    role: "Ingénieur logiciel",
    tagline:
      "Étudiant ingénieur en fin de cursus à l'ENSEEIHT, à la recherche d'un poste en CDI à partir de septembre 2026.",
    heroSecondary:
      "Actuellement stagiaire ingénieur logiciel chez Thales, où je développe un simulateur d'essaims de drones sur Unreal Engine 5, et mainteneur du projet open source Nixpkgs.",
    availability: "Disponible en CDI · sept. 2026",

    experience: [
      {
        title:
          "Stagiaire ingénieur logiciel — Simulateur d'essaims de drones, Unreal Engine",
        org: "Thales",
        location: "Élancourt, France",
        period: "févr. 2026 — août 2026",
        stack: ["Unreal Engine 5", "C++", "CUDA"],
        points: [
          "Développement du simulateur sur Unreal Engine 5 en C++",
          "Simulation des caméras embarquées avec encodage GPU et diffusion du flux",
          "Intégration de plusieurs moteurs physiques (Gazebo, JSBSim) et piles de vol (PX4, SwarmMaster)",
          "Répartition de la charge de simulation sur plusieurs machines",
        ],
      },
      {
        title: "Stagiaire ingénieur logiciel — Nix dans la stack SlapOS",
        org: "Nexedi",
        location: "Lille, France",
        period: "juin 2025 — août 2025",
        stack: ["Nix", "NixOS", "Buildout", "SlapOS", "Python"],
        points: [
          "Intégration du gestionnaire de paquets Nix dans le système de déploiement SlapOS, en remplacement d'Ansible pour renforcer la reproductibilité",
          "Adaptation de la stack logicielle SlapOS pour une compatibilité complète avec NixOS",
        ],
      },
      {
        title: "Support informatique — Oraux des concours des écoles d'ingénieurs",
        org: "Service concours écoles d'ingénieurs",
        location: "Toulouse, France",
        period: "Été 2024",
        stack: [],
        points: [
          "Résolution des problèmes techniques et logistiques, orientation des candidats vers leurs salles et gestion du matériel",
        ],
      },
    ],

    education: [
      {
        title: "Semestre d'échange",
        org: "École de Technologie Supérieure (ÉTS)",
        location: "Montréal, Canada",
        period: "sept. 2025 — janv. 2026",
        detail:
          "Architecture logicielle, sécurité des logiciels et des systèmes, architectures de calcul parallèle, VR/AR",
      },
      {
        title: "Diplôme d'ingénieur, Informatique & Télécommunications",
        org: "ENSEEIHT",
        location: "Toulouse, France",
        period: "2023 — aujourd'hui",
        detail:
          "Mathématiques appliquées, recherche opérationnelle, systèmes concurrents, génie logiciel et systèmes, systèmes distribués, big data",
      },
      {
        title: "Classe préparatoire (MPI / MP2I)",
        org: "Lycée Paul Valéry",
        location: "Paris, France",
        period: "sept. 2021 — juil. 2023",
        detail:
          "Filière intensive mathématiques, physique et informatique préparant aux concours des Grandes Écoles",
      },
    ],

    contributions: [
      {
        repo: "NixOS/nixpkgs",
        role: "Mainteneur",
        period: "2024 — aujourd'hui",
        description:
          "Membre de l'équipe des mainteneurs de Nixpkgs : maintenance de plusieurs paquets et revue des contributions.",
      },
      {
        repo: "danth/stylix",
        role: "Contributeur",
        period: "en cours",
        description:
          "Contributions à Stylix, le framework de thématisation système pour NixOS.",
      },
    ],

    skills: {
      languages: ["Rust", "C++", "Java", "Python", "C#"],
      tools: ["Unreal Engine", "MATLAB", "Git", "SQL", "Linux", "Nix / NixOS"],
      spoken: ["Français — langue maternelle", "Anglais — C2"],
      interests: ["Open source", "Escalade & randonnée", "Lecture"],
    },

    projectFallbacks: {
      "louis-thevenet/vault-tasks":
        "Un gestionnaire de tâches en terminal qui lit et écrit les tâches directement dans des vaults Markdown — pensé pour ceux qui gardent leur second cerveau en texte brut.",
      "louis-thevenet/map-generation":
        "Expérimentations de génération procédurale de cartes.",
      "louis-thevenet/Solarust":
        "Une simulation du système solaire écrite en Rust.",
      "louis-thevenet/RayTracerCsharp":
        "Un moteur de rendu par lancer de rayons pour afficher des objets 3D, conçu pour expérimenter les effets de lumière.",
    } as Record<string, string>,

    ui: {
      nav: {
        experience: "Expérience",
        projects: "Projets",
        oss: "Open source",
        education: "Formation",
        contact: "Contact",
        themeToggle: "Basculer le mode sombre",
      },
      hero: {
        viewProjects: "Voir les projets",
        contact: "Contact",
        basedIn: "Localisation",
        currentRole: "Poste actuel",
        studying: "Formation",
        languages: "Langues",
      },
      experience: {
        eyebrow: "Expérience",
        title: "Expérience professionnelle",
        lead: "Expériences en simulation, ingénierie des systèmes et infrastructure.",
      },
      projects: {
        eyebrow: "Projets",
        title: "Projets personnels sélectionnés",
        lead: "Travaux open source, principalement en Rust et C#. Données en direct depuis GitHub.",
        viewRepo: "voir le dépôt ↗",
        loading: "récupération du statut du dépôt…",
        updated: "mis à jour",
        unavailable: "stats en direct indisponibles — voir le dépôt",
        dateLocale: "fr-FR",
      },
      oss: {
        eyebrow: "Open source",
        title: "Contributions open source",
        lead: "Travail continu en amont dans l'écosystème NixOS.",
      },
      education: {
        eyebrow: "Formation",
        title: "Formation",
        lead: "Études d'ingénieur en informatique et télécommunications.",
      },
      skills: {
        eyebrow: "Compétences",
        title: "Compétences techniques",
        languages: "Langages",
        tools: "Outils & plateformes",
        spoken: "Langues parlées",
        interests: "Centres d'intérêt",
      },
      contact: {
        eyebrow: "Contact",
        title: "Prenons contact",
        intro:
          "Ouvert aux postes d'ingénieur logiciel en CDI à partir de septembre 2026. Ravi d'échanger sur des opportunités, des projets ou l'open source.",
        email: "E-mail",
        phone: "Téléphone",
        location: "Localisation",
        emailMe: "M'écrire",
      },
      footer: { builtWith: "Réalisé avec Astro" },
    },
  },
};

export function getContent(lang: Locale) {
  const d = data[lang];
  return {
    lang,
    profile: {
      ...profile,
      role: d.role,
      tagline: d.tagline,
      heroSecondary: d.heroSecondary,
      availability: d.availability,
    },
    experience: d.experience,
    education: d.education,
    contributions: d.contributions,
    skills: d.skills,
    projects: projectsBase.map((p) => ({
      ...p,
      fallback: d.projectFallbacks[p.repo],
    })),
    // Each project carries an optional `media` path (see projectsBase above) —
    // ProjectCard renders it as a looping video or an image when present.
    ui: d.ui,
  };
}
