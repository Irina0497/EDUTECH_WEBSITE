import { Plus, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardStats from "@/components/DashboardStats";
import CourseCard from "@/components/CourseCard";

export default function Dashboard() {
  // Mock data for courses
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
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Panel Principal
            </h1>
            <p className="text-gray-600">
              Gestiona tus cursos y revisa el rendimiento
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Buscar cursos..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="p-6">
        {/* Statistics */}
        <DashboardStats />

        {/* Create Course CTA */}
        <div className="bg-gradient-to-r from-edutech-primary to-edutech-accent rounded-lg p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">
                ¿Listo para crear un nuevo curso?
              </h2>
              <p className="text-blue-100">
                Comparte tu conocimiento con miles de estudiantes
              </p>
            </div>
            <Button className="bg-white text-edutech-primary hover:bg-gray-100 font-semibold">
              <Plus className="h-4 w-4 mr-2" />
              Crear Nuevo Curso
            </Button>
          </div>
        </div>

        {/* My Courses Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Mis Cursos</h2>
            <Button variant="outline">Ver todos</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Acciones Rápidas
            </h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Crear nuevo curso
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Ver mensajes de estudiantes
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Revisar calificaciones
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Actividad Reciente
            </h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-900">Nuevo estudiante inscrito</p>
                <p className="text-gray-500">en "React y TypeScript"</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-900">Reseña de 5 estrellas</p>
                <p className="text-gray-500">en "Diseño UX/UI"</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-900">Pregunta de estudiante</p>
                <p className="text-gray-500">en "Marketing Digital"</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Consejos para Profesores
            </h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-gray-900">Mejora la retención</p>
                <p className="text-gray-500">
                  Usa ejercicios prácticos en tus lecciones
                </p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">
                  Aumenta las inscripciones
                </p>
                <p className="text-gray-500">
                  Optimiza la descripción de tu curso
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
