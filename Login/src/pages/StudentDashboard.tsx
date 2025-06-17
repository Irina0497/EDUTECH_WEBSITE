import React, { useState } from "react";
import { Search, TrendingUp, Award, Clock, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import CourseCard from "@/components/CourseCard";

const StudentDashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("inicio");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock data for enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: "Introducción a React y TypeScript",
      instructor: "María González",
      progress: 65,
      duration: "8 horas",
      rating: 4.8,
      level: "Intermedio" as const,
      isEnrolled: true,
    },
    {
      id: 2,
      title: "Diseño UX/UI para Principiantes",
      instructor: "Carlos Ruiz",
      progress: 30,
      duration: "12 horas",
      rating: 4.6,
      level: "Principiante" as const,
      isEnrolled: true,
    },
    {
      id: 3,
      title: "Python para Análisis de Datos",
      instructor: "Ana Martínez",
      progress: 85,
      duration: "15 horas",
      rating: 4.9,
      level: "Avanzado" as const,
      isEnrolled: true,
    },
  ];

  // Mock data for recommended courses
  const recommendedCourses = [
    {
      id: 4,
      title: "JavaScript Moderno y ES6+",
      instructor: "Diego López",
      duration: "10 horas",
      rating: 4.7,
      level: "Intermedio" as const,
      isEnrolled: false,
    },
    {
      id: 5,
      title: "Fundamentos de Machine Learning",
      instructor: "Laura Hernández",
      duration: "20 horas",
      rating: 4.8,
      level: "Avanzado" as const,
      isEnrolled: false,
    },
    {
      id: 6,
      title: "Desarrollo Web con Next.js",
      instructor: "Roberto Silva",
      duration: "14 horas",
      rating: 4.6,
      level: "Intermedio" as const,
      isEnrolled: false,
    },
  ];

  const stats = [
    {
      title: "Cursos Completados",
      value: "3",
      icon: Award,
      color: "text-edutech-accent-green",
      bgColor: "bg-edutech-accent-green/10",
    },
    {
      title: "Horas de Estudio",
      value: "47",
      icon: Clock,
      color: "text-edutech-primary",
      bgColor: "bg-edutech-primary/10",
    },
    {
      title: "Promedio General",
      value: "8.5",
      icon: TrendingUp,
      color: "text-edutech-accent-yellow",
      bgColor: "bg-edutech-accent-yellow/10",
    },
  ];

  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return "Buenos días";
    if (currentHour < 18) return "Buenas tardes";
    return "Buenas noches";
  };

  const handleContinueCourse = (courseId: number) => {
    console.log("Continuing course:", courseId);
    // Handle course continuation logic
  };

  const handleStartCourse = (courseId: number) => {
    console.log("Starting course:", courseId);
    // Handle course start logic
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-edutech-background via-white to-edutech-primary/5">
      {/* Sidebar */}
      <Sidebar activeItem={activeMenuItem} onItemClick={setActiveMenuItem} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-4"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-edutech-secondary">
                  {getGreeting()}, Juan Silva
                </h1>
                <p className="text-gray-600 mt-1">
                  ¡Continúa tu aprendizaje hoy!
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Buscar cursos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full md:w-80 border-gray-300 focus:border-edutech-primary focus:ring-edutech-primary"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="transition-all duration-200 hover:shadow-md border-0 shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-full ${stat.bgColor} mr-4`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* My Courses Section */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-edutech-secondary">
                Mis Cursos
              </CardTitle>
              <CardDescription>Continúa donde lo dejaste</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {enrolledCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  instructor={course.instructor}
                  progress={course.progress}
                  duration={course.duration}
                  rating={course.rating}
                  level={course.level}
                  isEnrolled={course.isEnrolled}
                  onContinue={() => handleContinueCourse(course.id)}
                />
              ))}
            </CardContent>
          </Card>

          {/* Recommended Courses Section */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-edutech-secondary">
                    Recomendaciones Personalizadas
                  </CardTitle>
                  <CardDescription>Cursos sugeridos para ti</CardDescription>
                </div>
                <Button
                  variant="outline"
                  className="border-edutech-primary text-edutech-secondary hover:bg-edutech-primary/10"
                >
                  Ver Todos
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  instructor={course.instructor}
                  duration={course.duration}
                  rating={course.rating}
                  level={course.level}
                  isEnrolled={course.isEnrolled}
                  onStart={() => handleStartCourse(course.id)}
                />
              ))}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
