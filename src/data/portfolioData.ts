export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  coursework: string;
  gpaOrRank: string;
}

export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Software Engineering' | 'Machine Learning' | 'Digital Media';
  description: string[];
  techStack: string[];
  challenges: string;
  githubUrl: string;
  imageSrc: string;
  duration: string;
  associatedWith: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  skills: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  level: string;
  colorTheme: 'emerald' | 'cobalt' | 'plum';
}

export interface GalleryItem {
  id: string;
  title: string;
  date: string;
  imageSrc?: string;
  gradient: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Semarang State University',
    degree: 'Bachelor of Computer Engineering',
    period: '2024 — Present',
    description:
      'Currently maintaining activity combining academic studies with hands-on software and AI project development. Outside the classroom, I spent over a year contributing to BEM KM UNNES across internship and media development roles while continuously earning industry certifications in programming, data, and machine learning.',
    coursework:
      'Web Technologies · Information Security · Artificial Intelligence · Mobile Computing',
    gpaOrRank: 'GPA: 3.39 / 4.00',
  },
  {
    id: 'edu-2',
    institution: 'Bintang Timur Vocational High School',
    degree: 'Software Engineering',
    period: '2021 — 2024',
    description:
      'Graduated as the top-ranked overall student, consistently maintaining 1st place in class across every semester and achieving 1st place in both the final Competency Exam (UKK) and industrial internship presentation. Built a strong early foundation in software development, object-oriented programming, and database management through hands-on practical coursework.',
    coursework:
      'Object-Oriented Programming · Web & Mobile Programming · Software Modeling · Database Systems',
    gpaOrRank: 'Honored 1st Place Overall Graduate, 1st Place in Competency Exam & Internship Presentation',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    position: 'Media Development Staff',
    company: 'BEM KM UNNES Ministry of Information and Communication',
    period: 'Feb 2026 — Present',
    location: 'Semarang',
    achievements: [
      'Contributed to technical and visual planning for the UNNES Digital Future (UDF) work program, aligning digital communication materials with technology-focused event objectives.',
      'Produced and managed 15+ digital branding assets published across official channels to ensure consistent visual standards.',
    ],
  },
  {
    id: 'exp-2',
    position: ' Pionir Muda Intern Staff',
    company: 'BEM KM UNNES Harmony Action Cabinet',
    period: 'Sep 2025 — Dec 2025',
    location: 'Semarang',
    achievements: [
      'BEM KM UNNES Internship: Learning the workflow of various ministries and contributing to the implementation of assigned tasks within the designated ministry.',
      'Asmalibrasi Project and Gathering: Designing visual assets for publications and serving as an on-site technical media operator and managing media documentation for over 90+ participants.',
    ],
  },
  {
    id: 'exp-3',
    position: ' Social Media & Digital Partnership Intern Staff',
    company: 'Rumah Dev',
    period: 'Jun 2023 — Oct 2023',
    location: 'Medan',
    achievements: [
      'Developed two interactive portfolio websites using custom HTML, CSS, JavaScript, and Bootstrap to enhance the digital visibility and accessibility of product profiles.',
      'Extracted, structured, and processed contact datasets for 200+ organizational partners, successfully partnered with over 60% of the targeted publication collaborations on the Ruang Mahasiswa platform.',
      'Streamlined daily content production by drafting 30+ briefs in coordination with cross-functional design and sponsorship teams.',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'TokoPOS: Full-Stack POS & Inventory Management System with RBAC and Audit Logging',
    category: 'Software Engineering',
    description:
      ['Engineered the frontend interface, inventory tracking, critical stock alerts, and interactive analytics dashboard.',
        'Designed a PostgreSQL relational database schema to define data relationships and integrity for backend integration.',
        'Designed a granular 5-tier Role-Based Access Control (RBAC) matrix and an automated Audit Trail logging system to secure administrative and transactional workflows.'
      ],
    techStack: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'Node.js', 'jsPDF', 'SweetAlert2'],
    challenges:
      'To develop an integrated store management system that improves operational efficiency, simplifies inventory and sales tracking, minimizes manual data management, and ensures more organized and reliable business operations.',
    githubUrl: 'https://github.com/gresiasitanggang/app_toko',
    imageSrc: '/src/assets/images/project_aplikasi_toko_gesys.png',
    duration: 'Oct 2026 - Prresent',
    associatedWith: 'Associated with Semarang State University',
  },
  {
    id: 'proj-2',
    title: 'End-to-End Machine Learning Image Classification Pipeline',
    category: 'Machine Learning',
    description:
      ['Built an automated image classification pipeline using the Intel Image Classification Dataset, covering data preprocessing, model training, hyperparameter tuning, and deployment, achieving over 80% classification accuracy.',
        'Implemented automated CI/CD model retraining workflows via GitHub, utilizing MLflow and ngrok for environment exposure.',
        'Configured real-time system and model performance monitoring dashboards using Prometheus and Grafana.'
      ],
    techStack: ['React', 'Python', 'TensorFlow', 'MLflow', 'GitHub Actions (CI/CD)', 'Docker', 'Prometheus', 'Grafana', 'ngrok',],
    challenges:
      'To address the challenge of manual model updates and lack of visibility in production ML systems by designing an automated, end-to-end MLOps pipeline. The project aims to streamline the entire ML lifecycle from data preprocessing and hyperparameter tuning to CI/CD-driven automated retraining and system monitoring',
    githubUrl: 'https://github.com/gresiasitanggang/dicoding_workflow-ci',
    imageSrc: '/src/assets/images/project_dicoding_cicd.png',
    duration: 'May - Jun 2026',
    associatedWith: 'Associated with Semarang State University & Dicoding Indonesia',
  },
  {
    id: 'proj-3',
    title: 'Face Mask Compliance Detection Using ResNet-50 Transfer Learning and CNN',
    category: 'Machine Learning',
    description:
      ['Conducted a comparative deep learning study on a dataset of 11,792 facial images using TensorFlow and Keras',
        'Developed and trained a custom CNN baseline model alongside a ResNet-50 transfer learning architecture.',
        'Evaluated and benchmarked model performance using model evaluation metrics, demonstrating that ResNet-50 achieved 99.60% test accuracy compared to 93.65% for the baseline CNN.'
      ],
    techStack: ['Python', 'TensorFlow', 'Keras', 'ResNet-50', 'Transfer Learning', 'CNN', 'ImageNet', 'Computer Vision', 'NumPy'],
    challenges:
      'This research aims to evaluate and establish a high-accuracy computer vision approach capable of automatically detecting face mask usage under varying lighting conditions and facial orientations. By benchmarking a custom CNN against a ResNet-50 transfer learning architecture, the study provides an empirical foundation for deploying reliable, AI-based automated safety monitoring systems.',
    githubUrl: 'https://drive.google.com/drive/folders/1qT4x1MwbRqIQR51d4BenqsmQht4dUfjJ?usp=sharing',
    imageSrc: '/src/assets/images/project_facemask_detection.png',
    duration: 'Mar - Jun 2026',
    associatedWith: 'Associated with Semarang State University',
  },
  {
    id: 'proj-4',
    title: 'Digital Illustration & Graphics',
    category: 'Digital Media',
    description:
      ['Illustrated and delivered 8 custom digital artworks commemorating national and religious holidays to maintain consistent visual standards and audience engagement on official social media channels',
        'Designed a cohesive suite of 11 custom physical merchandise items—comprising 2 pin badges, 3 keychains, and 6 stickers; for the UNNES Digital Future UDF event.'
      ],
    techStack: ['Canva', 'Figma', 'Ibis Paint X'],
    challenges:
      'This creative initiative aims to establish a cohesive visual identity and strengthen audience engagement across BEM KM UNNES official communication channels and tech events. By translating institutional campaigns and event themes into structured visual assets and physical merchandise, the project bridges digital branding with tangible community outreach.',
    githubUrl: 'https://drive.google.com/drive/folders/1K5V65gP_rmBVTCTAcAVckInP2kSEsVTX',
    imageSrc: '/src/assets/images/project_bem.png',
    duration: 'Feb 2026 - Present',
    associatedWith: 'Associated with Semarang State University & BEM KM UNNES 2026',
  },
  {
    id: 'proj-5',
    title: 'Website Portofolio',
    category: 'Software Engineering',
    description:
      ['Engineered a responsive single-page personal portfolio website featuring a custom dark UI, animated mesh gradients, and interactive navigation.',
        'Structured modular and components to showcase academic milestones, organizational and internship experiences, categorized project, certifications, and an interactive photo gallery.'
      ],
    techStack: ['React','TypeScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'UI/UX Design'],
    challenges:
      'To establish a cohesive personal brand and centralize academic, technical, and documentation into an accessible digital showcase. This portfolio serves as a professional credential to support applications for opportunities in software engineering, machine learning, and digital media.',
    githubUrl: 'https://github.com/gresiasitanggang/portofolio_gresia',
    imageSrc: '/src/assets/images/project_website _portofolio.png',
    duration: 'Oct 2026 - Present',
    associatedWith: 'Associated with Semarang State University',
  },
  {
    id: 'proj-6',
    title: 'Social Media & Content Strategy',
    category: 'Digital Media',
    description:
      ['Managed end-to-end social media content workflows—conducting topic research, copywriting, scheduling, and publishing—in alignment with divisional editorial calendars and weekly engagement targets.',
        'Produced multi-format visual assets, promotional graphics, and short-form video edits based on approved creative briefs, supplemented by curated photography and graphic design works from vocational software engineering coursework.',
        'Coordinated external outreach and publication partnerships for 200+ organizational partners on the Ruang Mahasiswa platform, achieving over 60% collaboration conversion while streamlining cross-functional workflows with design teams.'
      ],
    techStack: ['Canva', 'Trello', 'Microsoft Excel', 'Google Docs', 'CapCut', 'Instagram'],
    challenges:
      'Focuses on executing structured, data-informed social media campaigns and visual communications to expand brand visibility and external partnership reach. Combining audience research, editorial scheduling, and multi-format visual design, it demonstrates digital media workflow from content ideation to publication and cross-team collaboration.',
    githubUrl: 'https://drive.google.com/drive/folders/1j9aOo6uJ3rMaTxvhvs7roxByKz-MYTxN?usp=sharing',
    imageSrc: '/src/assets/images/project_rumah_dev.png',
    duration: 'Jun - Oct 2023',
    associatedWith: 'Associated with Rumah Dev & Bintang Timur Vocational High School',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Memulai Pemrograman Dengan Java',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['Java'],
  },
  {
    id: 'cert-2',
    title: 'Belajar Strategi Pengembangan Diri',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['Personal Development', 'Self-Management'],
  },
  {
    id: 'cert-3',
    title: 'Belajar Fundamental Pemrosesan Data',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['ETL (Extract, Transform, Load)', 'Python', 'ETL Testiing'],
  },
  {
    id: 'cert-4',
    title: 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['Microsoft Azure', 'Gen AI', 'AI'],
  },
  {
    id: 'cert-5',
    title: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['Data Science', 'Microsoft Fabric'],
  },
  {
    id: 'cert-6',
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['AWS (Amazon Web Services)', 'AI', 'Cloud Computing', 'Databases'],
  },
  {
    id: 'cert-7',
    title: 'Spec-Driven Development dengan Kiro',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['Web Development', 'Software Development', 'AI', 'Kiro AI'],
  },
  {
    id: 'cert-8',
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['AI', 'RL (Reinforcement Learning)', 'DL (Deep Learning)', 'ML (Machine Learning)'],
  },
  {
    id: 'cert-9',
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['Python'],
  },
  {
    id: 'cert-10',
    title: 'Belajar Machine Learning untuk Pemula',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['Data Classification', 'RL', 'Text Classification', 'DL', 'ML'],
  },
  {
    id: 'cert-11',
    title: 'Belajar Fundamental Deep Learning',
    issuer: 'Dicoding Indonesia',
    issueDate: '2026',
    skills: ['Data Classification', 'RL', 'Text Classification'],
  },
  {
    id: 'cert-12',
    title: 'Python Program From UST',
    issuer: 'Coursera Project Network',
    issueDate: '2025',
    skills: ['Project Management', 'Python'],
  },
  {
    id: 'cert-13',
    title: 'Applied Microsoft Office',
    issuer: 'Trusted Certified Skills Academy',
    issueDate: '2025',
    skills: ['Microsoft Office'],
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { id: 'sk-1', name: 'Python', level: 'Advanced', colorTheme: 'cobalt' },
  { id: 'sk-2', name: 'TypeScript & JavaScript', level: 'Advanced', colorTheme: 'cobalt' },
  { id: 'sk-3', name: 'SQL', level: 'Skilled', colorTheme: 'plum' },
  { id: 'sk-4', name: 'PHP', level: 'Skilled', colorTheme: 'plum' },
  { id: 'sk-5', name: 'C++', level: 'Intermediate', colorTheme: 'emerald' },
  { id: 'sk-6', name: 'React & Node.js', level: 'Intermediate', colorTheme: 'emerald' },
  { id: 'sk-7', name: 'HTML5, CSS3, Bootstrap', level: 'Advanced', colorTheme: 'cobalt' },
  { id: 'sk-8', name: 'PostgreSQL', level: 'Skilled', colorTheme: 'plum' },
  { id: 'sk-9', name: 'MySQL', level: 'Intermediate', colorTheme: 'emerald' },
  { id: 'sk-10', name: 'TensorFlow & Keras', level: 'Skilled', colorTheme: 'plum' },
  { id: 'sk-11', name: 'Computer Vision', level: 'Skilled', colorTheme: 'plum' },
  { id: 'sk-12', name: 'Data Processing & ETL', level: 'Intermediate', colorTheme: 'emerald' },
  { id: 'sk-13', name: 'AWS', level: 'Skilled', colorTheme: 'plum' },
  { id: 'sk-14', name: 'Git & GitHub', level: 'Advanced', colorTheme: 'cobalt' },
  { id: 'sk-15', name: 'Figma', level: 'Advanced', colorTheme: 'cobalt' },
  { id: 'sk-16', name: 'Microsoft Office', level: 'Advanced', colorTheme: 'cobalt' },
  { id: 'sk-17', name: 'VS Code & Kiro AI', level: 'Advanced', colorTheme: 'cobalt' },
  { id: 'sk-18', name: 'MLflow, Prometheus, Grafana', level: 'Skilled', colorTheme: 'plum' },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Asmalibrasi Event - Media & Publication Staff',
    date: 'Dec 2025',
    imageSrc: '/src/assets/images/gal_asmalibrasi staff.jpg',
    gradient: 'from-blue-900 to-indigo-950',
  },
  {
    id: 'gal-2',
    title: 'Pionir Muda Gathering - Media Staff',
    date: 'Oct 2025',
    imageSrc: '/src/assets/images/gal_pionir gathering.jpg',
    gradient: 'from-amber-900 to-stone-900',
  },
  {
    id: 'gal-3',
    title: 'BEM KM UNNES 2026 Functionaries',
    date: 'Apr 2026',
    imageSrc: '/src/assets/images/gal_bemkm26.jpg',
    gradient: 'from-teal-900 via-emerald-950 to-slate-950',
  },
  {
    id: 'gal-4',
    title: 'Internship at RumahDev',
    date: 'Aug 2023',
    imageSrc: '/src/assets/images/gal_internshiprumahdev.jpg',
    gradient: 'from-emerald-900 via-teal-950 to-slate-950',
  },
  {
    id: 'gal-5',
    title: 'Google Extended I/O Seminar Participant',
    date: 'Aug 2023',
    imageSrc: '/src/assets/images/gal_googleextendmedan.jpg',
    gradient: 'from-blue-900 via-cyan-950 to-slate-950',
  },
  {
    id: 'gal-6',
    title: 'Skill Competency Award - Vocational High School',
    date: 'Feb 2024',
    imageSrc: '/src/assets/images/gal_juaraukk.jpg',
    gradient: 'from-cyan-900 via-blue-950 to-slate-950',
  },
  {
    id: 'gal-7',
    title: 'Asmalibrasi - Committee Grand Meeting',
    date: 'Dec 2025',
    imageSrc: '/src/assets/images/gal_rabesasmalibrasi.jpg',
    gradient: 'from-emerald-900 via-slate-900 to-black',
  },
  {
    id: 'gal-8',
    title: 'Ministry of Religious Affairs Program',
    date: 'Nov 2025',
    imageSrc: '/src/assets/images/gal_programkak.jpg',
    gradient: 'from-teal-900 via-slate-900 to-black',
  },
  {
    id: 'gal-9',
    title: 'BEM KM UNNES Kominfo - First Gathering',
    date: 'Mar 2026',
    imageSrc: '/src/assets/images/gal_kominfo.jpg',
    gradient: 'from-indigo-900 via-sky-950 to-slate-950',
  },
  {
    id: 'gal-10',
    title: 'D-Day - UNNES Digital Future Event Committee',
    date: 'Sep 2026',
    imageSrc: '/src/assets/images/gal_panitiaudf.jpeg',
    gradient: 'from-blue-950 via-teal-950 to-slate-950',
  },
  {
    id: 'gal-1',
    title: 'UDF Creative Media Division’s - Organizational Chart',
    date: 'Oct 2026',
    imageSrc: '/src/assets/images/gal_organigramudf.png',
    gradient: 'from-blue-950 via-teal-950 to-slate-950',
  }
];
