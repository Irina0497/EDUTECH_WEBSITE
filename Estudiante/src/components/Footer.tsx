import React from "react";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-edutech-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-edutech-primary p-2 rounded-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">EDUTECH</h3>
                <p className="text-sm opacity-80">Plataforma Educativa</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6">
              Transformando vidas a través de la educación online de calidad.
              Aprende nuevas habilidades y alcanza tus objetivos profesionales.
            </p>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Síguenos</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Todos los cursos
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Instructores
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Certificaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Políticas
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Términos de uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@edutech.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-80 mb-4 md:mb-0">
              © 2025 EDUTECH. Todos los derechos reservados.
            </div>
            <div className="text-sm">
              <span className="opacity-80">Desarrollado por </span>
              <span className="font-semibold text-edutech-primary">
                OPTIMUMTECH
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
