// All copy lives here, in both English and French. `getContent(lang)` returns
// a fully-localized bundle; components take a `lang` prop and call it.

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

type ExperienceLink = {
    label: string;
    url: string;
};

type ExperienceItem = {
    title: string;
    org: string;
    location: string;
    period: string;
    stack: string[];
    points: string[];
    links?: ExperienceLink[];
};

type EducationItem = {
    title: string;
    org: string;
    location: string;
    period: string;
    detail: string[];
};

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

// Projects rendered as cards. Two kinds:
//
//  1. GitHub projects — set `repo: "owner/name"`. Stats/description are fetched
//     live from the GitHub API in the browser; `fallback` (localized below)
//     shows if that fails, and the card links to the repo.
//  2. Off-GitHub projects (e.g. closed-source work) — omit `repo` and set an
//     explicit `name`. Nothing is fetched: the card shows the localized
//     `fallback` copy plus a static `status` line (see projectStatus below),
//     and has no repo link unless you add a `link`.
//
// `id` is the key used to look up localized copy (fallback / highlights /
// status). For GitHub projects it's just the repo string; for off-GitHub ones
// pick any stable slug. Set `fullWidth: true` to make a tile span the whole row
// (handy for a featured project, or to even out an odd number of tiles).
//
// VIDEO / GIF: drop the file in `public/videos/` and point `media` at it.
// `.mp4`/`.webm` render as an autoplaying muted loop, anything else
// (`.gif`, `.png`, ...) renders as an <img>. See ProjectCard.astro.
const projectsBase = [
    {
        // Closed-source game, in development — no GitHub repo.
        // TODO: drop the trailer/clip at public/videos/absent-light.mp4
        // (or update this path), and tweak the tags to taste.
        id: "absent-light",
        name: "Absent Light",
        tags: ["Game", "Roguelike", "Survival", "Procedural generation"],
        media: "/videos/absent-light.mp4",
        fullWidth: true,
    },
    {
        id: "louis-thevenet/vault-tasks",
        repo: "louis-thevenet/vault-tasks",
        tags: ["Rust", "Ratatui", "CLI"],
        media: "/videos/vault-tasks.gif",
    },
    {
        id: "louis-thevenet/map-generation",
        repo: "louis-thevenet/map-generation",
        tags: ["Rust", "Procedural generation", "TUI"],
        media: "/videos/map-generation.mp4",
    },
    {
        id: "louis-thevenet/Solarust",
        repo: "louis-thevenet/Solarust",
        tags: ["Rust", "Bevy", "Simulation"],
        media: "/videos/solarust.mp4",
    },
    {
        id: "louis-thevenet/RayTracerCsharp",
        repo: "louis-thevenet/RayTracerCsharp",
        tags: ["C#", ".NET", "Ray tracing"],
        media: "/videos/raytracer.mp4",
    },
] as {
    id: string;
    repo?: string;
    name?: string;
    tags: string[];
    media?: string;
    fullWidth?: boolean;
    link?: string;
}[];

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
        ] satisfies ExperienceItem[],

        education: [
            {
                title: "Exchange semester",
                org: "École de Technologie Supérieure (ÉTS)",
                location: "Montréal, Canada",
                period: "Sept 2025 — Jan 2026",
                detail: [
                    "Software architecture",
                    "Software & systems security",
                    "Parallel computing architectures",
                    "VR/AR",
                ],
            },
            {
                title: "Engineering degree, Computer Science & Telecommunications",
                org: "ENSEEIHT",
                location: "Toulouse, France",
                period: "2023 — present",
                detail: [
                    "Applied mathematics",
                    "Operations research",
                    "Concurrent systems",
                    "Software & systems engineering",
                    "Distributed systems",
                    "Big data",
                ],
            },
            {
                title: "Classe préparatoire (MPI / MP2I)",
                org: "Lycée Paul Valéry",
                location: "Paris, France",
                period: "Sept 2021 — Jul 2023",
                detail: [
                    "Intensive math",
                    "Physics",
                    "Computer science",
                    "Preparation for the Grandes Écoles entrance exams",
                ],
            },
        ] satisfies EducationItem[],

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

        projectDescriptions: {
            "absent-light":
                "A survival roguelike set in a collapsed high-fantasy world. Scavenge, craft and endure in a deep, systemic simulation where the world reacts to you and every run is unforgiving.",
            "louis-thevenet/vault-tasks":
                "A terminal task manager that reads and writes tasks straight from Markdown vaults — built for people who keep their second brain in plain text.",
            "louis-thevenet/map-generation": "Procedural map generation experiments.",
            "louis-thevenet/Solarust": "A solar system simulation written in Rust.",
            "louis-thevenet/RayTracerCsharp":
                "A ray-tracing render engine for displaying 3D objects, built to experiment with lighting effects.",
        } as Record<string, string>,

        // A few hand-written highlights per project, shown as a short bulleted
        // list on each card (in addition to the GitHub description above).
        projectHighlights: {
            "absent-light": [
                "Open-ended survival across a procedurally generated fantasy world in ruin",
                "Deep crafting and inventory systems — build, repair and improvise from whatever you scavenge",
                "Emergent, systemic play where creatures, weather and magic collide in ways I don't script",
            ],
            "louis-thevenet/vault-tasks": [
                "Parses tasks from any Markdown file or vault: subtasks, tags, relative dates, priority and completion",
                "Navigate, search, filter and edit tasks — or open them in your own editor",
                "Calendar view and a time-management tab (Pomodoro & Flowtime)",
            ],
            "louis-thevenet/map-generation": [
                "Procedural biome generation driven by temperature, moisture, continentalness and erosion maps",
                "Explore an endless world in a TUI, with chunks generated as you move",
                "Part of a larger experiment: LLM-driven NPCs living in a procedural world",
            ],
            "louis-thevenet/Solarust": [
                "Solar-system simulation built with the Bevy game engine in Rust",
                "A toy project to dig into Bevy's ECS architecture and real-time rendering",
            ],
            "louis-thevenet/RayTracerCsharp": [
                "CPU ray tracer written from scratch in C#",
                "Loads 3D meshes from ASCII STL files and renders them with configurable lights and materials",
                "Phong-style lighting with ambient, diffuse and specular components",
            ],
        } as Record<string, string[]>,

        // Static status line shown (in place of live GitHub stats) for
        // off-GitHub projects, keyed by project `id`.
        projectStatus: {
            "absent-light": "In development · since June 2026",
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
                visit: "visit ↗",
                enlarge: "Click to enlarge",
                close: "Close",
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
            "Actuellement stagiaire ingénieur logiciel chez Thales, où je développe un simulateur d'essaims de drones sur Unreal Engine 5.\nJe suis également actif dans la communauté open source sur des projets personnels et communautaires.",
        availability: "Disponible en CDI · sept. 2026",

        experience: [
            {
                title:
                    "Stagiaire ingénieur logiciel - Simulateur d'essaims de drones, Unreal Engine",
                org: "Thales",
                location: "Élancourt, France",
                period: "févr. 2026 — août 2026",
                stack: ["Unreal Engine 5", "C++", "CUDA"],
                points: [
                    "Développement du simulateur sur Unreal Engine 5 en C++ au sein de l'équipe Essaims de Drones",
                    "Simulation des caméras embarquées avec encodage GPU et diffusion du flux en direct",
                    "Simulateur agnostique du moteur physique qui permet de simuler toutes sortes de véhicules",
                    "Environnement 3D photoréaliste",
                    "Intégration de plusieurs moteurs physiques (Gazebo pour SwarmMaster, JSBSim pour Toutatis) avec synchronisation du terrain et des collisions",
                    "Répartition de la charge de rendu des streams sur plusieurs machines",
                ],
            },
            {
                title: "Stagiaire ingénieur logiciel - Nix dans la stack SlapOS",
                org: "Nexedi",
                location: "Lille, France",
                period: "juin 2025 — août 2025",
                stack: ["Nix", "NixOS", "Buildout", "SlapOS", "Python", "glibc"],
                points: [
                    "Intégration du gestionnaire de paquets Nix dans le système de déploiement SlapOS, en remplacement d'Ansible pour renforcer la reproductibilité",
                    "Adaptation de la stack logicielle SlapOS pour une compatibilité complète avec NixOS",
                    "Rédaction d'articles mettant en évidence que Nix et Docker ne permettent pas de produire des binaires réellement portables, la glibc étant figée dans l'image/le store et divergente de celle du système hôte",
                    "Patch de nixpkgs pour supporter d'anciennes versions de glibc/kernel, comme piste pour restaurer une véritable portabilité des binaires Nix",
                ],
                links: [
                    { label: "Glibc Incompatibility in Nix Builds", url: "https://blog.rapid.space/rapidspace-Blog/rapidspace-Glibc.Incompatibility.In.Nix.Builds" },
                    { label: "Glibc Incompatibility With Docker", url: "https://blog.rapid.space/rapidspace-Blog/rapidspace-Glibc.Incompatibility.With.Docker" },
                ],
            },
            {
                title: "Support informatique - Oraux des concours des écoles d'ingénieurs",
                org: "Service concours écoles d'ingénieurs",
                location: "Toulouse, France",
                period: "Été 2024",
                stack: [],
                points: [
                    "Gestion du matériel informatique utilisé par les jurys et les candidats lors des épreuves orales",
                    "Assistance technique et logistique, orientation des candidats vers leurs salles et gestion du matériel",
                ],
            },
        ] satisfies ExperienceItem[],

        education: [
            {
                title: "Semestre d'échange",
                org: "École de Technologie Supérieure (ÉTS)",
                location: "Montréal, Canada",
                period: "sept. 2025 - janv. 2026",
                detail: [
                    "Architecture logicielle",
                    "Sécurité des logiciels et des systèmes",
                    "Architectures de calcul parallèle",
                    "VR/AR",
                ],
            },
            {
                title: "Diplôme d'ingénieur, Informatique & Télécommunications",
                org: "ENSEEIHT",
                location: "Toulouse, France",
                period: "2023 - aujourd'hui",
                detail: [
                    "Mathématiques appliquées",
                    "Recherche opérationnelle",
                    "Systèmes concurrents",
                    "Génie logiciel et systèmes",
                    "Systèmes distribués",
                    "Big data",
                ],
            },
            {
                title: "Classe préparatoire (MPI* / MP2I)",
                org: "Lycée Paul Valéry",
                location: "Paris, France",
                period: "sept. 2021 - juil. 2023",
                detail: [
                    "Mathématiques",
                    "Physique",
                    "Informatique",
                ],
            },
        ] satisfies EducationItem[],

        contributions: [
            {
                repo: "NixOS/nixpkgs",
                period: "2024 - aujourd'hui",
                description:
                    "Membre de l'équipe des mainteneurs de Nixpkgs : maintenance de plusieurs paquets.",
            },
            {
                repo: "nix-community/stylix",
                period: "2025 - aujourd'hui",
                description:
                    "Egalement membre de l'équipe dédiée aux mainteneurs de modules Stylix, le framework de theming système pour NixOS.",
            },
            {
                repo: "alexpasmantier/television",
                description:
                    "Contributions à Television, un \"fuzzy finder\" très versatile pour le faire mieux fonctionner avec Nix.",
            },
            {
                repo: "ratatui/tui-widgets",
                description:
                    "Correction de bugs dans TUI Widgets, une bibliothèque de widgets pour créer des interfaces TUI (Text-based User Interfaces).",
            },

        ],

        skills: {
            languages: ["Rust", "C++", "Java", "Python", "C#"],
            tools: ["Git", "Linux", "Nix / NixOS", "Unreal Engine", "MATLAB", "SQL", "CUDA"],
            spoken: ["Français - langue maternelle", "Anglais - C2"],
            interests: ["Open source", "Escalade & randonnée", "Lecture"],
        },

        projectDescriptions: {
            "absent-light":
                "Absent Light est un jeu de survie au tour-par-tour dans un univers fantasy. Luttez pour survivre dans un monde impitoyable, persistent et généré procéduralement, où chaque partie est unique et où le monde réagit à vos actions. Le jeu est en phase initiale de développement et n'est pas encore disponible au public.",
            "louis-thevenet/vault-tasks":
                "Gestionnaire de tâches dans le terminal qui s'appuie sur des fichiers Markdown pour lire et écrire les tâches. Conçu pour s'intégrer parfaitement avec des logiciels de prise de notes et \"second brains\".",
            "louis-thevenet/map-generation":
                "Expérimentations de génération procédurale de terrain et de villes.",
            "louis-thevenet/Solarust":
                "Simulation d'interactions gravitationnelles entre corps célestes, réalisée en Rust.",
            "louis-thevenet/RayTracerCsharp":
                "Moteur de rendu par Ray Tracing pour afficher des objets et scènes 3D.",
        } as Record<string, string>,

        projectHighlights: {
            "absent-light": [
                "Survie en monde ouvert dans un univers fantasy généré procéduralement",
                "Systèmes d'artisanat et d'inventaire poussés : fabriquer, réparer et improviser avec ce que l'on récupère",
                "Jeu émergent et systémique où créatures, environnement et magie interagissent sans être scriptés",
                "Interface simple pour faciliter l'ajout de contenu et la profondeur de la simulation",
            ],
            "louis-thevenet/vault-tasks": [
                "Extension du langage Markdown avec une syntaxe de tâches avec méta-données (sous-tâches, tags, dates relatives, priorité et progression)",
                "Toutes les données sont stockées dans les tâches, pour une portabilité maximale et une intégration avec n'importe quel logiciel de prise de notes",
                "Interface en terminal pour naviguer, rechercher, filtrer et modifier les tâches",
            ],
            "louis-thevenet/map-generation": [
                "Génération procédurale de biomes pilotée par des cartes de température, d'humidité, de continentalité et d'érosion",
                "Explorer un monde infini avec des chunks générés au fil des déplacements",
                "Base de mes travaux de génération procédurale pour un projet plus ambitieux : Absent Light",
            ],
            "louis-thevenet/Solarust": [
                "Simulation du système solaire réalisée avec le moteur de jeu Bevy en Rust",
                "Un projet d'apprentissage pour explorer l'architecture ECS de Bevy et le rendu temps réel",
            ],
            "louis-thevenet/RayTracerCsharp": [
                "Moteur écrit de 0 en C#",
                "Charge des modèles 3D depuis des fichiers STL ASCII et en fait le rendu avec lumières et matériaux configurables",
            ],
        } as Record<string, string[]>,

        // Ligne de statut affichée (à la place des stats GitHub en direct) pour
        // les projets hors GitHub, indexée par `id` de projet.
        projectStatus: {
            "absent-light": "En développement · depuis juin 2026",
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
                visit: "visiter ↗",
                enlarge: "Cliquer pour agrandir",
                close: "Fermer",
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
            footer: {},
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
            // GitHub projects derive their name from the repo; off-GitHub ones
            // set `name` explicitly.
            name: p.name ?? p.repo!.split("/")[1],
            description: d.projectDescriptions[p.id],
            highlights: d.projectHighlights[p.id] ?? [],
            // Static status line for off-GitHub projects (undefined otherwise,
            // in which case the card fetches live GitHub stats instead).
            status: d.projectStatus[p.id],
        })),
        // Each project carries an optional `media` path (see projectsBase above) —
        // ProjectCard renders it as a looping video or an image when present.
        ui: d.ui,
    };
}
