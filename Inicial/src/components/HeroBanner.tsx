import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users, Star } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-br from-edutech-dark-blue to-edutech-light-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Aprende sin límites con
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  EDUTECH
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Descubre una nueva forma de aprender con cursos diseñados por
                expertos, contenido actualizado y una experiencia de aprendizaje
                personalizada.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-yellow-300" />
                <span>+10,000 estudiantes</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-yellow-300" />
                <span>+500 cursos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span>4.9/5 calificación</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-edutech-white text-edutech-dark-blue hover:bg-edutech-light-gray text-lg px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explorar Cursos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-edutech-white text-edutech-white hover:bg-edutech-white hover:text-edutech-dark-blue text-lg px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Play className="h-5 w-5 mr-2" />
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Mi Panel de Aprendizaje
                  </h3>
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-black">85%</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Course Progress Bars */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Desarrollo Web React</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Python para Data Science</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-[65%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Diseño UX/UI</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-[45%]"></div>
                    </div>
                  </div>
                </div>

                {/* Achievement badges */}
                <div className="flex space-x-2 pt-4">
                  <div className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                    🏆 Completaste React
                  </div>
                  <div className="bg-green-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                    🎯 Racha 7 días
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <BookOpen className="h-8 w-8 text-black" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
              <Star className="h-6 w-6 text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
