// Static profile content for the portfolio.

export const profile = {
  name: 'Kriza Ann Estanislao',
  role: 'Professional Content Editor',
  tagline: 'Precision • Clarity • Excellence',
  eyebrow: 'Licensed Professional Teacher · Content Editor',
  description:
    'Specializing in legal documents, manuscripts, and comprehensive content refinement. Delivering meticulous editing services with a focus on accuracy and readability.',
  trustedWith: ["Halsbury's Laws of Australia", 'Pacific Law Reports'],
  email: 'izaestanislao@gmail.com',
  linkedin: 'https://linkedin.com/in/kriza-ann-estanislao-lpt-1708b3284',
}

export const stats = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 'LPT', suffix: '', label: 'Licensed Teacher' },
  { value: 3, suffix: 'x', label: 'Top Performer' },
] as const

export const about = [
  "I'm a motivated and detail-oriented Licensed Professional Teacher with a diverse background in education, instructional design, digital content editing, and virtual assistance. Known for consistently exceeding performance goals and demonstrating leadership in training and coordination roles.",
  "With expertise in refining manuscripts, legal documents, and educational content, I have worked extensively with Halsbury's Laws of Australia and Pacific Law Reports. I'm highly organized, adaptable, and capable of managing multiple priorities in fast-paced environments.",
]

export type IconName =
  | 'briefcase'
  | 'edit'
  | 'teacher'
  | 'graduation'
  | 'school'
  | 'certificate'
  | 'project'
  | 'robot'
  | 'trophy'
  | 'gavel'
  | 'file'
  | 'scale'
  | 'tasks'
  | 'brush'
  | 'users'

export interface Experience {
  title: string
  company: string
  date: string
  description?: string
  bullets?: string[]
  achievements: string[]
  icon: IconName
}

export const experience: Experience[] = [
  {
    title: 'Practice Test Content Editor, ELA & Education',
    company: 'Study.com',
    date: 'December 2025 – Present',
    bullets: [
      'Edit and review practice test content for English Language Arts (ELA) and Education subject areas, ensuring accuracy, clarity and alignment with academic standards.',
      'Collaborate with content teams to refine question quality, improve answer explanations and maintain editorial consistency across test materials.',
      'Apply expertise in curriculum development and instructional design to enhance the educational value of practice assessments.',
    ],
    achievements: ['ELA & Education', 'Assessment Editing', 'Editorial Consistency'],
    icon: 'tasks',
  },
  {
    title: 'Digital Content Editing Coordinator II',
    company: 'Reed Elsevier Philippines',
    date: 'July 2024 – September 2024',
    description:
      'Advanced role in digital content editing coordination, managing complex editorial projects and ensuring high-quality content delivery for legal publications.',
    achievements: ['Leadership', 'Project Management', 'Quality Assurance'],
    icon: 'briefcase',
  },
  {
    title: 'Digital Content Editing Coordinator I',
    company: 'Reed Elsevier Philippines',
    date: 'June 2021 – 2024',
    description:
      "Specialized in digital content editing for legal publications including Halsbury's Laws of Australia and Pacific Law Reports. Managed editorial workflows and ensured compliance with legal formatting standards.",
    achievements: ['Legal Editing', 'Consistent Top Performer', 'Process Improvement'],
    icon: 'edit',
  },
  {
    title: 'College Instructor',
    company: 'Bestlink College of the Philippines',
    date: 'September 2020 – June 2021',
    description:
      'Taught college-level courses, developing curriculum and delivering engaging educational content to prepare students for professional careers.',
    achievements: ['Curriculum Development', 'Student Mentoring', 'Educational Leadership'],
    icon: 'teacher',
  },
  {
    title: 'Instructional Designer / Developer',
    company: 'Ascendens Asia / Bestlink College of the Philippines',
    date: 'March 2020 – June 2021',
    description:
      'Designed and developed instructional materials and modular learning content for the College of Teacher Education. Authored complete learning packages for EM6 and EM10, each with 18 fully developed modules, learning outcomes, assessments, and answer keys.',
    achievements: ['Instructional Design', 'Module Development', 'Assessment Design'],
    icon: 'graduation',
  },
  {
    title: 'Senior High School Teacher',
    company: 'Bestlink College of the Philippines',
    date: 'March 2017 – March 2020',
    description:
      'Delivered high-quality education to senior high school students, developing innovative teaching methods and creating engaging learning experiences.',
    achievements: ['Teaching Excellence', 'Student Engagement', 'Innovation'],
    icon: 'school',
  },
]

export interface Certification {
  title: string
  issuer: string
  date: string
  details: string
  icon: IconName
}

export const certifications: Certification[] = [
  {
    title: 'Licensed Professional Teacher',
    issuer: 'Professional Regulation Commission',
    date: 'September 2019',
    details: 'PRC License No.: 1814084',
    icon: 'certificate',
  },
  {
    title: 'Certified Agile Associate',
    issuer: 'Capstone Project',
    date: 'July 2023',
    details: 'Agile Project Management Certification',
    icon: 'project',
  },
  {
    title: 'Artificial Intelligence Primer Course',
    issuer: 'Professional Development',
    date: 'December 2023',
    details: 'AI Fundamentals and Applications',
    icon: 'robot',
  },
  {
    title: 'Consistent Top Performer',
    issuer: 'Reed Elsevier Philippines',
    date: '2023 – 2024',
    details: 'June 2023, Q4 2023, Q1 2024',
    icon: 'trophy',
  },
  {
    title: 'Assistant Trainer',
    issuer: 'Analytical Commentaries Team',
    date: '2023 – 2024',
    details: 'Training and Development Leadership',
    icon: 'teacher',
  },
]

export interface LegalProject {
  title: string
  subtitle: string
  description: string
  tags: string[]
  icon: IconName
}

export const legalProjects: LegalProject[] = [
  {
    title: 'Legal Documentation Editing',
    subtitle: 'Comprehensive legal text editing and refinement',
    description:
      'Specialized in refining legal terminology, improving clarity and ensuring compliance with legal formatting standards for comprehensive legal publications and documentation.',
    tags: ['Legal Documentation', 'Terminology', 'Compliance'],
    icon: 'gavel',
  },
  {
    title: 'Legal Case Report Editing',
    subtitle: 'Case summaries and court judgment editing',
    description:
      'Focused on summarizing case details accurately and ensuring readability for legal case reports and judicial documentation.',
    tags: ['Case Summaries', 'Court Judgments', 'Readability'],
    icon: 'file',
  },
]

export interface SkillCategory {
  title: string
  icon: IconName
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    title: 'Digital Content Editing',
    icon: 'edit',
    items: ['Ed Central Java Editing', 'XWeb & Arbortext Editing', 'Adobe Acrobat PDF Editing', 'XML and HTML Proficiency'],
  },
  {
    title: 'Legal Documentation',
    icon: 'scale',
    items: ["Halsbury's Laws of Australia", 'Pacific Law Reports', 'Legal terminology & compliance', 'Case summaries & judgments'],
  },
  {
    title: 'Instructional Design',
    icon: 'graduation',
    items: ['e-Learning & LMS development', 'Physical module creation', 'Curriculum development', 'Assessment design'],
  },
  {
    title: 'Project Management',
    icon: 'tasks',
    items: ['Agile Project Management', 'Task & time management', 'Data entry coordination', 'Microsoft Office Suite'],
  },
  {
    title: 'Design & Layout',
    icon: 'brush',
    items: ['Adobe InDesign', 'Layout design & formatting', 'Print & digital publications', 'Content writing & editing'],
  },
  {
    title: 'Leadership & Training',
    icon: 'users',
    items: ['Assistant trainer', 'Team coordination', 'Communication skills', 'Organizational excellence'],
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]
