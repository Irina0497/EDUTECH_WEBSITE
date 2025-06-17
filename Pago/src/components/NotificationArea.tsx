import { X, CheckCircle } from "lucide-react";
import { useState } from "react";

export const NotificationArea = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <div className="bg-edutech-success-green/10 border border-edutech-success-green/20 rounded-lg p-4 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-edutech-success-green flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-edutech-text-primary">
              Conexión segura verificada
            </p>
            <p className="text-xs text-edutech-text-muted mt-1">
              Tu información está protegida con cifrado SSL
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-edutech-text-muted hover:text-edutech-text-primary"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
