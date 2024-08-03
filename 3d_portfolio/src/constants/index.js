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
    LDMS,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },

  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Project Manager",
      icon: mobile,
    },
    {
      title: "UAV Software Specialist",
      icon: creator,
    },
    {
      title: "Game Developer",
      icon: web,
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
      title: "Project Management & Platform Control Software Specialist Intern",
      company_name: "MEDNA Scientific",
      icon: web,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Collaborated with a team to develop a security system with computer vision capabilities and a deployable AGV.",
        "Integrated the software for the platform controller and companion computer with the rest of the system using Flask, ROS, and DroneKit.",
        "Developed an API to manage and perform AGV actions such as waypoint missions, status monitoring, and state updates.",
        "Managed project timelines, created and tracked tasks, and led weekly meetings using MEDNA’s project management software",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Doe",
      designation: "CEO",
      company: "Company Name",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      name: "John Doe",
      designation: "CEO",
      company: "Company Name",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Doe 2",
      designation: "CEO",
      company: "Company Name",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      date: "SEPT 2023 - DEC 2023",
      name: "Cubical Chaos",
      description:
        "You wake up on the top floor of a facility overrun by alien-like creatures and must get to the ground floor to escape. Can you do what it takes to survive? A single player room-based roguelike shooter.",
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
      source_code_link: "https://github.com/Rallas/4392-001TeamC",
    },
    // {
    //   date: "MAY 2023 - AUG 2023",
    //   name: "4 Computer Vision Mini Projects",
    //   description:
    //     "A primitive paint application, a coin identifier & counter, a box identifier & dimension calculator, and a template matching program.", 
    //   tags: [
    //     {
    //       name: "opencv",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "cpp",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "ubuntu",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "PCL",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "3D",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: cvproj,
    //   source_code_link: "https://github.com/faithg3/ComputerVisionProjects",
    // },
    {
      date: "FEB 2023 - MAY 2023",
      name: "Library Database Management System",
      description:
        "A user-friendly GUI interface that simplifies the process of managing library resources, providing a powerful and efficient tool for librarians and library users alike.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "SQLite",
          color: "green-text-gradient",
        },
        {
          name: "tkinter",
          color: "pink-text-gradient",
        },
        {
          name: "GUI",
          color: "blue-text-gradient",
        },
      ],
      image: LDMS,
      source_code_link: "https://github.com/faithg3/DataBasesProject2",
    },
    {
      date: "SEPT 2022 - MAY 2023",
      name: "Disaster Survey Drone System",
      description:
        "A system that utilizes drone, photogrammetry, cloud, and VR technology, allowing State Farm agents to remotely assess and process insurance claims in disaster scenarios.",
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