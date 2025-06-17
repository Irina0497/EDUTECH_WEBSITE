import { Shield, Lock, Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-edutech-border-light bg-edutech-glass-white backdrop-blur-sm mt-16">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-edutech-text-muted">
              <Shield className="w-5 h-5 text-edutech-success-green" />
              <span className="text-sm">Pagos Seguros</span>
            </div>
            <div className="flex items-center gap-2 text-edutech-text-muted">
              <Lock className="w-5 h-5 text-edutech-blue" />
              <span className="text-sm">SSL Certificado</span>
            </div>
            <div className="flex items-center gap-2 text-edutech-text-muted">
              <Award className="w-5 h-5 text-edutech-warning-yellow" />
              <span className="text-sm">Calidad Garantizada</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-edutech-text-muted">
              © 2024 EDUTECH. Todos los derechos reservados.
            </p>
            <p className="text-xs text-edutech-text-muted mt-1">
              Educación de calidad para el futuro digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
