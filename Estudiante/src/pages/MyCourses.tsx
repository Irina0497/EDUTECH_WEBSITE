import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { SearchBar } from "@/components/SearchBar";
import { CourseCard } from "@/components/CourseCard";
import { Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for enrolled courses - Solo visual, números como strings
const myCourses = [
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
  {
    id: "4",
    title: "Gestión de Proyectos Ágil",
    instructor: "Pedro Martínez",
    image: "/placeholder.svg",
    progress: "90",
    duration: "6 horas",
    students: "1,500",
    rating: "4.6",
    category: "Gestión",
    isEnrolled: true,
    lastAccessed: "ayer",
  },
];

const MyCourses = () => {
  return (
    <div className="min-h-screen bg-edutech-background">
      <Sidebar />

      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-edutech-surface border-b border-gray-200 px-6 py-4">
          <div className="ml-12 lg:ml-0">
            <h1 className="text-2xl font-bold text-edutech-text">Mis Cursos</h1>
            <p className="text-gray-600 mt-1">
              Gestiona y continúa con todos tus cursos
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
            <div className="flex items-center gap-4">
              <SearchBar placeholder="Buscar en mis cursos..." />
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-2" />
                Filtros
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <List size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Grid size={16} />
              </Button>
            </div>
          </div>

          {/* Stats - Solo visual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-edutech-surface rounded-lg p-4 border border-gray-100">
              <p className="text-gray-600 text-sm">Total de cursos</p>
              <p className="text-xl font-bold text-edutech-text">4</p>
            </div>
            <div className="bg-edutech-surface rounded-lg p-4 border border-gray-100">
              <p className="text-gray-600 text-sm">Completados</p>
              <p className="text-xl font-bold text-green-600">1</p>
            </div>
            <div className="bg-edutech-surface rounded-lg p-4 border border-gray-100">
              <p className="text-gray-600 text-sm">En progreso</p>
              <p className="text-xl font-bold text-edutech-primary">3</p>
            </div>
            <div className="bg-edutech-surface rounded-lg p-4 border border-gray-100">
              <p className="text-gray-600 text-sm">Progreso promedio</p>
              <p className="text-xl font-bold text-orange-600">57%</p>
            </div>
          </div>

          {/* Courses List */}
          <div className="space-y-4">
            {myCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyCourses;
