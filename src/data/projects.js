export const projects = [
  {
    id: 1,
    name: 'ElevateHub',
    subtitle: 'Collaborative E-learning Platform',
    description:
      'A full-stack collaborative learning platform built to connect mentors and learners through discussions, resources, real-time chat, video calling, and structured learning interactions.',
    features: [
      'JWT-based authentication and protected user flows',
      'Discussion and resource-sharing systems',
      'Real-time chat using WebSockets and Django Channels',
      'Video calling flow using WebRTC',
      'Mentor-student interaction features',
      'Backend architecture with Django REST Framework, Redis, PostgreSQL, AWS EC2, and AWS RDS',
    ],
    learned:
      'This project helped me understand how full-stack applications are structured beyond simple CRUD: real-time communication, state management, API design, deployment, and handling multiple user roles.',
    stack: ['Django', 'Django REST Framework', 'React', 'Redux', 'PostgreSQL', 'Redis', 'Django Channels', 'JWT Auth', 'WebSockets', 'WebRTC', 'AWS EC2', 'AWS RDS', 'Vercel'],
    github: 'https://github.com/mijwad7/elevateHub',
    demo: null,
    color: 'cyan',
    image: '/projects/elevatehub.png',
    featured: true,
  },
  {
    id: 2,
    name: 'SkillSage',
    subtitle: 'AI-Powered Skill Verification Platform',
    description:
      'An AI-assisted platform that evaluates candidate skills through adaptive technical interviews, resume analysis, scoring workflows, and personalized learning roadmaps.',
    features: [
      'Resume parsing and skill extraction workflows',
      'Dynamic interview question generation',
      'Semantic answer evaluation using Gemini AI',
      'Role-readiness scoring logic',
      'Recruiter-facing reports',
      'Voice-based interview support',
      'Backend APIs for interview and evaluation flows',
    ],
    learned:
      'This project helped me understand how AI can be used inside real product workflows, not just as a chatbot. I learned how to connect AI outputs with backend logic, scoring, reports, and user-facing features.',
    stack: ['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Gemini AI', 'REST APIs', 'Railway'],
    github: 'https://github.com/mijwad7/skill-sage',
    demo: 'https://www.loom.com/share/75beabb75d5e440a8177e88fcf3d7ff4',
    color: 'violet',
    image: '/projects/skillsage.png',
    featured: true,
  },
  {
    id: 3,
    name: 'ShopHive',
    subtitle: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with product management, authentication, order workflows, Google OAuth, and responsive user interfaces.',
    features: [
      'Product listing and management flows',
      'Authentication and Google OAuth',
      'Order management workflows',
      'PostgreSQL-backed data models',
      'Responsive frontend pages',
      'Deployment using AWS EC2 and AWS RDS',
    ],
    learned:
      'This project helped me understand common business application patterns: users, products, orders, authentication, database relationships, and deployment.',
    stack: ['Django', 'PostgreSQL', 'Bootstrap', 'jQuery', 'OAuth', 'AWS EC2', 'AWS RDS'],
    github: 'https://github.com/mijwad7/ecommerce_project',
    demo: null,
    color: 'emerald',
    image: '/projects/shophive.png',
    featured: true,
  },
];
