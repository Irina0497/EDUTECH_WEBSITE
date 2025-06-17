import React, { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-edutech-surface border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-edutech-primary p-2 rounded-lg">
              <GraduationCap className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-edutech-text">EDUTECH</h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Plataforma Educativa
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-edutech-primary font-medium transition-colors"
            >
              Inicio
            </a>
            <a
              href="#cursos"
              className="text-gray-700 hover:text-edutech-primary font-medium transition-colors"
            >
              Cursos
            </a>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Iniciar sesión
              </Button>
              <Button
                size="sm"
                className="bg-edutech-primary hover:bg-edutech-primary/90"
              >
                Registrarse
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-edutech-primary font-medium transition-colors px-2 py-1"
                onClick={toggleMenu}
              >
                Inicio
              </a>
              <a
                href="#cursos"
                className="text-gray-700 hover:text-edutech-primary font-medium transition-colors px-2 py-1"
                onClick={toggleMenu}
              >
                Cursos
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm">
                  Iniciar sesión
                </Button>
                <Button
                  size="sm"
                  className="bg-edutech-primary hover:bg-edutech-primary/90"
                >
                  Registrarse
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
