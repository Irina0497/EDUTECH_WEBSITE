import React from "react";
import { GraduationCap, Home, BookOpen, HelpCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem = "inicio",
  onItemClick,
}) => {
  const menuItems = [
    {
      id: "inicio",
      label: "Inicio",
      icon: Home,
    },
    {
      id: "mis-cursos",
      label: "Mis Cursos",
      icon: BookOpen,
    },
    {
      id: "soporte",
      label: "Soporte",
      icon: HelpCircle,
    },
    {
      id: "perfil",
      label: "Perfil",
      icon: User,
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col shadow-sm hidden md:flex">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-edutech-primary rounded-full flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-edutech-secondary">
              EDUTECH
            </h1>
            <p className="text-xs text-gray-500">Portal Estudiantil</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick?.(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                    "hover:bg-edutech-primary/10 hover:text-edutech-secondary",
                    isActive
                      ? "bg-edutech-primary text-white shadow-md"
                      : "text-gray-600",
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
          <div className="w-8 h-8 bg-edutech-primary rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-white">JS</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Juan Silva
            </p>
            <p className="text-xs text-gray-500">Estudiante</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
