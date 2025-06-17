import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  Home,
  BookOpen,
  Plus,
  HelpCircle,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Mis cursos", href: "/cursos", icon: BookOpen },
  { name: "Crear curso", href: "/crear-curso", icon: Plus },
  { name: "Soporte", href: "/soporte", icon: HelpCircle },
  { name: "Perfil", href: "/perfil", icon: User },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r border-gray-200">
      {/* Brand Header */}
      <div className="flex items-center px-6 py-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="bg-edutech-accent p-2.5 rounded-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-edutech-accent">EDUTECH</h1>
            <p className="text-xs text-gray-500">Portal del Profesor</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 px-3">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                    {
                      "bg-edutech-accent text-white shadow-sm": isActive,
                      "text-gray-600 hover:text-gray-900 hover:bg-gray-50":
                        !isActive,
                    },
                  )}
                >
                  <item.icon
                    className={cn("mr-3 h-5 w-5 flex-shrink-0", {
                      "text-white": isActive,
                      "text-gray-400 group-hover:text-gray-500": !isActive,
                    })}
                  />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">© 2025 EDUTECH</p>
      </div>
    </div>
  );
}
