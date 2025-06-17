import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Camera, Edit, Settings, Award, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  // Mock user data - Solo visual, números como strings
  const user = {
    name: "Alex Rivera",
    email: "alex.rivera@email.com",
    joinDate: "Enero 2024",
    avatar: "/placeholder.svg",
    totalCourses: "8",
    completedCourses: "3",
    totalHours: "47.5",
    certificates: "3",
  };

  const achievements = [
    { name: "Primer curso completado", icon: "🎯", date: "Feb 2024" },
    { name: "5 cursos en progreso", icon: "📚", date: "Mar 2024" },
    { name: "20 horas de aprendizaje", icon: "⏰", date: "Mar 2024" },
  ];

  const recentActivity = [
    {
      action: "Completó",
      course: "Diseño UX/UI Profesional",
      date: "hace 3 días",
    },
    {
      action: "Inició",
      course: "Python para Ciencia de Datos",
      date: "hace 1 semana",
    },
    {
      action: "Obtuvo certificado",
      course: "Marketing Digital",
      date: "hace 2 semanas",
    },
  ];

  return (
    <div className="min-h-screen bg-edutech-background">
      <Sidebar />

      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-edutech-surface border-b border-gray-200 px-6 py-4">
          <div className="ml-12 lg:ml-0">
            <h1 className="text-2xl font-bold text-edutech-text">Mi Perfil</h1>
            <p className="text-gray-600 mt-1">
              Gestiona tu información personal y revisa tu progreso
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-edutech-primary text-white p-2 rounded-full hover:bg-edutech-primary/90 transition-colors">
                      <Camera size={14} />
                    </button>
                  </div>
                  <CardTitle className="text-xl">{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                  <Badge className="mt-2 bg-edutech-primary/10 text-edutech-primary">
                    Miembro desde {user.joinDate}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-3 bg-edutech-primary hover:bg-edutech-primary/90">
                    <Edit size={16} className="mr-2" />
                    Editar perfil
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Settings size={16} className="mr-2" />
                    Configuración
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Stats and Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <BookOpen
                      className="text-edutech-primary mx-auto mb-2"
                      size={24}
                    />
                    <p className="text-2xl font-bold text-edutech-text">
                      {user.totalCourses}
                    </p>
                    <p className="text-sm text-gray-600">Cursos totales</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="text-green-600 mx-auto mb-2" size={24} />
                    <p className="text-2xl font-bold text-edutech-text">
                      {user.completedCourses}
                    </p>
                    <p className="text-sm text-gray-600">Completados</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="text-orange-600 mx-auto mb-2" size={24} />
                    <p className="text-2xl font-bold text-edutech-text">
                      {user.totalHours}h
                    </p>
                    <p className="text-sm text-gray-600">Horas totales</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <Award className="text-purple-600 mx-auto mb-2" size={24} />
                    <p className="text-2xl font-bold text-edutech-text">
                      {user.certificates}
                    </p>
                    <p className="text-sm text-gray-600">Certificados</p>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Overview - Solo visual */}
              <Card>
                <CardHeader>
                  <CardTitle>Progreso de aprendizaje</CardTitle>
                  <CardDescription>
                    Tu progreso general en la plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          Cursos completados
                        </span>
                        <span className="text-sm text-gray-600">
                          {user.completedCourses}/{user.totalCourses}
                        </span>
                      </div>
                      <Progress value={37} />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          Meta mensual
                        </span>
                        <span className="text-sm text-gray-600">
                          15/20 horas
                        </span>
                      </div>
                      <Progress value={75} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Logros recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-2xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <p className="font-medium text-edutech-text">
                            {achievement.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {achievement.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Actividad reciente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="w-2 h-2 bg-edutech-primary rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">
                              {activity.action}
                            </span>{" "}
                            <span className="text-edutech-primary">
                              {activity.course}
                            </span>
                          </p>
                          <p className="text-xs text-gray-500">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
