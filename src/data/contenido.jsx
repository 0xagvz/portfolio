/* eslint-disable react-refresh/only-export-components */
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiLinux,
  SiGit,
  SiAndroid,
  SiC,
} from "react-icons/si";
import { FaNetworkWired, FaTools } from "react-icons/fa";

export const SECTIONS = ["about", "projects", "stack", "contact"];

export const PHRASES = [
  " 諦めずに・進む ・ ",
  " 金曜日の・デプロイ禁止 ・ ",
  " 白・と・黒 ・ ",
  " 血の・結びつき ・ ",
];

export function shuffleArray(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const TAPE_CONTENT = shuffleArray(PHRASES).join("").repeat(4);

export const STACK_LIST = [
  {
    title: "Lenguajes",
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C", icon: <SiC /> },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "Android", icon: <SiAndroid /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Herramientas & SO",
    items: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "Ciberseguridad",
    items: [
      { name: "OSINT", icon: <FaTools /> },
      { name: "Redes", icon: <FaNetworkWired /> },
    ],
  },
];

export const PROJECTS_DATA = [
  {
    title: "NES-Emulator",
    description:
      "Emulador de Nintendo Entertainment System (NES) desarrollado en C++. Implementa CPU 6502, memoria, cartuchos, PPU y ejecución de ROMs.",
    url: "https://github.com/0xagvz/NES-Emulator",
    tags: [
      { name: "C++", color: "#00599c" },
      { name: "Linux", color: "#FCC624" },
      { name: "Emulation", color: "rgba(255, 255, 255, 1)" },
    ],
    icon: "github",
  },
  {
    title: "WI-HI?",
    description:
      "Herramienta para identificar dispositivos vivos en una red wifi sin utilizar ningun tipo de libreria externa, solo con sockets y raw packets",
    url: "https://github.com/0xagvz/WI-HI",
    tags: [
      { name: "C++", color: "#00599c" },
      { name: "Ciberseguridad", color: "rgba(255, 255, 255, 1)" },
    ],
    icon: "github",
  },
  {
    title: "zlaunch",
    description:
      "Precacher de binarios en Linux. Comprime ejecutables en RAM con zlib y los lanza directamente desde memoria sin tocar el disco.",
    url: "https://github.com/0xagvz/zlaunch",
    tags: [
      { name: "C", color: "#A8B9CC" },
      { name: "Linux", color: "#FCC624" },
      { name: "Systems", color: "rgba(255, 255, 255, 1)" },
    ],
    icon: "github",
  },
  {
    title: "Chip8-Emulator",
    description:
      "Emulador del sistema Chip8, desarrollado en C++. Permite ejecutar juegos para esta máquina virtual.",
    url: "https://github.com/0xagvz/Chip8-Emulator",
    tags: [
      { name: "C++", color: "#00599c" },
      { name: "Linux", color: "#FCC624" },
      { name: "Emulation", color: "rgba(255, 255, 255, 1)" },
    ],
    icon: "github",
  },
  {
    title: "KeepIt",
    description:
      "Aplicación Android enfocada en la gestión de fotos, utilizando gestos tipo swipe para decidir de forma rápida qué imágenes conservar o eliminar, optimizando el espacio de almacenamiento.",
    url: "https://github.com/0xagvz/KeepIt",
    tags: [
      { name: "JavaScript", color: "#fbd719" },
      { name: "Android", color: "#3DDC84" },
      { name: "React Native", color: "#61dafb" },
    ],
    icon: "github",
  },
  {
    title: "Super TaTeTi",
    description:
      "Una idea propia reimaginada del TicTacToe, pero con un nivel más alto de dificultad. Desarrollado en React Native, con backend multijugador",
    url: "https://github.com/0xagvz/SuperTaTeTi/",
    tags: [
      { name: "JavaScript", color: "#fbd719" },
      { name: "Android", color: "#3DDC84" },
      { name: "React Native", color: "#61dafb" },
    ],
    icon: "github",
  },
  {
    title: "LoopFetch",
    description: "Agrega gifs personalizados a fastfetch / neofetch",
    url: "https://github.com/0xagvz/loopfetch",
    tags: [
      { name: "C++", color: "#A8B9CC" },
      { name: "Linux", color: "#FCC624" },
      { name: "Systems", color: "rgba(255, 255, 255, 1)" },
    ],
    icon: "github",
  },
  {
    title: "Tramites y Gestiones Neuquen",
    description: "",
    url: "https://www.tramitesygestionesnqn.com/",
    tags: [
      { name: "React", color: "#61dafb" },
      { name: "JavaScript", color: "#fbd719" },
      { name: "Frontend", color: "rgb(35, 219, 15)" },
    ],
  },
];

export const CONTACTS = [
  {
    id: "github",
    label: "GITHUB",
    handle: "/0xagvz",
    url: "https://github.com/0xagvz/",
    icon: "github",
  },
  {
    id: "twitter",
    label: "TWITTER",
    handle: "@aguatiiin",
    url: "https://x.com/aguatiiin",
    icon: "twitter",
  },
  {
    id: "reddit",
    label: "REDDIT",
    handle: "u/elaguslol",
    url: "https://www.reddit.com/user/elaguslol/",
    icon: "reddit",
  },
];
