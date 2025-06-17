import { Course } from "@/lib/types";

export const courses: Course[] = [
  {
    id: "1",
    title: "Desarrollo Web con React y TypeScript",
    instructor: "Dr. María González",
    description:
      "Aprende a desarrollar aplicaciones web modernas con React y TypeScript desde cero hasta nivel profesional.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop&crop=center",
    price: 299,
    isFree: false,
    category: "Programación",
    level: "intermedio",
    rating: 4.8,
    students: 1250,
    duration: "12 horas",
    status: "published",
  },
  {
    id: "2",
    title: "Diseño UX/UI Profesional",
    instructor: "Carlos Mendoza",
    description:
      "Domina los principios fundamentales del diseño de experiencia de usuario e interfaces modernas.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&crop=center",
    price: 249,
    isFree: false,
    category: "Diseño",
    level: "básico",
    rating: 4.7,
    students: 980,
    duration: "8 horas",
    status: "published",
  },
  {
    id: "3",
    title: "Marketing Digital y Redes Sociales",
    instructor: "Ana Rodríguez",
    description:
      "Estrategias efectivas de marketing digital para hacer crecer tu negocio en línea.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
    price: 199,
    isFree: false,
    category: "Marketing",
    level: "básico",
    rating: 4.9,
    students: 2100,
    duration: "10 horas",
    status: "published",
  },
  {
    id: "4",
    title: "Python para Ciencia de Datos",
    instructor: "Dr. Roberto Silva",
    description:
      "Aprende Python aplicado a análisis de datos, machine learning y visualización científica.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop&crop=center",
    price: 349,
    isFree: false,
    category: "Data Science",
    level: "avanzado",
    rating: 4.6,
    students: 756,
    duration: "15 horas",
    status: "published",
  },
  {
    id: "5",
    title: "Introducción a la Inteligencia Artificial",
    instructor: "Dra. Lucia Hernández",
    description:
      "Fundamentos de IA, redes neuronales y aplicaciones prácticas en el mundo real.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center",
    price: 0,
    isFree: true,
    category: "IA",
    level: "básico",
    rating: 4.5,
    students: 3200,
    duration: "6 horas",
    status: "published",
  },
  {
    id: "6",
    title: "Fotografía Digital Avanzada",
    instructor: "Pedro Vargas",
    description:
      "Técnicas profesionales de fotografía digital, composición y postprocesamiento.",
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop&crop=center",
    price: 179,
    isFree: false,
    category: "Fotografía",
    level: "intermedio",
    rating: 4.4,
    students: 432,
    duration: "9 horas",
    status: "published",
  },
  {
    id: "7",
    title: "Desarrollo de Apps Móviles con Flutter",
    instructor: "Sofía Castro",
    description:
      "Crea aplicaciones móviles nativas para iOS y Android usando Flutter y Dart.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center",
    price: 279,
    isFree: false,
    category: "Programación",
    level: "intermedio",
    rating: 4.7,
    students: 890,
    duration: "14 horas",
    status: "published",
  },
  {
    id: "8",
    title: "Gestión de Proyectos Ágiles",
    instructor: "Miguel Torres",
    description:
      "Metodologías ágiles, Scrum y herramientas para la gestión efectiva de proyectos.",
    image:
      "https://images.unsplash.com/photo-1553028826-f4804151e596?w=400&h=250&fit=crop&crop=center",
    price: 0,
    isFree: true,
    category: "Gestión",
    level: "básico",
    rating: 4.6,
    students: 1560,
    duration: "5 horas",
    status: "published",
  },
  {
    id: "9",
    title: "Ciberseguridad y Hacking Ético",
    instructor: "Dr. Eduardo Ramírez",
    description:
      "Aprende a proteger sistemas y redes contra amenazas cibernéticas modernas.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=center",
    price: 399,
    isFree: false,
    category: "Seguridad",
    level: "avanzado",
    rating: 4.8,
    students: 645,
    duration: "18 horas",
    status: "published",
  },
];

export const categories = [
  "Todos",
  "Programación",
  "Diseño",
  "Marketing",
  "Data Science",
  "IA",
  "Fotografía",
  "Gestión",
  "Seguridad",
];

export const levels = ["Todos", "básico", "intermedio", "avanzado"];

export const priceRanges = [
  "Todos",
  "Gratis",
  "Menos de $100",
  "$100 - $200",
  "$200 - $300",
  "Más de $300",
];
