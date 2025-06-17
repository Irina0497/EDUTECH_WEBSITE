import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-edutech-white shadow-sm border-b border-edutech-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - usando colores más claros como solicitado */}
          <div className="flex items-center space-x-3">
            <div className="bg-edutech-light-blue p-2.5 rounded-xl shadow-lg">
              <GraduationCap className="h-6 w-6 text-edutech-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-edutech-light-blue">
                EDUTECH
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Portal Educativo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-edutech-dark-blue font-semibold hover:text-edutech-light-blue transition-all duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-edutech-light-blue after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Inicio
            </a>
            <a
              href="#cursos"
              className="text-edutech-black font-medium hover:text-edutech-light-blue transition-all duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-edutech-light-blue after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              Cursos
            </a>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-2 border-edutech-light-blue text-edutech-light-blue hover:bg-edutech-light-blue hover:text-edutech-white font-semibold transition-all duration-300 shadow-lg hover:shadow-edutech-light-blue/25"
              >
                Iniciar sesión
              </Button>
              <Button className="bg-edutech-dark-blue hover:bg-edutech-light-blue text-edutech-white font-semibold shadow-lg hover:shadow-edutech-dark-blue/30 transition-all duration-300 transform hover:scale-105">
                Registrarse
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-edutech-black hover:text-edutech-light-blue focus:outline-none focus:text-edutech-light-blue transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-edutech-white border-t border-edutech-light-gray">
              <a
                href="#"
                className="block px-3 py-2 text-edutech-dark-blue font-semibold"
              >
                Inicio
              </a>
              <a
                href="#cursos"
                className="block px-3 py-2 text-edutech-black hover:text-edutech-light-blue transition-colors duration-300"
              >
                Cursos
              </a>
              <div className="pt-4 pb-3 border-t border-edutech-light-gray">
                <div className="flex flex-col space-y-2 px-3">
                  <Button
                    variant="outline"
                    className="border-2 border-edutech-light-blue text-edutech-light-blue hover:bg-edutech-light-blue hover:text-edutech-white font-semibold transition-all duration-300"
                  >
                    Iniciar sesión
                  </Button>
                  <Button className="bg-edutech-dark-blue text-edutech-white font-semibold">
                    Registrarse
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
