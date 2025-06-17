import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SearchBar } from "@/components/SearchBar";
import { CourseCard } from "@/components/CourseCard";
import { Bell, ChevronRight, TrendingUp, BookOpen, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for courses - Solo visual, números como strings
const enrolledCourses = [
  {
    id: "1",
    title: "Desarrollo Web con React y TypeScript",
    instructor: "María González",
    image: "/placeholder.svg",
    progress: "75",
    duration: "12 horas",
    students: "1,250",
    rating: "4.8",
    category: "Programación",
    isEnrolled: true,
    lastAccessed: "hace 2 días",
  },
  {
    id: "2",
    title: "Diseño UX/UI Profesional",
    instructor: "Carlos Ruiz",
    image: "/placeholder.svg",
    progress: "45",
    duration: "8 horas",
    students: "980",
    rating: "4.7",
    category: "Diseño",
    isEnrolled: true,
    lastAccessed: "hace 1 semana",
  },
  {
    id: "3",
    title: "Marketing Digital y Redes Sociales",
    instructor: "Ana López",
    image: "/placeholder.svg",
    progress: "20",
    duration: "10 horas",
    students: "2,100",
    rating: "4.9",
    category: "Marketing",
    isEnrolled: true,
    lastAccessed: "hace 3 días",
  },
];

const recommendedCourses = [
  {
    id: "4",
    title: "Python para Ciencia de Datos",
    instructor: "Dr. Roberto Silva",
    image: "/placeholder.svg",
    duration: "15 horas",
    students: "3,200",
    rating: "4.9",
    category: "Data Science",
    isEnrolled: false,
  },
  {
    id: "5",
    title: "Inteligencia Artificial con TensorFlow",
    instructor: "Elena Martín",
    image: "/placeholder.svg",
    duration: "20 horas",
    students: "1,800",
    rating: "4.8",
    category: "IA",
    isEnrolled: false,
  },
  {
    id: "6",
    title: "Fotografía Digital Avanzada",
    instructor: "Miguel Torres",
    image: "/placeholder.svg",
    duration: "6 horas",
    students: "900",
    rating: "4.6",
    category: "Fotografía",
    isEnrolled: false,
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const userName = "Alex"; // This would come from user context/auth

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Solo prototipo visual - no funcionalidad real
  };

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Buenos días"
      : currentHour < 18
        ? "Buenas tardes"
        : "Buenas noches";

  return (
    <div className="min-h-screen bg-edutech-background">
      <Sidebar />

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-edutech-surface border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="ml-12 lg:ml-0">
              <h1 className="text-2xl font-bold text-edutech-text">
                {greeting}, {userName} 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Continúa tu aprendizaje y alcanza tus objetivos
              </p>
            </div>

            <div className="flex items-center gap-4">
              <SearchBar onSearch={handleSearch} />
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6">
          {/* Quick stats - Solo visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-edutech-surface rounded-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Cursos en progreso</p>
                  <p className="text-2xl font-bold text-edutech-text">3</p>
                </div>
                <div className="bg-edutech-primary/10 p-3 rounded-lg">
                  <BookOpen className="text-edutech-primary" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-edutech-surface rounded-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Horas completadas</p>
                  <p className="text-2xl font-bold text-edutech-text">23.5</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Clock className="text-green-600" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-edutech-surface rounded-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Progreso promedio</p>
                  <p className="text-2xl font-bold text-edutech-text">47%</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <TrendingUp className="text-orange-600" size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* My Courses Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-edutech-text">
                Mis Cursos
              </h2>
              <button className="flex items-center gap-2 text-edutech-primary hover:text-edutech-primary/80 font-medium">
                Ver todos
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>

          {/* Recommendations Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-edutech-text">
                  Recomendaciones para ti
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Cursos seleccionados basados en tu perfil de aprendizaje
                </p>
              </div>
              <Badge className="bg-edutech-primary/10 text-edutech-primary">
                Personalizado
              </Badge>
            </div>

            <div className="space-y-4">
              {recommendedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
