import { useState, useMemo } from "react";
import { GraduationCap, Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard";
import SearchAndFilters from "@/components/SearchAndFilters";
import { courses } from "@/data/courses";
import { Filter } from "@/lib/types";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<Filter>({
    category: "Todos",
    level: "Todos",
    priceRange: "Todos",
  });

  // Filter courses based on search query and filters
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Search filter
      const searchMatch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const categoryMatch =
        filters.category === "Todos" || course.category === filters.category;

      // Level filter
      const levelMatch =
        filters.level === "Todos" || course.level === filters.level;

      // Price filter
      let priceMatch = true;
      if (filters.priceRange !== "Todos") {
        switch (filters.priceRange) {
          case "Gratis":
            priceMatch = course.isFree;
            break;
          case "Menos de $100":
            priceMatch = !course.isFree && course.price < 100;
            break;
          case "$100 - $200":
            priceMatch =
              !course.isFree && course.price >= 100 && course.price <= 200;
            break;
          case "$200 - $300":
            priceMatch =
              !course.isFree && course.price > 200 && course.price <= 300;
            break;
          case "Más de $300":
            priceMatch = !course.isFree && course.price > 300;
            break;
        }
      }

      return searchMatch && categoryMatch && levelMatch && priceMatch;
    });
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-edutech-primary to-edutech-primary-dark rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EDUTECH</h1>
                <p className="text-xs text-gray-500">Plataforma Educativa</p>
              </div>
            </div>

            {/* Navigation and Actions */}
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                <a
                  href="#"
                  className="text-gray-700 hover:text-edutech-primary font-medium"
                >
                  Inicio
                </a>
                <a href="#" className="text-edutech-primary font-medium">
                  Cursos
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-edutech-primary font-medium"
                >
                  Instructores
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-edutech-primary font-medium"
                >
                  Ayuda
                </a>
              </nav>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-4 h-4" />
                  <Badge className="absolute -top-1 -right-1 bg-edutech-danger text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                    3
                  </Badge>
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Catálogo de Cursos
          </h2>
          <p className="text-gray-600 text-lg">
            Descubre y aprende con los mejores cursos en línea
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <SearchAndFilters
            searchQuery={searchQuery}
            filters={filters}
            onSearchChange={setSearchQuery}
            onFiltersChange={setFilters}
            resultsCount={filteredCourses.length}
          />
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No se encontraron cursos
              </h3>
              <p className="text-gray-600 mb-4">
                No hay cursos que coincidan con tu búsqueda. Intenta ajustar los
                filtros o la búsqueda.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setFilters({
                    category: "Todos",
                    level: "Todos",
                    priceRange: "Todos",
                  });
                }}
                className="bg-edutech-primary hover:bg-edutech-primary-dark text-white"
              >
                Ver todos los cursos
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-edutech-primary to-edutech-primary-dark rounded-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">EDUTECH</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                La plataforma educativa líder que conecta estudiantes con los
                mejores instructores del mundo.
              </p>
              <p className="text-sm text-gray-500">
                © 2025 EDUTECH. Todos los derechos reservados.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Plataforma</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-edutech-primary">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-edutech-primary">
                    Instructores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-edutech-primary">
                    Certificaciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-edutech-primary">
                    Empresas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-edutech-primary">
                    Centro de ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-edutech-primary">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-edutech-primary">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-edutech-primary">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
