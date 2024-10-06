import images from "./images";
import icons from "./icons";

const projects = [
  {
    preview: images.HST_RISK,
    images: images.HST_Risk_SlideShow,
    icon: icons.HST_Risk,
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
  {
    preview: images.Virtual_Mouse,
    images: images.Virtual_Mouse_Slideshow,
    icon: icons.Virtual_Mouse,
    name: "Virtual Mouse",
    description: "Python Kivy",
    long_description: "Virtual Mouse allows mouse control using several hand gestures mapped to perform different mouse functions such as movement, dragging, clicking, scrolling, zooming etc.",
    tech_stack: ["Kivy", "OpenCV", "MediaPipe", "TensorFlow", "Pandas", "Numpy"],
    links: [
      {
        name: "GitHub",
        img: icons.github,
        url: "https://github.com/RamezzE/VirtualMouse-HandTracking", 
      },
    ],
    category: "Computer Vision",
  },
];


export default projects;