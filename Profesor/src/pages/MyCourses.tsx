import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import CourseCard from "@/components/CourseCard";

export default function MyCourses() {
  // Mock data - same as dashboard but with more courses
  const courses = [
    {
      title: "Desarrollo Web con React y TypeScript",
      category: "Programación",
      students: 1250,
      rating: 4.8,
      price: 899,
      duration: "12 horas",
      status: "published" as const,
    },
    {
      title: "Diseño UX/UI Profesional",
      category: "Diseño",
      students: 980,
      rating: 4.7,
      price: 750,
      duration: "8 horas",
      status: "published" as const,
    },
    {
      title: "Marketing Digital y Redes Sociales",
      category: "Marketing",
      students: 2100,
      rating: 4.9,
      price: 650,
      duration: "10 horas",
      status: "published" as const,
    },
    {
      title: "Python para Ciencia de Datos",
      category: "Data Science",
      students: 756,
      rating: 4.6,
      price: 999,
      duration: "15 horas",
      status: "draft" as const,
    },
    {
      title: "Introducción a la Inteligencia Artificial",
      category: "IA",
      students: 0,
      rating: 0,
      duration: "20 horas",
      status: "draft" as const,
    },
    {
      title: "Fotografía Digital Avanzada",
      category: "Fotografía",
      students: 432,
      rating: 4.5,
      price: 550,
      duration: "6 horas",
      status: "pending" as const,
    },
  ];

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mis Cursos</h1>
            <p className="text-gray-600">
              Gestiona todos tus cursos publicados y borradores
            </p>
          </div>
          <Button className="bg-edutech-accent hover:bg-edutech-primary">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Curso
          </Button>
        </div>
      </header>

      <main className="p-6">
        {/* Filters and Search */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Buscar en mis cursos..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </main>
    </>
  );
}
