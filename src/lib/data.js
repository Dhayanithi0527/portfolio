
export const projects = [
  {
    id: 1,
    title: "Resume Builder Application",
    description:
      "Engineered backend APIs for HTML-to-PDF conversion using Node.js, enabling 5,000+ users to generate resumes seamlessly. Includes a comprehensive admin panel for template management.",
    image: "/images/resume-builder.webp",
    tags: ["Node.js", "MySQL", "HTML-to-PDF", "Admin Panel", "React.js", "Bootstrap"],

    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.skyraan.resumebuilder",
      appstore: null,
      repo: null
    }
  },

  {
    id: 2,
    title: "Mehndi Application",
    description:
      "Developed scalable Node.js/Express APIs handling 500+ concurrent user requests with performance optimization. Features a comprehensive admin panel for content management.",
    image: "/images/mehndi.png",
    tags: ["Node.js", "Express.js", "MySQL", "React.js", "Bootstrap", "AWS S3"],

    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.skyraan.mehndidesign",
      appstore: "https://apps.apple.com/in/app/mehndi-designs-2025/id6742871292",
      repo: null
    }
  },

  {
    id: 3,
    title: "Law Application",
    description:
      "High-performance Node.js/Express APIs handling authenticated (JWT) and guest users. Includes secure session management and an admin panel for activity/content monitoring.",
    image: "/images/law-app.jpg",
    tags: ["Node.js", "Express.js", "MySQL", "JWT", "Security", "React.js", "Bootstrap"],

    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.skyraan.law.ipc",
      appstore: "https://apps.apple.com/in/app/law-ipc-cpc/id6744746746",
      repo: null
    }
  },

  {
    id: 4,
     title: "Eduraan Application",
    description:"Built a secure backend API for an educational platform with JWT authentication, role-based access control for UI customization, and a dynamic admin dashboard for managing courses and resources.",
    image: "/images/eduraan.jpg",
    tags: ["Node.js", "MySQL", "JWT", "RESTful APIs", "React.js", "Bootstrap"],

    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.skyraan.eduraan",
      appstore: "https://apps.apple.com/in/app/eduraan/id6740686862",
      repo: null
    }
    
  },

  {
    id: 5,
    title: "Queue Management System",
    description:
      "Desktop-based QMS using Electron.js with React/Node/MySQL. Features real-time SSE notifications for queue updates, task management, and visual performance reports.",
    image: "/images/qms1.png",
    tags: ["Electron.js", "React.js", "Node.js", "MySQL", "SSE", "Bootstrap"],

    links: {
      playstore: null,
      appstore: null,
      repo: null
    }
  },

  {
    id: 6,
    title: "Biometric System (Prototype)",
    description:
      "Cross-platform desktop app for facial recognition authentication. Built with Electron.js/React frontend and Node.js/Express backend for secure logging and data management.",
    image: "/images/biometric.png",
    tags: ["Electron.js", "React.js", "Face Recognition", "Node.js"],

    links: {
      playstore: null,
      appstore: null,
      repo: null
    }
  }
];

export const skills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "React.js", "Electron.js",
  "Node.js", "Express.js", "RESTful APIs", "SSE", "JWT Authentication",
  "MySQL", "MongoDB", "AWS S3", "Git", "SEO", "Responsive Design"
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/dhayanithi-m-28895b1b9/",
  email: "mailto:dhayanithi0527@gmail.com",
  resume: "./Dhayanithi-resume.pdf" // Placeholder path
};

export const personalInfo = {
  name: "Dhayanithi M",
  role: "Full Stack Developer",
  headline: "Full Stack Developer building scalable web & desktop applications",
  tagline: "I build end-to-end applications using React, Node.js, and Electron, focusing on scalable APIs and modern user interfaces.",
  location: "Coimbatore, India",
  email: "dhayanithi0527@gmail.com",
  phone: "9715647510",
  profileImage: '',
  bio: [
    "Full Stack Developer with 2 years of hands-on experience building web and desktop applications using React, Node.js, and Electron.",
    "I develop scalable RESTful APIs, real-time features, and modern admin dashboards while implementing secure authentication systems with JWT and role-based access control."
  ]
};
