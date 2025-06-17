import React from "react";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-br from-edutech-background via-blue-50 to-edutech-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-edutech-text mb-6">
              Aprende sin límites con{" "}
              <span className="text-edutech-primary">EDUTECH</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre miles de cursos online impartidos por expertos.
              Desarrolla nuevas habilidades a tu propio ritmo y alcanza tus
              objetivos profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-edutech-primary hover:bg-edutech-primary/90 text-white px-8 py-4 text-lg"
              >
                Explorar Cursos
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-edutech-primary text-edutech-primary hover:bg-edutech-primary hover:text-white"
              >
                Ver Demo Gratis
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-edutech-surface rounded-2xl shadow-xl p-8 border border-gray-100">
              {/* Mock Course Preview */}
              <div className="mb-6">
                <div className="bg-gradient-to-r from-edutech-primary to-blue-600 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <BookOpen className="text-white" size={48} />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Desarrollo Web Completo
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>2,450 estudiantes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={14} />
                    <span>4.9 ⭐</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-edutech-primary h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-sm text-gray-600">Progreso: 75%</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-edutech-primary">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">Cursos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-edutech-primary">
                    50k+
                  </div>
                  <div className="text-sm text-gray-600">Estudiantes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-edutech-primary">
                    4.8
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-100 text-green-600 p-3 rounded-full shadow-lg">
              <Award size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-100 text-orange-600 p-3 rounded-full shadow-lg">
              <BookOpen size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
