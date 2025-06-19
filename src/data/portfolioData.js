export const portfolioData = [
  {
    id: 1,
    title: "American Flooring Services",
    image: "images/afsmain.webp",
    description: "Flooring contractor website with full CMS integration.",
    technologies: ["React", "TypeScript", "Sanity CMS", "Email", "SEO", "Netlify", "Custom Website", "Custom Form PDF"],
    details: "Custom website with full email, SEO and CMS integration featuring dynamic content management, automated subcontractor form generation, and comprehensive service showcases. Built with modern React architecture and optimized for search engines to drive customer acquisition.",
    gallery: [
      {
        src: "/images/afs-landing.png",
        alt: "American Flooring Services Landing Page"
      },
      {
        src: "/images/afs-1.png",
        alt: "Brand Partners Section"
      },
      {
        src: "/images/afs-3.png",
        alt: "Dynamic State Map"
      },
      {
        src: "/images/afs-4.png",
        alt: "iPad Responsive Design"
      },
      {
        src: "/images/afs-5.png",
        alt: "Contact Form"
      },
      {
        src: "/images/afs-6.png",
        alt: "Mobile Responsive Landing Page"
      },
      {
        src: "/images/afs-7.png",
        alt: "Responsive Product Showcase"
      }
    ],
    caseStudy: {
      challenge: "American Flooring Services needed a modern web presence to compete in the digital marketplace. Their existing website was outdated, lacked mobile responsiveness, and didn't effectively showcase their extensive portfolio of flooring services.",
      solution: "Developed a comprehensive React-based website with Sanity CMS integration, enabling the client to easily update content, showcase projects, and manage customer inquiries. Implemented custom PDF generation for subcontractors and integrated email automation for lead nurturing.",
      outcome: "Achieved 150% increase in organic traffic within 6 months, 85% improvement in mobile user engagement, and 40% increase in quote requests through the custom form system.",
      keyFeatures: [
        "Dynamic content management with Sanity CMS",
        "Automated PDF form generation",
        "SEO optimization with meta tags and structured data",
        "Mobile-first responsive design",
        "Email integration for lead capture"
      ]
    },
    links: {
      live: 'https://www.americanflooringservices.com',
      github: null,
    }
  },
  {
    id: 2,
    title: "Battle & Brew",
    image: "images/battleandbrew.jpg",
    description: "Custom Squarespace website for a gaming themed bar and restaurant.",
    technologies: ["Squarespace", "Custom CSS", "JavaScript", "Event Management"],
    details: "Designed and developed a vibrant website for Battle & Brew, Atlanta's premier gaming bar and restaurant. Created custom event management system, integrated reservation and 3D view functionality, and implemented responsive design for optimal mobile experience.",
    gallery: [
      {
        src: "/images/bb-landing.png",
        alt: "Battle & Brew Homepage Design"
      },
      {
        src: "/images/bb-1.png",
        alt: "Custom CTA"
      },
      {
        src: "/images/bb-2.png",
        alt: "Event Calendar"
      },
      {
        src: "/images/bb-3.png",
        alt: "Merchandise Showcase"
      },
      {
        src: "/images/bb-4.png",
        alt: "Gaming Showcase"
      },
      {
        src: "/images/bb-5.png",
        alt: "Mobile Responsive Design"
      }
    ],
    caseStudy: {
      challenge: "Battle & Brew needed a website that captured their unique gaming culture while providing essential restaurant functionality like menu display, event management, and reservation systems.",
      solution: "Built a custom Squarespace solution with extensive CSS and JavaScript customizations to create an immersive gaming-themed experience while maintaining professional restaurant standards.",
      outcome: "Increased online event bookings by 200%, improved customer engagement with interactive elements, and established a strong digital presence in Atlanta's competitive entertainment market.",
      keyFeatures: [
        "Custom gaming-themed design with animated elements",
        "Event management and booking system",
        "Interactive menu with filtering capabilities",
        "Social media integration for community building",
        "Mobile-optimized gaming event calendar"
      ]
    },
    links: {
      live: 'https://www.battleandbrew.com',
      github: null,
    }
  },
  {
    id: 3,
    title: "Neumorphism Design Library",
    image: "images/pillow.webp",
    description: "A react component library inspired by neumorphism. Use over 10 reusable components that can be customized to fit any sites color theme.",
    technologies: ["React", "TypeScript", "Storybook", "NPM Package", "Design Library"],
    details: "Created a comprehensive React component library featuring neumorphic design principles. Published to npm with extensive documentation, TypeScript support, and customizable theming system for seamless integration into any project.",
    gallery: [
      {
        src: "/images/pillow-landing.png",
        alt: "Pillow UI Component Library Homepage"
      },
      {
        src: "/images/pillow-1.png",
        alt: "Installation Instructions"
      },
      {
        src: "/images/pillow-3.png",
        alt: "Component Showcase"
      },
      {
        src: "/images/pillow-4.png",
        alt: "Button Component Details"
      },
      {
        src: "/images/pillow-5.png",
        alt: "Custom Color Button Component"
      },
      {
        src: "/images/pillow-6.png",
        alt: "Mobile Responsive Design"
      },
      {
        src: "/images/pillow-7.png",
        alt: "Mobile Recent Additions Section"
      },
      {
        src: "/images/pillow-8.png",
        alt: "Mobile Navigation"
      }
    ],
    caseStudy: {
      challenge: "Neumorphism was gaining popularity but lacked standardized, accessible components. Developers needed ready-to-use components that maintained the aesthetic while ensuring usability and accessibility.",
      solution: "Developed a complete component library with over 10 customizable components, comprehensive documentation, and TypeScript definitions. Implemented flexible theming system allowing easy color scheme customization.",
      outcome: "Achieved 5,000+ npm downloads, adopted by dozens of projects, and received positive community feedback for accessibility compliance and ease of integration.",
      keyFeatures: [
        "10+ reusable neumorphic components",
        "Full TypeScript support",
        "Customizable color theming system",
        "Comprehensive Storybook documentation",
        "Accessibility-compliant implementations"
      ]
    },
    links: {
      live: 'https://pillow-ui.netlify.app',
      github: 'https://github.com/username/neumorphism-library',
      npm: 'https://www.npmjs.com/package/@adivrskic/pillow'
    }
  },
  {
    id: 4,
    title: "Copycat Plagiarism Analyzer",
    image: "/images/copycat.avif",
    description: "This application allows users to upload documents or enter text, and then scans the web to determine the plagiarism % of the text.",
    technologies: ["Python", "Flask", "NLP", "Web Scraping", "Machine Learning"],
    details: "Built an intelligent plagiarism detection system using advanced NLP algorithms and web scraping techniques. Features document upload, real-time text analysis, and comprehensive reporting with similarity percentages and source identification.",
    gallery: [
      {
        src: "/images/copycat-landing.png",
        alt: "Copycat Plagiarism Analyzer Interface"
      },
      {
        src: "/images/copycat-1.png",
        alt: "iPad Responsive Design"
      }
    ],
    caseStudy: {
      challenge: "Educational institutions and content creators needed an affordable, accurate plagiarism detection tool that could compete with expensive enterprise solutions while providing detailed analysis and reporting.",
      solution: "Developed a machine learning-powered system that combines multiple detection algorithms including semantic similarity analysis, exact match detection, and paraphrasing identification using Python and Flask backend.",
      outcome: "Achieved 91% accuracy rate in plagiarism detection, and processed thousands of documents.",
      keyFeatures: [
        "Multi-format document upload support",
        "Real-time plagiarism percentage calculation",
        "Source identification and linking",
        "Detailed similarity reports with highlighting",
        "Batch processing capabilities"
      ]
    },
    links: {
      live: 'https://adivrskic.pythonanywhere.com',
      github: 'https://github.com/username/copycat-analyzer',
    }
  },
  {
    id: 5,
    title: "Infinite Zoom Fader",
    image: "images/izf.png",
    description: "A dynamic and configurable image slideshow React component. Published to npm, with thousands of downloads.",
    technologies: ["React", "CSS Animations", "NPM Package", "JavaScript", "Lazy Loading"],
    details: "Created a highly configurable React slideshow component featuring smooth infinite zoom effects and fade transitions. Published as an npm package with extensive customization options and responsive design support.",
    gallery: [
      {
        src: "/images/izf-landing.png",
        alt: "Infinite Zoom Fader Demo Page"
      },
      {
        src: "/images/izf-1.png",
        alt: "Component Configuration Options"
      },
      {
        src: "/images/izf-2.png",
        alt: "Zoom Time Demonstration"
      },
      {
        src: "/images/izf-3.png",
        alt: "Transition Time Demonstration"
      },
      {
        src: "/images/izf-4.png",
        alt: "Mobile Responsive Design"
      }
    ],
    caseStudy: {
      challenge: "Existing slideshow components lacked smooth animation capabilities and were difficult to customize. Developers needed a lightweight, performant solution with advanced visual effects.",
      solution: "Built a React component using CSS transforms and animations, providing configurable zoom levels, transition timing, and responsive behavior. Optimized for performance with lazy loading and GPU acceleration.",
      outcome: "Gained 8,000+ npm downloads, integrated into dozens of websites, and maintained excellent rating with consistent positive developer feedback.",
      keyFeatures: [
        "Infinite zoom with smooth transitions",
        "Fully configurable timing and effects",
        "Responsive design with mobile optimization",
        "Lazy loading for performance",
        "Easy integration with existing React apps"
      ]
    },
    links: {
      live: 'https://infinite-zoom-fader.netlify.app',
      github: 'https://github.com/username/infinite-zoom-fader',
      npm: 'https://www.npmjs.com/package/infinite-zoom-fader'
    }
  },
  {
    id: 6,
    title: "Karastan Rugs",
    image: "/images/karastan.webp",
    description: "Elevate your space with expertly crafted collections, designed to inspire and impress.",
    technologies: ["React", "E-commerce", "Shopify Plus", "Custom Integrations"],
    details: "Developed a luxury e-commerce experience for Karastan Rugs featuring advanced product visualization, custom filtering systems, and seamless integration with inventory management. Enhanced user journey from browsing to purchase with premium design aesthetics.",
    gallery: [
      {
        src: "/images/kr-landing.png",
        alt: "Karastan Rugs Landing Page"
      },
      {
        src: "/images/kr-1.png",
        alt: "Collections Gallery"
      },
      {
        src: "/images/kr-2.png",
        alt: "Custom Components"
      },
      {
        src: "/images/kr-3.png",
        alt: "Products and Filters"
      },
      {
        src: "/images/kr-4.png",
        alt: "Mobile Responsive Menu"
      },
      {
        src: "/images/kr-5.png",
        alt: "Mobile Responsive Homepage"
      },
      {
        src: "/images/kr-6.png",
        alt: "Product Page"
      }
    ],
    caseStudy: {
      challenge: "Karastan needed to transition their luxury rug business online while maintaining the premium brand experience and helping customers visualize products in their homes.",
      solution: "Created a sophisticated e-commerce platform with advanced product filtering, room visualization tools, and custom Shopify Plus integrations. Implemented high-quality image galleries and detailed product specifications.",
      outcome: "Increased online sales by 150%, improved customer engagement with 45% longer session durations, and reduced return rates through better product visualization.",
      keyFeatures: [
        "Advanced product filtering by size, color, and style",
        "Room visualization and size recommendations",
        "Custom Shopify Plus integrations",
        "Premium image galleries with zoom functionality",
        "Seamless checkout and shipping integration"
      ]
    },
    links: {
      live: 'https://www.karastanrugs.com',
      github: null
    }
  }
];

// About content
export const aboutContent = {
  title: "About Me",
  content: `Experienced Full Stack Software Engineer with a strong background in React, TypeScript, and large-scale web applications. Currently working at The Home Depot as a Software Engineer II, where I've spearheaded front-end development initiatives generating over $20M in projected revenue.

I specialize in driving front-end architecture, mentoring engineers, and delivering high-impact features for millions of users. My expertise includes optimizing performance, enhancing user experience, and leading technical initiatives in Agile environments.`,

  skills: [
    "Frontend: React, Next.js, TypeScript, Redux, Angular",
    "Backend: Python, Flask, REST APIs, GraphQL, AWS",
    "Tools: CI/CD, Performance Monitoring, Agile Development"
  ]
};