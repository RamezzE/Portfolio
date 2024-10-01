import images from "./images";
import icons from "./icons";

const projects = [
  {
    image: images.HST_Risk,
    name: "HST Risk",
    description: "React Native Expo",
    long_description: "A mobile app mimicking 'RISK' where teams battle for virtual countries using virtual money. Real-life challenges decide outcomes, and winners gain control of both their country and the opponent's.",
    tech_stack: ["React Native", "Expo", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io"],
    links: [
      {
        name: "GitHub",
        img: icons.github,
        url: "", 
      },
      {
        name: "Apple Store",
        img: icons.apple, 
        url: "https://apps.apple.com/us/app/hst-risk/id6636564359", 
      },
    ],
    category: "Mobile",
  },
  // {
  //   image: "https://via.placeholder.com/250",
  //   title: "Project 2",
  //   description: "A React Native project.",
  //   tech_stack: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
  //   links: [
  //     {
  //       name: "GitHub",
  //       url: ""
  //     },
  //   ],
  //   category: "Web",
  // },
];


export default projects;