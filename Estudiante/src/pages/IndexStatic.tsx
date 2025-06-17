import React from "react";
import { SidebarStatic } from "@/components/SidebarStatic";
import { CourseCardStatic } from "@/components/CourseCardStatic";
import {
  Bell,
  ChevronRight,
  TrendingUp,
  BookOpen,
  Clock,
  Search,
} from "lucide-react";

const IndexStatic = () => {
  return (
    <div className="min-h-screen bg-edutech-background flex">
      {/* Sidebar fijo */}
      <SidebarStatic />

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-edutech-surface border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-edutech-text">
                Buenos días, Alex 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Continúa tu aprendizaje y alcanza tus objetivos
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Search bar estática */}
              <div className="relative w-80">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <div className="pl-10 pr-4 py-3 bg-edutech-surface border border-gray-200 rounded-lg text-gray-500">
                  Buscar cursos...
                </div>
              </div>

              <div className="relative p-2 bg-gray-50 rounded-lg">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6">
          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-edutech-surface rounded-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Cursos en progreso</p>
                  <p className="text-2xl font-bold text-edutech-text">3</p>
                </div>
                <div className="bg-edutech-primary bg-opacity-10 p-3 rounded-lg">
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
              <div className="flex items-center gap-2 text-edutech-primary font-medium">
                Ver todos
                <ChevronRight size={16} />
              </div>
            </div>

            <div className="space-y-4">
              <CourseCardStatic
                title="Desarrollo Web con React y TypeScript"
                instructor="María González"
                progress="75"
                duration="12 horas"
                students="1,250"
                rating="4.8"
                category="Programación"
                isEnrolled={true}
                lastAccessed="hace 2 días"
              />

              <CourseCardStatic
                title="Diseño UX/UI Profesional"
                instructor="Carlos Ruiz"
                progress="45"
                duration="8 horas"
                students="980"
                rating="4.7"
                category="Diseño"
                isEnrolled={true}
                lastAccessed="hace 1 semana"
              />

              <CourseCardStatic
                title="Marketing Digital y Redes Sociales"
                instructor="Ana López"
                progress="20"
                duration="10 horas"
                students="2,100"
                rating="4.9"
                category="Marketing"
                isEnrolled={true}
                lastAccessed="hace 3 días"
              />
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
              <div className="bg-edutech-primary bg-opacity-10 text-edutech-primary px-3 py-1 rounded text-sm">
                Personalizado
              </div>
            </div>

            <div className="space-y-4">
              <CourseCardStatic
                title="Python para Ciencia de Datos"
                instructor="Dr. Roberto Silva"
                duration="15 horas"
                students="3,200"
                rating="4.9"
                category="Data Science"
                isEnrolled={false}
              />

              <CourseCardStatic
                title="Inteligencia Artificial con TensorFlow"
                instructor="Elena Martín"
                duration="20 horas"
                students="1,800"
                rating="4.8"
                category="IA"
                isEnrolled={false}
              />

              <CourseCardStatic
                title="Fotografía Digital Avanzada"
                instructor="Miguel Torres"
                duration="6 horas"
                students="900"
                rating="4.6"
                category="Fotografía"
                isEnrolled={false}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default IndexStatic;
