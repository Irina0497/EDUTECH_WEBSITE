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

const Footer = () => {
  return (
    <footer className="bg-edutech-dark-blue text-edutech-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-edutech-light-blue p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-edutech-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">EDUTECH</h3>
                  <p className="text-xs text-blue-200">Portal Educativo</p>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed">
                Transformamos la educación digital con cursos de alta calidad,
                metodología innovadora y soporte personalizado para tu
                crecimiento profesional.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-edutech-light-blue p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-edutech-light-blue p-2 rounded-lg transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-edutech-light-blue p-2 rounded-lg transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-edutech-light-blue p-2 rounded-lg transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-edutech-light-blue p-2 rounded-lg transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Todos los Cursos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Instructores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Categorías</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Programación
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Diseño
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Marketing Digital
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Data Science
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Inteligencia Artificial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Ciberseguridad
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-edutech-light-blue mt-0.5 flex-shrink-0" />
                  <p className="text-blue-200">
                    Av. Tecnología 123
                    <br />
                    Ciudad Digital, CD 12345
                    <br />
                    México
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-edutech-light-blue" />
                  <p className="text-blue-200">+52 55 1234 5678</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-edutech-light-blue" />
                  <p className="text-blue-200">contacto@edutech.mx</p>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <h5 className="font-medium">Suscríbete a nuestro newsletter</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-white placeholder-blue-200 focus:outline-none focus:border-edutech-light-blue"
                  />
                  <button className="bg-edutech-light-blue hover:bg-edutech-sky px-4 py-2 rounded-r-lg transition-colors">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-blue-200 text-sm">
              <p>&copy; 2025 EDUTECH. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Términos de Uso
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>

            <div className="text-blue-200 text-sm">
              <p>
                Desarrollado por{" "}
                <span className="text-edutech-light-blue font-semibold">
                  OPTIMUMTECH
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
