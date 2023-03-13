import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,

// **** my stuff ****
    google,
    apple,
    kean,
    tmobile,
// ****************

// **** Balls stuff ****
    java,
    python,
    linux,
    hacking,
    gamer,
    machinelearning,
    cassandra,
    dataanalyst,
    datastructures,
// ****************


    cpp,
    database,

    github_projects,
    vivaldi_projects,
    ml_projects,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "backend developer",
      icon: web,
    },
    {
      title: "algorithms engineer",
      icon: mobile,
    },
    {
      title: "machine learning",
      icon: backend,
    },
    {
      title: "opensource contributor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "cassandra database nosql",
      icon: cassandra,
    },
    {
      name: "linux",
      icon: linux,
    },

    // {
    //   name: "",
    //   icon: ,
    // },
    // {
    //   name: "",
    //   icon: ,
    // },
    // {
    //   name: "",
    //   icon: ,
    // },

  ];
  
  const experiences = [
    {
      title: "Regional Manager",
      company_name: "T-mobile",
      icon: tmobile,
      iconBg: "#383E56",
      date: "February 2019 - June 2021",
      points: [
        "Coordinated and delegated team tasks and monitored completion to drive efficiency while generating 63% of the sales and leading by example.",
        "Implement 50% of daily training, job instructions and blueprints to verify completion of assigned tasks with outlined specifications.",
        "Achieved 139% increase in store performance and monthly targets, surpassing high-volume stores with 8.7 customer satisfaction.",
      ],
    },
    {
      title: "SWE Instructor [Apple Teacher]",
      company_name: "Apple",
      icon: apple,
      iconBg: "#383E56",
      date: "August 2022 - Present",
      points: [
        "Developed interactive Swift programming presentations with accompanying exercises, activities, projects, and initiatives for students at institutions w/out programming courses.",
        "Maintained a trusting environment where students felt encouraged to participate, ask questions and receive individual attention to ellectively learn to program.",
        "Engaged in public speaking to educate schools about different types of technologies, including algorithms and data structures, hacking, web dev, video game dev, machine learning engineering, backend engineering, and operating systems",
      ],
    },
    {
      title: "Undergraduate Researcher for University of Kean",
      company_name: "LREU && CASHI",
      icon: kean,
      iconBg: "#E6DEDD",
      date: "2023 - Present [seasonal spring]",
      points: [
        "Manage and monitored research progress, including conducting literature review and doing a final research presentation along with a poster.",
        "Utilized Java benchmark and Maven projects in experiments; Pitest to generate mutations, write Python scripts to find LOC per function of the program.",
        "Conduct research to investigate the correlation between mutant score and the size of functions and mutant operators, and measure the effectiveness or test suites by comparing the number of killed mutants to equivalent mutants.",
      ],
    },
    {
      title: "Undergraduate Researcher for Google",
      company_name: "Google",
      icon: google,
      iconBg: "#E6DEDD",
      date: "2023 - Present [seasonal spring]",
      points: [
        "As a participant in the Google ExploreCSR program, I am gaining expertise in a diverse range of computer science topics.",
        "Including python, data manipulation and visualization using matplotlib, numpy, pandas, and seaborn.",
        "Web development using javascript, html/css, and react. Efficient use of the command line intertace (cli) and more.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "in dev...",
      name: "Sara Lee",
      designation: "CFO",
      company: "company",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "in dev...",
      name: "Chris Mark",
      designation: "COO",
      company: "company",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "in dev...",
      name: "Lisa Wang",
      designation: "CTO",
      company: "company",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "aharoJ",
      description:
        "Documentation, code, projects, and resources, cover a range of topics, including machine learning, deep learning, hacking, multi-modular use, frameworks, data structures, algorithms, and more.",
      tags: [
        {
          name: "opensource",
          color: "blue-text-gradient",
        },
        {
          name: "machine-learning",
          color: "green-text-gradient",
        },
        {
          name: "cli",
          color: "pink-text-gradient",
        },
      ],
      image: github_projects,
      source_code_link: "https://github.com/aharoJ",
    },
    {
      name: "Vivaldi",
      description:
        "My Vivaldi configuration includes a comprehensive list of custom hotkeys, designed to make your browsing experience more efficient and intuitive.",
      tags: [
        {
          name: "vim/Nvim",
          color: "blue-text-gradient",
        },
        {
          name: "custom-browser",
          color: "green-text-gradient",
        },
        {
          name: "vivaldi",
          color: "pink-text-gradient",
        },
      ],
      image: vivaldi_projects,
      source_code_link: "https://themes.vivaldi.net/themes/nV6vpPxDvdN",
    },
    {
      name: "chatGPT3 by aharoJ",
      description:
        "My dev portfolio is built with cutting-edge libraries like React, Three.js, and Tailwind CSS, we use 3D models, dynamic content, and smooth animations, all optimized for fast rendering speeds. As an open-source advocate, I am publishing my portfolio under the MIT License, allowing others to use and learn from my work.",
      tags: [
        {
          name: "dev-portfolio",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: ml_projects,
      source_code_link: "https://github.com/aharoJ/dev_portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
  