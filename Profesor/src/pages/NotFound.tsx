import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-edutech-accent mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Página no encontrada
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            asChild
            className="bg-edutech-accent hover:bg-edutech-primary"
          >
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Ir al Inicio
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
