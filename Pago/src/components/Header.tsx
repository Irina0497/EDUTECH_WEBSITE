import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-edutech-glass-white border-b border-edutech-border-light">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-edutech-text-secondary hover:text-edutech-text-primary"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-edutech-blue-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-edutech-text-primary">
              EDUTECH
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-edutech-success-green font-medium">
          <Lock className="w-4 h-4" />
          <span className="text-sm">Pago Seguro</span>
        </div>
      </div>
    </header>
  );
};
