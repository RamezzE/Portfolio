import images from "./images";
import icons from "./icons";

const projects = [
  {
    preview: images.HST_RISK,
    slug: "hst-risk",
    images: images.HST_Risk_SlideShow,
    icon: icons.HST_Risk,
    name: "HST Risk",
    description: "React Native Expo",
    long_description:
      "A mobile app mimicking 'RISK' where teams battle for virtual countries using virtual money. Real-life challenges decide outcomes, and winners gain control of both their country and the opponent's.",
    tech_stack: [
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
    ],
    links: [
      {
        name: "GitHub",
        img: icons.github,
        url: "https://github.com/RamezzE/HST-Risk",
      },
      {
        name: "Apple Store",
        img: icons.apple,
        url: "https://apps.apple.com/us/app/hst-risk/id6636564359",
      },
    ],
    category: "Mobile",
  },
  {
    preview: images.Task_Visualizer,
    slug: "task-visualizer",
    images: images.Task_Visualizer_SlideShow,
    icon: icons.Task_Visualizer,
    name: "Task Visualizer",
    description: "React | Electron",
    long_description:
      "A Task Visualizer desktop app for note-taking and task management, supporting 'topics' that contain tasks or nested 'projects.' Tasks can be set for specific days or as daily recurring. Icons can be uploaded for customization, and the app features a clean, minimalistic design.",
    tech_stack: [
      "React",
      "Tailwind CSS",
      "Electron Forge",
      "Node.js",
    ],
    links: [
      
    ],
    category: "Desktop",
  },
  {
    preview: images.Carmel_California,
    slug: "carmel-california",
    images: images.Carmel_California_Slideshow,
    icon: icons.Carmel_California,
    name: "Carmel Café",
    description: "PHP",
    long_description:
      "A responsive web app for a Maadi coffee shop featuring animations, dynamic menu items, salad customization, and validations. The admin dashboard manages users, products, discounts, and roles with editable permissions, using an EAV database design.",
    tech_stack: ["PHP", "SQL", "Bootstrap", "JavaScript"],
    links: [
      {
        name: "GitHub",
        img: icons.github,
        url: "https://github.com/mennaemam12/Carmel-California",
      },
    ],
    category: "Web",
  },
  {
    preview: images.Virtual_Mouse,
    slug: "virtual-mouse",
    images: images.Virtual_Mouse_Slideshow,
    icon: icons.Virtual_Mouse,
    name: "Virtual Mouse",
    description: "Python Kivy",
    long_description:
      "Virtual Mouse allows mouse control using several hand gestures mapped to perform different mouse functions such as movement, dragging, clicking, scrolling, zooming etc.",
    tech_stack: [
      "Kivy",
      "OpenCV",
      "MediaPipe",
      "TensorFlow",
      "Pandas",
      "Numpy",
    ],
    links: [
      {
        name: "GitHub",
        img: icons.github,
        url: "https://github.com/RamezzE/VirtualMouse-HandTracking",
      },
    ],
    category: "Computer Vision",
  },
  {
    preview: images.Bitcoin_Prediction,
    slug: "bitcoin-prediction",
    images: [images.Bitcoin_Prediction],
    icon: images.Bitcoin_Prediction,
    name: "Bitcoin Price Prediction",
    description: "",
    long_description:
      "A machine learning regression project aimed at predicting Bitcoin prices using models such as Random Forest, SVR, XGBoost, ARIMA, and Prophet. Evaluated model performance with metrics like R² and MAPE. A research paper was also conducted, which is available on the GitHub repository.",
    tech_stack: [
      "Python",
      "Random Forest",
      "SVR",
      "XGBoost",
      "ARIMA",
      "Prophet",
    ],
    links: [
      {
        name: "GitHub",
        img: icons.github,
        url: "https://github.com/RamezzE/Bitcoin-Price-Prediction",
      },
    ],
    category: "Machine Learning",
  },
  {
    preview: images.Flarky,
    slug: "flarky-bird",
    images: images.Flarky_Slideshow,
    icon: icons.Flarky,
    name: "Flarky Bird",
    description: "C++ SFML",
    long_description: "A C++ project that replicates the popular Flappy Bird game using the SFML graphics library. The game includes controls for jumping, pausing, and restarting, and provides a makefile for easy building on Linux and Windows. Detailed setup instructions for SFML, GNU Make, and MS Build are provided.",
    tech_stack: [
      "C++",
      "SFML",
      "Makefile",
    ],
    links: [
      {
        name: "GitHub",
        img: icons.github,
        url: "https://github.com/RamezzE/FlappyBird",
      },
    ],
    category: "DS & Algo",
  },
  {
    preview: images.Maze,
    slug: "maze-solver",
    images: images.Maze_Slideshow,
    icon: icons.Maze,
    name: "Maze Solver",
    description: "C++ SFML",
    long_description: "A C++ maze generator and solver using the SFML graphics library. Features include maze generation, backtracking-based solving, finding all shortest paths, resizing, adjusting speed and wall thickness, manual editing, and exporting mazes as PNG images.",
    tech_stack: [
      "C++",
      "SFML",
      "Makefile",
    ],
    links: [
      {
        name: "GitHub",
        img: icons.github,
        url: "https://github.com/RamezzE/MazeSolver",
      },
    ],
    category: "DS & Algo",
  },
  {
    preview: images.Quadtree,
    slug: "quadtree",
    images: [images.Quadtree],
    icon: images.Quadtree,
    name: "Quadtree Playground",
    description: "",
    long_description: "A C++ project utilizing the SFML graphics library to implement collision detection through space partitioning using a QuadTree data structure. The project efficiently handles object collisions by subdividing space and optimizing detection.",    
    tech_stack: [
      "C++",
      "SFML",
      "Makefile",
    ],
    links: [
      {
        name: "GitHub",
        img: icons.github,
        url: "https://github.com/RamezzE/QuadTree-SFML",
      },
    ],
    category: "DS & Algo",
  },
];

export default projects;