export const skillGroups = [
  {
    id: 'backend',
    label: 'Backend',
    color: 'cyan',
    skills: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'REST APIs', 'JWT Authentication', 'WebSockets'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'blue',
    skills: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    id: 'databases',
    label: 'Databases & Caching',
    color: 'violet',
    skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis'],
  },
  {
    id: 'cloud',
    label: 'Cloud & Deployment',
    color: 'emerald',
    skills: ['AWS EC2', 'AWS RDS', 'NGINX', 'Gunicorn', 'Vercel', 'Railway'],
  },
  {
    id: 'apis',
    label: 'APIs & Integrations',
    color: 'amber',
    skills: ['GoHighLevel API', 'Jobber API', 'REST API Development', 'Third-party API Integration', 'Webhooks', 'Postman', 'Google Sheets Integration'],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    color: 'violet',
    skills: ['OpenAI Integrations', 'Gemini AI', 'OCR Workflows', 'Handwriting Detection', 'AI-Assisted Validation', 'Workflow Automation'],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: 'blue',
    skills: ['Git', 'GitHub', 'Figma', 'Lovable'],
  },
  {
    id: 'concepts',
    label: 'Core Concepts',
    color: 'cyan',
    skills: ['Authentication', 'Authorization', 'Database Design', 'ORM', 'MVC/MVT Architecture', 'Responsive Design', 'Debugging', 'Race Condition Handling', 'API Design', 'Real-Time Synchronization'],
  },
];

export const skillPaths = [
  {
    id: 1,
    nodes: ['Django', 'DRF', 'APIs', 'Auth', 'PostgreSQL', 'Deployment'],
    color: 'cyan',
    label: 'Backend Path',
  },
  {
    id: 2,
    nodes: ['React', 'Redux', 'UI', 'API Integration'],
    color: 'blue',
    label: 'Frontend Path',
  },
  {
    id: 3,
    nodes: ['WebSockets', 'Django Channels', 'Redis', 'Real-time'],
    color: 'violet',
    label: 'Real-time Path',
  },
  {
    id: 4,
    nodes: ['GHL API', 'Webhooks', 'Automation', 'CRM Workflows'],
    color: 'amber',
    label: 'CRM Automation Path',
  },
  {
    id: 5,
    nodes: ['AI', 'OCR', 'Validation', 'Reports'],
    color: 'emerald',
    label: 'AI Integration Path',
  },
  {
    id: 6,
    nodes: ['Booking Logic', 'Availability', 'Race Conditions', 'Refactoring'],
    color: 'blue',
    label: 'Booking Systems Path',
  },
];
