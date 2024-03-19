import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    cubicalchaos,
    disasterdrone,
    sumerhouse,
    whatsnext,
    threejs,
    godot,
    drone,
    unity,
    andriod,
    unreal,
    jira,
    vscode,
    realitycapture,
    bash,
    cpp,
    python,
    opencv,
    cvproj,
    portfolio,
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Consultant",
      icon: web,
    },
    {
      title: "Team Lead",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Visual Studio Code",
      icon: vscode,
    },
    {
      name: "Jira",
      icon: jira,
    },
    {
      name: "Unreal Engine",
      icon: unreal,
    },
    {
      name: "Godot",
      icon: godot,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "OpenCV",
      icon: opencv,
    },
    {
      name: "Reality Capture",
      icon: realitycapture,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Security System Consultant",
      company_name: "Walter 'The Wizard' Radford",
      icon: web,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Mar 2024",
      points: [
        "Utilized problem-solving skills to identify a system compatible with existing equipment within the client's budget.",
        "Installed the system, including hardware setup and software setup for remote monitoring on the client's devices.",
        "Provided training to the client on using and managing the system effectively including a custom-made manual.",
      ],
    },
    {
      title: "Restaurant Technologies Consultant",
      company_name: "Precognitive Solutions",
      icon: mobile,
      iconBg: "#E6DEDD ",
      date: "Sept 2020 - Nov 2022",
      points: [
        "Installed and configured technology solutions for restaurants demonstrating hands-on experience with hardware and software.",
        "Developed interpersonal skills by collaborating with stakeholders to understand and address their needs.",
        "Conducted training sessions for restaurant staff on the use and maintenance of technology systems.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      date: "SEPT 2023 - DEC 2023",
      name: "Cubical Chaos",
      description:
        "You wake up on the top floor of a facility overrun by alien-like creatures and must get to the ground floor to escape. Can you do what it takes to survive? A single player room-based rouguelike shooter.",
      tags: [
        {
          name: "godot",
          color: "blue-text-gradient",
        },
        {
          name: "gdscript",
          color: "green-text-gradient",
        },
        {
          name: "2D",
          color: "pink-text-gradient",
        },
        {
          name: "roquelike",
          color: "blue-text-gradient",
        },
        {
          name: "shooter",
          color: "green-text-gradient",
        },
        {
          name: "horror",
          color: "pink-text-gradient",
        },
        {
          name: "windows-game",
          color: "blue-text-gradient",
        },
      ],
      image: cubicalchaos,
      source_code_link: "https://github.com/Rallas/4392-001TeamC/tree/main/4392_TeamC_Prototype/Scenes",
    },
    {
      date: "MAY 2023 - AUG 2023",
      name: "4 Computer Vision Mini Projects",
      description:
        "A primitive paint application, a coin identifier & counter, a box identifier & dimension calculator, and a template matching gem finder in a video game video.", 
      tags: [
        {
          name: "opencv",
          color: "blue-text-gradient",
        },
        {
          name: "cpp",
          color: "green-text-gradient",
        },
        {
          name: "ubuntu",
          color: "pink-text-gradient",
        },
        {
          name: "PCL",
          color: "blue-text-gradient",
        },
        {
          name: "3D",
          color: "green-text-gradient",
        },
      ],
      image: cvproj,
      source_code_link: "https://github.com/faithg3/ComputerVisionProjects",
    },
    {
      date: "SEPT 2022 - MAY 2023",
      name: "Disaster Survey Drone System",
      description:
        "A system that utilizes drone, photogrammetry, cloud, and virtual reality technology, allowing State Farm agents to remotely and autonomously assess and process insurance claims in disaster scenarios. Sponsored by State Farm.",
      tags: [
        {
          name: "UE5",
          color: "blue-text-gradient",
        },
        {
          name: "realitycapture",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "GCP",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "VR",
          color: "pink-text-gradient",
        },
        {
          name: "statefarm",
          color: "blue-text-gradient",
        },
      ],
      image: disasterdrone,
      source_code_link: "https://github.com/disaster-drone",
    },
    {
      date: "JAN 2022 - MAY 2022",
      name: "Sumer House",
      description:
        "(No, it's not a spelling error.) Choose your character and with each level, discover more about who you are and the world around you. A relaxing single player 2D puzzle solving mobile game. ",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "csharp",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "2D",
          color: "blue-text-gradient",
        },
        {
          name: "RPG",
          color: "green-text-gradient",
        },
        {
          name: "topdown",
          color: "pink-text-gradient",
        },
        {
          name: "puzzle",
          color: "blue-text-gradient",
        },
        {
          name: "cozy",
          color: "green-text-gradient",
        },
        {
          name: "andriod-game",
          color: "pink-text-gradient",
        },
      ],
      image: sumerhouse,
      source_code_link: "https://github.com/SanCarlos25/UnityGame",
    },
    {
      date: "AUG 2021 - DEC 2021",
      name: "WhatsNext",
      description:
        "An app that recommends movies based on genre prefrences and streaming platforms owned. A great solution for when you can't decide what to watch!",
      tags: [
        {
          name: "andriodstudio",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "IMBD",
          color: "pink-text-gradient",
        },
        {
          name: "back4app",
          color: "blue-text-gradient",
        },
        {
          name: "adobeXD",
          color: "green-text-gradient",
        },
        {
          name: "andriod-app",
          color: "pink-text-gradient",
        },
      ],
      image: whatsnext,
      source_code_link: "https://github.com/faithg3/WhatsNextApp",
    },
    {
      date: "APR 2023 - CURRENT",
      name: "My Porfolio Website",
      description:
        "The website you're viewing right now! A website I built as an opportunity to learn a little about React and JavaScript. Also an opportunity to showcase my skills and experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/faithg3/3D_Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };