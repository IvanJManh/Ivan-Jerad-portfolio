export const portfolioContent = {
  hero: {
    headline: "Ivan Jerad Manamperi",
    subheadline: "Product Builder & Problem Solver",
    intro: "I build products from concept to deployment—planning user experiences, designing interfaces, developing solutions, and validating usability at every step.",
    ctaButtons: [
      { label: "View Projects", href: "#projects" },
      { label: "Download CV", href: "/cv.pdf" }
    ]
  },

  about: {
    title: "About Me",
    content: `I'm a Computer Science undergraduate at the University of Westminster and IIT Sri Lanka, passionate about building products that work for real people. My approach combines strategic planning, user-centered design, and clean development—treating each project as an end-to-end journey from requirements to deployment. I've led cross-functional teams, conducted usability research, and contributed to multiple full-cycle products. Whether planning feature sets, designing interactions in Figma, building responsive frontends, or testing edge cases, I focus on understanding the problem first, then solving it thoroughly. I thrive in collaborative environments where great ideas become great products.`
  },

  skillsAndTech: {
    groups: [
      {
        title: "Product & Workflow",
        skills: ["Agile methodology", "User stories & backlog prioritization", "Stakeholder analysis", "Feature planning", "Requirements gathering", "ClickUp project management"]
      },
      {
        title: "Quality & Usability",
        skills: ["Usability testing", "HCI principles", "Edge case identification", "Feedback loops", "User validation", "Iterative refinement"]
      },
      {
        title: "Development & Integration",
        skills: ["JavaScript fundamentals", "REST APIs", "Firebase integration", "SQL databases", "Git version control", "Vercel deployment"]
      },
      {
        title: "Frontend & Interfaces",
        skills: ["HTML5 & CSS3", "React.js", "Responsive design", "UI component building", "Cross-browser testing"]
      },
      {
        title: "Design & Prototyping",
        skills: ["Figma design & prototyping", "Wireframing", "User flows", "Visual hierarchy", "High-fidelity mockups", "Canva graphics"]
      }
    ],
    frontendStack: ["HTML5", "CSS3", "JavaScript", "React.js"],
    tools: ["Figma", "Git", "VS Code", "Vercel", "Firebase", "ClickUp"],
    softSkills: ["Teamwork", "Leadership", "Problem-solving", "Communication", "Stakeholder management"]
  },

  projects: [
    {
      title: "Micro Skill Builder App",
      category: "AI-Powered Communications Coach",
      description: `I led the requirement gathering and user flow definition for this AI-powered communications coaching application. I collaboratively planned the AI feedback feature architecture while conducting usability testing to validate the user experience. Using ClickUp for agile coordination, I ensured alignment between the product vision and technical implementation, testing edge cases in the feedback logic to ensure accuracy and usability.`,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      liveUrl: "https://https://skillo.it.com",
      githubUrl: "https://github.com/IvanJManh/skillo-web..git"
    },
    {
      title: "Ceylon Gate Travels",
      category: "Luxury Travel Platform",
      description: `I designed the platform's UI/UX in Figma, creating user flows for the booking journey and itinerary management modules. I built responsive frontend components in React and HTML/CSS, integrating REST APIs to power real-time availability and pricing. I conducted usability testing on the itinerary interface to refine the user experience and validated the platform across devices before deployment.`,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      liveUrl: "https://luxury-travel-website.vercel.app/",
      githubUrl: "https://github.com/IvanJManh/luxury-travel-website..git"
    },
    {
      title: "Solar Web App",
      category: "Energy Monitoring Dashboard",
      description: `I created detailed user flows and a high-fidelity prototype in Figma, applying HCI principles to ensure clarity in data visualization. I worked closely with developers to translate the design into a functional dashboard, testing the interface for usability and accessibility. I validated that the dashboard effectively communicated energy metrics while maintaining visual hierarchy and user guidance.`,
      image: "https://images.unsplash.com/photo-1563770660-2a53f5d1e965?w=500&h=300&fit=crop",
      liveUrl: "https://solar-dashboard.app",
      githubUrl: "https://github.com/IvanJManh/solar-web-app"
    },
    {
      title: "Gem Luster E-Commerce App",
      category: "Gem Vendor Platform",
      description: `I conducted stakeholder analysis and created comprehensive wireframes and user flows to map the vendor and customer journeys. I developed high-fidelity prototypes in Figma following incremental SDLC principles, testing prototypes with stakeholders to gather feedback. I planned feature prioritization, coordinated across teams using ClickUp, and ensured the final design balanced vendor needs with customer usability.`,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=300&fit=crop",
      liveUrl: "https://gemluster-ecommerce.com",
      githubUrl: "https://github.com/IvanJManh/gem-luster-app"
    }
  ],

  howIWork: [
    {
      step: 1,
      title: "Understand & Plan",
      description: "I dive deep into the problem space through stakeholder interviews, user research, and requirement mapping. I create user flows, define success metrics, and align the team on priorities."
    },
    {
      step: 2,
      title: "Design & Validate",
      description: "I translate insights into wireframes and high-fidelity prototypes in Figma. I conduct usability testing with real users to validate assumptions and iterate based on feedback."
    },
    {
      step: 3,
      title: "Build & Integrate",
      description: "I develop responsive frontends with React and integrate backend APIs. I focus on clean code, performance, and accessibility—ensuring the product works as designed."
    },
    {
      step: 4,
      title: "Test & Refine",
      description: "I identify edge cases, validate cross-browser compatibility, and gather user feedback. I prioritize improvements and ship incremental updates that compound into excellence."
    }
  ],

  contact: {
    title: "Let's Build Something Great",
    intro: "Whether you need end-to-end product help—from planning to design to development to testing—I'd love to explore how we can work together.",
    email: "ivanjerald00@gmail.com",
    phone: "+94 740 779 470",
    linkedin: "ivan-manamperi",
    github: "IvanJManh",
    formFields: [
      { name: "name", label: "Your Name", type: "text", required: true },
      { name: "email", label: "Your Email", type: "email", required: true },
      { name: "message", label: "Your Message", type: "textarea", required: true }
    ]
  },

  footer: {
    copyright: "© 2024 Ivan Jerad Manamperi. All rights reserved.",
    tagline: "Crafted with passion and built to last.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ]
  }
};
