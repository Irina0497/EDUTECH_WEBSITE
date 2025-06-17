import React from "react";
import { Home, BookOpen, HelpCircle, User, GraduationCap } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Inicio", active: true },
  { icon: BookOpen, label: "Mis cursos", active: false },
  { icon: HelpCircle, label: "Soporte", active: false },
  { icon: User, label: "Perfil", active: false },
];

export const SidebarStatic = () => {
  return (
    <div className="w-64 h-screen bg-edutech-surface border-r border-gray-200 flex flex-col">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-edutech-primary p-2 rounded-lg">
            <GraduationCap className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-edutech-text">EDUTECH</h1>
            <p className="text-sm text-gray-500">Portal del Estudiante</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                  item.active
                    ? "bg-edutech-primary text-white"
                    : "text-gray-700"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-auto p-6 border-t border-gray-200">
        <div className="text-xs text-gray-400 text-center">
          © 2024 EDUTECH
          <br />
          Plataforma Educativa
        </div>
      </div>
    </div>
  );
};
