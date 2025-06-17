import { Button } from "@/components/ui/button";
import { User, Settings, Camera } from "lucide-react";

export default function Profile() {
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mi Perfil</h1>
          <p className="text-gray-600">
            Gestiona tu información personal y configuraciones
          </p>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-edutech-primary to-edutech-accent p-6">
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-gray-400" />
                  </div>
                  <Button
                    size="sm"
                    className="absolute -bottom-1 -right-1 rounded-full w-8 h-8 p-0"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="ml-6 text-white">
                  <h2 className="text-2xl font-bold">Juan Pérez</h2>
                  <p className="text-blue-100">Instructor de Programación</p>
                  <p className="text-blue-100 text-sm">
                    Miembro desde Enero 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Información Personal
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <p className="text-gray-900">juan.perez@email.com</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <p className="text-gray-900">+52 55 1234 5678</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Especialidad
                      </label>
                      <p className="text-gray-900">
                        Desarrollo Web, JavaScript, React
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Estadísticas
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cursos creados</span>
                      <span className="font-semibold">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total estudiantes</span>
                      <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Calificación promedio
                      </span>
                      <span className="font-semibold">4.8 ⭐</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ingresos totales</span>
                      <span className="font-semibold">$45,892</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <Button className="bg-edutech-accent hover:bg-edutech-primary">
                    <Settings className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </Button>
                  <Button variant="outline">Cambiar Contraseña</Button>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <p className="text-sm text-gray-500 text-center">
                  Placeholder - Implementar formulario completo de edición de
                  perfil, configuraciones de cuenta y preferencias de
                  notificaciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
